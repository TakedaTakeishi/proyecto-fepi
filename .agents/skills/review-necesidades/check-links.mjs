#!/usr/bin/env node
// check-links.mjs — verifica que los enlaces de los .md de Docs/ apunten a archivos que existen.
// Uso:  node .agents/skills/review-necesidades/check-links.mjs [archivos-o-dirs...]
//       sin argumentos revisa Docs/**/*.md (excepto germoplasma-archivo)
// Chequea: (1) enlaces rotos, (2) placeholders "(…)", (3) anclas sin encabezado,
//          (4) en la tabla consolidada: claves [XXX] sin enlace (links fantasma).
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const DOCS = path.resolve(cwd, 'Docs');

function walk(p, out) {
  const st = statSync(p);
  if (st.isDirectory()) for (const e of readdirSync(p)) { if (e.startsWith('.')) continue; walk(path.join(p, e), out); }
  else if (p.endsWith('.md')) out.push(p);
  return out;
}

let targets = [];
const args = process.argv.slice(2);
if (args.length) for (const a of args) targets.push(...walk(path.resolve(cwd, a), []));
else targets = walk(DOCS, []);
targets = targets.filter(f => !f.includes(path.join('germoplasma-archivo')));

const linkRe = /\[([^\]]*)\]\(([^)]*)\)/g;
const keyRe = /\[[A-ZÁÉÍÓÚÑ][\wÁÉÍÓÚÑÁÉÍÓÚÑ .·\-–]*\](?!\()/g;
const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 -]/g, '').trim().replace(/\s+/g, '-');

let errors = 0, warnings = 0;
for (const f of targets) {
  const rel = path.relative(cwd, f);
  const lines = readFileSync(f, 'utf8').split(/\r?\n/);
  const headings = new Set();
  for (const l of lines) {
    const m = l.match(/^#{1,6}\s+(.*)/); if (m) headings.add(slug(m[1]));
    // anclas definidas como HTML inline (<a id="...">), patrón de la consolidada (§6/§8)
    for (const a of l.matchAll(/<\s*a\s+id=["']([^"']+)["']/gi)) headings.add(slug(a[1]));
  }
  lines.forEach((l, i) => {
    if (l.includes('check-links:ignore')) return;
    for (const m of l.matchAll(linkRe)) {
      const t = m[2].trim();
      if (/^(https?:|mailto:)/.test(t)) continue;
      if (t === '' || t === '…' || t === '...') { console.log(`${rel}:${i + 1} ERROR placeholder [${m[1]}](${t})`); errors++; continue; }
      if (t.startsWith('#')) {
        if (!headings.has(slug(decodeURIComponent(t.slice(1))))) { console.log(`${rel}:${i + 1} WARN ancla ${t} sin encabezado`); warnings++; }
        continue;
      }
      const rel0 = decodeURIComponent(t.split('#')[0]);
      if (!rel0) continue;
      const cands = [path.resolve(path.dirname(f), rel0), path.resolve(DOCS, rel0), path.resolve(cwd, rel0)];
      if (!cands.some(c => existsSync(c))) { console.log(`${rel}:${i + 1} ERROR roto [${m[1]}](${t})`); errors++; }
    }
    if (path.basename(f) === 'TABLA_NECESIDADES.md' && l.includes('NG-')) {
      for (const m of l.matchAll(keyRe)) { console.log(`${rel}:${i + 1} WARN clave sin enlace: ${m[0]}`); warnings++; }
    }
  });
}
console.log(`\n${errors} errores, ${warnings} avisos en ${targets.length} archivos`);
process.exit(errors ? 1 : 0);
