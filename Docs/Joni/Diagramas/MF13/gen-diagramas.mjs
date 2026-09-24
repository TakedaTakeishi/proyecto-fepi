// Generador de los diagramas SVG de MF-13 (Rescisión y reintegro de recursos)
// Mismo motor/estilo que Docs/Joni/Diagramas/PA01/gen-diagramas.mjs (plantilla canónica)
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

// ------------------------------ MF13·A DETECCIÓN, RESCISIÓN Y REINTEGRO
{
  const d = new Diagram({
    title: 'MF13·A — Detección del incumplimiento, rescisión (baja) y reintegro',
    lanes: [
      { id: 'R28', name: 'Beneficiaria/o' }, { id: 'R29·R30', name: 'DRF / área responsable' },
      { id: 'R20', name: 'UJIGEV' }, { id: 'R32·R38', name: 'Comité (FIPASAHEM/CAS)' },
      { id: 'R15·R33', name: 'DAFGD · Fiduciaria' },
    ],
    laneW: 216, gutter: 24, bottom: 960,
  });
  d.node('start', 1, 108, [], 'start');
  d.node('A1', 1, 158, ['A1 · Detecta incumplimiento', '(minuta, informe, denuncia)']);
  d.node('A2', 1, 232, ['A2 · Clasifica la causal', '(incumplimiento / baja)']);
  d.node('A3', 2, 306, ['A3 · UJIGEV revisa listado', 'y predios con sanciones']);
  d.node('A4', 0, 380, ['A4 · Notificación con', 'motivos a la beneficiaria']);
  d.node('A5', 3, 455, ['A5 · Comité acuerda baja', 'y ordena reintegro (acta)']);
  d.node('A6', 2, 530, ['A6 · Instruye a UJIGEV', 'gestionar la devolución']);
  d.node('A7', 4, 605, ['A7 · DAFGD proporciona', 'cuenta (fiduciaria/PROB.)']);
  d.node('A8', 0, 680, ['A8 · Beneficiaria reintegra', '(transferencia o cheque)']);
  d.node('dec', 0, 755, ['¿Reintegra?'], 'dec');
  d.node('A8c', 2, 830, ['A8c · Sanción del Comité', '(instruye a UJIGEV)']);
  d.node('A9', 1, 905, ['A9 · Publica Listado de', 'Beneficiarias Incumplidas']);
  d.node('end', 1, 945, [], 'end');
  d.edge('start', 'A1');
  d.edge('A1', 'A2');
  d.edge('A2', 'A3');
  d.edge('A3', 'A4');
  d.edge('A4', 'A5');
  d.edge('A5', 'A6');
  d.edge('A6', 'A7');
  d.edge('A7', 'A8');
  d.edge('A8', 'dec');
  d.edge('dec', 'A8c', { exit: 'left', enter: 'top' });
  d.label('no', 300, 747, { anchor: 'end' });
  d.edge('dec', 'A9', { exit: 'bottom', enter: 'top', midY: 868 });
  d.label('sí (comprueba)', 120, 800, { anchor: 'start', size: 9.5 });
  d.edge('A8c', 'A9', { exit: 'bottom', enter: 'top', midY: 885 });
  d.edge('A9', 'end');
  writeFileSync(process.argv[2] + '/MF13-A-rescision.svg', d.render(), 'utf8');
}

