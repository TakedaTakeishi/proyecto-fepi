# SGD PROBOSQUE — Catálogo de procesos a documentar

Catálogo principal de los procesos que **sí o sí** debemos documentar para el Sistema de Gestión Documental (SGD), organizados por los 3 dominios del proyecto + estadística. Cada proceso indica **de qué archivos viene** (fuentes en `Docs/Comun/`) y su estado.

> **Organización del equipo (2026-09-19):**
> - **Investigadores/documentadores:** Joni, Leonardo, Octavio, Patatuchi — son los únicos que documentan procesos.
> - **Programadores:** Alan, Karina, Xareni — ya no toman procesos; sus carpetas (`Docs/Alan/`, `Docs/Karina/`, `Docs/Xareni/`) quedan como archivo y para el trabajo de programación. Los informes que elaboraron (`Docs/Comun/Programas de apoyo/Reportes por reclamar/`) pasan a ser **fuente de E-02**.
>
> **Convención de etiquetas:** `MF-##` (masa forestal), `PA-##` (programas de apoyo), `G##`/`GS##` (germoplasma: fundamental / soporte), `T-##` (transversal), `E-##` (**estadística de cierre de temporada** — nuevos 2026-09-19, sustento verificado en el MGO 2025 y las RO). El paso de un proceso se cita como `<ID>·X#` (proceso · paso, p. ej. `G9·A5`). El formato de análisis sigue la plantilla de `Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md` (secciones 1–11, trazabilidad `[clave] → BR-# → paso → N-##`).
>
> **Estado:** 🟢 análisis completo hecho (documento con plantilla, secciones 1–11) · 🔵 fuentes verificadas en disco (apunte en `01_`/README), **sin** documento de análisis todavía · 🟡 conocido parcialmente / en diseño · 🔴 sin información (solo inferido o vacío). Un proceso solo pasa a 🟢 cuando existe su `.md` de análisis con la plantilla completa.
>
> Creado: 2026-09-16. Actualizado: **2026-09-19** — reorganización del equipo (solo 4 documentadores), nuevos procesos estadísticos **E-01..E-04 con sustento verificado en el MGO 2025** (UIPPE y SAMIF), MF-08 absorbida por los E-##, reparto por fases (Fase 1: 5–6 procesos por persona).

