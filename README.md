# SGD PROBOSQUE — Catálogo de procesos a documentar

Catálogo principal de los procesos que **sí o sí** debemos documentar para el Sistema de Gestión Documental (SGD), organizados por los 2 dominios vigentes (masa forestal y programas de apoyo) + transversales + estadística. Cada proceso indica **de qué archivos viene** (fuentes en `Docs/Comun/`) y su estado.

> **⚠️ Cambio de alcance (2026-09-22):** el profesor eliminó el dominio de **germoplasma** del proyecto. Todo el trabajo hecho (G9, GS3, G06, mapas de procesos, catálogos de costos, cédulas RETYS) se archivó en `Docs/Comun/germoplasma-archivo/` — no se borra, pero **ya no alimenta el catálogo ni el SGD**. El esfuerzo se concentra en **Masa Forestal (MF)** y **Programas de apoyo (PA)**.
>
> **Los 5 énfasis pedidos (2026-09-22)** — aplican a TODO proceso, nuevo o ya documentado:
> 1. **Entrada/salida por paso** → nueva **sección 12** de la plantilla (tabla: paso → documento/dato de entrada con referencia al archivo real → dato que se captura → documento de salida). Los 9 procesos 🟢 deben **retro-ajustarse** con esta sección.
> 2. **Requisitos de masa forestal** (qué se clasifica en los mapas satelitales, qué se busca) → documento transversal **X-01**.
> 3. **Objetivos de los programas** → documento transversal **X-02** (tabla comparativa de los 6 RO).
> 4. **Revisiones de los programas y sus formatos** → documento transversal **X-03** (ciclo de verificación/supervisión + inventario de formatos FO-PB reales).
> 5. **Fiscalización y estadística** → covered por E-02/E-03/E-04 (hechos) + proceso nuevo **MF-13** (rescisión y reintegro) + T-03.
>
> **Organización del equipo (2026-09-19, nombres de carpeta en disco):** documentan **Joni, Leonardo (`Docs/Leo/`), Octavio (`Docs/Octavio/`) y Patatuchi (`Docs/Valeria/`)**. Programadores (no documentan): Alan, Karina, Xareni — sus informes en `Docs/Comun/Programas de apoyo/Reportes por reclamar/` son **fuente de E-02**.
>
> **Convención de etiquetas:** `MF-##` (masa forestal), `PA-##` (programas de apoyo), `T-##` (transversal), `E-##` (estadística de cierre de temporada), **`X-##` (documentos transversales de énfasis, nuevo 2026-09-22)**. El paso de un proceso se cita como `<ID>·X#` (proceso · paso, p. ej. `PA1·B4`). El formato de análisis sigue la plantilla de `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md` (secciones 1–12, trazabilidad `[clave] → BR-# → paso → N-##`; §12 = insumos y productos por paso).
>
> **Estado:** 🟢 análisis completo (plantilla, secciones 1–11) · 🟢* completo pero **pendiente de retro-ajuste §12** · 🔵 fuentes verificadas sin análisis · 🟡 conocido parcialmente · 🔴 sin información · ❌ fuera de alcance (archivado).
>
> Creado: 2026-09-16. Actualizado: **2026-09-24** — sprint cerrado 25/25 🟢: X-02 (completado por Joni), §12 por paso retro-ajustadas en MF-01/02/03/07, E-03, MF-09 y MF-12, y capturas nuevas (evaluaciones PAE + indicadores de la MIR del Pp. "Desarrollo Forestal" en `Programas de apoyo/Evaluacion_PAE/`; FF-SEMARNAT de aprovechamiento y formatos de plagas en `Trámites RETYS/`; manuales INFyS en `Masa forestal/`). Antes: 2026-09-23 — sprint de Joni (§12 de PA-01/E-02/E-04/T-02; X-03, MF-13, T-01); 2026-09-22 — salida de germoplasma del alcance (archivado), nueva plantilla con §12, procesos X-01..X-03 y MF-13, absorción de MF-04/05/06 al ciclo PA.

**Resumen del inventario en alcance: 25 unidades** — 9 procesos MF (MF-04/05/06 absorbidas al ciclo PA; la vieja MF-08 absorbida a E-03) · 6 PA · 3 estadísticos (E-02/03/04; E-01 eliminada por ser de germoplasma) · 4 transversales · 3 énfasis (X-01..03). **25/25 🟢 — sprint cerrado el 2026-09-24**: X-02 completado (entregable de Leo, escrito por Joni), §12 retro-ajustadas por paso en MF-01/02/03/07, E-03, MF-09 y MF-12, y capturas nuevas (evaluaciones PAE + indicadores de la MIR del Pp. "Desarrollo Forestal" en `Programas de apoyo/Evaluacion_PAE/`; formatos FF-SEMARNAT de aprovechamiento y plagas en `Trámites RETYS/`; manuales INFyS en `Masa forestal/`). Restan **0** entregables; lo pendiente son solo vacíos `V-##` (ver §11 de cada análisis).

