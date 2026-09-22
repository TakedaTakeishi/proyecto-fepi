// Generador de los diagramas SVG de T-02 (marco jurídico e institucional)
// Mismo motor/estilo que Docs/Joni/Diagramas/G09/gen-diagramas.mjs (plantilla canónica 2026-09-17)
// Uso: node gen-diagramas.mjs <dir-de-salida>
import { writeFileSync } from 'fs';

const FONT = "'Segoe UI', system-ui, -apple-system, sans-serif";
const C = {
  bg: '#FAFBFC',
  laneFill: '#F7F8FA', laneStroke: '#DCE0E6',
  laneId: '#374151', laneName: '#6B7280',
  boxFill: '#E8F0FE', boxStroke: '#93B4E0', boxText: '#1F2937', boxId: '#1D4ED8',
  decFill: '#FDF6E3', decStroke: '#D8BC6A', decText: '#7A5B12',
  termFill: '#F3F4F6', termStroke: '#C6CBD3', termText: '#374151',
  arrow: '#566171', arrowLabel: '#6B7280',
  pillFill: '#EFF6FF', pillStroke: '#BFDBFE', pillText: '#1D4ED8',
  title: '#111827',
};

function esc(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

class Diagram {
  constructor(o) {
    Object.assign(this, o);
    this.nodes = {}; this.edges = []; this.labels = []; this.dots = [];
  }
  cx(lane) { return this.gutter + (lane + 0.5) * this.laneW; }
  node(id, lane, y, lines, kind = 'act') {
    const maxLen = Math.max(...lines.map(l => l.length));
    let w, h;
    if (kind === 'dec') { w = Math.max(120, maxLen * 6.4 + 34); h = lines.length * 14 + 30; }
    else if (kind === 'start' || kind === 'end') { w = 16; h = 16; }
    else { w = Math.min(186, Math.max(148, maxLen * 6.5 + 26)); h = lines.length * 15 + 22; }
    this.nodes[id] = { id, lane, x: this.cx(lane), y, w, h, lines, kind };
    return this.nodes[id];
  }
  label(text, x, y, { anchor = 'middle', size = 10.5, fill = C.arrowLabel, italic = true, weight = 400 } = {}) {
    this.labels.push({ text, x, y, anchor, size, fill, italic, weight });
  }
  anchor(n, side) {
    const { x, y, w, h } = n;
    if (side === 'top') return { x, y: y - h / 2 };
    if (side === 'bottom') return { x, y: y + h / 2 };
    if (side === 'left') return { x: x - w / 2, y };
    return { x: x + w / 2, y };
  }
  edge(from, to, { exit = 'bottom', enter = 'top', midY, midX, arrow = true } = {}) {
    const a = this.nodes[from], b = this.nodes[to];
    const p0 = this.anchor(a, exit), p1 = this.anchor(b, enter);
    const pts = [p0];
    const same = (u, v) => Math.abs(u - v) < 0.5;
    if (exit === 'bottom' && enter === 'top') {
      if (!same(p0.x, p1.x)) { const my = midY ?? (p0.y + p1.y) / 2; pts.push({ x: p0.x, y: my }, { x: p1.x, y: my }); }
    } else if (exit === 'bottom' && (enter === 'left' || enter === 'right')) {
      pts.push({ x: p0.x, y: p1.y });
    } else if (exit === 'right' && enter === 'top') {
      pts.push({ x: p1.x, y: p0.y });
    } else if (exit === 'left' && enter === 'top') {
      pts.push({ x: p1.x, y: p0.y });
    } else if (exit === 'right' && enter === 'left') {
      const mx = midX ?? (p0.x + p1.x) / 2; pts.push({ x: mx, y: p0.y }, { x: mx, y: p1.y });
    } else if (exit === 'right' && enter === 'right') {
      const mx = midX; pts.push({ x: mx, y: p0.y }, { x: mx, y: p1.y });
    } else if (exit === 'bottom' && enter === 'bottom') {
      const my = midY; pts.push({ x: p0.x, y: my }, { x: p1.x, y: my });
    }
    pts.push(p1);
    this.edges.push({ pts, arrow });
  }
  render() {
    const { gutter, laneW, lanes, bottom, title } = this;
    const width = gutter + lanes.length * laneW + 24;
    const height = bottom + 30;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" font-family="${FONT}">\n`;
    s += `<defs><marker id="ah" viewBox="0 0 10 10" refX="8.6" refY="5" markerWidth="8.5" markerHeight="8.5" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${C.arrow}"/></marker></defs>\n`;
    s += `<rect x="0" y="0" width="${width}" height="${height}" fill="${C.bg}"/>\n`;
    s += `<text x="${width / 2}" y="42" text-anchor="middle" font-size="17" font-weight="600" fill="${C.title}">${esc(title)}</text>\n`;
    const laneTop = 62;
    for (let i = 0; i < lanes.length; i++) {
      const x = gutter + i * laneW;
      s += `<rect x="${x + 3}" y="${laneTop}" width="${laneW - 6}" height="${bottom - laneTop}" rx="10" fill="${C.laneFill}" stroke="${C.laneStroke}"/>\n`;
      s += `<text x="${x + laneW / 2}" y="${laneTop + 22}" text-anchor="middle" font-size="12" font-weight="600" fill="${C.laneId}">${esc(lanes[i].id)}</text>\n`;
      s += `<text x="${x + laneW / 2}" y="${laneTop + 38}" text-anchor="middle" font-size="10" fill="${C.laneName}">${esc(lanes[i].name)}</text>\n`;
    }
    for (const e of this.edges) {
      const pts = e.pts.map(p => `${p.x},${p.y}`).join(' ');
      s += `<polyline points="${pts}" fill="none" stroke="${C.arrow}" stroke-width="1.4" stroke-linejoin="round"${e.arrow ? ' marker-end="url(#ah)"' : ''}/>\n`;
    }
    for (const n of Object.values(this.nodes)) {
      const { x, y, w, h, lines, kind } = n;
      if (kind === 'start') { s += `<circle cx="${x}" cy="${y}" r="7" fill="${C.laneId}"/>\n`; continue; }
      if (kind === 'end') { s += `<circle cx="${x}" cy="${y}" r="8" fill="${C.laneId}"/><circle cx="${x}" cy="${y}" r="3.4" fill="${C.bg}"/>\n`; continue; }
      if (kind === 'dec') {
        s += `<polygon points="${x},${y - h / 2} ${x + w / 2},${y} ${x},${y + h / 2} ${x - w / 2},${y}" fill="${C.decFill}" stroke="${C.decStroke}" stroke-width="1.2"/>\n`;
      } else {
        const fill = kind === 'term' ? C.termFill : C.boxFill;
        const stroke = kind === 'term' ? C.termStroke : C.boxStroke;
        s += `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="1.2"/>\n`;
      }
      const textFill = kind === 'dec' ? C.decText : kind === 'term' ? C.termText : C.boxText;
      const lh = 15, y0 = y - ((lines.length - 1) * lh) / 2 + 4;
      lines.forEach((ln, i) => {
        const m = kind === 'act' ? ln.match(/^((?:A|B|C)[^ ]*) · (.*)$/) : null;
        let tspan;
        if (m) tspan = `<tspan font-weight="600" fill="${C.boxId}">${esc(m[1])}</tspan><tspan fill="${C.boxText}"> · ${esc(m[2])}</tspan>`;
        else tspan = esc(ln);
        s += `<text x="${x}" y="${y0 + i * lh}" text-anchor="middle" font-size="11.5" fill="${textFill}">${tspan}</text>\n`;
      });
    }
    for (const l of this.labels) {
      s += `<text x="${l.x}" y="${l.y}" text-anchor="${l.anchor}" font-size="${l.size}" font-weight="${l.weight}" ${l.italic ? 'font-style="italic"' : ''} fill="${l.fill}">${esc(l.text)}</text>\n`;
    }
    for (const [dx, dy] of this.dots) s += `<circle cx="${dx}" cy="${dy}" r="2.6" fill="${C.arrow}"/>\n`;
    s += `</svg>\n`;
    return s;
  }
}

// ----------------------------------------- T2·A ORDENAMIENTOS ORGANIZACIONALES
{
  const d = new Diagram({
    title: 'T2·A — Emisión/actualización de ordenamientos organizacionales (RI · estructura · MGO)',
    lanes: [
      { id: 'R27·R21', name: 'Unidades / UIPPE' }, { id: 'R20', name: 'UJIGEV' }, { id: 'R19', name: 'Dirección General' },
      { id: 'R18', name: 'Consejo Directivo' }, { id: 'R24', name: 'Oficialía Mayor (DGI)' }, { id: 'PO·R26', name: 'Gaceta / sitio' },
    ],
    laneW: 212, gutter: 24, bottom: 905,
  });
  d.node('start', 0, 108, [], 'start');
  d.node('A1', 0, 158, ['A1 · Detecta la necesidad', '(reforma legal, vencimiento)']);
  d.node('A2', 0, 235, ['A2 · Elabora el proyecto']);
  d.node('A3', 1, 308, ['A3 · Revisión jurídica']);
  d.node('A4', 2, 382, ['A4 · Presenta al Consejo']);
  d.node('A5', 3, 456, ['A5 · Aprueba con acuerdo', 'numerado (sesión)']);
  d.node('A6', 4, 530, ['A6 · Remisión para revisión,', 'dictamen y aprobación']);
  d.node('A7', 4, 604, ['A7 · Oficio de dictaminación', 'de la DGI']);
  d.node('A8', 5, 676, ['A8 · Publica la Gaceta', '→ entra en vigor']);
  d.node('A9', 1, 750, ['A9 · Hoja de actualización', '(deja sin efectos el previo)', '+ difusión interna']);
  d.node('A10', 5, 822, ['A10 · Integra a la Normateca', 'del sitio oficial']);
  d.node('end', 5, 878, [], 'end');
  d.edge('start', 'A1');
  d.edge('A1', 'A2');
  d.edge('A2', 'A3');
  d.edge('A3', 'A4');
  d.edge('A4', 'A5');
  d.edge('A5', 'A6');
  d.edge('A6', 'A7');
  d.edge('A7', 'A8');
  d.edge('A8', 'A9', { exit: 'bottom', enter: 'top', midY: 713 });
  d.edge('A9', 'A10', { exit: 'bottom', enter: 'top', midY: 786 });
  d.edge('A10', 'end');
  writeFileSync(process.argv[2] + '/T2-A-ordenamientos.svg', d.render(), 'utf8');
}

// -------------------------------------------------- T2·B NORMATICA (inventario)
{
  const d = new Diagram({
    title: 'T2·B — Integración y actualización de la Normateca Interna',
    lanes: [
      { id: 'R27', name: 'Unidades administrativas' }, { id: 'R22', name: 'Comité Interno MR' },
      { id: 'R20', name: 'UJIGEV' }, { id: 'R26', name: 'Sitio (UCSyTI/Ag. Digital)' },
    ],
    laneW: 212, gutter: 24, bottom: 660,
  });
  d.node('start', 0, 108, [], 'start');
  d.node('B1', 0, 158, ['B1 · Identifica disposiciones', 'vigentes (orden jerárquico)']);
  d.node('B2', 1, 234, ['B2 · Resuelve adiciones', 'y sustituciones']);
  d.node('B3', 2, 308, ['B3 · Compila electrónicamente', '(coordinación UJIGEV)']);
  d.node('B4', 2, 382, ['B4 · Reemplaza lo actualizado', '(p. ej. Ley de Ingresos)']);
  d.node('B5', 3, 456, ['B5 · Actualiza la sección', 'marco_juridico del sitio']);
  d.node('B6', 2, 530, ['B6 · Difunde: conocer y', 'cumplir es obligatorio']);
  d.node('end', 3, 600, [], 'end');
  d.edge('start', 'B1');
  d.edge('B1', 'B2');
  d.edge('B2', 'B3');
  d.edge('B3', 'B4');
  d.edge('B4', 'B5');
  d.edge('B5', 'B6', { exit: 'bottom', enter: 'top', midY: 493 });
  d.edge('B6', 'end', { exit: 'bottom', enter: 'top', midY: 565 });
  writeFileSync(process.argv[2] + '/T2-B-normateca.svg', d.render(), 'utf8');
}

// ------------------------------------- T2·C CICLO ANUAL DE MEJORA REGULATORIA
{
  const d = new Diagram({
    title: 'T2·C — Ciclo anual de mejora regulatoria (Comité Interno · SAIR · SIPAMR)',
    lanes: [
      { id: 'R22', name: 'Comité Interno MR' }, { id: 'R21·R23', name: 'Sec. Técnica / Enlace' },
      { id: 'R25', name: 'CEMER (SAIR/SIPAMR)' }, { id: 'RETYS·web', name: 'Salida pública' },
    ],
    laneW: 212, gutter: 24, bottom: 790,
  });
  d.node('start', 0, 108, [], 'start');
  d.node('C1', 0, 158, ['C1 · Sesión del Comité', '(quórum, orden del día)']);
  d.node('C2', 1, 232, ['C2 · Reporte trimestral', 'de avance del Programa']);
  d.node('C3', 0, 306, ['C3 · Resuelve alta / baja', 'de trámites (RETYS)']);
  d.node('C4', 1, 380, ['C4 · Presenta proyecto', 'AIR o exención vía SAIR']);
  d.node('C5', 2, 454, ['C5 · CEMER resuelve', 'y notifica oficio']);
  d.node('C6', 1, 528, ['C6 · Captura PMR (SIPAMR)', 'y Agenda Regulatoria']);
  d.node('C7', 0, 602, ['C7 · Seguimiento de', 'acuerdos y asuntos']);
  d.node('P', 3, 674, ['· Publica actas, PMR,', 'agenda y reportes']);
  d.node('end', 3, 740, [], 'end');
  d.edge('start', 'C1');
  d.edge('C1', 'C2');
  d.edge('C2', 'C3', { exit: 'bottom', enter: 'top', midY: 269 });
  d.edge('C3', 'C4', { exit: 'bottom', enter: 'top', midY: 343 });
  d.edge('C4', 'C5');
  d.edge('C5', 'C6', { exit: 'bottom', enter: 'top', midY: 491 });
  d.edge('C6', 'C7', { exit: 'bottom', enter: 'top', midY: 565 });
  d.edge('C7', 'P', { exit: 'bottom', enter: 'top', midY: 638 });
  d.edge('P', 'end');
  writeFileSync(process.argv[2] + '/T2-C-mejora-regulatoria.svg', d.render(), 'utf8');
}
console.log('OK');
