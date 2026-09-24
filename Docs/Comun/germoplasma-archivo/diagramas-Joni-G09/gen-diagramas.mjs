// Generador de los diagramas SVG de G9 (venta, donación, donación especial)
// Estilo sobrio inspirado en pruebas/G9A-swlste2-default.png
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
    this.nodes = {};
    this.edges = [];
    this.labels = [];
    this.dots = [];
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
  line(pts) { this.edges.push({ pts, arrow: false }); } // segmento sin punta (bus de merges)
  render() {
    const { gutter, laneW, lanes, top, bottom, title } = this;
    const width = gutter + lanes.length * laneW + 24;
    const height = bottom + 30;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" font-family="${FONT}">\n`;
    s += `<defs><marker id="ah" viewBox="0 0 10 10" refX="8.6" refY="5" markerWidth="8.5" markerHeight="8.5" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${C.arrow}"/></marker></defs>\n`;
    s += `<rect x="0" y="0" width="${width}" height="${height}" fill="${C.bg}"/>\n`;
    s += `<text x="${width / 2}" y="42" text-anchor="middle" font-size="17" font-weight="600" fill="${C.title}">${esc(title)}</text>\n`;
    // carriles
    const laneTop = 62, laneBot = bottom;
    for (let i = 0; i < lanes.length; i++) {
      const x = gutter + i * laneW;
      s += `<rect x="${x + 3}" y="${laneTop}" width="${laneW - 6}" height="${laneBot - laneTop}" rx="10" fill="${C.laneFill}" stroke="${C.laneStroke}"/>\n`;
      s += `<text x="${x + laneW / 2}" y="${laneTop + 22}" text-anchor="middle" font-size="12" font-weight="600" fill="${C.laneId}">${esc(lanes[i].id)}</text>\n`;
      s += `<text x="${x + laneW / 2}" y="${laneTop + 38}" text-anchor="middle" font-size="10" fill="${C.laneName}">${esc(lanes[i].name)}</text>\n`;
    }
    // bandas seccion (gutter izquierdo, texto rotado)
    for (const bnd of (this.bands || [])) {
      const cy = (bnd.y0 + bnd.y1) / 2, h = bnd.y1 - bnd.y0;
      s += `<rect x="${gutter - 34}" y="${bnd.y0}" width="24" height="${h}" rx="8" fill="${C.pillFill}" stroke="${C.pillStroke}"/>\n`;
      s += `<text x="${gutter - 22}" y="${cy}" text-anchor="middle" font-size="10.5" font-weight="600" fill="${C.pillText}" transform="rotate(-90 ${gutter - 22} ${cy})">${esc(bnd.text)}</text>\n`;
    }
    // aristas
    for (const e of this.edges) {
      const pts = e.pts.map(p => `${p.x},${p.y}`).join(' ');
      s += `<polyline points="${pts}" fill="none" stroke="${C.arrow}" stroke-width="1.4" stroke-linejoin="round"${e.arrow ? ' marker-end="url(#ah)"' : ''}/>\n`;
    }
    // nodos
    for (const n of Object.values(this.nodes)) {
      const { x, y, w, h, lines, kind } = n;
      if (kind === 'start') {
        s += `<circle cx="${x}" cy="${y}" r="7" fill="${C.laneId}"/>\n`;
        continue;
      }
      if (kind === 'end') {
        s += `<circle cx="${x}" cy="${y}" r="8" fill="${C.laneId}"/><circle cx="${x}" cy="${y}" r="3.4" fill="${C.bg}"/>\n`;
        continue;
      }
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
        const m = kind === 'act' ? ln.match(/^((?:A|B)[^ ]*) · (.*)$/) : null;
        let tspan;
        if (m) tspan = `<tspan font-weight="600" fill="${C.boxId}">${esc(m[1])}</tspan><tspan fill="${C.boxText}"> · ${esc(m[2])}</tspan>`;
        else tspan = esc(ln);
        s += `<text x="${x}" y="${y0 + i * lh}" text-anchor="middle" font-size="11.5" fill="${textFill}">${tspan}</text>\n`;
      });
    }
    // etiquetas sueltas
    for (const l of this.labels) {
      s += `<text x="${l.x}" y="${l.y}" text-anchor="${l.anchor}" font-size="${l.size}" font-weight="${l.weight}" ${l.italic ? 'font-style="italic"' : ''} fill="${l.fill}">${esc(l.text)}</text>\n`;
    }
    // puntos de fusion
    for (const [dx, dy] of (this.dots || [])) {
      s += `<circle cx="${dx}" cy="${dy}" r="2.6" fill="${C.arrow}"/>\n`;
    }
    s += `</svg>\n`;
    return s;
  }
}

