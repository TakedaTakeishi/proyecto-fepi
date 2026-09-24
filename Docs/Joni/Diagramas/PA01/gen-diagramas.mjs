// Generador de los diagramas SVG de PA-01 (PSAHEM)
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

// ------------------------------------ PA1·A SOLICITUD, EXPEDIENTE Y DICTAMEN
{
  const d = new Diagram({
    title: 'PA1·A — Convocatoria, solicitud y dictaminación (PSAHEM 2026)',
    lanes: [
      { id: 'R28', name: 'Solicitante' }, { id: 'R29', name: 'DRF (9 regiones)' },
      { id: 'R31·R30', name: 'DRFF / SSA-MIF' }, { id: 'R32', name: 'Comité Técnico' }, { id: 'PO·web', name: 'Gaceta / sitio' },
    ],
    laneW: 216, gutter: 24, bottom: 880,
  });
  d.node('start', 1, 108, [], 'start');
  d.node('A1', 4, 158, ['A1 · Publica RO y', 'Convocatoria (27-ene-26)']);
  d.node('A2', 0, 232, ['A2 · Integra solicitud', '(501A + 502 + requisitos)']);
  d.node('A3', 1, 306, ['A3 · Recepción en la DRF', 'que corresponde; folio']);
  d.node('dec', 1, 380, ['¿Completa?'], 'dec');
  d.node('A3b', 0, 455, ['A3b · Faltantes: 5 días', 'hábiles o desechada']);
  d.node('A4', 1, 530, ['A4 · Abre expediente y', 'turna a ejecutora']);
  d.node('A5', 2, 600, ['A5 · Poligonal en campo', '+ digitalización']);
  d.node('A7', 2, 672, ['A7 · Dictamen técnico', 'y jurídico; listados']);
  d.node('A8', 3, 742, ['A8 · CVT analiza;', 'Comité aprueba (acta)']);
  d.node('A10', 4, 812, ['A10 · Resultados: Gaceta', '+ sitio + DRF']);
  d.node('end', 4, 858, [], 'end');
  d.edge('start', 'A1', { exit: 'left', enter: 'top' });
  d.edge('A1', 'A2', { exit: 'left', enter: 'top' });
  d.edge('A2', 'A3', { exit: 'right', enter: 'top' });
  d.edge('A3', 'dec');
  d.edge('dec', 'A3b', { exit: 'left', enter: 'top' });
  d.label('no', 154, 420, { anchor: 'end' });
  d.edge('A3b', 'A4', { exit: 'bottom', enter: 'top', midY: 493 });
  d.label('sí (complementa)', 260, 490, { anchor: 'start', size: 9.5 });
  d.edge('dec', 'A4', { exit: 'bottom', enter: 'top', midY: 497 });
  d.label('sí', 388, 420, { anchor: 'start' });
  d.edge('A4', 'A5');
  d.edge('A5', 'A7');
  d.edge('A7', 'A8');
  d.edge('A8', 'A10');
  d.edge('A10', 'end');
  writeFileSync(process.argv[2] + '/PA1-A-solicitud.svg', d.render(), 'utf8');
}

