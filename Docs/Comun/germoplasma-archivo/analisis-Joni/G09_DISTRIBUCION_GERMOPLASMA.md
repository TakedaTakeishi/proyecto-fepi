# G9 — Salida externa del banco: distribución de germoplasma (venta de semilla/conos/planta y donación de planta)

> Proyecto: Sistema de Gestión Documental PROBOSQUE (trazabilidad y automatización).
> **Este documento es el análisis del proceso G9 del mapa [`01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md`](./01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md)** — antes `P9` (renombrado a `G9` el 2026-09-16 por consistencia con el catálogo del README; el archivo antes se llamó `02_PROCEDIMIENTO_DISTRIBUCION_GERMOPLASMA.md` y luego `P09_DISTRIBUCION_GERMOPLASMA.md`).
> Fecha de análisis: 2026-09-10. **v2: 2026-09-14** — reescrito con las metodologías oficiales RETYS (transcritas), el MP DRFF 2006, el formato de solicitud 2026 capturado y el MP de Contabilidad 2025; orígenes auditados con página contra el disco. **v2.1: 2026-09-17** — columna Origen de §8 re-auditada contra los archivos del disco (notación `pdf p.`; se corrigen las citas insustentadas [RIG art. 15→trazabilidad] y [MR→obligación de ficha]; nuevos vacíos A10 y B5 en el mapa; contradicción de precio planta 10x24 en §10.5). **v2.2: 2026-09-17** — §10 reestructurado como tabla de vacíos **V-01..V-11** (modelo GS3), referenciables desde §8 con `→ V-##`; los IDs del mapa (A#/B#) pasan a la columna "cómo se cierra". **v2.3: 2026-09-21** — desambiguado "folio": en las fuentes numera solo al formato impreso, no al expediente (verificado en MP06 pp. 27/42 y SOL-DON); glosario §4 reescrito, N-07 y N-18 reancladas a necesidades reales de rol (la "numeración única" pasa a V-03 como propuesta de diseño), y corregida la nota de convención de páginas. Citación externa de pasos: **G9·A5**, **G9·B6**, etc.

---

## 1. Objeto y alcance

Regular la **salida de germoplasma (semilla, conos forestales y planta) desde las áreas de PROBOSQUE hacia usuarios externos**, en dos modalidades:

- **Venta** (tres trámites oficiales distintos, cada uno con su cédula RETYS):
  - **Semilla** [RETYS-1162]: presencial; se entrega en el **Banco de Germoplasma** (Vivero Invernaderos, Conjunto SEDAGRO, Metepec). Resultado del trámite: **"Formato de salida de Semilla del Banco de Germoplasma"**.
  - **Conos** [VEN]: se venden y entregan en el **Área de Beneficio de Semilla** (misma ubicación). ⚠️ Sin cédula RETYS ni formato propio documentado → vacío A8 del mapa.
  - **Planta** [RETYS-1068]: se tramita en DRF u Oficinas Centrales; se entrega en el vivero. Resultado: **"Vale de salida de planta forestal"**.
  - Pago siempre mediante **Formato Universal de Pago (FUP)** elaborado y sellado por el Departamento de Contabilidad; nunca efectivo en oficina [RETYS-1162/1068].
- **Donación** [RETYS-2092]: planta gratuita según disponibilidad, con **metodología oficial de 9 pasos** + modalidad especial por **acta de nacimiento/defunción (art. 3.79 Bis del Código para la Biodiversidad del EdoMéx)**.

**Dentro del alcance:** solicitud → verificación de existencia → cobro/autorización → entrega → registro de salida → archivo del expediente.
**Fuera del alcance (procesos hermanos del mapa):** programación y colecta (G1–G2), beneficio (G4), laboratorio (G5), almacenamiento (G6), inventario (G7), entrega interna a viveros (G8) y retornos/bajas (G10). El vale de planta **dentro de los programas de apoyo** ([RO-PS], [RO-RHF]) es un canal paralelo que consume el mismo inventario: véase GS8 del mapa.

## 2. Base documental (origen de los requisitos)

| Clave | Documento (ruta real en `Docs/Comun/`) | Uso — páginas verificadas |
|---|---|---|
| [MGO] | `Manual Jurídico/dic161d.pdf` — MGO 2025 (Gaceta 16-dic-2025, Tomo CCXX No. 112) | p. 12 codificación estructural; p. 13 organigrama; pp. 17–20 OIC; pp. 20–21 **UVI** (225C0201000600S; f.3 canaliza solicitudes, **f.6 apoya a entidades en la adquisición de semilla, conos y planta**); pp. 21–22 **UCSyTI** (f.2/f.4 gestión ante ADEM y contenidos del portal); p. 25 **DRFF** (f.1 reporta avances de germoplasma/producción a la DG); pp. 25–26 **SRyPP** (225C0201020100L: f.3 coordina recolecta de germoplasma, f.10 atiende solicitudes de restauración forestal social con las DRF, **f.12 coordina venta y capitalización de semillas, conos y planta**, f.13 portal, f.15 transparencia/datos); pp. 26–27 **SAPCAT** (f.11 huertos semilleros y propagación in vitro, f.20 visitas guiadas); pp. 35–36 **9 DRF** (225C0201050100T–0900T) |
| [RIG] | `Manual Jurídico/rglvig245.pdf` — Reglamento Interno (Gaceta 12-ene-2017, últ. reforma 14-nov-2025) | **Art. 15, fracc. II (p. 9): crear/operar viveros; fracc. XVIII (p. 10): huertos semilleros y bancos de germoplasma in situ** |
| [TAR] | `Germoplasma/PRECIOS_Y_TARIFAS_Servicios_PROBOSQUE_2024_abr301a.pdf` (Gaceta 30-abr-2024) | **pdf pp. 1–2**: "Montos de los precios y tarifas para el Ejercicio Fiscal de 2024" — emite la **Dir. de Administración, Finanzas y Gestión Documental (DAFGD)**, firma final DG (rúbrica); topes por especie: semilla (kg), cono (kg, $14–34) y planta (por tamaño) (re-verificado 2026-09-17). **Existe versión 2026** → clave [TAR26] en `GS3_PUBLICACION_CATALOGO_Y_TARIFAS.md` |
| [CAT-S] | `Germoplasma/COSTOS_Venta_Semilla_Conos_2026.pdf` (**1 p.**, corregido 2026-09-17) | Catálogo operativo 2026: nombre común/científico, semilla o cono, precio (12 semillas + 5 conos) |
| [CAT-P] | `Germoplasma/COSTOS_Venta_Planta_2026.pdf` (3 pp.) | Catálogo operativo 2026 de planta por tipo de envase (pdf p. 1: bolsa 10x24 $11, 11x25 $12 — ⚠️ excede el tope 2024 de $9 para 10x24, ver §10.5) |
| [VEN] | `Sitio web/venta_semilla_planta.html` | Lugares y horarios: ventanilla de venta 9:00–15:00 y **entrega de planta en vivero 8:00–15:00** (⚠️ contradice 9:00–17:00 de RETYS); FUP pagado en centro autorizado; semilla se entrega en el Banco y conos en el Área de Beneficio (SEDAGRO, Metepec); en ventanilla "se informa… existencia de planta en vivero" |
| [DON] | `Sitio web/donacion-planta.html` | Temporada de solicitud jun–ago; formato "Solicitud de Restauración Forestal Social" (el "clic aquí" lleva a la cédula RETYS 2092) |
| [DON1000] | `Sitio web/donacion-1000.html` | Donación **≥1,000 plantas**: atención jun–sep; mismo formato; entrega en OC/DRF/correo |
| [RETYS-1162] | `Retys EdoMex/CEDULAS_RETYS_PROBOSQUE_GERMOPLASMA.md` §Venta de Semilla | **Metodología oficial 3 pasos**, costo fijo, requisito único = comprobante de pago, resultado = Formato de salida de Semilla, respuesta 15 min, horario 9:00–17:00 |
| [RETYS-1068] | idem §Venta de Planta | Metodología oficial 3 pasos (DPP **genera el Vale de Salida de Planta**); resultado = Vale de salida de planta forestal; 11 oficinas (DRFF+9 DRF+OC) |
| [RETYS-2092] | idem §Donación de planta | **Metodología oficial 9 pasos + modalidad 3.79 Bis (4 pasos)**, 17 requisitos por perfil, Contrato de Donación ≥1,000/Ayuntamiento vs Carta Compromiso <1,000, plazos (5 días hábiles para requisitos, resolución 9 meses, ficta negativa) |
| [SOL-DON] | `Germoplasma/RETYS_2092_SOLICITUD_DONACION_PLANTA_2026.pdf` | **Formato "Solicitud de Planta" 2026** (v.1; elaboró SRyPP, validó DRFF): campos reales de la solicitud (§9) |
| [MP06] | `Germoplasma/86_manualProcDirRestYFtoFtal.pdf` — MP DRFF, sep-2006 | 4.1 flujo pp. 12–14 y formatos pp. 16–27 (**Vale de Salida de Planta de Viveros pp. 26–27**); 4.2 flujo pp. 31–37, formatos pp. 38–42 (**Salida de Semilla del Banco pp. 41–42**). Diseño operativo; vigencia por confirmar (A1/A6) |
| [CONT25] | `Manual Jurídico/jul301b.pdf` — MP Depto. de Contabilidad (ed. feb-2025, Gaceta 30-jul-2025, 37 pp., con texto) | p. 2 índice: solo 3 procedimientos (presupuesto, transferencias, pagos diversos) — **no hay procedimiento de ingreso por venta** (vacío A7); p. 19 registro de ingresos: **póliza de ingresos + SPEI/contra-recibo** |
| [ARC] | `Gestión documental y calidad/GUIA_Simple_Archivo_2026.pdf` + `CUADRO_Gral_Clasif_Archivística_2024.pdf` + `INVENTARIO_Gral_Archivo_2025.pdf` | **Verificado: no existe serie documental de semilla/germoplasma** → retenciones por definir en el SGD |
| [MR] | `Gestión documental y calidad/LINEAMIENTOS_Comité_MejoraRegulatoria.pdf` + `FORMATO_Ficha_Dato_Tramite_Servicio.pdf` | ⚠️ **No sustentan la "obligación de ficha vigente"**: el primero es oficio CEMER 01-oct-2019 (comité interno + exención de AIR; verificado renderizando p. 1, 2026-09-17) y el segundo es un formato en blanco escaneado. Falta la base normativa → vacío B5 del mapa |
| [AVISO-P] | `Sitio web/aviso_privacidad.html` | Listado de avisos de privacidad integrales por unidad/programa (verificado 2026-09-17): **ninguno cubre la venta ni la donación de semilla/conos/planta** → vacío A10 del mapa |
| [ISO] | `Gestión documental y calidad/CERT_ISO9001_NYCE_2022.pdf` / `_IQNET_` (escaneados: abrir como imagen) | Alcance verificado visualmente: producción de planta certificada; **venta de semilla/conos NO declarada**; certificado vencido 2025-10-10 (renovación = vacío A9) |
| [DIR] | `Manual Jurídico/Directorio.txt` (leído íntegro 2026-09-17) | Titulares por puesto (con línea): DG Alejandro Santiago Sánchez Vélez; UVI Juan Hernández Martínez (l.30); UCSyTI Ana Yaritzy Medina Eleno (l.36); OIC Jesús Alejandro Rentería (l.42); DRFF Emmanuel Mondragón (encargado despacho); SRyPP Iván Delfino Gómez Patiño (l.88); DAFGD y Subdir. Personal: Irán Terán Cordero (l.111/117 — doble rol); Subdir. Recursos Financieros Arturo Valdés Bernal (l.134); Depto. Gestión Documental Sergio Edgar Díaz Bernal (l.140); delegados de las 9 DRF (l.145–211). ⚠️ **no** lista jefes de Depto. Producción de Planta, Contabilidad, Banco, Beneficio ni viveros → vacío A12 |
| [TRAM] | `Sitio web/tramites_servicios.html` | Catálogo oficial de trámites: enlaza las cédulas 1162/1068/2092 |

> **Convención de páginas (re-auditada 2026-09-17):** los números tras `pdf p.` son **páginas del archivo PDF** (no necesariamente la paginación impresa del documento; verificado 2026-09-21: en [MP06] pág. PDF 41 = pie impreso "41", pero en las Gacetas difieren). `m.N` = paso N de la metodología oficial en la transcripción [RETYS-*]; `§` = sección de la copia html offline o de la transcripción.

## 2.1 Glosario

| Término | Significado | Fuente |
|---|---|---|
| FUP | Formato Universal de Pago: lo **elabora el Departamento de Contabilidad**, se paga en centro autorizado y **Contabilidad lo sella "Pagado"** contra comprobante | [RETYS-1162/1068] |
| Centro autorizado de pago | Banco o establecimiento mercantil (no definido en normatividad; aparece en sitio y RETYS) | [VEN][RETYS] |
| Folio | **En las fuentes es solo el número consecutivo que imprime cada formato de salida sobre sí mismo**: vale de planta "número de folio consecutivo" [MP06 pdf p. 27]; formato de salida de semilla "número de folio respectivo" — definición circular del propio manual, sin decir de qué serie [MP06 pdf p. 42]. **NO existe en ninguna fuente un número que identifique el expediente completo**: la solicitud 2026 no tiene campo de número, solo "Fecha" [SOL-DON]. Un identificador único del expediente es **propuesta de diseño del SGD**, no obligación documentada → V-03 |
| Capitalización | Registro contable del ingreso por venta (función SRyPP f.12; el asiento real: póliza de ingresos + SPEI/contra-recibo; procedimiento de venta no documentado → A7) | [MGO p. 26][CONT25 p. 19] |
| Contrato de Donación | Instrumento para donaciones ≥1,000 plantas o Ayuntamientos; obliga a **informe final de actividades** | [RETYS-2092] |
| Carta Compromiso | Instrumento para donaciones <1,000 plantas (y modalidad 3.79 Bis) | [RETYS-2092] |
| Art. 3.79 Bis | Código para la Biodiversidad EdoMéx: derecho a recibir planta por nacimiento/hijo o defunción/ascendiente (acta del EdoMéx ≥12-dic-2025, ≤1 año del registro) | [RETYS-2092] |
| Ficta negativa | Si la autoridad no resuelve en el plazo (9 meses en donación), se entiende negativa | [RETYS-2092] |
| PFC | Plantación Forestal Comercial (código de identificación exigido en la solicitud; constancia obligatoria para especies navideñas) | [SOL-DON][RETYS-2092] |
| OC / DRF / UVI / DPP / SRyPP / SAPCAT / UCSyTI / ADEM / OIC / CEMER / RETYS / NTEA / SGD | Oficinas Centrales (Metepec) · Delegación Regional Forestal (9) · Unidad de Vinculación Interinstitucional · Depto. de Producción de Planta · Subdirección de Restauración y Producción de Planta · Subdirección de Apoyo a las Plantaciones Comerciales y Asistencia Técnica · Unidad de Comunicación Social y TI · Agencia Digital del EdoMéx · Órgano Interno de Control · Comité de Mejora Regulatoria · Registro Estatal de Trámites y Servicios · Norma Técnica Estatal Ambiental NTEA019 (espacios públicos → ecología municipal) · Sistema de Gestión Documental (nuestro software) | [MGO][DON][MR] |

## 3. Roles (stakeholders personificados)

> Regla (como en GS3 §3): cada rol lleva el **puesto y titular reales** del [DIR] (Directorio, leído íntegro 2026-09-17). Donde el Directorio no llega (jefaturas de Departamento por debajo de Subdirección, operadores, viveros), el titular se marca ⚠️ **desconocido** → vacío A12 del mapa: una necesidad no puede validarse con una persona que no sabemos quién es.

| ID | Rol (puesto) | Unidad real | Titular [DIR] | Tipo |
|---|---|---|---|---|
| R1 | Solicitante (ciudadano, ejido/municipio vía ayuntamiento, empresa, institución) | — | — (varios) | Externo |
| R2 | Entidad interesada (otras dependencias/entidades) | canalizada por UVI [MGO pp. 20–21 f.3/f.6] | canal: Juan Hernández Martínez (Jefe UVI, l.30) | Externo |
| R3 | Ventanilla DPP/UVI: informa, **indica el punto de recogida (venta semilla)** y **genera el vale de salida (venta planta)** | DPP (SRyPP) y UVI [RETYS-1162 m2 / RETYS-1068 m2] | ⚠️ jefe del Depto. de Producción de Planta **no listado**; UVI: Juan Hernández Martínez | Interno |
| R4 | Custodio del Banco de Germoplasma — **entrega semilla** y firma "ENTREGÓ" en el formato de salida (2006: Jefe del Programa de Colecta de Germoplasma Forestal) | Banco (Vivero Invernaderos, SEDAGRO) [MP06 pp. 41–42] | ⚠️ desconocido (A12) | Interno |
| R5 | Responsable del Área de Beneficio de Semilla — **entrega conos** | misma ubicación que R4 [VEN] | ⚠️ desconocido (A12) | Interno |
| R6 | Responsable de vivero — entrega planta contra vale, descuenta inventario, informa salida | 17 viveros / 9 DRF [MP06 p. 14][RETYS-1068] | ⚠️ jefes de vivero no listados; delegados de las 9 DRF sí (l.145–211) | Interno |
| R7 | SRyPP: coordina venta y capitalización (f.12), atiende restauración forestal social (f.10), autoriza disponibilidad en donación | SRyPP [MGO pp. 25–26] | **Iván Delfino Gómez Patiño** (Subdirector, l.88; probosque.dpp@) | Interno |
| R8 | Contabilidad: **elabora el FUP, lo sella "Pagado"**, registra el ingreso (póliza) | Depto. de Contabilidad [RETYS-1162/1068][CONT25] | ⚠️ jefe de Depto. no listado; el área es Subdir. de Recursos Financieros — **Arturo Valdés Bernal** (l.134; probosque.dc@) | Interno |
| R9 | Centro autorizado de pago (banco/establecimiento mercantil) | — | — (no definido en normatividad) | Externo |
| R10 | Publicador del catálogo, tarifas y fichas en portal (→ GS3) | UCSyTI + ADEM [MGO pp. 21–22 f.2/f.4; SRyPP f.13] | UCSyTI: **Ana Yaritzy Medina Eleno** (l.36; probosque.ui@); enlace ADEM ⚠️ desconocido (A12) | Interno |
| R11 | Archivo: custodia del expediente de cada operación | Depto. de Gestión Documental y Administración de Archivos [DIR] | **Sergio Edgar Díaz Bernal** (Jefe de Depto., l.140; probosque.archivo@) | Interno |
| R12 | Validador regulatorio (ficha RETYS vigente) | CEMER [MR] | ⚠️ enlace actual no listado (en el oficio CEMER 2019: Lucía Margarita Burciaga Valdez, "Enlace de Mejora Regulatoria") | Interno/Externo |
| R13 | Supervisor de legalidad y trazabilidad | OIC [MGO pp. 17–20]; transparencia INFOEM/IPOMEX | OIC: **Jesús Alejandro Rentería Núñez** (l.42); Auditoría: Diana Martínez Silva (l.48) | Interno/Externo |

## 4. Funciones y actividades por rol

| Rol | Función | Actividades clave (pasos §6) |
|---|---|---|
| R1/R2 | Adquirir o recibir germoplasma | A0, A2, A-P2, B1–B2, B4, B6–B9 |
| R3 | Atención en ventanilla | A4 (indica sitio), A-P4 (genera vale de planta), B3 (contacta e indica requisitos) |
| R4 | Entrega de semilla | A5 (formato de salida foliado con datos del lote), A6 (bitácora/inventario) |
| R5 | Entrega de conos | A-C5 (⚠️ sin formato propio: A8) |
| R6 | Entrega de planta | A-P5, B7b (vale, inventario, informe de salida) |
| R7 | Autorizar y coordinar | B5 (disponibilidad), coordinación de capitalización [MGO f.12] |
| R8 | FUP y contabilidad | A1/A3, A-P1/A-P3 (elabora/sella), A7 (póliza de ingresos) |
| R10 | Publicar | Sostén de A0/B1 (catálogo, fichas RETYS) |
| R11 | Archivar | A8, B10 (expediente de la operación) |
| R12 | Documentar el trámite | Fichas 1162/1068/2092 vigentes [MR] |

## 5. Reglas de negocio

- **BR-1** Venta de semilla y conos: **solo en Oficinas Centrales** (9:00–15:00 según [VEN]; **9:00–17:00 según [RETYS-1162]** ⚠️ contradicción → confirmar A#); semilla se entrega en el Banco, conos en el Área de Beneficio (ambas en Vivero Invernaderos, SEDAGRO, Metepec).
- **BR-2** Venta de planta: se tramita en DRF u OC (DPP/UVI) y **se entrega en el vivero** [RETYS-1068][VEN].
- **BR-3** Pago: **nunca efectivo en oficina**; el FUP lo **elabora Contabilidad**, se paga en centro autorizado y **Contabilidad lo sella "Pagado"** contra comprobante [RETYS-1162/1068].
- **BR-4** Donación: solicitudes jun–ago [DON] (≥1,000 plantas: jun–sep [DON1000]); entrega en temporada de reforestación jun–sep, según disponibilidad [RETYS-2092].
- **BR-5** Precios: catálogo operativo 2026 [CAT-S]/[CAT-P] dentro del máximo legal de Gaceta [TAR pdf pp. 1–2]. Deben coincidir. ✅ resuelto 2026-09-17: la **Gaceta 2026** [TAR26 en GS3] fija planta 10x24 en $11.00 = catálogo 2026 (el $9.00 era el tope 2024); conos $14–34 y semillas idénticos catálogo↔Gaceta. Falta solo la versión 2025 (vacío B6 del mapa) para cerrar la cadena.
- **BR-6** Espacios públicos (parques, glorietas, camellones): derivar a ecología municipal por la NTEA019-SeMAGEM-DS-2017 [DON][RETYS-2092].
- **BR-7** Instrumento según volumen: **≥1,000 plantas o Ayuntamientos → Contrato de Donación + informe final; <1,000 → Carta Compromiso** [RETYS-2092]. ⚠️ MP06 (2006) usaba el umbral 2,000 con "Convenio de Reforestación" → confirmar en entrevista (A6).
- **BR-8** Modalidad 3.79 Bis (acta de nacimiento ≤1 año o defunción, actas del EdoMéx ≥12-dic-2025): exenta de solicitud y de acreditar propiedad; solo acta + ID + carta compromiso [RETYS-2092].
- **BR-9** Donación: requisitos adicionales en **≤5 días hábiles** tras la notificación, o el expediente se da por concluido; **plazo de resolución 9 meses, ficta negativa**; exención de acreditar propiedad en **<250 plantas** [RETYS-2092][SOL-DON].
- **BR-10** Ventas: tiempo de respuesta **15 minutos**; requisito único = comprobante de pago; el documento de resultado es el formato de salida (semilla) o el vale (planta) [RETYS-1162/1068].
- **BR-11** Conos: se venden ([VEN]) pero **no existe cédula RETYS ni formato de salida documentado** → regla por definir (vacío A8 del mapa).

## 6. Procedimiento narrado (los IDs de paso son el ancla de trazabilidad)

**Modalidad A — Venta**

*Semilla* [RETYS-1162]:
- **A0** *(inferido)* R1 consulta catálogo/precios [CAT-S][TAR] y solicita disponibilidad a R3. La verificación contra inventario real no está en la metodología oficial → depende de G7 (vacío A5).
- **A1** R8 **elabora el FUP** con el importe. *(RETYS m.1)*
- **A2** R1 **paga en R9** (banco/establecimiento) y obtiene comprobante. *(RETYS m.1)*
- **A3** R1 entrega el comprobante a R8, que **sella el FUP "Pagado"**. *(RETYS m.2)*
- **A4** R3 (DPP) **indica el sitio de recogida**. *(RETYS m.2)*
- **A5** R4 **entrega la semilla** contra FUP "Pagado" y emite el **"Formato de salida de Semilla del Banco de Germoplasma"** foliado con datos técnicos del lote (lote, fecha de colecta, kg, semillas/kg, % llenas, % germinación, fecha límite de siembra). *(RETYS m.3; campos [MP06 pp. 41–42])*
- **A6** *(inferido)* R4 registra la salida en bitácora y descuenta inventario. *[MP06 p. 37]*
- **A7** *(inferido)* R8 registra el ingreso (póliza + SPEI/contra-recibo). *[CONT25 p. 19]* ⚠️ sin procedimiento de ingreso por venta → vacío A7 del mapa.
- **A8** *(inferido)* R11 integra y archiva el expediente de la operación (solicitud + FUP sellado + comprobante + formato de salida). *[ARC]* ⚠️ el expediente no tiene número propio (ver glosario "Folio") → V-03.

*Conos*: réplica A1–A4; **A-C5** R5 entrega en el Área de Beneficio — **sin formato oficial de salida** (BR-11, vacío A8).

*Planta* [RETYS-1068]:
- **A-P0** *(inferido)* Consulta de catálogo [CAT-P].
- **A-P1** R8 elabora FUP → **A-P2** R1 paga en R9 → **A-P3** R8 sella "Pagado". *(RETYS m.1–2)*
- **A-P4** R3 (DPP) **genera el "Vale de salida de planta forestal"**. *(RETYS m.2; diseño del vale [MP06 pp. 26–27])*
- **A-P5** R6 **entrega en el vivero** contra vale + FUP "Pagado". *(RETYS m.3)*
- **A-P6** *(inferido)* R6 registra salida, descuenta inventario y elabora informe para la DRF. *[MP06 p. 14]* → y A7/A8 contable/archivístico.

**Modalidad B — Donación de planta** [RETYS-2092] (9 pasos oficiales):
- **B1** R1 consulta en el sitio requisitos y metodología.
- **B2** R1 entrega la **"Solicitud de Planta"** [SOL-DON] (o el Programa Municipal de Restauración Forestal, si es Ayuntamiento) en DRF, Dirección General o correo `probosque.dg@edomex.gob.mx`.
- **B3** R3/R7 **contacta** al solicitante e indica los requisitos aplicables según su perfil (17 posibles; ej.: identificación, comprobante de domicilio, CURP, acreditación del predio —exenta <250 plantas—, PHINA/ADDATE para núcleos agrarios, permiso de terreno ajeno, constancia PFC para navideñas).
- **B4** R1 entrega los requisitos en **≤5 días hábiles** (BR-9); si no, expediente concluido.
- **B5** R7 notifica la **disponibilidad** (por cualquier medio); si no hay planta: respuesta negativa + **asesoría técnica para restauración** (resultado oficial de la cédula).
- **B6** R1 recoge el **vale de planta** en la DRF y firma **Contrato de Donación** (≥1,000 o Ayuntamiento) o **Carta Compromiso** (<1,000) (BR-7).
- **B7** R1 recoge la planta en el vivero; **B7b** *(inferido)* R6 entrega contra vale, descuenta inventario e informa salida [MP06 p. 14].
- **B8** R1 **establece la planta** conforme al contrato/carta.
- **B9** R1 rinde **informe final de actividades** — solo con Contrato de Donación (BR-7). → expediente a R11 (**B10** inferido).

**Modalidad B·79 — Donación especial (art. 3.79 Bis)** [RETYS-2092]:
- **B·79.1** R1 entrega **acta** (nacimiento de hija/hijo o defunción de ascendiente; del EdoMéx, ≥12-dic-2025, ≤1 año de registro) + identificación en la DRF o en la SRyPP.
- **B·79.2** Firma **Carta Compromiso** y recoge el vale.
- **B·79.3** Recoge la planta en el vivero (R6).
- **B·79.4** Establece la planta conforme a la carta.

## 7. Diagramas de actividad (SVG con carriles por rol)

> Cada nodo lleva su **ID de paso** (G9·A#, G9·B#); las **claves de fuente** van en §2/§5 y §8, no en el gráfico. Los diagramas son **SVG a mano** (columnas fijas por rol, flujo estrictamente descendente, flechas que aterrizan en el centro del borde del nodo siguiente; sin bucles en este proceso). El fuente es el script `../Diagramas/G09/gen-diagramas.mjs`: `node gen-diagramas.mjs <dir-de-salida>` regenera los tres `.svg`; para rasterizar una vista de prueba: `msedge --headless=new --disable-gpu --window-size=W,H --screenshot=out.png file:///<ruta>.svg`. Las versiones PlantUML/PNG con la lógica vieja quedaron en `../Diagramas/G09/descartados/`.

### G9·A — Venta

![G9·A — Venta](../Diagramas/G09/G9-A-venta.svg)

### G9·B — Donación

![G9·B — Donación](../Diagramas/G09/G9-B-donacion.svg)

### G9·B·79 — Donación especial (art. 3.79 Bis)

> Carril corto alternativo a B2–B9 (véase §6): acta + identificación → Carta Compromiso y vale → vivero → establecer.

![G9·B·79 — Donación especial](../Diagramas/G09/G9-B79-donacion-especial.svg)

## 8. Tabla de necesidades (con ancla al paso)

Prioridad: **A** = obligatoria (la exige ley/norma o el proceso se detiene) · **M** = media · **B** = deseable.

> **Regla de la columna Origen:** solo **archivos reales del repo** (`Docs/Comun/`, claves de §2) con ancla específica (`pdf p. X` = página del archivo PDF; `m.N` = paso N de la metodología RETYS; `§` = sección de html/transcripción). Una necesidad **derivada** de otras no tiene origen documental: se anota ahí mismo con ⚠️. Cuando la necesidad choca con algo ausente en las fuentes, la celda lo **referencia** con su ID de la tabla de vacíos de §10 (`→ V-##`), donde cada vacío está explicado con evidencia y forma de cerrarlo. Re-auditoría de todas las citas: 2026-09-17.

| ID | Rol | Necesidad | Prior. | Paso | Origen (archivo + ancla) |
|---|---|---|---|---|---|
| N-01 | R1 | Conocer especies, precios y disponibilidad (catálogo público) | A | A0 | [TAR pdf pp. 1–2] (topes legales por especie: semilla y cono por kg, planta por tamaño); [CAT-S pdf p. 1]; [CAT-P pdf pp. 1–3]; obligación de publicar [MGO pdf p. 26 SRyPP f.13]. ⚠️ "disponibilidad" no tiene fuente: depende del inventario G7 → V-03 |
| N-02 | R1 | Pagar mediante FUP en centro autorizado y obtener comprobante válido | A | A1–A3 | [RETYS-1162 §Venta de Semilla: tabla Costo/Requisito + m.1–2]; [RETYS-1068 §Venta de Planta m.1–2]; [VEN §pago: "centro autorizado de pago (banco o establecimiento mercantil)… FUP"]. ⚠️ "nunca efectivo en oficina" es inferencia del medio de pago (no está textual) |
| N-03 | R1 | Recibir el producto en punto y horario definidos, con constancia de entrega | A | A5 / A-C5 / A-P5 | [RETYS-1162 m.3] (entrega en el Banco); [RETYS-1068 m.3] (entrega en el vivero); [VEN §horarios] (venta 9–15; entrega vivero 8–15; conos en Área de Beneficio). ⚠️ horario en contradicción 9–15 vs 9–17 → V-05; conos sin registro de entrega → V-02 |
| N-04 | R1 | Solicitar donación (también por correo) con formato oficial y recibir respuesta | A | B2–B3 | [RETYS-2092 §Donación m.2–3 + tabla Plazo de resolución]; [SOL-DON pdf 4 pp. "Solicitud de Planta" v.1]; [MGO pdf p. 26 SRyPP f.10]; [DON §"Solicitud de Restauración Forestal Social" → cédula 2092] |
| N-05 | R2 | Adquirir semilla/conos/planta vía oficio/acuerdo canalizado por UVI | M | A0 (R2) | [MGO pdf p. 21 UVI f.6] "apoyar a las entidades interesadas… adquisición de semillas, conos forestales, planta…" (verificado 2026-09-17); canalización [MGO pdf p. 20 UVI f.3] |
| N-06 | R3 | Consultar existencia real del Banco/viveros al cotizar y al autorizar | A | A0, B5 | [RETYS-2092 §Donación m.5 + resultado "según disponibilidad"]; [VEN §venta de planta: "se informan… existencia de planta en vivero"]; base interna [MP06 pdf p. 37] (bitácora). ⚠️ no existe registro de existencias en tiempo real → V-03 (oportunidad central del SGD) |
| N-07 | R3·R8 | Saber a qué solicitud corresponde cada FUP que se elabora y sella (ligar pago ↔ operación) | A | A1, A-P1 | [RETYS-1162/1068 m.1–2] (el único requisito del trámite es el comprobante de pago — el pago debe poder vincularse a la operación); [SOL-DON] la solicitud **no tiene número propio** (solo "Fecha"), hoy solo cabe vincularla por nombre y fecha. ⚠️ → V-01 y V-03 |
| N-08 | R4·R5·R6 | Registrar entradas/salidas por lote (especie, lote, peso, destino, fecha) con firmas | A | A5–A6, A-P6 | [MP06 pdf pp. 41–42] (Formato de Salida de Semilla: 22 campos numerados, 4 firmas — re-verificado 2026-09-17); [MP06 pdf p. 37] actividad F ("registro y firma en bitácora"); [MGO pdf p. 26 SRyPP f.12]. Conos: sin formato → V-02 |
| N-09 | R7 | Reportar avance de venta y capitalización a la Dirección General | M | tras A7 | [MGO pdf p. 25 DRFF f.1] "presentar… a la DG los avances y resultados de… conservación de germoplasma, producción de planta…" (verificado 2026-09-17) |
| N-10 | R8 | Registrar ingresos y capitalizar conforme a manual contable | A | A7 | [MGO pdf p. 26 SRyPP f.12] (venta y capitalización); [CONT25 pdf p. 19] (póliza de ingresos + SPEI/contra-recibo — pero en el procedimiento de **transferencias**, no de ventas). ⚠️ → V-01 |
| N-11 | R10 | Publicar y actualizar catálogo, tarifas y ficha del trámite en el portal | A | A0, B1 | [MGO pdf p. 26 SRyPP f.13 + pdf p. 21 UCSyTI f.2/f.4] (verificado 2026-09-17); [TRAM §enlaces a cédulas 1162/1068/2092]; objetos publicados: [CAT-S][CAT-P][TAR] |
| N-12 | R6·R7 | Generar y honrar el vale (planta) con datos completos (especie, cantidad, vivero, punto, folio, vigencia) | A | A-P4, B6 | [RETYS-1068 m.2] (DPP genera el vale); [RETYS-2092 m.6] (vale en la DRF + contrato/carta); [MP06 pdf pp. 26–27] (16 campos del vale, folio y fecha de vencimiento); [DON §notificación de vale: "especie, cantidad asignada, a qué vivero corresponde y dónde recoger"] |
| N-13 | R11 | Definir clasificación, tiempos de retención y serie del expediente de distribución | M | A8, B10 | [ARC: `INVENTARIO_Gral_Archivo_2025.pdf` + `CUADRO_Gral_Clasif_Archivística_2024.pdf`] — verificado: no existe serie de semilla/germoplasma → V-11 |
| N-14 | R12 | Mantener vigentes las fichas RETYS de venta y donación (1162/1068/2092) | M | transversal | [RETYS-1162 §fundamento jurídico] (citan MGO 2023, no 2025 — desactualización verificada); [TRAM]. ⚠️ [MR] **no** sustenta la obligación (es oficio CEMER 2019 del comité interno; verificado 2026-09-17) — falta la base normativa → V-08 |
| N-15 | R1 | Tratamiento legítimo de datos personales (INE, CURP, domicilio, actas) en solicitud y requisitos | A | B2–B4 | [RETYS-2092 §requisitos] (identificación, CURP, comprobante de domicilio, actas); obligación [MGO pdf p. 26 SRyPP f.15] (Ley de Protección de Datos Personales en Posesión de Sujetos Obligados EdoMéx — verificado 2026-09-17). ⚠️ [SOL-DON] no incluye cláusula de privacidad y [AVISO-P] no tiene aviso que cubra venta/donación → V-07 |
| N-16 | R13 | Pista de auditoría: toda salida ligada al folio de su formato + FUP/vale + firmas | M | A5–A8, B6–B10 | [MP06 pdf pp. 41–42 y pp. 26–27] (folio + 3–4 firmas en cada formato); [MGO pdf pp. 17–20 OIC]. ⚠️ [RIG] dice "trazabilidad exigible" pero el término no aparece en el reglamento (búsqueda verificada 2026-09-17: 0 resultados) — cita retirada |
| N-17 | R7 (calidad) | Control de información documentada en el alcance ISO (venta no declarada; certificado vencido 2025-10-10) | M | transversal | [ISO: `CERT_ISO9001_NYCE_2022.pdf`] (escaneado; alcance verificado visualmente 2026-09-14: producción de planta certificada, venta NO declarada; vencimiento 2025-10-10 → V-10) |
| N-18 | R11 | Localizar y recuperar completo el expediente de una operación cuando lo piden (auditoría OIC, solicitud de acceso a la información) | A | A8, B10 | [SOL-DON instructivo, verificado 2026-09-21: el formato tiene "destino final en el expediente integrado y resguardado en el archivo" — el expediente existe como fin, pero ningún documento le da número: la solicitud no se numera, y el folio del vale numera solo al vale [MP06 pdf p. 27]]. ⚠️ → V-03 |
| **N-19** | R5 | **Registro de salida de conos** (hoy inexistente: se venden sin formato ni cédula) | A | A-C5 | [VEN §"la venta de semilla y conos… conos en el área de Beneficio de Semilla"]; [TAR pdf pp. 1–2] (los conos tienen precio máximo legal: $14–34/kg); [CAT-S pdf p. 1] (5 especies de cono en catálogo 2026). ⚠️ no existe cédula RETYS ni formato → V-02 |
| **N-20** | R6→R4 | **Retorno de semilla no sembrada antes de la fecha límite** y política de bajas/mermas | A | (G10 del mapa, fuera de G9) | [MP06 pdf p. 41] nota al pie del formato: "si no se realizara su siembra se deberá regresar al banco de germoplasma antes de la fecha límite" (obligación documentada; proceso inexistente → V-06) |
| **N-21** | R7·R11 | **Plantillas oficiales** del vale de salida de planta (uso externo), Contrato de Donación y Carta Compromiso | A | A-P4, B6 | [RETYS-2092 m.6] (nombra Contrato ≥1,000/Ayto. y Carta <1,000); [RETYS-1162/1068 §"No hay formato(s) descargables"]. ⚠️ ninguna plantilla existe en el repo → V-04; el diseño 2006 del vale [MP06 pdf pp. 26–27] es de uso interno |

## 9. Registros que el SGD debe gestionar (catálogo documental)

| Registro | Genera (paso) | Contiene (campos verificados en la fuente) | Retención |
|---|---|---|---|
| Catálogo público semilla/conos [CAT-S] / planta [CAT-P] | R10 (A0) | especie común/científica, producto, precio (semilla/cono); planta por tipo de envase | anual (por ejercicio) |
| FUP + comprobante de pago | R8 (A1/A-P1) → R9 (A2) | importe, solicitante; sello "Pagado" de Contabilidad | fiscal (CFF/estatal) |
| **Formato de salida de Semilla del Banco de Germoplasma** [MP06 pp. 41–42] | R4 (A5) | folio, fecha de salida, solicitante, vivero, región, uso (producción/reposición/otro), especie (científica/común), **lote, fecha de colecta, presupuesto, peso kg, semillas/kg, % llenas, % germinación, planta a obtener, fecha límite de siembra**; firmas: solicitante, Vo.Bo. Jefe DPP, Entregó Jefe Programa Colecta, Recibió | clave para trazabilidad |
| **Vale de salida de planta forestal** [RETYS-1068; diseño MP06 pp. 26–27] | R3 (A-P4) / R7 (B6) | folio, fecha de expedición y **de vencimiento**, vivero, beneficiario, domicilio, predio, tipo de plantación, densidad, plantas/especie/talla/envase; Autorizó (2006: Dir. DRFF), Entregó (jefe de vivero), Recibió | a definir (GS6) |
| **Solicitud de Planta 2026** [SOL-DON] | R1 (B2) | fecha, tipo de solicitante (particular/núcleo agrario/institución/otro), datos personales y de contacto, predio (nombre, municipio, localidad, **tenencia**, PFC: año/código/comercialización), establecimiento (urbana/rural, tipo de área verde, superficie ha), especies y cantidades, aceptación del plazo de 5 días y del compromiso de cuidado; validó DRFF / elaboró SRyPP, v.1 | a definir |
| Carta Compromiso (<1,000) / **Contrato de Donación** (≥1,000) + **informe final** | R7 (B6/B9) | plantilla pendiente (A6); el contrato es figura nueva 2026 ausente en MP06 | a definir |
| Bitácora de entradas/salidas del Banco | R4 (A6) | lote, especie, procedencia, destino | hoy sin medio conocido (A2) |
| Inventario de semillas | R4→R7 (base de A0/B5) | existencias por especie y lote | medio/frecuencia actuales: vacío A5 |

## 10. Vacíos y siguientes pasos

### 10.1 Tabla de vacíos (referenciables desde §8 como `→ V-##`; el ID del mapa entre paréntesis es la fila de su lista de búsqueda)

| ID | Vacío (qué falta en el mundo real, no en el documento) | Evidencia de que es vacío (archivo + ancla) | Cómo se cierra | Afecta (necesidades · pasos) |
|---|---|---|---|---|
| **V-01** | Nadie documenta el **ingreso contable por venta**: ni quién elabora el FUP y lo liga a la solicitud que le dio origen, ni cómo se asienta el ingreso, ni con qué cuenta | [CONT25 pdf p. 2 índice: solo 3 procedimientos —presupuesto, transferencias, pagos—; pdf p. 19: la póliza de ingresos que existe es del procedimiento de **transferencias**]; las cédulas [RETYS-1162/1068] tampoco lo regulan | Entrevista a Contabilidad (área Subdir. Recursos Financieros — Arturo Valdés Bernal) + SAIMEX → **mapa A7** | N-07, N-10 · A1, A7 |
| **V-02** | La **salida de conos** se vende con precio legal pero sin formato, cédula ni registro | [VEN §"venta de semilla y conos… conos en el Área de Beneficio"]; [TAR pdf p. 2] y [TAR26 pdf pp. 2–3] conos $14–34/kg; en [MP06] no hay formato de conos; en RETYS no existe cédula | Entrevista al Área de Beneficio (titular ⚠️ → V-09) → **mapa A8** | N-19 · A-C5 |
| **V-03** | **Bitácoras e inventario reales** (medio, frecuencia, si los formatos 2006 siguen en uso) y **un identificador de la operación**: las fuentes solo numeran cada formato sobre sí mismo; la solicitud no tiene número y el expediente no tiene identificador | [MP06 pdf p. 37] solo diseña la bitácora (2006); [MP06 pdf p. 42] define el folio de salida en círculo ("número de folio respectivo"); [SOL-DON] solicitud sin campo de número; [CAT21 pdf p. 1 nota "sujeta a existencia"]; nada posterior a 2006 en el repo | Visita al Banco + SAIMEX + entrevista SRyPP → **mapa A2/A5**. El **folio único de expediente es propuesta de diseño del SGD** (resolvería N-07 y N-18), no obligación existente | N-01, N-06, N-07, N-18 · A0, A6, B5 |
| **V-04** | **Plantillas 2026 inexistentes**: Contrato de Donación, Carta Compromiso y vale de planta de uso externo no existen como documento (solo se los nombra) | [RETYS-2092 m.6] los menciona sin enlace; [RETYS-1162/1068 §"No hay formato(s) descargables"]; [MP06 pdf pp. 26–27] es diseño de uso interno | Entrevista SRyPP + SAIMEX → **mapa A6** | N-21 · A-P4, B6 |
| **V-05** | **Contradicciones entre fuentes sin resolver** (el documento las marca pero no las decide): horario 9–15 [VEN] vs 9–17 [RETYS] y entrega en vivero 8–15 [VEN]; umbral 1,000 [RETYS] vs 2,000 [MP06]; nombre "Solicitud de Restauración Forestal Social" [DON] vs "Solicitud de Planta" [SOL-DON]; cédulas citan MGO 2023 | cada par citado en §2/§5; ~~$9 vs $11~~ ya cerrado con [TAR26] (quedan 2022/2023/2025 sin localizar → mapa B6) | Entrevista SRyPP/DRFF; capturar MGO 2023 (**mapa B1**) y Gaceta 2025 (**mapa B6**) | N-03, N-04, N-14 · BR-1/4/7 |
| **V-06** | El **retorno de semilla no sembrada** (obligación del vale) no tiene proceso: nadie registra retornos, ni re-folía, ni re-testea; sin él el inventario miente | solo la nota al pie [MP06 pdf p. 41]; cero evidencia de ejecución | Entrevista SRyPP + banco análogo → **mapa A4** (proceso G10 del mapa) | N-20 · fuera de A/B |
| **V-07** | **Ningún aviso de privacidad cubre la venta/donación** pese a recabar INE, CURP, domicilio y actas | [AVISO-P] lista avisos por unidad/programa, ninguno de distribución (verificado 2026-09-17); [SOL-DON] 4 pp. sin cláusula (búsqueda "datos personales/protección": 0) | Entrevista/SAIMEX → **mapa A10** | N-15 · B2–B4 |
| **V-08** | Falta la **base normativa de la obligación de mantener vigentes las fichas RETYS** (hoy solo se observa la desactualización) | [MR: LINEAMIENTOS] es oficio CEMER 2019 del comité interno (verificado renderizando); FORMATO_Ficha es un formato en blanco escaneado | Capturar Código Administrativo / Ley de Simplificación Administrativa → **mapa B5** | N-14 · transversal |
| **V-09** | **Roles operativos sin titular**: ventanilla DPP, custodio del Banco, responsable de Beneficio, jefes de vivero, jefe de Contabilidad, enlaces ADEM/CEMER — sin usuario concreto no hay necesidad validable | [DIR] leído íntegro 2026-09-17: llega solo hasta Jefaturas de Departamento/Unidad | Pedir **directorio interno/estructural completo** → **mapa A12** — ANTES de convertir N-01..N-21 en RF/RN | todas · todos los pasos |
| **V-10** | **ISO 9001 vencida** (2025-10-10) y con la venta fuera del alcance declarado | [ISO: CERT_ISO9001_NYCE_2022.pdf] alcance verificado visualmente 2026-09-14 (escaneado) | Estado de recertificación con QUALI/DRFF → **mapa A9** | N-17 · transversal |
| **V-11** | **No existe serie documental del expediente de distribución** (clasificación, retenciones, tiempos) | [ARC: INVENTARIO_Gral_Archivo_2025 + CUADRO_Gral_Clasif_2024] verificado: ninguna serie de semilla/germoplasma | **Entrega del SGD** (define serie y retenciones) → **mapa GS6** | N-13 · A8, B10 |

### 10.2 Cerrados

**v2 (2026-09-14):** ~~alcance ISO~~ (verificado → V-10); ~~formato de solicitud de donación~~ (capturado [SOL-DON]); ~~metodologías de los 3 trámites~~ (transcritas [RETYS]); ~~[CONT] ilegible~~ (jul301b = versión 2025 con texto).
**2026-09-17:** ~~contradicción planta $9 vs $11~~ (topes por ejercicio: [TAR26] = catálogo 2026; cierra solo ese tramo de V-05); ~~orígenes de §8 sin ancla~~ (re-auditados; citas insustentadas [RIG]/[MR] corregidas → V-08).

### 10.3 Tareas siguientes (nuestras, no vacíos)

1. Cerrar **V-09** (directorio interno) en la primera diligencia: sin él, las entrevistas de validación de N-01..N-21 no tienen destinatario.
2. Entrevista con SRyPP (`probosque.dpp@edomex.gob.mx`, Iván Delfino Gómez Patiño) llevando como insumo la tabla V-01..V-11.
3. Convertir N-01..N-21 en requisitos de software (RF/RN) — después del paso 1.

## 11. Nota de mantenimiento

Este archivo es el análisis del **proceso G9** del mapa 01 y vive en `Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md` (renombrado el 2026-09-16 desde `P09_DISTRIBUCION_GERMOPLASMA.md`, que a su vez fue `02_...`; el historial de git conserva los nombres anteriores). Las fuentes están en `Docs/Comun/`; el contenido web dinámico que se cita (RETYS) vive transcrito y fechado en `Docs/Comun/Retys EdoMex/`. Los diagramas de §7 son SVG generados por `Docs/Joni/Diagramas/G09/gen-diagramas.mjs` (editar el script y regenerar; no editar los `.svg` a mano). Evitar copias paralelas: editar siempre aquí.