// ---------------------------------------------------------------- G9·A VENTA
{
  const d = new Diagram({
    title: 'G9·A — Venta (semilla / conos / planta)',
    lanes: [
      { id: 'R1', name: 'Solicitante' }, { id: 'R8', name: 'Contabilidad' },
      { id: 'R3', name: 'Ventanilla DPP·UVI' }, { id: 'R4', name: 'Banco de germoplasma' },
      { id: 'R5', name: 'Área de Beneficio' }, { id: 'R6', name: 'Vivero' },
      { id: 'R11', name: 'Archivo' },
    ],
    laneW: 200, gutter: 46, top: 62, bottom: 1565,
    bands: [
      { text: 'Semilla y conos', y0: 118, y1: 745 },
      { text: 'Planta', y0: 763, y1: 1305 },
      { text: 'Registro', y0: 1362, y1: 1548 },
    ],
  });
  d.node('start', 0, 108, [], 'start');
  d.node('A0', 0, 158, ['A0 · Consulta catálogo', 'y disponibilidad']);
  d.node('A1', 1, 235, ['A1 · Elabora el FUP', 'con el importe']);
  d.node('A2', 0, 312, ['A2 · Paga en centro', 'autorizado (R9) y', 'entrega comprobante']);
  d.node('A3', 1, 392, ['A3 · Sella el FUP', '“Pagado”']);
  d.node('A4', 2, 470, ['A4 · Indica el punto', 'de recogida']);
  d.node('d1', 2, 548, ['¿Semilla o conos?'], 'dec');
  d.node('A5', 3, 630, ['A5 · Entrega semilla +', 'formato de salida', 'foliado']);
  d.node('A6', 3, 708, ['A6 · Bitácora y baja', 'de inventario']);
  d.node('AC5', 4, 630, ['A-C5 · Entrega conos', 'en el Área de', 'Beneficio']);
  d.node('AP0', 0, 800, ['A-P0 · Consulta', 'catálogo de planta']);
  d.node('start2', 0, 755, [], 'start');
  d.node('AP1', 1, 878, ['A-P1 · Elabora el FUP']);
  d.node('AP2', 0, 956, ['A-P2 · Paga en centro', 'autorizado (R9)']);
  d.node('AP3', 1, 1034, ['A-P3 · Sella “Pagado”']);
  d.node('AP4', 2, 1112, ['A-P4 · Genera el vale', 'de salida de planta']);
  d.node('AP5', 5, 1190, ['A-P5 · Entrega en', 'vivero contra vale +', 'FUP “Pagado”']);
  d.node('AP6', 5, 1268, ['A-P6 · Registra salida,', 'baja inventario e', 'informa a la DRF']);
  d.node('A7', 1, 1400, ['A7 · Registra el ingreso', '(póliza + SPEI)']);
  d.node('A8', 6, 1480, ['A8 · Archiva el', 'expediente por folio']);
  d.node('end', 6, 1535, [], 'end');

  d.edge('start', 'A0');
  d.edge('A0', 'A1', { midY: 197 });
  d.edge('A1', 'A2', { midY: 270 });
  d.edge('A2', 'A3', { midY: 356 });
  d.edge('A3', 'A4', { midY: 431 });
  d.edge('A4', 'd1');
  d.edge('d1', 'A5', { midY: 583 });
  d.label('semilla', (d.cx(2) + d.cx(3)) / 2, 578);
  d.edge('d1', 'AC5', { exit: 'right', enter: 'top' });
  d.label('conos', (d.cx(2) + d.cx(4)) / 2, 540);
  d.edge('A5', 'A6');
  // merges hacia el bus de A7
  d.edges.push({ pts: [d.anchor(d.nodes.A6, 'bottom'), { x: d.cx(3), y: 1345 }], arrow: false });
  d.edges.push({ pts: [d.anchor(d.nodes.AC5, 'bottom'), { x: d.cx(4), y: 1345 }], arrow: false });
  d.edges.push({ pts: [d.anchor(d.nodes.AP6, 'bottom'), { x: d.cx(5), y: 1345 }], arrow: false });
  d.edges.push({ pts: [{ x: d.cx(5), y: 1345 }, { x: d.cx(1), y: 1345 }], arrow: false });
  d.edges.push({ pts: [{ x: d.cx(1), y: 1345 }, d.anchor(d.nodes.A7, 'top')], arrow: true });
  d.dots.push([d.cx(3), 1345], [d.cx(4), 1345], [d.cx(5), 1345]);
  // banda planta
  d.edge('start2', 'AP0');
  d.edge('AP0', 'AP1', { midY: 843 });
  d.edge('AP1', 'AP2', { midY: 913 });
  d.edge('AP2', 'AP3', { midY: 999 });
  d.edge('AP3', 'AP4', { midY: 1069 });
  d.edge('AP4', 'AP5', { midY: 1147 });
  d.edge('AP5', 'AP6');
  d.edge('A7', 'A8', { midY: 1440 });
  d.label('folio', (d.cx(1) + d.cx(6)) / 2, 1433);
  d.edge('A8', 'end');
  writeFileSync(process.argv[2] + '/G9-A-venta.svg', d.render(), 'utf8');
}