## Reparto de procesos (sprint 2026-09-22, 2 días)

Reglas: cada quien retro-ajusta **sus propios** 🟢 con la §12 (rápido, ya conoce el doc); los nuevos se agrupan por sinergia de fuentes; los 3 PA restantes replican la plantilla de PA-01. Equivalencia usada: 1 proceso nuevo ≈ 1.5 retroajustes.

| Integrante | Retroajuste §12 (procesos propios 🟢) | Procesos nuevos | Docs de énfasis | Total |
|---|---|---|---|---|
| **Patatuchi / Valeria** (8) | MF-01, MF-02, MF-03, MF-07, E-03 | MF-09 (Inventario Estatal), MF-12 (Aprovechamientos DEMIF) | **X-01** Requisitos MF | 5 ligeros + 3 |
| **Joni** (7) | PA-01, E-02, E-04, T-02 | MF-13 (Rescisión y reintegro), T-01 (Gestión documental/ISO) | **X-03** Revisiones y formatos | 4 ligeros + 3 |
| **Leonardo / Leo** (5) | — | PA-02, PA-03, PA-04 (réplicas de PA-01), MF-10 (Sanidad) | **X-02** Objetivos de los 6 programas | 5 |
| **Octavio** (5) | — | PA-05, PA-06 (réplicas de PA-01), MF-11 (Incendios), T-03 (Finanzas), T-04 (RETYS) | — | 5 |

**Justificación de las sinergias:**
- **Patatuchi** ya es dueña del bloque MF; X-01 (tipologías y umbrales de clasificación satelital) sale de sus propios MF-02/MF-03, y MF-09/MF-12 son las fuentes cartográfico-estadísticas de su E-03.
- **Joni** ya es dueño de PA-01 y E-02; X-03 (revisiones + formatos) se extrae del ciclo C de PA-01 y de los reglamentos de comités de E-02; MF-13 cierra la cadena de fiscalización (PA-01→E-02→E-04); T-01 es hermano de su T-02.
- **Leonardo** (que perdió G06 con el recorte) lee los 5 RO restantes para PA-02/03/04 y de esa misma lectura sale X-02; MF-10 es autocontenida (NOTATEC + 1 página web).
- **Octavio** replica PA-05/06; T-03 conecta con los pagos/fideicomiso que ya aparecen en los RO que lee; T-04 conecta con el inventario de formatos de X-03; MF-11 es autocontenida.

> Al completar un proceso: cambiar el estado a 🟢 y anotar el documento en la tabla correspondiente. Carpetas de trabajo: `Docs/Joni/`, `Docs/Leo/`, `Docs/Octavio/`, `Docs/Valeria/`.

---

## Dominio 1 — Control de masa forestal (imágenes de satélite)

### 1.1 Ciclo de verificación de cobertura

**Reconciliación de numeración (2026-09-22):** MF-04 (sesión de Comité), MF-05 (convenios/asignación) y MF-06 (dispersión y comprobación) **se absorben al ciclo de los programas** — sus pasos son literalmente el ciclo B de PA-01 (dictamen → factibles → contrato → ministración 70/30) y se documentan ahí y en PA-02..06; no llevan doc propio. La vieja MF-08 ("reporte de resultados") sigue absorbida por E-03. **MF-13 = Rescisión y reintegro de recursos** (en el README de Valeria figuraba como "MF-08": renombrada para no colisionar).

