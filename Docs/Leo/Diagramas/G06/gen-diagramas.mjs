// Generador SVG para G6 — Almacenamiento del Banco de Germoplasma
// Uso: node gen-diagramas.mjs <dir-de-salida>
import { writeFileSync } from 'fs';

const FONT = "'Segoe UI', system-ui, -apple-system, sans-serif";
const C = {
  bg: '#FAFBFC',
  laneFill: '#F7F8FA', laneStroke: '#DCE0E6',
  laneId: '#374151', laneName: '#6B7280',
  boxFill: '#E8F0FE', boxStroke: '#93B4E0', boxText: '#1F2937', boxId: '#1D4ED8',
  decFill: '#FDF6E3', decStroke: '#D8BC6A', decText: '#7A5B12',
  arrow: '#566171', arrowLabel: '#6B7280',
  title: '#111827',
};

function esc(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

class Diagram {
  constructor(o) { Object.assign(this, o); this.nodes = {}; this.edges = []; this.labels = []; }
  cx(lane) { return this.gutter + (lane + 0.5) * this.laneW; }
  node(id, lane, y, lines, kind = 'act') {
    const maxLen = Math.max(...lines.map(l => l.length), 1);
    let w, h;
    if (kind === 'dec') { w = Math.max(120, maxLen * 6.4 + 34); h = lines.length * 14 + 30; }
    else if (kind === 'start' || kind === 'end') { w = 16; h = 16; }
    else { w = Math.min(188, Math.max(152, maxLen * 6.5 + 26)); h = lines.length * 15 + 22; }
    this.nodes[id] = { id, lane, x: this.cx(lane), y, w, h, lines, kind };
  }
  anchor(n, side) {
    if (side === 'top') return { x: n.x, y: n.y - n.h / 2 };
    if (side === 'bottom') return { x: n.x, y: n.y + n.h / 2 };
    if (side === 'left') return { x: n.x - n.w / 2, y: n.y };
    return { x: n.x + n.w / 2, y: n.y };
  }
  edge(from, to, { exit = 'bottom', enter = 'top', midY } = {}) {
    const a = this.nodes[from], b = this.nodes[to];
    const p0 = this.anchor(a, exit), p1 = this.anchor(b, enter);
    const pts = [p0];
    if (exit === 'bottom' && enter === 'top' && Math.abs(p0.x - p1.x) > 0.5) {
      const my = midY ?? (p0.y + p1.y) / 2;
      pts.push({ x: p0.x, y: my }, { x: p1.x, y: my });
    } else if ((exit === 'left' || exit === 'right') && enter === 'top') {
      pts.push({ x: p1.x, y: p0.y });
    }
    pts.push(p1);
    this.edges.push({ pts });
  }
  render() {
    const width = this.gutter + this.lanes.length * this.laneW + 24;
    const height = this.bottom + 30;
    const laneTop = 62;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" font-family="${FONT}">\n`;
    s += `<defs><marker id="ah" viewBox="0 0 10 10" refX="8.6" refY="5" markerWidth="8.5" markerHeight="8.5" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${C.arrow}"/></marker></defs>\n`;
    s += `<rect x="0" y="0" width="${width}" height="${height}" fill="${C.bg}"/>\n`;
    s += `<text x="${width / 2}" y="42" text-anchor="middle" font-size="17" font-weight="600" fill="${C.title}">${esc(this.title)}</text>\n`;
    for (let i = 0; i < this.lanes.length; i++) {
      const x = this.gutter + i * this.laneW;
      s += `<rect x="${x + 3}" y="${laneTop}" width="${this.laneW - 6}" height="${this.bottom - laneTop}" rx="10" fill="${C.laneFill}" stroke="${C.laneStroke}"/>\n`;
      s += `<text x="${x + this.laneW / 2}" y="${laneTop + 22}" text-anchor="middle" font-size="12" font-weight="600" fill="${C.laneId}">${esc(this.lanes[i].id)}</text>\n`;
      s += `<text x="${x + this.laneW / 2}" y="${laneTop + 38}" text-anchor="middle" font-size="10" fill="${C.laneName}">${esc(this.lanes[i].name)}</text>\n`;
    }
    for (const e of this.edges) {
      const pts = e.pts.map(p => `${p.x},${p.y}`).join(' ');
      s += `<polyline points="${pts}" fill="none" stroke="${C.arrow}" stroke-width="1.4" stroke-linejoin="round" marker-end="url(#ah)"/>\n`;
    }
    for (const n of Object.values(this.nodes)) {
      const { x, y, w, h, lines, kind } = n;
      if (kind === 'start') { s += `<circle cx="${x}" cy="${y}" r="7" fill="${C.laneId}"/>\n`; continue; }
      if (kind === 'end') { s += `<circle cx="${x}" cy="${y}" r="8" fill="${C.laneId}"/><circle cx="${x}" cy="${y}" r="3.4" fill="${C.bg}"/>\n`; continue; }
      if (kind === 'dec') {
        s += `<polygon points="${x},${y - h / 2} ${x + w / 2},${y} ${x},${y + h / 2} ${x - w / 2},${y}" fill="${C.decFill}" stroke="${C.decStroke}" stroke-width="1.2"/>\n`;
      } else {
        s += `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="9" fill="${C.boxFill}" stroke="${C.boxStroke}" stroke-width="1.2"/>\n`;
      }
      const lh = 15, y0 = y - ((lines.length - 1) * lh) / 2 + 4;
      lines.forEach((ln, i) => {
        const m = ln.match(/^(G6·A\d+) · (.*)$/);
        const tspan = m
          ? `<tspan font-weight="600" fill="${C.boxId}">${esc(m[1])}</tspan><tspan fill="${C.boxText}"> · ${esc(m[2])}</tspan>`
          : esc(ln);
        s += `<text x="${x}" y="${y0 + i * lh}" text-anchor="middle" font-size="11.5" fill="${C.boxText}">${tspan}</text>\n`;
      });
    }
    for (const l of this.labels) {
      s += `<text x="${l.x}" y="${l.y}" text-anchor="middle" font-size="10.5" font-style="italic" fill="${C.arrowLabel}">${esc(l.text)}</text>\n`;
    }
    s += `</svg>\n`;
    return s;
  }
}

const d = new Diagram({
  title: 'G6·A — Almacenamiento del Banco de Germoplasma',
  lanes: [
    { id: 'R1', name: 'Resp. Colecta' },
    { id: 'R2', name: 'Banco de Germoplasma' },
    { id: 'R3', name: 'Depto. Prod. Planta' },
    { id: 'R4', name: 'UCSF' },
    { id: 'R5', name: 'DRFF' },
    { id: 'R6', name: 'DRF/Vivero' },
  ],
  laneW: 188,
  gutter: 24,
  bottom: 1010,
});

d.node('start', 0, 108, [], 'start');
d.node('A1', 0, 162, ['G6·A1 · Recibe semilla limpia', 'de G5 y prepara resguardo']);
d.node('A2', 1, 250, ['G6·A2 · Almacena semilla a', 'temperatura adecuada']);
d.node('A3', 0, 340, ['G6·A3 · Reporta inventario', 'de semillas + informe final']);
d.node('A4', 2, 430, ['G6·A4 · Recibe inventario,', 'firma y turna a UCSF']);
d.node('A5', 3, 520, ['G6·A5 · Revisa, firma y', 'turna inventario a DRFF']);
d.node('A6', 4, 610, ['G6·A6 · Da visto bueno y', 'regresa a Depto.']);
d.node('A7', 1, 712, ['G6·A7 · Entrega semilla con', 'vale foliado y bitácora', '(enlace con G8)']);
d.node('A8', 1, 815, ['G6·A8 · Si no se siembra,', 'recibe retorno antes de', 'fecha límite (enlace G10)']);
d.node('A9', 5, 910, ['G6·A9 · Recibe semilla para', 'siembra en vivero']);
d.node('end', 5, 970, [], 'end');

d.edge('start', 'A1');
d.edge('A1', 'A2', { midY: 204 });
d.edge('A2', 'A3', { midY: 295 });
d.edge('A3', 'A4', { midY: 385 });
d.edge('A4', 'A5', { midY: 476 });
d.edge('A5', 'A6', { midY: 566 });
d.edge('A6', 'A7', { midY: 662 });
d.edge('A7', 'A8');
d.edge('A8', 'A9', { exit: 'right', enter: 'top' });
d.edge('A9', 'end');

d.labels.push({ x: d.cx(2), y: 998, text: 'retorno documentado; flujo operativo por confirmar en campo' });

writeFileSync(process.argv[2] + '/G6-A-almacenamiento.svg', d.render(), 'utf8');
console.log('OK');