// ------------------------------------------------------------- G9·B DONACIÓN
{
  const d = new Diagram({
    title: 'G9·B — Donación de planta',
    lanes: [
      { id: 'R1', name: 'Solicitante' }, { id: 'R3', name: 'Ventanilla · DRF' },
      { id: 'R7', name: 'SRyPP' }, { id: 'R6', name: 'Vivero' }, { id: 'R11', name: 'Archivo' },
    ],
    laneW: 200, gutter: 24, top: 62, bottom: 1355,
    bands: [],
  });
  d.node('start', 0, 108, [], 'start');
  d.node('B1', 0, 158, ['B1 · Consulta requisitos', 'y metodología en el sitio']);
  d.node('B2', 0, 250, ['B2 · Entrega “Solicitud', 'de Planta” o Programa', 'Municipal (Ayto.) en', 'DRF / DG / correo']);
  d.node('B3', 1, 330, ['B3 · Contacta e indica', 'requisitos por perfil']);
  d.node('B4', 0, 410, ['B4 · Entrega requisitos', 'en ≤5 días hábiles']);
  d.node('d1', 0, 492, ['¿En el plazo?'], 'dec');
  d.node('endC', 1, 492, [], 'end');
  d.node('B5', 2, 575, ['B5 · Notifica la', 'disponibilidad']);
  d.node('d2', 2, 652, ['¿Planta disponible?'], 'dec');
  d.node('neg', 2, 740, ['Respuesta negativa +', 'asesoría técnica'], 'term');
  d.node('endN', 2, 800, [], 'end');
  d.node('B6', 0, 740, ['B6 · Recoge el vale y', 'firma Contrato de', 'Donación (≥1,000 o', 'Ayto.) / Carta', 'Compromiso (<1,000)']);
  d.node('B7', 0, 845, ['B7 · Recoge la planta', 'en el vivero']);
  d.node('B7b', 3, 925, ['B7b · Entrega contra', 'vale, baja inventario', 'e informa salida']);
  d.node('B8', 0, 1010, ['B8 · Establece la', 'planta conforme al', 'instrumento']);
  d.node('d3', 0, 1095, ['¿Contrato de', 'Donación?'], 'dec');
  d.node('B9', 0, 1180, ['B9 · Rinde informe', 'final de actividades']);
  d.node('B10', 4, 1265, ['B10 · Archiva el', 'expediente']);
  d.node('end', 4, 1320, [], 'end');

  d.edge('start', 'B1');
  d.edge('B1', 'B2');
  d.edge('B2', 'B3', { midY: 297 });
  d.edge('B3', 'B4', { midY: 370 });
  d.edge('B4', 'd1');
  d.edge('d1', 'endC', { exit: 'right', enter: 'left' });
  d.label('no', (d.cx(0) + d.cx(1)) / 2, 484);
  d.label('Expediente concluido', d.cx(1) + 16, 496, { anchor: 'start', italic: false });
  d.edge('d1', 'B5', { exit: 'bottom', enter: 'left' });
  d.label('sí', d.cx(0) + 10, 535, { anchor: 'start' });
  d.edge('B5', 'd2');
  d.edge('d2', 'neg');
  d.label('no', d.cx(2) + 10, 695, { anchor: 'start' });
  d.edge('neg', 'endN');
  d.edge('d2', 'B6', { exit: 'left', enter: 'top' });
  d.label('sí', (d.cx(0) + d.cx(2)) / 2, 644);
  d.edge('B6', 'B7');
  d.edge('B7', 'B7b', { exit: 'bottom', enter: 'left' });
  d.edge('B7b', 'B8', { exit: 'bottom', enter: 'top', midY: 970 });
  d.edge('B8', 'd3');
  d.edge('d3', 'B9');
  d.label('sí', d.cx(0) + 10, 1140, { anchor: 'start' });
  d.edge('d3', 'B10', { exit: 'right', enter: 'right', midX: d.cx(4) + 92 });
  d.label('no', d.cx(0) + 100, 1087, { anchor: 'start' });
  d.edge('B9', 'B10', { exit: 'bottom', enter: 'top', midY: 1222 });
  d.edge('B10', 'end');
  writeFileSync(process.argv[2] + '/G9-B-donacion.svg', d.render(), 'utf8');
}