| # | Proceso | Estado | Sustento verificado en fuentes | Asignado a |
|---|---|---|---|---|
| MF-01 🟢 | Delimitación de polígono y tenencia | 🟢 (§12 por paso lista 2026-09-24) | `Docs/Valeria/Masa_Forestal/MF-01_DELIMITACION_POLIGONO*.md`; RO PSAH p. 19; `AUTORIZACIONES_DEMIF_ago2023.xlsx`; `Sitio web/aprovechamiento_forestal.html` | **Patatuchi** |
| MF-02 🟢 | Levantamiento de cobertura (SIG/satélite) | 🟢 (§12 por paso lista 2026-09-24) | `Docs/Valeria/Masa_Forestal/MF-02_LEVANTAMIENTO_COBERTURA*.md`; RO PSAH Glosario pp. 4/6; `Sitio web/inventario_forestal.html` | **Patatuchi** |
| MF-03 🟢 | Cálculo de índices de cobertura | 🟢 (§12 por paso lista 2026-09-24) | `Docs/Valeria/Masa_Forestal/MF-03_INDICES_COBERTURA.md`; RO PSAH pp. 8-9 (umbrales de dosel); RO Carbono pp. 7-9 | **Patatuchi** |
| ~~MF-04~~ | ~~Dictamen del Comité Técnico~~ | **absorbida → ciclo B de PA-01/PA-02..06** | RO PSAH pp. 9-10, 19 | — |
| ~~MF-05~~ | ~~Asignación/ministraciones~~ | **absorbida → ciclo B de PA-01/PA-02..06** | RO PSAH pp. 7-8, 10-12 | — |
| ~~MF-06~~ | ~~Ejecución y actualización en campo~~ | **absorbida → ciclo C de PA-01/PA-02..06** | RO PSAH p. 7, 12-14 | — |
| MF-07 🟢 | Inspección, vigilancia y fiscalización | 🟢 (§12 por paso lista 2026-09-24) | `Docs/Valeria/Masa_Forestal/MF-07_INSPECCION_VIGILANCIA.md`; RO PSAH Glosario "Comisión de Verificación Técnica" p. 4; `Sitio web/supervision-vigilancia-forestal.html`; `Masa forestal/Reg_LGDFS.pdf` | **Patatuchi** |
| MF-13 🟢 | Rescisión y reintegro de recursos (cierre de fiscalización) | 🟢 (2026-09-23) | `Docs/Joni/Masa_Forestal/MF-13_RESCISION_REINTEGRO.md`; RO PSAH pp. 16–18; RO Carbono pp. 15–16; `Masa forestal/Reg_LGDFS.pdf`; listado real de incumplidos capturado | **Joni** |
| MF-09 🟢 | Inventario Estatal Forestal y de Suelos | 🟢 (2026-09-24, con §12 por paso) | `Docs/Valeria/Masa_Forestal/MF-09_INVENTARIO_ESTATAL_FORESTAL.md`; `Sitio web/inventario_forestal.html` (2022, conglomerados y parcelas); MGO SAMIF f.12 (actualización con CONAFOR); manuales INFyS capturados en `Masa forestal/` | **Patatuchi** |
| MF-10 🟢 | Sanidad forestal (emergencias fitosanitarias) | 🟢 (2026-09-24) | `Docs/Leo/Masa Forestal/MF-10-sanidad-forestal.md`; `Masa forestal/NOTATEC2_EmergenciaFitosanitaria.pdf`; `Sitio web/sanidad_forestal.html`; formatos RETYS de plagas (cédulas 873/876 en `Trámites RETYS/`) | **Leonardo** |
| MF-11 🟢 | Incendios forestales (prevención y combate) | 🟢 (2026-09-24) | `Docs/Octavio/Masa Forestal/MF-11-incendios.md`; `Sitio web/incendios_forestales.html` | **Octavio** |
| MF-12 🟢 | Aprovechamientos autorizados (DEMIF/concesiones) | 🟢 (2026-09-24, con §12 por paso) | `Docs/Valeria/Masa_Forestal/MF-12_APROVECHAMIENTOS_Y_CONCESIONES.md`; `Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx`; `Masa forestal/PROBOSQUE-concesiones-2023.pdf`; FF-SEMARNAT-048/055/074 en `Trámites RETYS/`. **Alimenta a E-03** | **Patatuchi** |

> **Énfasis 2 (requisitos MF):** qué se clasifica en los mapas (tipologías de vegetación/cobertura, umbrales de dosel por región, detección de cambio, superficies con permiso) se documenta una sola vez en **X-01** (Patatuchi) y se cita desde MF-02/03/09/12 y los diagramas.

### 1.2 Trampa vigente

Renderizar como imagen los PDF escaneados: una búsqueda de texto con 0 resultados NO descarta el dato.

---

## Dominio 2 — Los 6 programas de apoyo (Reglas de Operación 2026)

Cada programa replica el ciclo de PA-01: **convocatoria → solicitud (FO-PB-501A/B) → registro (FO-PB-502) → proyecto técnico → dictamen → Comité → contrato → ministración 70/30 → verificación → cierre** (más absorción de MF-04/05/06). **Énfasis 3 (objetivos) → X-02; énfasis 4 (revisiones y formatos) → X-03.**