// ------------------------------------------- PA1·B CONTRATACIÓN Y PAGO (70%)
{
  const d = new Diagram({
    title: 'PA1·B — Contratación y primer pago (70%) vía fiduciaria',
    lanes: [
      { id: 'R28', name: 'Beneficiaria/o' }, { id: 'R29', name: 'DRF' },
      { id: 'R31·R30', name: 'DRFF / SSA-MIF' }, { id: 'R20', name: 'UJIGEV' }, { id: 'R15·R33', name: 'DAFGD · Fiduciaria' },
    ],
    laneW: 216, gutter: 24, bottom: 660,
  });
  d.node('start', 2, 108, [], 'start');
  d.node('B1', 2, 158, ['B1 · Elabora Contrato de', 'Adhesión / Convenio']);
  d.node('B2', 3, 232, ['B2 · Valida contrato', 'y adendum']);
  d.node('B3', 0, 306, ['B3 · Firma en la DRF', '(10 días hábiles)']);
  d.node('B3b', 1, 306, ['· sello del núcleo', 'agrario'], 'term');
  d.node('B4', 4, 382, ['B4 · Solicitud de pago a', 'fiduciaria (5 días)']);
  d.node('B5', 4, 456, ['B5 · Dispersa 70%', '(cuenta F/663)']);
  d.node('B6', 1, 530, ['B6 · Notifica pago', '(llamada/visita)']);
  d.node('end', 1, 600, [], 'end');
  d.edge('start', 'B1');
  d.edge('B1', 'B2');
  d.edge('B2', 'B3', { exit: 'left', enter: 'top' });
  d.edge('B3', 'B3b', { exit: 'right', enter: 'left', arrow: false });
  d.edge('B3', 'B4', { exit: 'bottom', enter: 'top', midY: 344 });
  d.edge('B4', 'B5');
  d.edge('B5', 'B6', { exit: 'left', enter: 'top' });
  d.edge('B6', 'end');
  writeFileSync(process.argv[2] + '/PA1-B-contrato-pago.svg', d.render(), 'utf8');
}

// --------------------------------------- PA1·C EJECUCIÓN, VERIFICACIÓN, CIERRE
{
  const d = new Diagram({
    title: 'PA1·C — Ejecución, verificación y cierre (30%, incumplimiento, informe anual)',
    lanes: [
      { id: 'R28', name: 'Beneficiaria/o' }, { id: 'R29·R30', name: 'DRF / SSA-MIF' },
      { id: 'R31', name: 'DRFF' }, { id: 'R32·R20', name: 'Comité · UJIGEV' }, { id: 'R15·R33', name: 'DAFGD · Fiduciaria' },
    ],
    laneW: 216, gutter: 24, bottom: 810,
  });
  d.node('start', 1, 108, [], 'start');
  d.node('C1', 1, 158, ['C1 · Acompañamiento', 'técnico (±asesor RFN)']);
  d.node('C2', 0, 232, ['C2 · Ejecuta cuidados', 'del bosque']);
  d.node('C3', 1, 306, ['C3 · Verificación en', 'todos los predios']);
  d.node('C4', 0, 380, ['C4 · Informe final +', 'minuta firmada']);
  d.node('C5', 2, 454, ['C5 · Solicita segunda', 'ministración (30%)']);
  d.node('C6', 1, 528, ['C6 · Listado de', 'incumplidos']);
  d.node('dec', 3, 600, ['¿Cumplió?'], 'dec');
  d.node('C8', 0, 676, ['C8 · Graduación o', 'refrendo (≤3 años)']);
  d.node('C7', 4, 676, ['C7 · Reintegro a la', 'cuenta del fideicomiso']);
  d.node('C9', 2, 750, ['C9 · Informe anual de', 'ejecución (→ E-02)']);
  d.node('end', 2, 790, [], 'end');
  d.edge('start', 'C1');
  d.edge('C1', 'C2');
  d.edge('C2', 'C3');
  d.edge('C3', 'C4');
  d.edge('C4', 'C5');
  d.edge('C5', 'C6', { exit: 'left', enter: 'top' });
  d.edge('C6', 'dec');
  d.edge('dec', 'C8', { exit: 'left', enter: 'top' });
  d.label('sí', 700, 592, { anchor: 'end' });
  d.edge('dec', 'C7', { exit: 'right', enter: 'top' });
  d.label('no (acuerdo del Comité)', 848, 592, { anchor: 'start', size: 9.5 });
  d.edge('dec', 'C9', { exit: 'bottom', enter: 'top', midY: 716 });
  d.edge('C9', 'end');
  writeFileSync(process.argv[2] + '/PA1-C-verificacion-cierre.svg', d.render(), 'utf8');
}
console.log('OK');