// --------------------------- MF13·B SUSPENSIÓN TEMPORAL Y SUBSANACIÓN
{
  const d = new Diagram({
    title: 'MF13·B — Suspensión temporal y subsanación (vía que evita la rescisión)',
    lanes: [
      { id: 'R28', name: 'Beneficiaria/o' }, { id: 'R29·R30', name: 'DRF / área responsable' },
      { id: 'R32·R38', name: 'Comité (FIPASAHEM/CAS)' }, { id: 'R20', name: 'UJIGEV' },
    ],
    laneW: 216, gutter: 24, bottom: 580,
  });
  d.node('start', 2, 108, [], 'start');
  d.node('B1', 2, 158, ['B1 · Comité fija suspensión', 'temporal (periodo)']);
  d.node('B2', 1, 232, ['B2 · Informa omisiones', 'y motivos a subsanar']);
  d.node('B3', 0, 306, ['B3 · Beneficiaria subsana', 'y acredita']);
  d.node('dec', 1, 380, ['¿Subsanó?'], 'dec');
  d.node('B4', 2, 455, ['B4 · Levanta la suspensión', 'y continúa el apoyo']);
  d.node('B5', 3, 455, ['B5 · Cancelación y baja', '(→ A5 · reintegro)']);
  d.node('end', 2, 535, [], 'end');
  d.edge('start', 'B1');
  d.edge('B1', 'B2');
  d.edge('B2', 'B3');
  d.edge('B3', 'dec');
  d.edge('dec', 'B4', { exit: 'bottom', enter: 'top', midY: 420 });
  d.label('sí', 560, 412, { anchor: 'end' });
  d.edge('dec', 'B5', { exit: 'right', enter: 'top' });
  d.label('no', 830, 372, { anchor: 'start' });
  d.edge('B4', 'end');
  d.edge('B5', 'end', { exit: 'bottom', enter: 'top', midY: 500 });
  writeFileSync(process.argv[2] + '/MF13-B-suspension.svg', d.render(), 'utf8');
}

// ------------- MF13·C MONTOS NO EJERCIDOS, REASIGNACIÓN Y EXCLUSIÓN DEL LISTADO
{
  const d = new Diagram({
    title: 'MF13·C — Montos no ejercidos, reasignación y exclusión del Listado',
    lanes: [
      { id: 'R29·R30', name: 'DRF / área responsable' }, { id: 'R20', name: 'UJIGEV' },
      { id: 'R32·R38', name: 'Comité' }, { id: 'R15', name: 'DAFGD' }, { id: 'R31→E-02', name: 'DRFF · Informe anual' },
    ],
    laneW: 216, gutter: 24, bottom: 720,
  });
  d.node('start', 0, 108, [], 'start');
  d.node('C1', 0, 158, ['C1 · Calcula monto no', 'ejercido (ajuste <70%)']);
  d.node('C2', 2, 232, ['C2 · Comité acuerda reintegro', 'y reasignación (acta)']);
  d.node('C3', 3, 306, ['C3 · Reasigna a predios', 'factibles sin cobertura']);
  d.node('C4', 1, 380, ['C4 · Solicitud de exclusión', 'del Listado (prueba)']);
  d.node('dec', 1, 455, ['¿Comprueba', 'cumplimiento?'], 'dec');
  d.node('C5', 2, 545, ['C5 · Acuerda exclusión', 'del Listado']);
  d.node('C6', 4, 545, ['C6 · Permanece en el Listado', '(sin 2.ª ministración)']);
  d.node('C7', 4, 625, ['C7 · Cifras de reintegro', '→ informe anual (E-02)']);
  d.node('end', 4, 685, [], 'end');
  d.edge('start', 'C1');
  d.edge('C1', 'C2');
  d.edge('C2', 'C3');
  d.edge('C3', 'C4');
  d.edge('C4', 'dec');
  d.edge('dec', 'C5', { exit: 'bottom', enter: 'top', midY: 505 });
  d.label('sí', 560, 500, { anchor: 'end' });
  d.edge('dec', 'C6', { exit: 'bottom', enter: 'top', midY: 515 });
  d.label('no', 700, 505, { anchor: 'start', size: 9.5 });
  d.edge('C5', 'C7', { exit: 'bottom', enter: 'top', midY: 590 });
  d.edge('C6', 'C7');
  d.edge('C7', 'end');
  writeFileSync(process.argv[2] + '/MF13-C-reasignacion.svg', d.render(), 'utf8');
}
console.log('OK');