| # | Programa | RO 2026 (fuente prioritaria) | Formatos / complementos | Estado y asignado |
|---|---|---|---|---|
| PA-01 🟢 | PSAHEM (plantilla de los 6) | `RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` | FO-PB-501A, FO-PB-502, FO-PB-516; `FIPASAHEM/` — análisis: `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md` (§12 listo 2026-09-23) | **Joni** |
| PA-02 🟢 | Restauración Hidrológico-Forestal / Reforestando Edoméx | `RO_2026_Restauración_Hidrológico-Forestal.pdf` | FO-PB íbid.; `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf`; informe previo en `Reportes por reclamar/` — análisis: `Docs/Leo/Programas de apoyo/PA-02-restauracion-hidrologico-forestal.md` 🟢 (2026-09-24) | **Leonardo** |
| PA-03 🟢 | Capturando Carbono (EdoMéx Procarbono) | `RO_2026_CapturandoCarbono.pdf` | FO-PB íbid.; `Comites/REGLAMENTO_Comite_CapturandoCarbono.pdf` — análisis: `Docs/Leo/Programas de apoyo/PA-03-capturando-carbono.md` 🟢 (2026-09-24) | **Leonardo** |
| PA-04 🟢 | Plantaciones Sustentables | `RO_2026_PlantacionesSustentables.pdf` | FO-PB íbid.; `Comites/REGLAMENTO_Comite_PlantacionesSustentables.pdf` — análisis: `Docs/Leo/Programas de apoyo/PA-04-plantaciones-sustentables.md` 🟢 (2026-09-24). Nota: la entrega de planta vía vale era cruce con germoplasma (❌ fuera de alcance; solo se menciona como insumo de PROBOSQUE) | **Leonardo** |
| PA-05 🟢 | Manejo Forestal Sustentable | `RO_2026_ManejoForestalSustentable.pdf` | FO-PB íbid.; `Comites/REGLAMENTO_Comite_ManejoForestalSustentable.pdf`; informe previo en `Reportes por reclamar/` — análisis: `Docs/Octavio/Programas de apoyo/PA-05-manejo-forestal.md` 🟢 (2026-09-24) | **Octavio** |
| PA-06 🟢 | Restauración Forestal Integral | RO que aplique + `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf` | FO-PB-501B; `Comites/REGLAMENTO_Comite_RestauracionEcosistemas.pdf` — análisis: `Docs/Octavio/Programas de apoyo/PA-06-restauracion-forestal.md` 🟢 (2026-09-24). Nota: RFI es **concepto** del RO de RHF (sin RO propia → `X-02·V-02`) | **Octavio** |