**Resumen del inventario: 43 procesos activos** — 11 de masa forestal (12 listados, MF-08 absorbida por E-02/E-03) · 6 de programas de apoyo · 18 de germoplasma (10 fundamentales + 8 soporte) · 4 transversales · **4 estadísticos (E-##)**. Ya documentado con análisis completo: **2** (🟢, G9 y GS3). Con fuentes verificadas pero sin análisis: 2 (🔵, GS5/GS8). **Fase 1 (meta del sprint): 21 procesos** (19 nuevos + 2 ya hechos) — los esenciales para que el SGD + estadística sea útil y justificable. Restan **22** para Fase 2.



## Reparto de procesos (registro, 2026-09-19)

Reparto hecho por Joni tras la doble verificación de fuentes. Reglas: **solo documentan los 4 investigadores**; cada quien lleva un bloque coherente (sinergias de fuentes compartidas); Fase 1 = los esenciales para un SGD + estadística útil y justificable (meta: 4 días); Fase 2 se reparte al cerrar Fase 1.

### Fase 1 — los 21 procesos esenciales (5–6 por persona, 19 nuevos + 2 hechos)

| Integrante | Procesos (nuevos por documentar) | Justificación de la sinergia |
|---|---|---|
| **Octavio** (5) | G1, G2, G3, G4, G5 | Mantiene su elección previa: el **ciclo alto del banco** (programación → colecta → ingreso → beneficio → laboratorio). Una sola fuente madre ([MP06] + LGDFS) para los 5 |
| **Leonardo** (5) | G6, G7, G8, G10, **E-01** | **Ciclo bajo del banco** (almacenamiento → inventario → entrega interna → retorno) + la estadística que lo cierra: E-01 se alimenta del inventario firmado de G7 y del informe final de colecta [MP06 pp. 35–36] |
| **Patatuchi** (5) | MF-01, MF-02, MF-03, MF-07, **E-03** | **Masa forestal**: el bloque técnico del ciclo de vigilancia (delimitación → SIG → índices) + fiscalización (mayor impacto legal) + los informes estadísticos de SAMIF que el MGO le exige por nombre (f.8/9) |
| **Joni** (6; 4 nuevos) | G9 🟢, GS3 🟢 (hechos), T-02 🟢 (hecho), PA-01 🟢 (hecho), **E-02** 🟢 (hecho), **E-04** | **Integrador/estadístico**: ya conoce el MGO y el Directorio (G9/GS3) → T-02 da los roles reales para todos; PA-01 es la plantilla de los 6 programas; E-02 y E-04 reportan a las mismas instancias (Instancia Normativa, Secretaría de Finanzas, Consejo Directivo) |

### Fase 2 — los 22 restantes (orientativo, se confirma al cerrar Fase 1)

| Integrante | Procesos | Por qué |
|---|---|---|
| **Patatuchi** (7) | MF-04, MF-05, MF-06, MF-09, MF-10, MF-11, MF-12 | Cierra el dominio de masa forestal completo |
| **Leonardo** (7) | GS1, GS2, GS4, GS5, GS6, GS7, GS8 | Cierra los soportes de germoplasma (GS8 en co-autoría con Patatuchi) |
| **Octavio** (5) | PA-02, PA-03, PA-04, PA-05, PA-06 | Replica la plantilla PA-01 a los otros 5 programas (mismos formatos FO-PB y ciclo) |
| **Joni** (3) | T-01, T-03, T-04 | Cierra los transversales |

> Al completar un proceso, marcar en este catálogo: cambiar el estado a 🟢 (análisis completo con la plantilla de 11 secciones en su `.md`; o 🔵 si solo se verificaron fuentes) y anotar abajo el documento de análisis resultante (p. ej. `Docs/<Carpeta>/<Dominio>/PA-01_PSAHEM.md`). Las carpetas de trabajo: `Docs/Joni/`, `Docs/Leonardo/`, `Docs/Octavio/`, `Docs/Patatuchi/` (crear las que falten).

---

## Por qué estos 21 son los esenciales (justificación verificada 2026-09-19)

| Dominio | Procesos de Fase 1 | Por qué son los mínimos justificables |
|---|---|---|
| Germoplasma | G1–G8, G10, E-01 (+ G9/GS3 hechos) | Es el **ciclo completo del banco**: sin bitácora (G3), inventario (G7) ni retornos (G10) el SGD "miente"; E-01 es la obligación escrita de reportar avances e inventario firmado [MP06 pp. 35–36; MGO p. 25 DRFF f.1] |
| Masa forestal | MF-01, MF-02, MF-03, MF-07, E-03 | El bloque técnico que genera los datos (delimitación→SIG→índices), la fiscalización (mayor impacto legal) y los informes que el MGO **exige por nombre** a SAMIF (f.8 informe mensual, f.9 informe anual) |
| Programas de apoyo | PA-01, E-02 | Los 6 programas comparten ciclo y formatos FO-PB: documentar 1 a fondo (PSAH) acelera los otros 5; E-02 es la obligación escrita de las RO (§16 informe anual) más las evaluaciones CONAC/MIR |
| Transversal | T-02, E-04 | T-02 da los roles reales (MGO + Directorio) que **todos** los demás análisis necesitan; E-04 es el cliente final de la estadística (UIPPE → Secretaría de Finanzas/SIED/Consejo Directivo) |

## Procesos ya documentados

| ID | Proceso | Documento de análisis |
|---|---|---|
| G9 🟢 | Salida externa: venta y donación de germoplasma | `Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md` (roles R1–R13, BR-1..11, pasos A#/B#, N-01..N-21) |
| GS3 🟢 | Publicación de catálogo y tarifas | `Docs/Joni/Germoplasma/GS3_PUBLICACION_CATALOGO_Y_TARIFAS.md` (roles R14–R17 nuevos, GS3·BR-1..7, pasos A#/B#, N-01..N-10; diagramas SVG en `Docs/Joni/Diagramas/GS3/`) |
| T-02 🟢 | Marco jurídico e institucional | `Docs/Joni/Transversal/T02_MARCO_JURIDICO_INSTITUCIONAL.md` (roles R18–R27 nuevos — Consejo Directivo, UJIGEV, Comité Interno MR, Enlace, Oficialía Mayor/CEMER; procesos A ordenamientos / B Normateca / C ciclo de mejora; N-01..N-12, V-01..V-10; fuentes capturadas en `Docs/Comun/Manual Jurídico/Normateca/`) |
| PA-01 🟢 | PSAHEM (plantilla de los 6 programas) | `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md` (roles R28–R36 nuevos — solicitante, DRF, SSA/MIF, Comité Técnico FIPASAHEM, fiduciaria, CONAFOR; ciclo A solicitud/dictamen · B contrato/pago 70-30 · C verificación/cierre; BR-1..18, N-01..N-20, V-01..V-11; capture de [RIC] y [ACU-F] en `Programas de apoyo/FIPASAHEM/`) |
| E-02 🟢 | Estadística y evaluación de temporada (programas de apoyo) | `Docs/Joni/Programas de apoyo/E-02_ESTADISTICA_EVALUACION_TEMPORADA.md` (roles R37–R40 nuevos — área responsable, Comités de Admisión y Seguimiento, evaluación estatal, Finanzas; proceso A informe anual ante instancia normativa · B ciclo PAE/evaluación externa del Pp. 03020201; N-01..N-11, V-01..V-08; 4 reglamentos de comités capturados en `Programas de apoyo/Comites/`) |
| E-04 🟢 | Estadística institucional y rendición de cuentas | `Docs/Joni/Transversal/E-04_ESTADISTICA_INSTITUCIONAL.md` (reusa R21 UIPPE = Olivares, R19 DG, R15 DAFGD, R13 OIC, R26 operador del sitio; proceso A programación/avances · B estadística básica/SIED · C rendición (Plan de Desarrollo, memoria, Cuenta Pública, CONAC); N-01..N-09, V-01..V-06; dictamen SAIR del MP-UIPPE capturado) |


---

## Dominio 1 — Control de masa forestal (imágenes de satélite)

### 1.1 Ciclo de verificación de cobertura (vigilancia de masa forestal)

Lista base propuesta por Karina (imagen compartida en el equipo, 2026-09). **Verificación realizada el 2026-09-16: la secuencia de 8 pasos NO aparece textualmente en ninguna fuente del repo.** Los PDFs que se sospechaban (`2023-CONAC-*` y `2023-Anexos-*`) resultaron ser la Evaluación Específica de Desempeño del Pp. "Desarrollo Forestal" 2022 (formato de difusión + anexos de la MIR) — no contienen el ciclo de vigilancia. Sin embargo, **el paralelo más cercano verificado es la Mecánica Operativa del PSAH** (`RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` pp. 8, 19–22): solicitud → levantamiento en campo de la poligonal y datos técnicos → dictámenes técnico y jurídico con análisis cartográfico/SIG ("Dictamen Técnico" usa el SIG de PROBOSQUE y verificación en campo) → aprobación de factibles por el Comité Técnico del FIPASAHEM → contratos y ministraciones (70%/30%) → verificación y supervisión (Comisión de Verificación Técnica). La columna "Sustento verificado" indica el paralelo más directo de cada paso.

| # | Proceso | Estado | Sustento verificado en fuentes | Asignado a |
|---|---|---|---|---|
| MF-01 | Delimitación de polígono y tenencia | 🟡 paralelo verificado | RO PSAH p. 19 (lev. de poligonal; Carpeta Básica/tenencia, Glosario p. 4); cruzar con `Docs/Comun/Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx` y `Docs/Comun/Sitio web/aprovechamiento_forestal.html` | **Octavio** |
| MF-02 | Levantamiento de cobertura (SIG) | 🟡 paralelo verificado | RO PSAH Glosario "Dictamen Técnico" (p. 4) y "Sistema de Información Geográfica" (p. 6); `Docs/Comun/Sitio web/inventario_forestal.html` (Inventario Estatal Forestal y de Suelos 2022) | **Octavio** |
| MF-03 | Cálculo de índices de cobertura | 🟡 paralelo verificado | RO PSAH pp. 8-9: criterios de dictaminación por cobertura arbórea (templados ≥50%, BT caducifolio ≥40%, semiaridas ≥40% => puntajes) | **Octavio** |
| MF-04 | Dictamen del Comité de Operación | 🟡 nombre no textual | El órgano real verificado es el **Comité Técnico del FIPASAHEM** (RO PSAH pp. 4, 19: aprueba listado de factibles/no factibles); renombrar a "Aprobación/dictamen por el Comité Técnico" | Fase 2 |
| MF-05 | Asignación de estímulos económicos | 🟡 paralelo verificado | RO PSAH pp. 7-8, 19: asignación de apoyos donde alcance el presupuesto; ministraciones 70% (post-contrato) y 30% (tras verificar informe) | Fase 2 |
| MF-06 | Ejecución y actualización en campo | 🟡 paralelo verificado | RO PSAH p. 7 (informe final de actividades; minuta de verificación en campo firmada) | Fase 2 |
| MF-07 | Inspección, vigilancia y fiscalización | 🟡 paralelo verificado | RO PSAH Glosario "Comisión de Verificación Técnica" (p. 4: vigilancia y supervisión de predios y del uso de recursos); `Docs/Comun/Sitio web/supervision-vigilancia-forestal.html`; `Docs/Comun/Masa forestal/Reg_LGDFS.pdf` | **Octavio** |
| ~~MF-08~~ | ~~Reporte de resultados e indicadores~~ | **absorbida (2026-09-19)** | Su parte de informes de vigilancia/aprovechamiento queda en **E-03** (MGO SAMIF f.8/9) y sus indicadores MIR/CONAC en **E-02/E-04**; no se documenta por separado para evitar duplicidad | — |

Los pasos MF-01..MF-07 funcionan como un ciclo que alimenta al PSAH y demás programas; documentarlos como procedimiento con esa base (`RO_2026_PSAH` §Mecánica operativa + anexos técnicos de calidad). En Fase 1 se documentan los tres técnicos (MF-01/02/03) y el de mayor impacto legal (MF-07); los administrativos (MF-04/05/06) van a Fase 2.

### 1.2 Otros procesos del dominio (candidatos con fuentes en el repo)

| # | Proceso | Estado | Fuente | Asignado a |
|---|---|---|---|---|
| MF-09 | Inventario Estatal Forestal y de Suelos | 🟡 | `Docs/Comun/Sitio web/inventario_forestal.html` (2022, cartografía, conglomerados y parcelas); MGO pdf p. 28 SAMIF f.12 (supervisa la actualización con CONAFOR) | Fase 2 |
| MF-10 | Sanidad forestal (emergencias fitosanitarias) | 🟡 | `Docs/Comun/Masa forestal/NOTATEC2_EmergenciaFitosanitaria.pdf`; `Docs/Comun/Sitio web/sanidad_forestal.html` | Fase 2 |
| MF-11 | Incendios forestales (prevención y combate) | 🟡 | `Docs/Comun/Sitio web/incendios_forestales.html` | Fase 2 |
| MF-12 | Aprovechamientos autorizados (DEMIF/concesiones) | 🟡 | `Docs/Comun/Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx`; `Docs/Comun/Masa forestal/PROBOSQUE-concesiones-2023.pdf` (registros de autorización de Programas de Manejo Forestal). **Alimenta a E-03** (los informes mensuales/anuales de SAMIF se construyen con estos registros) | Fase 2 |

> **Trampa vigente:** renderizar como imagen los PDFs de anexos técnicos del Sistema de Gestión de Calidad si quedaran escaneados sin capa de texto; una búsqueda con 0 resultados NO descarta el dato.

---

## Dominio 2 — Los 6 programas de apoyo (Reglas de Operación 2026)

Los 6 tipos de apoyo (convocatoria 2026, §3.2) y su proceso de operación. Cada programa es un proceso a documentar con el ciclo completo: **convocatoria → registro del solicitante → proyecto técnico → evaluación/dictamen → asignación → ejecución → fiscalización → pago**. **En Fase 1 solo se documenta PA-01 a fondo como plantilla**; los demás replican el formato en Fase 2.

| # | Programa | RO 2026 (fuente prioritaria) | Formatos / complementos | Asignado a |
|---|---|---|---|---|
| PA-01 🟢 | Pago por Servicios Ambientales Hidrológicos (PSAHEM) | `Docs/Comun/Programas de apoyo/RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` | `FORMATO_FO-PB-501A_SolicitudUnica_2026.docx`, `FORMATO_FO-PB-502_RegInfo_Solicitante_Beneficiario_2026.docx`, `CONVOCATORIA_2026_Programas_Apoyo.pdf`; fideicomiso en `FIPASAHEM/` — análisis: `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md` | **Joni** |
| PA-02 | Restauración Hidrológico-Forestal / Reforestando Edoméx | `Docs/Comun/Programas de apoyo/RO_2026_Restauración_Hidrológico-Forestal.pdf` | Formatos FO-PB íbid.; `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf` | Fase 2 |
| PA-03 | Capturando Carbono (EdoMéx Procarbono) | `Docs/Comun/Programas de apoyo/RO_2026_CapturandoCarbono.pdf` | Formatos FO-PB íbid. | Fase 2 |
| PA-04 | Plantaciones Sustentables (Forestales Comerciales) | `Docs/Comun/Programas de apoyo/RO_2026_PlantacionesSustentables.pdf` | Formatos FO-PB íbid. | Fase 2 |
| PA-05 | Manejo Forestal Sustentable | `Docs/Comun/Programas de apoyo/RO_2026_ManejoForestalSustentable.pdf` | Formatos FO-PB íbid. | Fase 2 |
| PA-06 | Restauración Forestal Integral | `Docs/Comun/Programas de apoyo/RO_2026_*.pdf` (el que aplique) + `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf` | `FORMATO_FO-PB-501B_SolicitudUnica_2026.docx` | Fase 2 |

**Fuentes de respaldo transversal** (todos los PA-##):

- `Docs/Comun/Programas de apoyo/CONVOCATORIA_2026_Programas_Apoyo.pdf` y `CONVOCATORIA_Programas_Apoyo_2026_ene271c.pdf` (publicación y convocatoria)
- `Docs/Comun/Programas de apoyo/REGLAS_OPS_*` (versiones Gaceta — usar solo para contrastar, priorizar `RO_2026_*`)
- `Docs/Comun/Programas de apoyo/FICHAS_Programas_Sociales_2023.xlsx` (fichas de programas sociales)
- `Docs/Comun/Programas de apoyo/feb071.pdf` (convocatoria 2025 — antecedente)
- Cruce con Germoplasma: entrega de planta por vale dentro de programas (ver GS8 en Dominio 3)

> **Nota:** según el equipo se documentan **solo los 6 programas de la imagen** (los que incluyen Restauración Forestal Integral y excluyen Guardabosques). El `Programa Estatal Guardabosques` (con `RO_2026_ProgramaEstatalGuardabosques.pdf`, convocatoria y formatos propios en `Docs/Comun/Programas de apoyo/`) y los `Voluntarios Guardianes de los Bosques` quedan **fuera del inventario** por decisión del equipo; sus archivos quedan en `Comun/` por si el alcance cambia.

---

## Dominio 3 — Banco de germoplasma

Fuente principal: [`Docs/Joni/Germoplasma/01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md`](Docs/Joni/Germoplasma/01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md) (mapa completo con lo que se sabe / falta / dónde conseguirlo). Análisis ya hecho: [`G09_DISTRIBUCION_GERMOPLASMA.md`](Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md).

> **Codificación unificada (2026-09-16):** en este README y en el mapa `01_` los procesos se llaman igual — **G1..G10** (fundamentales) y **GS1..GS8** (soporte). El doc de análisis de G9 es `G09_DISTRIBUCION_GERMOPLASMA.md` (renombrado desde `P09_...`; sus citas de pasos ahora son `G9·A#` / `G9·B#`, antes `P9·#`). Los futuros documentos de análisis de soporte se nombrarían `GS##_NOMBRE.md`.

### 3.1 Procesos FUNDAMENTALES (el ciclo mínimo del banco)

| # | Proceso | Estado | Fuentes principales | Asignado a |
|---|---|---|---|---|
| G1 | Programación anual de colecta | 🟡 | `Docs/Comun/Germoplasma/86_manualProcDirRestYFtoFtal.pdf` [MP06 p. 25-30]; [SEP091] en `Docs/Comun/Manual Jurídico/MANUALES_PROC_PROBOSQUE_2020_sep091_(UAZC-IndustriaComercialización-UIPPE).pdf` pp. 46-90 | **Patatuchi** |
| G2 | Colecta en campo | 🟡 | [MP06 pp. 31-37]; `Docs/Comun/Masa forestal/Reg_LGDFS.pdf` arts. 87-88; `Docs/Comun/Sitio web/colecta_germoplasma.html` | **Patatuchi** |
| G3 | Ingreso al Banco (bitácora) | 🟡 | [MP06]; datos de capacidad en `Docs/Comun/Germoplasma/` (catálogos 2026) | **Patatuchi** |
| G4 | Beneficio (extracción, limpieza, tratamiento) | 🟡 | [MP06]; `Docs/Comun/Sitio web/venta_semilla_planta.html` [VEN] | **Patatuchi** |
| G5 | Laboratorio y calidad | 🟡 | [MP06 p. 41-42]; `Docs/Joni/Germoplasma/00_INVENTARIO_Y_GUIA_GERMOPLASMA.md` [GER] | **Patatuchi** |
| G6 | Almacenamiento | 🟡 parcial | [MP06]; visita a campo obligatoria (pendiente) | **Leonardo** |
| G7 | Inventario y reportes | 🟡 | [MP06 pdf pp. 35-36] (Inventario de semillas firmado que sube UCSF→DRFF→DG — es **insumo directo de E-01**) | **Leonardo** |
| G8 | Entrega interna a viveros | 🟡 | [MP06 pp. 33-42] (flujo formal completo con vale de salida) | **Leonardo** |
| G9 | Salida externa: venta y donación | 🟢 | `Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md` (antes `P09_...`); `Docs/Comun/Retys EdoMex/CEDULAS_RETYS_PROBOSQUE_GERMOPLASMA.md` [RETYS-1162/1068/2092]; `Docs/Comun/Germoplasma/RETYS_2092_SOLICITUD_DONACION_PLANTA_2026.pdf`; `Docs/Comun/Sitio web/venta_semilla_planta.html`, `donacion-planta.html`, `donacion-1000.html` | **Joni** (🟢 hecho) |
| G10 | Retorno de semilla no sembrada | 🔴 | Solo la obligación: [MP06 p. 41] (nota al pie del vale) | **Leonardo** |

### 3.2 Procesos NO FUNDAMENTALES (soporte)

| # | Proceso | Estado | Fuentes principales | Asignado a |
|---|---|---|---|---|
| GS1 | Huertos semilleros y propagación in vitro | 🟡 | [MGO] (funciones SAPCAT) en `Docs/Comun/Manual Jurídico/dic161d.pdf` | Fase 2 |
| GS2 | Producción de planta en viveros | 🟡 | [MP06 4.1]; `Docs/Comun/Sitio web/produccion_planta.html`, `viveros_forestales.html` | Fase 2 |
| GS3 | Publicación de catálogo y tarifas | 🟢 | `Docs/Joni/Germoplasma/GS3_PUBLICACION_CATALOGO_Y_TARIFAS.md` (pasos GS3·A#/B#); serie de catálogos 2021–2026 en `Docs/Comun/Germoplasma/` + Gaceta de tarifas 2024 y 2026; obligación de publicar [MGO SRyPP f.13] | **Joni** (🟢 hecho) |
| GS4 | Ingreso contable (capitalización, FUP–pagos) | 🔴 vacío | [RETYS]; `Docs/Comun/Manual Jurídico/jul301b.pdf` [CONT25] — no tiene procedimiento de ingresos por venta | Fase 2 |
| GS5 | Fichas RETYS / mejora regulatoria | 🔵 fuentes verificadas | `Docs/Comun/Retys EdoMex/CEDULAS_RETYS_PROBOSQUE_GERMOPLASMA.md` (3 cédulas transcritas); `Docs/Comun/Gestión documental y calidad/` (lineamientos de Mejora Regulatoria [MR]) — pendiente: cédulas citan MGO 2023 | Fase 2 |
| GS6 | Archivo de expedientes (serie documental de semilla) | 🔴 vacío | `Docs/Comun/Gestión documental y calidad/` (guía, inventario, cuadro de clasificación) — definirla es entrega propia del SGD | Fase 2 |
| GS7 | Visitas guiadas / divulgación | 🟡 | [MGO p. 27 f.20] — irrelevante para el SGD (baja prioridad) | Fase 2 |
| GS8 | Entrega de planta vía programas (vale de planta) | 🔵 fuentes verificadas (cruce, co-autoría con Dominio 2) | RO 2026 de Plantaciones Sustentables (p. 14) y Restauración Hidrológico-Forestal (pp. 6, 13) — **cruce con Dominio 2** | Fase 2 (co-autoría Leonardo + quien tome PA-02/PA-04) |

---

## Procesos estadísticos de cierre de temporada (E-##) — verificados el 2026-09-19

**Hallazgo de la doble verificación:** la estadística de PROBOSQUE **no es un proceso inferido** — el MGO 2025 la asigna por nombre a unidades concretas y las RO 2026 la exigen al final del ejercicio. Hay **dos niveles**: (a) la estadística de cada dominio (E-01..E-03), que alimenta a (b) la estadística institucional que la **UIPPE** reporta a la Secretaría de Finanzas y al Consejo Directivo (E-04). Documentar estos 4 procesos es lo que hace al módulo estadístico del SGD **útil y justificable** aunque sea por lo mínimo: cada uno tiene dueño real, obligación escrita y registros concretos.

| # | Proceso | Estado | Sustento verificado (archivo + página) | Asignado a |
|---|---|---|---|---|
| E-01 | Cierre estadístico anual del banco de germoplasma (colecta → inventario → avances a DG) | 🟡 sustento verificado | [MP06 pdf pp. 35–36]: "Inventario de semillas" firmado con rúbrica que sube Programa de Colecta → UCSF → DRFF → DG, e "**informe final del Programa de Colecta** de germoplasma forestal"; [MGO pdf p. 25, DRFF f.1]: "presentar a la DG los avances y resultados de… conservación de germoplasma, producción de planta…"; serie `COSTOS_*` 2021–2026 en `Comun/Germoplasma/` (ventas por ejercicio, ya auditada en GS3). **Consume:** G7 (inventario) y G9 (ventas/donaciones) | **Leonardo** |
| E-02 | Estadística y evaluación de temporada de los programas de apoyo | 🟢 documentado 2026-09-21 (Docs/Joni/Programas de apoyo/E-02_ESTADISTICA_EVALUACION_TEMPORADA.md) — cláusula verificada en los 5 RO; 4 reglamentos de comités capturados en Programas de apoyo/Comites/ | **RO PSAH pdf p. 20 y RO MFS pdf p. 27**: "La Instancia Responsable/Ejecutora presentará un **informe anual** a la Instancia Normativa sobre la ejecución del programa" + §16 evaluación externa (verificar la misma cláusula en los otros 4 RO); RO PSAH p. 18: graduación con visitas de campo y evaluación documental; `2023-CONAC-*`/`2023-Anexos-*` (indicadores de la MIR del Pp. Desarrollo Forestal); `Sitio web/evaluacion_programas.html` (evaluaciones del Pp. 2014–2022 publicadas); `Finanzas y adquisiciones/FINANZAS_AyudasYSubsidios_2026T2.pdf` (formato oficial trimestral "Montos pagados por ayudas y subsidios" — verificado visualmente 2026-09-19: escaneado, T2-2026 "NO APLICA"); `Reportes por reclamar/` (informes PSAHEM/ERF/RMSF ya elaborados — heredados de los programadores). **Consume:** los 6 PA-## | **Joni** |
| E-03 | Estadística de aprovechamiento y producción forestal (informes mensual y anual) | 🟡 sustento verificado | **[MGO pdf p. 28, SAMIF f.8]**: "Elaborar el **Informe Mensual de Estadísticas** de predios vigentes con autorización para el aprovechamiento de recursos forestales de la Entidad"; **[f.9]**: "Recibir el informe anual sobre la ejecución… para elaborar el **Informe Anual de la Producción Forestal** de la Entidad"; [f.12]: supervisa la actualización del Inventario Estatal Forestal y de Suelos con CONAFOR (→ MF-09); `Sitio web/aprovechamiento_forestal.html`: "control estadístico mensual sobre las autorizaciones expedidas… anualmente se genera el informe de producción"; `Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx`. **Titular real:** Rigoberto León Contreras, Subdirector SAMIF (Directorio l. 98). **Consume:** MF-07, MF-12 | **Octavio** |
| E-04 | Estadística institucional y rendición de cuentas (avance de metas, SIED, informe de gobierno) | 🟢 documentado 2026-09-21 (Docs/Joni/Transversal/E-04_ESTADISTICA_INSTITUCIONAL.md) — funciones UIPPE f.1-f.19 ancladas; dictamen SAIR MP-UIPPE capturado | **[MGO pdf pp. 16–17, UIPPE]**: f.1 "avance de metas, **estadística básica**… conforme a su competencia"; f.2 reportar a la Secretaría de Finanzas "para la evaluación de la gestión pública"; f.11 avances de metas del Programa Anual a SF y DAFGD; f.13 avances de indicadores del **SIED** a SF; f.15 evaluación del Plan de Desarrollo → informe trimestral y anual; f.17 informe y memoria de gobierno; [MGO pdf p. 10] la DG rinde informe de actividades al Consejo Directivo; `Sitio web/informacion_financiera.html` (indicadores de resultados CONAC trimestrales). **Titular real:** **Margarita Olivares Márquez**, Jefa UIPPE (Directorio l. 22–26). **Consume:** E-01, E-02, E-03 | **Joni** |

> **Cadena de la estadística:** dominio (G7→E-01 · PA-##→E-02 · MF-07/12→E-03) → institución (E-01/02/03→E-04→Secretaría de Finanzas y Consejo Directivo). Los registros que alimentan los E-## ya existen como procesos propios; los E-## solo documentan **cómo se consolidan y a quién se reportan**.

---

## Procesos transversales (afectan a los 3 dominios)

| # | Proceso | Fuente | Asignado a |
|---|---|---|---|
| T-01 | Gestión documental y calidad (ISO 9001 — recertificación vencida 2025-10-10) | `Docs/Comun/Gestión documental y calidad/` (certificados ISO, guía archivística); `Docs/Comun/Sitio web/certificacion_iso9001.html` | Fase 2 |
| T-02 🟢 | Marco jurídico e institucional (MGO 2025, funciones, directorio) | `Docs/Comun/Manual Jurídico/dic161d.pdf` (MGO 2025), `may281` (MGO 2012), Reglamento Interno, Directorio; `Docs/Comun/Sitio web/marco_juridico.html`, `funciones.html`, `organigrama.html`, `directorio.html`; ciclo de mejora en `Docs/Comun/Manual Jurídico/Normateca/` — análisis: `Docs/Joni/Transversal/T02_MARCO_JURIDICO_INSTITUCIONAL.md` | **Joni** |
| T-03 | Finanzas y adquisiciones (presupuesto, pagos, Comité de Adquisiciones) | `Docs/Comun/Finanzas y adquisiciones/`; `Docs/Comun/Manual Jurídico/jul301b.pdf` [CONT25] | Fase 2 |
| T-04 | Trámites vía RETYS (cédulas, formatos, mejora regulatoria) | `Docs/Comun/Retys EdoMex/`; `Docs/Comun/Sitio web/tramites_servicios.html`, `mejora-regulatoria.html` | Fase 2 |

---
