# SGD PROBOSQUE — Catálogo de procesos a documentar

Catálogo principal de los procesos que **sí o sí** debemos documentar para el Sistema de Gestión Documental (SGD), organizados por los 3 dominios del proyecto. Cada proceso indica **de qué archivos viene** (fuentes en `Docs/Comun/`) y su estado.

> **Cómo usar este catálogo para el reparto:** los procesos son **independientes entre sí** (salvo cruces señalados). Cada integrante —inclusive los nuevos— toma el(los) proceso(s) que todavía no tenga "Asignado a" escribiendo su **nombre en la columna correspondiente** y el ID del proceso en la tabla de selección de abajo. Cuando hay suficientes personas, un mismo ciclo (p. ej. los PA-##) se puede dividir por programa y hasta por subconjunto de pasos.
>
> **Convención de etiquetas:** `MF-##` (masa forestal), `PA-##` (programas de apoyo), `G##`/`GS##` (germoplasma: fundamental / soporte), `T-##` (transversal). El paso de un proceso se cita como `P##·X#` (proceso · paso, p. ej. `P9·A5`) — ver nota de mapeo en el Dominio 3. El formato de análisis sigue la plantilla de `Docs/Joni/Germoplasma/P09_DISTRIBUCION_GERMOPLASMA.md` (secciones 1–11, trazabilidad `[clave] → BR-# → paso → N-##`).
>
> **Estado:** 🟢 documentado con fuente oficial · 🟡 conocido parcialmente / en diseño · 🔴 sin información (solo inferido o vacío).
>
> Creado: 2026-09-16. Actualizado: 2026-09-16 (versión catálogo para reparto ampliado).

**Resumen del inventario: 40 procesos** — 12 de masa forestal · 6 de programas de apoyo · 18 de germoplasma (10 fundamentales + 8 soporte) · 4 transversales. Ya documentado: 3 (🟢). Restan **37** por documentar.

---

## Dominio 1 — Control de masa forestal (imágenes de satélite)

### 1.1 Ciclo de verificación de cobertura (vigilancia de masa forestal)

Lista base propuesta por Karina (imagen compartida en el equipo, 2026-09). **Verificación realizada el 2026-09-16: la secuencia de 8 pasos NO aparece textualmente en ninguna fuente del repo.** Los PDFs que se sospechaban (`2023-CONAC-*` y `2023-Anexos-*`) resultaron ser la Evaluación Específica de Desempeño del Pp. "Desarrollo Forestal" 2022 (formato de difusión + anexos de la MIR) — no contienen el ciclo de vigilancia. Sin embargo, **el paralelo más cercano verificado es la Mecánica Operativa del PSAH** (`RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` pp. 8, 19–22): solicitud → levantamiento en campo de la poligonal y datos técnicos → dictámenes técnico y jurídico con análisis cartográfico/SIG ("Dictamen Técnico" usa el SIG de PROBOSQUE y verificación en campo) → aprobación de factibles por el Comité Técnico del FIPASAHEM → contratos y ministraciones (70%/30%) → verificación y supervisión (Comisión de Verificación Técnica). La columna "Sustento verificado" indica el paralelo más directo de cada paso.

| # | Proceso | Estado | Sustento verificado en fuentes | Asignado a |
|---|---|---|---|---|
| MF-01 | Delimitación de polígono y tenencia | 🟡 paralelo verificado | RO PSAH p. 19 (lev. de poligonal; Carpeta Básica/tenencia, Glosario p. 4); cruzar con `Docs/Comun/Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx` y `Docs/Comun/Sitio web/aprovechamiento_forestal.html` | — |
| MF-02 | Levantamiento de cobertura (SIG) | 🟡 paralelo verificado | RO PSAH Glosario "Dictamen Técnico" (p. 4) y "Sistema de Información Geográfica" (p. 6); `Docs/Comun/Sitio web/inventario_forestal.html` (Inventario Estatal Forestal y de Suelos 2022) | — |
| MF-03 | Cálculo de índices de cobertura | 🟡 paralelo verificado | RO PSAH pp. 8-9: criterios de dictaminación por cobertura arbórea (templados ≥50%, BT caducifolio ≥40%, semiaridas ≥40% => puntajes) | — |
| MF-04 | Dictamen del Comité de Operación | 🟡 nombre no textual | El órgano real verificado es el **Comité Técnico del FIPASAHEM** (RO PSAH pp. 4, 19: aprueba listado de factibles/no factibles); renombrar a "Aprobación/dictamen por el Comité Técnico" | — |
| MF-05 | Asignación de estímulos económicos | 🟡 paralelo verificado | RO PSAH pp. 7-8, 19: asignación de apoyos donde alcance el presupuesto; ministraciones 70% (post-contrato) y 30% (tras verificar informe) | — |
| MF-06 | Ejecución y actualización en campo | 🟡 paralelo verificado | RO PSAH p. 7 (informe final de actividades; minuta de verificación en campo firmada) | — |
| MF-07 | Inspección, vigilancia y fiscalización | 🟡 paralelo verificado | RO PSAH Glosario "Comisión de Verificación Técnica" (p. 4: vigilancia y supervisión de predios y del uso de recursos); `Docs/Comun/Sitio web/supervision-vigilancia-forestal.html`; `Docs/Comun/Masa forestal/Reg_LGDFS.pdf` | — |
| MF-08 | Reporte de resultados e indicadores | 🟡 paralelo verificado | RO PSAH p. 20 (la Comisión de Verificación reporta al Comité Técnico); `2023-CONAC-*`/`2023-Anexos-*` (indicadores de la MIR del Pp. Desarrollo Forestal) | — |

Los 8 pasos funcionan como un ciclo que alimenta al PSAH y demás programas; documentarlos como procedimiento con esa base (`RO_2026_PSAH` §Mecánica operativa + anexos técnicos de calidad). Opcionalmente, con equipo grande, los MF-01..MF-08 pueden repartirse en dos bloques: técnico-catastrales (MF-01/02/03) y administrativo-fiscalizadores (MF-04..MF-08).

### 1.2 Otros procesos del dominio (candidatos con fuentes en el repo)

| # | Proceso | Estado | Fuente | Asignado a |
|---|---|---|---|---|
| MF-09 | Inventario Estatal Forestal y de Suelos | 🟡 | `Docs/Comun/Sitio web/inventario_forestal.html` (2022, cartografía, conglomerados y parcelas) | — |
| MF-10 | Sanidad forestal (emergencias fitosanitarias) | 🟡 | `Docs/Comun/Masa forestal/NOTATEC2_EmergenciaFitosanitaria.pdf`; `Docs/Comun/Sitio web/sanidad_forestal.html` | — |
| MF-11 | Incendios forestales (prevención y combate) | 🟡 | `Docs/Comun/Sitio web/incendios_forestales.html` | — |
| MF-12 | Aprovechamientos autorizados (DEMIF/concesiones) | 🟡 | `Docs/Comun/Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx`; `Docs/Comun/Masa forestal/PROBOSQUE-concesiones-2023.pdf` (registros de autorización de Programas de Manejo Forestal) | — |

> **Trampa vigente:** renderizar como imagen los PDFs de anexos técnicos del Sistema de Gestión de Calidad si quedaran escaneados sin capa de texto; una búsqueda con 0 resultados NO descarta el dato.

---

## Dominio 2 — Los 6 programas de apoyo (Reglas de Operación 2026)

Los 6 tipos de apoyo (convocatoria 2026, §3.2) y su proceso de operación. Cada programa es un proceso a documentar con el ciclo completo: **convocatoria → registro del solicitante → proyecto técnico → evaluación/dictamen → asignación → ejecución → fiscalización → pago**.

| # | Programa | RO 2026 (fuente prioritaria) | Formatos / complementos | Asignado a |
|---|---|---|---|---|
| PA-01 | Pago por Servicios Ambientales Hidrológicos (PSAHEM) | `Docs/Comun/Programas de apoyo/RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` | `FORMATO_FO-PB-501A_SolicitudUnica_2026.docx`, `FORMATO_FO-PB-502_RegInfo_Solicitante_Beneficiario_2026.docx`, `CONVOCATORIA_2026_Programas_Apoyo.pdf` | — |
| PA-02 | Restauración Hidrológico-Forestal / Reforestando Edoméx | `Docs/Comun/Programas de apoyo/RO_2026_Restauración_Hidrológico-Forestal.pdf` | Formatos FO-PB íbid.; `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf` | — |
| PA-03 | Capturando Carbono (EdoMéx Procarbono) | `Docs/Comun/Programas de apoyo/RO_2026_CapturandoCarbono.pdf` | Formatos FO-PB íbid. | — |
| PA-04 | Plantaciones Sustentables (Forestales Comerciales) | `Docs/Comun/Programas de apoyo/RO_2026_PlantacionesSustentables.pdf` | Formatos FO-PB íbid. | — |
| PA-05 | Manejo Forestal Sustentable | `Docs/Comun/Programas de apoyo/RO_2026_ManejoForestalSustentable.pdf` | Formatos FO-PB íbid. | — |
| PA-06 | Restauración Forestal Integral | `Docs/Comun/Programas de apoyo/RO_2026_*.pdf` (el que aplique) + `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf` | `FORMATO_FO-PB-501B_SolicitudUnica_2026.docx` | — |

**Fuentes de respaldo transversal** (todos los PA-##):

- `Docs/Comun/Programas de apoyo/CONVOCATORIA_2026_Programas_Apoyo.pdf` y `CONVOCATORIA_Programas_Apoyo_2026_ene271c.pdf` (publicación y convocatoria)
- `Docs/Comun/Programas de apoyo/REGLAS_OPS_*` (versiones Gaceta — usar solo para contrastar, priorizar `RO_2026_*`)
- `Docs/Comun/Programas de apoyo/FICHAS_Programas_Sociales_2023.xlsx` (fichas de programas sociales)
- `Docs/Comun/Programas de apoyo/feb071.pdf` (convocatoria 2025 — antecedente)
- Cruce con Germoplasma: entrega de planta por vale dentro de programas (ver GS8 en Dominio 3)

> **Nota:** según el equipo se documentan **solo los 6 programas de la imagen** (los que incluyen Restauración Forestal Integral y excluyen Guardabosques). El `Programa Estatal Guardabosques` (con `RO_2026_ProgramaEstatalGuardabosques.pdf`, convocatoria y formatos propios en `Docs/Comun/Programas de apoyo/`) y los `Voluntarios Guardianes de los Bosques` quedan **fuera del inventario** por decisión del equipo; sus archivos quedan en `Comun/` por si el alcance cambia.

---

## Dominio 3 — Banco de germoplasma

Fuente principal: [`Docs/Joni/Germoplasma/01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md`](Docs/Joni/Germoplasma/01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md) (mapa completo con lo que se sabe / falta / dónde conseguirlo). Análisis ya hecho: [`P09_DISTRIBUCION_GERMOPLASMA.md`](Docs/Joni/Germoplasma/P09_DISTRIBUCION_GERMOPLASMA.md).

> **Mapeo de etiquetas:** en este README los procesos usan `G##` (fundamentales) y `GS##` (soporte), por consistencia con el resto de dominios. En el mapa `01_` y en los análisis esos mismos procesos se llaman **P1..P10** y **S1..S8** — la equivalencia es directa (`G9` = `P9` = `P09_DISTRIBUCION...`). Las citas de pasos de P09 siguen siendo `P9·A#` / `P9·B#` (no renombrarlas dentro de los análisis).

### 3.1 Procesos FUNDAMENTALES (el ciclo mínimo del banco)

| # | Proceso | Estado | Fuentes principales | Asignado a |
|---|---|---|---|---|
| G1 | Programación anual de colecta | 🟡 | `Docs/Comun/Germoplasma/86_manualProcDirRestYFtoFtal.pdf` [MP06 p. 25-30]; [SEP091] en `Docs/Comun/Manual Jurídico/MANUALES_PROC_PROBOSQUE_2020_sep091_(UAZC-IndustriaComercialización-UIPPE).pdf` pp. 46-90 | — |
| G2 | Colecta en campo | 🟡 | [MP06 pp. 31-37]; `Docs/Comun/Masa forestal/Reg_LGDFS.pdf` arts. 87-88; `Docs/Comun/Sitio web/colecta_germoplasma.html` | — |
| G3 | Ingreso al Banco (bitácora) | 🟡 | [MP06]; datos de capacidad en `Docs/Comun/Germoplasma/` (catálogos 2026) | — |
| G4 | Beneficio (extracción, limpieza, tratamiento) | 🟡 | [MP06]; `Docs/Comun/Sitio web/venta_semilla_planta.html` [VEN] | — |
| G5 | Laboratorio y calidad | 🟡 | [MP06 p. 41-42]; `Docs/Joni/Germoplasma/00_INVENTARIO_Y_GUIA_GERMOPLASMA.md` [GER] | — |
| G6 | Almacenamiento | 🟡 parcial | [MP06]; visita a campo obligatoria (pendiente) | — |
| G7 | Inventario y reportes | 🟡 | [MP06] (inventario de semillas firmado) | — |
| G8 | Entrega interna a viveros | 🟡 | [MP06 pp. 33-42] (flujo formal completo con vale de salida) | — |
| G9 | Salida externa: venta y donación | 🟢 | `Docs/Joni/Germoplasma/P09_DISTRIBUCION_GERMOPLASMA.md` (=P9 en el mapa); `Docs/Comun/Retys EdoMex/CEDULAS_RETYS_PROBOSQUE_GERMOPLASMA.md` [RETYS-1162/1068/2092]; `Docs/Comun/Germoplasma/RETYS_2092_SOLICITUD_DONACION_PLANTA_2026.pdf`; `Docs/Comun/Sitio web/venta_semilla_planta.html`, `donacion-planta.html`, `donacion-1000.html` | — (ya documentado) |
| G10 | Retorno de semilla no sembrada | 🔴 | Solo la obligación: [MP06 p. 41] (nota al pie del vale) | — |

### 3.2 Procesos NO FUNDAMENTALES (soporte)

| # | Proceso | Estado | Fuentes principales | Asignado a |
|---|---|---|---|---|
| GS1 | Huertos semilleros y propagación in vitro | 🟡 | [MGO] (funciones SAPCAT) en `Docs/Comun/Manual Jurídico/dic161d.pdf` | — |
| GS2 | Producción de planta en viveros | 🟡 | [MP06 4.1]; `Docs/Comun/Sitio web/produccion_planta.html`, `viveros_forestales.html` | — |
| GS3 | Publicación de catálogo y tarifas | 🟢 | `Docs/Comun/Germoplasma/` (catálogos 2026, tarifas Gaceta 2024) | — |
| GS4 | Ingreso contable (capitalización, FUP–pagos) | 🔴 vacío | [RETYS]; `Docs/Comun/Manual Jurídico/jul301b.pdf` [CONT25] — no tiene procedimiento de ingresos por venta | — |
| GS5 | Fichas RETYS / mejora regulatoria | 🟢 | `Docs/Comun/Retys EdoMex/CEDULAS_RETYS_PROBOSQUE_GERMOPLASMA.md`; `Docs/Comun/Gestión documental y calidad/` (lineamientos de Mejora Regulatoria) | — |
| GS6 | Archivo de expedientes (serie documental de semilla) | 🔴 vacío | `Docs/Comun/Gestión documental y calidad/` (guía, inventario, cuadro de clasificación) — definirla es entrega propia del SGD | — |
| GS7 | Visitas guiadas / divulgación | 🟡 | [MGO p. 27 f.20] — irrelevante para el SGD (baja prioridad) | — |
| GS8 | Entrega de planta vía programas (vale de planta) | 🟢 | RO 2026 de Plantaciones Sustentables (p. 14) y Restauración Hidrológico-Forestal (pp. 6, 13) — **cruce con Dominio 2** | — |

---

## Procesos transversales (afectan a los 3 dominios)

| # | Proceso | Fuente | Asignado a |
|---|---|---|---|
| T-01 | Gestión documental y calidad (ISO 9001 — recertificación vencida 2025-10-10) | `Docs/Comun/Gestión documental y calidad/` (certificados ISO, guía archivística); `Docs/Comun/Sitio web/certificacion_iso9001.html` | — |
| T-02 | Marco jurídico e institucional (MGO 2025, funciones, directorio) | `Docs/Comun/Manual Jurídico/dic161d.pdf` (MGO 2025), `may281` (MGO 2012), Reglamento Interno, Directorio; `Docs/Comun/Sitio web/marco_juridico.html`, `funciones.html`, `organigrama.html`, `directorio.html` | — |
| T-03 | Finanzas y adquisiciones (presupuesto, pagos, Comité de Adquisiciones) | `Docs/Comun/Finanzas y adquisiciones/`; `Docs/Comun/Manual Jurídico/jul301b.pdf` [CONT25] | — |
| T-04 | Trámites vía RETYS (cédulas, formatos, mejora regulatoria) | `Docs/Comun/Retys EdoMex/`; `Docs/Comun/Sitio web/tramites_servicios.html`, `mejora-regulatoria.html` | — |

---

## Selección de procesos (registro del reparto)

Cada integrante anota aquí el(los) ID(s) que se lleva y el trabajo queda registrado en su carpeta personal (`Docs/<Nombre>/`). No hay dominios "cerrados" por persona: cualquiera puede tomar procesos de cualquier dominio.

| Fecha | Integrante | Procesos tomados |
|---|---|---|
| ______ | ______ | ______ |
| ______ | ______ | ______ |
| ______ | ______ | ______ |
| ______ | ______ | ______ |
| ______ | ______ | ______ |
| ______ | ______ | ______ |

> Al completar un proceso, marcar en este catálogo: cambiar el estado a 🟢 (documentado con fuente oficial) y anotar abajo el documento de análisis resultante (p. ej. `Docs/<Carpeta>/<Dominio>/PA-01_PSAHEM.md`).

---

## Priorización sugerida (orientativa, no limita el reparto)

| Dominio | Procesos críticos a documentar primero | Por qué |
|---|---|---|
| Masa forestal | MF-01, MF-02, MF-07 | Son el inicio del ciclo (delimitación), el insumo técnico (SIG/inventario) y el proceso de mayor impacto legal (fiscalización/peritajes) |
| Programas de apoyo | PA-01 como plantilla, luego replicar el formato a PA-02..PA-06 | Los 6 comparten el mismo ciclo de vida; documentar 1 a fondo acelera el resto |
| Germoplasma | G9 (hecho 🟢), luego G3, G7, G8, G10 | G9 ya está documentado; G3/G7 son la columna vertebral del inventario (sin ellos el inventario "miente") |
| Transversal | T-01, T-02 | Definen el marco de registros que el SGD debe gestionar en todos los dominios |

## Procesos ya documentados

| ID | Proceso | Documento de análisis |
|---|---|---|
| G9 🟢 | Salida externa: venta y donación de germoplasma | `Docs/Joni/Germoplasma/P09_DISTRIBUCION_GERMOPLASMA.md` (roles R1–R13, BR-1..11, pasos A#/B#, N-01..N-21) |