// ------------------------------------------------- G9·B·79 DONACIÓN ESPECIAL
{
  const d = new Diagram({
    title: 'G9·B·79 — Donación especial (art. 3.79 Bis)',
    lanes: [
      { id: 'R1', name: 'Solicitante' }, { id: 'R6', name: 'Vivero' },
    ],
    laneW: 210, gutter: 24, top: 62, bottom: 500,
    bands: [],
  });
  d.node('start', 0, 108, [], 'start');
  d.node('S1', 0, 160, ['B·79.1 · Entrega acta +', 'identificación (DRF', 'o SRyPP)']);
  d.node('S2', 0, 245, ['B·79.2 · Firma Carta', 'Compromiso y recoge', 'el vale']);
  d.node('S3', 1, 330, ['B·79.3 · Recoge la', 'planta en el vivero']);
  d.node('S4', 0, 410, ['B·79.4 · Establece la', 'planta conforme a', 'la carta']);
  d.node('end', 0, 462, [], 'end');
  d.edge('start', 'S1');
  d.edge('S1', 'S2');
  d.edge('S2', 'S3', { exit: 'bottom', enter: 'top', midY: 300 });
  d.edge('S3', 'S4', { exit: 'bottom', enter: 'top', midY: 380 });
  d.edge('S4', 'end');
  writeFileSync(process.argv[2] + '/G9-B79-donacion-especial.svg', d.render(), 'utf8');
}
console.log('OK');