**Fuentes transversales (todos los PA-##):** `CONVOCATORIA_2026_Programas_Apoyo.pdf` y `ene271c`; `REGLAS_OPS_*` (Gaceta, solo contraste — priorizar `RO_2026_*`); `FICHAS_Programas_Sociales_2023.xlsx` (insumo de X-02); `feb071.pdf` (convocatoria 2025). El `Programa Estatal Guardabosques` y `Voluntarios Guardianes` siguen **fuera de inventario** (decisión 2026-09-16; archivos en `Comun/`).

---

## Procesos estadísticos de cierre de temporada (E-##)

**E-01 (germoplasma) sale del alcance (2026-09-22).** La cadena queda: dominio (PA-##→E-02 · MF-07/12/13→E-03) → institución (E-02/03→E-04 → Secretaría de Finanzas y Consejo Directivo).

| # | Proceso | Estado | Documento / sustento | Asignado a |
|---|---|---|---|---|
| E-02 🟢 | Estadística y evaluación de temporada (programas) | 🟢 (2026-09-23) | `Docs/Joni/Programas de apoyo/E-02_ESTADISTICA_EVALUACION_TEMPORADA.md`; cláusula del informe anual verificada en los 5 RO; `Comites/` (4 reglamentos); `Reportes por reclamar/` | **Joni** |
| E-03 🟢 | Estadística de aprovechamiento y producción forestal (mensual/anual) | 🟢 (§12 por paso lista 2026-09-24) | `Docs/Valeria/Masa_Forestal/E-03_ESTADISTICAS_CIERRE.md`; MGO SAMIF f.8/f.9/f.12; series 2020-2022 en `FICHAS_Programas_Sociales_2023.xlsx` | **Patatuchi** |
| E-04 🟢 | Estadística institucional y rendición de cuentas | 🟢 (2026-09-23) | `Docs/Joni/Transversal/E-04_ESTADISTICA_INSTITUCIONAL.md`; MGO UIPPE f.1-f.19 | **Joni** |

---

## Procesos transversales

| # | Proceso | Estado | Fuente | Asignado a |
|---|---|---|---|---|
| T-01 🟢 | Gestión documental y calidad (ISO 9001 — recertificación vencida 2025-10-10) | 🟢 (2026-09-23) | `Docs/Joni/Transversal/T-01_GESTION_DOCUMENTAL_CALIDAD.md`; `Docs/Comun/Gestión documental y calidad/`; `Sitio web/certificacion_iso9001.html` y `coordinacion_archivos.html` | **Joni** |
| T-02 🟢 | Marco jurídico e institucional (MGO 2025, funciones, directorio) | 🟢 (2026-09-23) | `Docs/Joni/Transversal/T02_MARCO_JURIDICO_INSTITUCIONAL.md` | **Joni** |
| T-03 🟢 | Finanzas y adquisiciones (presupuesto, pagos, Comité de Adquisiciones) | 🟢 (2026-09-24) | `Docs/Octavio/Transversal/T-03-finanzas-adquisiciones.md`; `Docs/Comun/Finanzas y adquisiciones/`; `Manual Jurídico/jul301b.pdf` [CONT25]; conecta con ministraciones PA y ayudas/subsidios | **Octavio** |
| T-04 🟢 | Trámites vía RETYS (cédulas, formatos, mejora regulatoria) | 🟢 (2026-09-24) | `Docs/Octavio/Transversal/T-04-tramites-linea.md`; `Sitio web/tramites_servicios.html`, `mejora-regulatoria.html`; cédula RETYS 51 (PSAHEM) transcrita en `Docs/Comun/Trámites RETYS/` (cierra V-07 de PA-01) | **Octavio** |

---

## Documentos de énfasis (X-##) — nuevo 2026-09-22

| # | Documento | Cubre el énfasis | Contenido mínimo | Fuentes madre | Asignado a |
|---|---|---|---|---|---|
| X-01 | Requisitos de masa forestal: qué se clasifica y qué se busca en los mapas satelitales | #2 | Tipologías de vegetación/cobertura del Inventario Estatal; umbrales de dosel por región (templada ≥50%, tropical caducifolia ≥40%, semiárida ≥40% — RO PSAH pp. 8-9); detección de cambio (deforestación, incendios, sanidad); variables de carbonometría (RO Carbono); capas que el SGD debe indexar/consultar | `Sitio web/inventario_forestal.html`; RO PSAH/Carbono; MGO SAMIF/SAPCAT; `AUTORIZACIONES_DEMIF_ago2023.xlsx`; MF-02/03 de Valeria | **Patatuchi** → `Docs/Valeria/Masa_Forestal/X-01_*.md` |
| X-02 🟢 | Objetivos de los 6 programas de apoyo | #3 | Tabla comparativa: objetivo general y específicos de cada RO, población objetivo, tipo y monto del apoyo, indicador de objetivo (MIR) — 🟢 2026-09-24 (completado por Joni); hallazgo: RFI es concepto de RHF sin RO propia; indicadores viven en la MIR del Pp. 03020201 | los 6 `RO_2026_*` (sección objetivo); `FICHAS_Programas_Sociales_2023.xlsx`; `2023-CONAC-*` (MIR) | **Leonardo** → `Docs/Leo/Programas de apoyo/X-02_OBJETIVOS_PROGRAMAS.md` 🟢 |
| X-03 🟢 | Revisiones de los programas y sus formatos | #4 (+#5) | Quién revisa y cuándo (Comisión de Verificación Técnica, Comités de Admisión y Seguimiento, visita de campo vs. evaluación documental, §16 evaluación externa, PAE); inventario de formatos reales con ruta: FO-PB-501A/B, FO-PB-502, FO-PB-516, guía de proyecto técnico, formatos sin descarga (FO-PB-520 A/B, FO-PB-509-A…); cuáles tienen versión descargable y cuáles no (vacío) | los 6 RO (capítulos de verificación/evaluación); `Comites/`; `FIPASAHEM/`; formatos `.docx` en `Programas de apoyo/`; RETYS | **Joni** → `Docs/Joni/Programas de apoyo/X-03_REVISIONES_Y_FORMATOS.md` 🟢 (2026-09-23) |

---

## Archivo: germoplasma (❌ fuera de alcance, 2026-09-22)

`Docs/Comun/germoplasma-archivo/` — fuentes (`Germoplasma/`, `Retys EdoMex/`), análisis (`analisis-Joni/`: G9, GS3, 00_ y 01_; `analisis-Leo/`: G06) y diagramas (`diagramas-*`). No se citan desde procesos vigentes; solo consulta histórica.
