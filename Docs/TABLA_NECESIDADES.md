# Tabla de necesidades general — SGD PROBOSQUE

> Consolidado de las tablas de necesidades (§8/§7) de los **23 documentos de análisis en alcance** (25 unidades del inventario; X-02 y X-03 no traen tabla de necesidades propia).
> Fecha: 2026-09-24. Origen de las filas: **172 necesidades `N-##`** de los procesos + **18 necesidades nuevas del lado receptor (NG-R##)** propuestas en este consolidado.
> IDs globales `NG-###`; la columna Origen conserva la trazabilidad `documento·N-##`. Personificación según `[DIR]`/T-02/PA-01 (reales) o ⚠️ si el Directorio no llega; los órganos colegiados se expresan como **dato/decisión** (columna L = X).

## 1. Método

1. Extracción de todas las filas `N-##` de las tablas de necesidades de cada proceso (PA-01…06, MF-01/02/03/07/09/10/11/12/13, E-02/03/04, T-01…04, X-01, y 3 análisis previos en `Docs/Karina/`).
2. **Personificación**: cada necesidad se atribuye a la persona que ejecuta (puesto + titular real cuando existe) o, si no es personificable (órgano deliberativo), se re-centra en el **dato que hay que conocer** (p. ej. "conocer el acuerdo del Consejo", no "el Consejo necesita").
3. **Doble lado**: para cada flujo "dar documento" se verificó quién debe **recibirlo y no perderlo**; las necesidades del lado receptor que no existían se agregaron como `NG-R##`.
4. **Deduplicación**: necesidades idénticas o del mismo tipo entre procesos se fusionaron en una sola fila, declarando sus orígenes y el **sistema común (S-##)** al que apuntan. Regla aplicada: *si el documento/insumo es el mismo para varias instancias, no se piden N sistemas iguales sino un sistema con N opciones*.

## 2. Tabla maestra

Leyenda de Lado (L): **D** = quien da/entrega · **R** = quien recibe/conserva · **DR** = ambos · **X** = centrada en dato/decisión (órgano no personificable). Prioridad: A/M/B.

### S-01 · Expediente documental único (folio, digitalización, checklist, histórico)

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso | 
|---|---|---|---|---|---|---|
| NG-001 | PA-01·N-01 + PA-05·N-01 | R28 Persona solicitante — ejidatarios/comuneros/propietarios (externa, no aplica Directorio) | Saber dónde y hasta cuándo presentar (DRF por municipio) y los documentos exactos que se le exigen en su modalidad | D | A | PA1·A2 |
| NG-002 | PA-01·N-02 | R28 Persona solicitante | Obtener **acuse con folio** que compruebe la entrega de su solicitud | R | A | PA1·A3 |
| NG-003 | MF-01·N-MF01-01 + MF-01·N-MF01-02 | R29 Ventanilla DRF — 9 titulares 2026 [DIR] (Toluca: **Antonio Contreras Aguado**); coordinación **Tania Rivera Martínez** | Pre-registro/carga de FO-PB-501A/501B/502 y expedientes; checklist configurable por régimen de tenencia (ejidal/comunal/privada) | D | A | MF01·P1–P2 |
| NG-004 | PA-01·N-03 + PA-01·N-04 | R29 Ventanilla DRF | Cotejar original y copia (constancias, actas RAN, vigencias), comunicar faltantes y controlar los 5 días hábiles de prevención | D | A | PA1·A3 |
| NG-005 | PA-01·N-05 + T-03·N-01 | R30 SSA/MIF — **Rigoberto León Contreras**, Subdirector [DIR l.98–101] | Localizar expedientes de años anteriores por folio (refrendo) y vincular folio ↔ solicitud de pago ↔ póliza sin recapturar | DR | A | PA1·A6 / T03·B2 |
| NG-006 | T-01·N-09 + T-01·N-01 | R41 Jefatura de Gestión Documental — **Sergio Edgar Díaz Bernal** [DIR l.370–371] | Localizar cualquier expediente por fórmula clasificadora + ubicación física; saber cómo se clasifica/codifica en cada unidad | DR | A | T01·A5–A7 |
| NG-007 | PA-01·N-07 | R20 UJIGEV — **María Elena Juárez de Jesús** [DIR l.17–21] | Dictaminar con la prueba documental completa digitalizada (titulación, RAN, representación, no litigio) | D | A | PA1·A7 |
| NG-R01 | propuesto (doble lado de NG-002/004) | R29·R30 Ventanilla y SSA/MIF | Que **ningún documento entregado se pierda**: acuse foliado bidireccional y asiento en el expediente (receptor de todo lo que la ciudadanía entrega) | R | A | PA1·A3 |
| NG-R02 | propuesto (doble lado de NG-005) | R30 SSA/MIF / archivo | Conservar el **expediente histórico** completo y legible para refrendos y auditoría (receptor del archivo de años previos) | R | M | PA1·A6 |

### S-02 · App móvil de campo offline (GPS, minutas, fotos EXIF, sincronización)

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-008 | MF-01·N-MF01-04 + MF-07·N-MF07-02 + PA-02·N-01 + PA-06·N-04 + MF-10·N-01 | R29 técnicos de campo DRF — ⚠️ operativos sin titular en [DIR] (coordina **Tania Rivera Martínez**) | App móvil **offline** para captura en campo: puntos GPS con error de cierre, minutas firmadas, fotos con EXIF inviolable, diagnóstico visual por árbol y sincronización al reconectar | D | A | MF01·P4 / MF07·P2–P3 / PA2·A3 |
| NG-009 | MF-07·N-MF07-01 + MF-12·N-MF12-05 | R29 Verificador de campo / inspector de remisiones | Descargar offline expediente, polígono y consulta móvil de registros autorizados (remisiones) antes de salir a campo | R | A | MF07·P1 / MF12·P6 |
| NG-010 | MF-09·N-MF09-02 + PA-04·N-02 | R29 brigada de inventario / verificador | Formularios validados de captura dasométrica y verificación de distribución de plantación en 100% de la superficie | D | A | MF09·P2 / PA4·C2 |
| NG-R03 | propuesto (doble lado de NG-008) | R28 Persona beneficiaria | Recibir **copia firmada de la minuta** levantada en campo y que el expediente la conserve (hoy la minuta se firma por duplicado en papel) | R | A | PA1·C3 / MF07·P3 |

### S-03 · Plataforma SIG (geoprocesamiento, raster, capas, reportes geográficos)

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-011 | MF-01·N-MF01-05 + MF-12·N-MF12-02 + PA-06·N-01 + PA-06·N-02 | R-05 Especialista SIG — ⚠️ sin titular en [DIR] (UCSyTI: **Ana Yaritzy Medina Eleno**, Jefa) | Motor de geoprocesamiento (PostGIS): validación topológica (SRC 32614, atributos), descarte de traslapes contra DEMIF/PSAH/ANP y cruce multitemporal 5 años | D | A | MF01·P5 / MF12·P2 / PA6·A4 |
| NG-012 | MF-02·N-MF02-02 + MF-02·N-MF02-04 + MF-03·N-MF03-01/02/03/04 + X-01·N-X01-01/02/03/04 + PA-03·N-01 | R-02 Analista de teledetección — ⚠️ sin titular | Procesamiento raster: ingesta/calibración BOA de Sentinel-2/Landsat, librería de índices (NDVI, SAVI, NBR, dNBR), clasificación supervisada con umbrales, detección de cambios y reclasificación por umbral | D | A | MF02·P2–P4 / MF03·P1–P4 |
| NG-013 | MF-02·N-MF02-01 + MF-02·N-MF02-03 + MF-09·N-MF09-04 | R-05 SIG | Repositorio de capas institucionales (Inventario 2022, ZRHCEM, DEMIF) publicado como WMS/WFS e importación automática de vectores del expediente | D | A | MF02·P1,P3 / MF09·P5 |
| NG-014 | MF-02·N-MF02-05 + MF-02·N-MF02-06 + MF-03·N-MF03-06 + X-01·N-X01-05 + X-01·N-X01-06 | R-03 Dictaminador técnico — ⚠️ sin titular | Visor multitemporal (antes/después), semáforo de alertas (deforestación, incendios, plagas) y generador de cédulas/GeoPDF temáticos con plano y firmas | D | M | MF02·P5–P6 / X01·P5–P6 |
| NG-015 | E-03·N-E03-02 | R-02 SIG (cierre anual) | Capas agregadas (WMS/GeoJSON) de predios apoyados vs. lista de espera para visualización territorial masiva | D | A | E03·P2 |

### S-04 · Dictaminación y reglas de elegibilidad

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-016 | PA-01·N-08 + PA-05·N-03 + MF-03·N-MF03-05 | R30 SSA/MIF — **Rigoberto León Contreras** | Aplicar la **tabla de puntos** del Dictamen Técnico del SGC (cobertura, doble PSA, tala, plagas, criterios de desempate) con calculadora y semáforo de elegibilidad | D | A | PA1·A7 / MF03·P5 |
| NG-017 | MF-01·N-MF01-03 | R20 UJIGEV — **María Elena Juárez de Jesús** | Panel de dictaminación jurídica con consulta de padrones y validación registral agraria | D | M | MF01·P3 |
| NG-018 | MF-07·N-MF07-04 + MF-07·N-MF07-05 | R-03 Coordinador DRF — ⚠️ (coordina **Tania Rivera Martínez**) | Calculadora de cumplimiento ponderado (≥80%) y bandeja de validación regional con semáforo y panel de evidencia fotográfica | D | A | MF07·P4–P5 |
| NG-019 | MF-01·N-MF01-06 + E-03·N-E03-04 | SGD / R31 DRFF — **Emmanuel Mondragón Romero** [DIR l.81–85] | Algoritmo de prelación de la Lista de Espera (ANP, marginación, cumplimiento previo, orden de ingreso) y padrón depurado | X | A | MF01·P6 / E03·P4 |
| NG-R04 | propuesto (doble lado de NG-016) | R28 Persona beneficiaria | Recibir la **resolución fundada** de su dictamen (aprobado / prevenido / improcedente) y los motivos cuando no es aprobada | R | A | PA1·A7 |

### S-05 · Gestión de comités y órganos colegiados

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-020 | E-02·N-03 + PA-01·N-09 + Karina04·N-01 + Karina04·N-02 | R19 Sec. Técnica del Comité — titular de la Dirección de Administración y Finanzas (⚠️ ¿**Irán Terán Cordero**? → PA-01·V-03); firma la Presidencia | Convocar con documentación completa (3 días hábiles ordinaria / 72 h / 24 h extraordinaria), registrar asistencia y quórum; OIC vigila la sesión (voz sin voto) | D | A | PA1·A9 / E02·A3 |
| NG-021 | E-02·N-04 | vocales R32/R38 (Comité Técnico FIPASAHEM, CVT) — ⚠️ vocalías sin nombres (PA-01·V-02/V-03) | **Recibir el paquete de dictámenes e informes antes de la sesión** para poder autorizar y dejar el acuerdo en acta | R | A | E02·A4 |
| NG-022 | Karina04·N-04 + PA-06·N-03 + PA-04·N-04 + MF-13·N-04 | Secretaría Técnica / R32 Comité | Actas con folio, firmas recabadas en máximo 10 días hábiles y **bitácora inmutable de acuerdos** (asignaciones, reintegros, bajas) | D | A | PA1·A9 / MF13·A5 |
| NG-023 | T-02·N-03 + T-02·N-04 + T-02·N-11 | R20 UJIGEV / R19 DG — **María Elena Juárez de Jesús** / **Alejandro Santiago Sánchez Vélez** [DIR l.1–8] | Obtener el **acuerdo numerado** de sesión (Consejo/Comité) y el estado del expediente de reforma; proyectos con revisión jurídica y créditos completos antes de aprobar | X | A | T02·A5–A6 |
| NG-024 | PA-01·N-19 + E-04·N-05 | R36 CVT ⚠️ (composición no documentada) / R19 Sec. Técnica | Recibir aviso de ingreso de solicitudes y paquete de dictámenes; disponer el estado de metas y financiamiento al momento de cada sesión | R | M | PA1·A8 / E04·C3 |
| NG-R05 | propuesto (doble lado de NG-022) | R32 Comité / R18 Consejo Directivo (⚠️ integración 2026 desconocida — T-02·V-04) | **Conocer la decisión**: que todo acuerdo (autorización, baja, reintegro, reforma) quede asentado, numerado y consultable — dato/decisión, no "dar documento" | X | A | transversal |

### S-06 · Pagos y ministraciones (70/30, fiduciaria, trazabilidad del dinero)

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-025 | PA-03·N-02 + PA-04·N-03 + PA-02·N-03 + PA-01·N-15 + PA-05·N-05 | R31 DRFF — **Emmanuel Mondragón Romero** / R30 SSA/MIF | Motor de reglas de pago: bifurcación (≤5 ha 100% / >5 ha 70-30), control por beneficiario de ministraciones e informes, bloqueo del 30% hasta evidencia y **ajuste proporcional** con justificación | D | A | PA1·B4,C5 / PA3·B2 |
| NG-026 | PA-01·N-12 + T-03·N-02 | R15 DAFGD — **Irán Terán Cordero** [DIR l.111/117] | Girar la solicitud de pago a la fiduciaria por la vía formal (Secretaría Técnica, 5 días) y generar layouts de CLABEs y montos exactos | D | A | PA1·B4 / T03·B3 |
| NG-027 | PA-05·N-04 | R15 DAFGD — **Irán Terán Cordero** | Repositorio seguro de carátulas bancarias y CLABEs de las personas beneficiarias | R | A | PA5·B2 |
| NG-028 | PA-06·N-05 + MF-13·N-06 + MF-13·N-09 | R15 DAFGD / R13 OIC — **Jesús Alejandro Rentería Núñez** [DIR l.42] | Pista de auditoría del dinero: folio del expediente → transferencia/comprobante → reintegro (fiduciaria F/663 en PSAHEM; cuenta PROBOSQUE en los demás) | DR | A | PA6·B3 / MF13·C7 |
| NG-R06 | propuesto (doble lado de NG-026) | R28 Persona beneficiaria | **Enterarse de que el pago fue liberado** y cómo/cuándo cobrar (prioridad concurrentes) | R | A | PA1·B6 |

### S-07 · Contratos y convenios

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-029 | PA-01·N-11 + PA-02·N-02 | R31 DRFF + R20 UJIGEV — **Emmanuel Mondragón Romero** / **María Elena Juárez de Jesús** | Catálogo de plantillas jurídicamente validadas (Contrato de Adhesión, Convenio de Concertación, adéndums) y generación automática con datos del expediente y polígono aprobado | D | A | PA1·B1–B2 |
| NG-R07 | propuesto (doble lado de NG-029) | R28 Persona beneficiaria | Recibir y conservar su **contrato firmado** (y adéndums) con copia legible | R | A | PA1·B3 |

### S-08 · Incumplimiento, rescisión y reintegro

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-030 | MF-13·N-01 | R29·R30 — DRF/SSA-MIF | Documentar el incumplimiento con evidencia (minuta, informe, denuncia) y adjuntarla al expediente | D | A | MF13·A1–A2 |
| NG-031 | MF-13·N-02 + PA-05·N-06 + PA-04·N-04 + E-02·N-10 | R20 UJIGEV / R32 Comité | Consultar listado de incumplidos y predios con procedimientos; **bloquear** emisión de nuevos recursos a quien figure; cruzar quejas/denuncias del OIC | DR | A | MF13·A3 / PA5·C6 |
| NG-032 | MF-13·N-05 + PA-01·N-16 | R20 UJIGEV + R15 DAFGD | Gestionar la devolución con acuerdo del Comité e instrucción formal (sin instrucción no hay cobro) | D | A | MF13·A6–A8 |
| NG-033 | MF-13·N-08 + MF-13·N-10 | R31·R15 DRFF/DAFGD | Reasignar montos no ejercidos a predios factibles del mismo ejercicio y exportar cifras de reintegro/reasignación al informe anual | D | M | MF13·C1–C7 |
| NG-R08 | propuesto (MF-13·N-03/N-07 ya son receptor; se conservan como: | R28 Persona beneficiaria | Recibir **notificación con motivos** y saber cómo subsanar, desistir o acreditar al sucesor; comprobar el reintegro y salir del Listado con prueba | R | A | MF13·A4 / A8 |

### S-09 · Estadística, indicadores y reportes

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-034 | E-02·N-01 + E-03·N-E03-01 + E-03·N-E03-03 + E-04·N-01 + Karina03·N-01 + Karina03·N-02 + Karina03·N-04 + PA-01·N-17 | R21 UIPPE — **Margarita Olivares Márquez** [DIR l.23–26] / R-01 Analista de Planeación ⚠️ | Consolidación automática por ejercicio y por beneficiario (hectáreas, montos, cobertura, cumplimiento) con corte configurable, sin recompilar a mano ni volver a pedir a las áreas | D | A | E02·A1 / E03·P1–P3 |
| NG-035 | E-02·N-02 + E-04·N-02 + Karina03·N-05 | R21 UIPPE | Saber qué se le pide a cada informe (contenido mínimo) y contar con las **metas vigentes de la MIR** para detectar desviación (MIR 2022 localizada; falta la vigente → X-02·V-01) | R | A | E02·A2 / E04·A1 |
| NG-036 | E-02·N-06 + E-02·N-07 + E-02·N-08 + E-02·N-09 + Karina08·N-01 + Karina08·N-02 + Karina08·N-05 + Karina03·N-03 | R21 UIPPE / persona designada de seguimiento (2023: **Lic. Jessica Fabiola Luja Navas**; 2022 evaluadora: **María Eugenia Morales Rodríguez**, SINSA) | Seguimiento del PAE: saber qué se evalúa, sostener a la persona designada ~6 meses, entregar padrones y evidencia a la evaluadora, y dar cumplimiento documentado a hallazgos (convenio + acta + ASM) | DR | A | E02·B1–B6 |
| NG-037 | E-03·N-E03-05 + E-03·N-E03-06 + Karina08·N-03 | R-03 Director de Restauración ⚠️ / R19 DG | Tablero ejecutivo con filtros (municipio, DRF, tenencia, programa) y exportación masiva auditable (PDF sellado, CSV, Excel) | D | M | E03·P5–P6 |
| NG-038 | E-04·N-03 + E-04·N-04 + E-04·N-06 + E-04·N-08 + E-02·N-05 + E-02·N-11 + T-02·N-05 | R21 UIPPE + R15 DAFGD — **Margarita Olivares Márquez** / **Irán Terán Cordero** | Calendario real de entregas (SIED, Plan de Desarrollo, memoria, ayudas y subsidios, Cuenta Pública) y **canal único y trazable** de requerimientos extraordinarios (OM, SF, OSFEM) | D | A | E04·B1–C2 |
| NG-039 | MF-13·N-09 + E-04·N-07 | R13 OIC / OSFEM (externo) | Pista de auditoría institucional de resultados: de la ministración al reporte publicado, con fechas y montos ("¿cuánto regresó?") | X | A | transversal |

### S-10 · Marco jurídico y Normateca

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-040 | T-02·N-01 + T-02·N-02 + T-02·N-06 + T-02·N-12 | R27 Unidades + R20 UJIGEV — **María Elena Juárez de Jesús** | Consultar el marco vigente desde una sola fuente con certeza de vigencia; enterarse de reformas publicadas en Gaceta para reemplazarlas en la Normateca y avisar a las unidades | DR | A | T02·B1–B6 |
| NG-041 | T-02·N-07 + T-02·N-08 + T-04·N-01 | R23 Enlace de Mejora Regulatoria — ⚠️ titular desconocido (T-02·V-03; 2019: **Mtra. Lucía Margarita Burciaga Valdez**) | Presentar proyectos en SAIR, conocer la resolución de CEMER y mantener el PMR en SIPAMR; repositorio de dictámenes CEMER, actas del Comité Interno y reportes RAPA | D | A | T02·C4–C6 |
| NG-042 | T-02·N-05 (remitente) | R21 UIPPE — **Margarita Olivares Márquez** | Recopilar de cada unidad los avances del programa anual para el reporte trimestral al Comité Interno de Mejora Regulatoria | D | M | T02·C2 |

### S-11 · Archivo, calidad ISO y catálogo de formatos del SGC

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-043 | T-01·N-02 + T-01·N-03 | R40 Coordinación de Archivos — ⚠️ | Mantener CGCA, Guía Simple e Inventario sincronizados con la estructura real; firmar inventarios por unidad con datos verificables | D | A | T01·A3–A6 |
| NG-044 | T-01·N-04 + PA-03·N-03 | R43 Operador del SGC — ⚠️ | **Catálogo único de formatos del SGC** vigentes (Dictamen Técnico, minutas, FO-PB-520 A/B, FO-PB-509-A, informes) con plantillas utilizables — un catálogo con opciones por proceso, no un formato por unidad | D | A | T01·B2 / PA3·B1 |
| NG-045 | T-01·N-05 + T-01·N-06 + T-01·N-07 | R43·R44 Responsable ISO — ⚠️ / R26 Operador del sitio — **Ana Yaritzy Medina Eleno** (UCSyTI) | Programa de auditorías internas y recertificación NYCE a tiempo (certificado vencido 2025-10-10); publicar certificados e instrumentos sin que el sitio contradiga los documentos | D | A | T01·B3–B7 |
| NG-046 | T-01·N-08 | R40 Coordinación de Archivos | PADA con acciones trazables por unidad (patrón DPTS: trámite → acción → unidad → fecha) e informe anual | D | M | T01·C1–C4 |
| NG-047 | MF-10·N-03 | R20 UJIGEV + DSF + DG — **María Elena Juárez de Jesús** / **Alejandro Santiago Sánchez Vélez** | Flujo de **validación digital y firma electrónica (e.firma)** interdepartamental con plazos (DSF → UJIGEV → DG) — requisito común a todo documento que exige firma | DR | A | MF10·B3–B4 |

### S-12 · Planta y viveros

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-048 | PA-02·N-04 + PA-04·N-01 | R31 DRFF — **Emmanuel Mondragón Romero** | Módulo único de **Vales de Planta** conectado al inventario de los viveros (asignación, alerta de no recolección a 30 días, sobre-asignación) — un sistema con opciones por programa | D | A | PA2·B1 / PA4·B1 |
| NG-R09 | propuesto (doble lado de NG-048) | R28 Persona beneficiaria | Saber **cuándo, dónde y con qué recoger su planta** (vale canjeable) y conservar el vale firmado | R | M | PA2·B1 |

### S-13 · Interoperabilidad con sistemas externos

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-049 | MF-10·N-02 | R41 Protección Forestal — ⚠️ | Interfaz con el sistema federal **SINAT** (SEMARNAT) para no duplicar la captura del Informe Técnico Fitosanitario | DR | A | MF10·A4 |
| NG-050 | MF-01·N-MF01-03 (parte registral) | R20 UJIGEV — **María Elena Juárez de Jesús** | Consulta/interoperabilidad con **RAN y RPP** para validar tenencia sin inspección visual de sellos (hoy manual → MF-01·V-01) | DR | M | MF01·P3 |
| NG-051 | T-04·N-04 | R3 Coordinación de Mejora — ⚠️ | API/webhook de la encuesta de satisfacción RETYS hacia el SGD para evaluar desempeño por DRF | R | M | T04·C3 |

### S-14 · Portal ciudadano y transparencia

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-052 | PA-01·N-10 + Karina08·N-04 | R31 DRFF + R26 Operador del sitio | Publicar y notificar **resultados fundados** (Gaceta + sitio + DRF; no aprobados con motivo) y que la ciudadanía acceda al informe de resultados en forma pública y comprensible | D | A | PA1·A10 |
| NG-053 | T-04·N-02 | R2 Ciudadanía (externa) | **Ventanilla digital**: subir documentación escaneada y formatos FO-PB al SGD, eliminando el paso presencial | D | A | T04·B3 |
| NG-054 | T-02·N-09 + T-01·N-07 (publicación) | R26 Operador del sitio — **Ana Yaritzy Medina Eleno** ⚠️ operador real sin identificar (T-02·V-06) | Recibir el contenido actualizado con canal y periodicidad definidos (quién sube, cuándo) y publicar instrumentos vigentes | R | A | T02·B5 |
| NG-R10 | propuesto (doble lado de NG-052) | R28 Persona solicitante | **Enterarse del resultado de su solicitud** (aprobada o no, con motivo) por un medio trazable, no solo por la publicación | R | A | PA1·A10 |

### S-15 · Inventario forestal

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-055 | MF-09·N-MF09-01 | R-03 SIG/inventario — ⚠️ | Diseño muestral y asignación de conglomerados con guías de navegación (metodología INFyS) | D | M | MF09·P1 |
| NG-056 | MF-09·N-MF09-03 + MF-09·N-MF09-05 | R-02 Analista biométrico — ⚠️ | Cálculo biométrico automático (volumen, biomasa/carbono) con control de consistencia y **versionado histórico** de la capa del Inventario | D | A | MF09·P4–P6 |

### S-16 · Sanidad forestal e incendios

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-057 | MF-11·N-01 | R2 Despacho/Centro de control — ⚠️ | Plataforma de **Despacho Asistido (CAD)**: registrar el reporte, geolocalizar el punto de calor y asignar la brigada más cercana | D | A | MF11·B2 |
| NG-058 | MF-11·N-03 | R4 Jefe de incidente — ⚠️ | Módulo de **Sistema de Comando de Incidentes**: Plan de Acción del Incidente (PAI), asignación de recursos y bitácora de comunicaciones | D | A | MF11·C3 |
| NG-059 | MF-11·N-04 + MF-11·N-05 + MF-11·N-02 | R2 SIG de incendios — ⚠️ | Trazar polígono quemado y calcular área exacta; clasificar impacto (mínimo/moderado/severo) por mortalidad arbórea; registrar km de brechas cortafuego construidas | D | M | MF11·A2 / D2 |
| NG-060 | MF-10·N-04 | R40 Portal de Prestadores — ⚠️ | Que el **Prestador de Servicios Técnicos** cargue el Informe Técnico Fitosanitario con anexos cartográficos directamente al SGD | D | M | MF10·A2 |
| NG-R11 | propuesto (doble lado de NG-057/058) | R28 Comunidad/predio afectado | Recibir el **reporte de atención del incendio/plaga** y el estado de su predio (hoy el flujo es solo de salida de información) | R | M | MF11·D2 |

### S-17 · Control de plazos y trámites

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-061 | PA-05·N-02 + T-04·N-03 | R29 DRF + R-04 Encargado de trámites — ⚠️ | **Reloj de plazos** (5 días de prevención, tiempos de respuesta máximos RETYS) con alertas y desechamiento automático para evitar responsabilidades | D | A | PA5·A3 / T04·C2 |

### S-18 · Adquisiciones y contabilidad

| ID | Origen(es) | Rol — personificación | Necesidad | L | P | Paso |
|---|---|---|---|---|---|---|
| NG-062 | T-03·N-03 | R16 Contabilidad — ⚠️ | Repositorio documental que exija factura (XML/PDF), contrato y acta de recepción antes de marcar una póliza como pagada | D | A | T03·B1 |
| NG-063 | T-03·N-04 + T-03·N-05 | R37 Subcomité de Bases — ⚠️ / R15 DAFGD | Flujo de aprobación digital con vistos buenos antes de publicar convocatorias, y alerta de contratos/proveedores objetados (Registro Estatal de Empresas Objetadas) | D | M | T03·C2–C3 |
| NG-R12 | propuesto (doble lado de NG-062) | proveedor/contratista (externo) | Recibir acuse de su factura y conocer el estado de su pago (hoy solo PROBOSQUE lleva el control) | R | M | T03·B1 |

## 3. Duplicados eliminados y sistema común

Las siguientes necesidades de origen **no generan fila propia** en la tabla maestra: están fusionadas en el `NG-###` indicado. Regla: un solo sistema con opciones por proceso/programa.

| Necesidad(es) de origen | Fusionada en | Sistema | Motivo |
|---|---|---|---|
| PA-02·N-01 (móvil poligonal) · PA-06·N-04 (móvil minutas) · MF-10·N-01 (móvil diagnóstico) | NG-008 | S-02 | Misma app móvil de campo; cambia el formulario, no el sistema |
| MF-01·N-MF01-04 · MF-07·N-MF07-02/03 | NG-008 | S-02 | ídem |
| MF-03·N-MF03-01/02/03/04 · X-01·N-X01-01/02/03/04 · MF-02·N-MF02-02/04 · PA-03·N-01 | NG-012 | S-03 | Un solo motor raster; NDVI/SAVI/NBR/dNBR y clasificación son opciones del mismo motor |
| MF-01·N-MF01-05 · MF-12·N-MF12-02 · PA-06·N-01/02 | NG-011 | S-03 | Validación topológica y anti-traslapes: función única del SIG |
| MF-02·N-MF02-06 · MF-03·N-MF03-06 · X-01·N-X01-06 | NG-014 | S-03 | Mismo generador de cédulas/GeoPDF con plantilla por proceso |
| PA-05·N-03 · PA-01·N-08 · MF-03·N-MF03-05 | NG-016 | S-04 | Misma calculadora de puntos/elegibilidad con tabla por programa |
| MF-01·N-MF01-06 · E-03·N-E03-04 | NG-019 | S-04 | Mismo algoritmo de prelación (captura y cierre anual) |
| Karina04·N-01/02/04 · E-02·N-03/04 · PA-01·N-09 · PA-04·N-04 · PA-06·N-03 · MF-13·N-04 | NG-020/021/022 | S-05 | Un módulo de comités (convocatoria, acta, bitácora) con opciones por órgano |
| PA-03·N-02 · PA-04·N-03 · PA-02·N-03 · PA-01·N-15 · PA-05·N-05 | NG-025 | S-06 | Un motor de reglas de pago; el 70/30, el ≤5 ha y el ajuste proporcional son reglas de ese motor |
| PA-01·N-12 · T-03·N-02 | NG-026 | S-06 | Solicitud de pago + layout de dispersión = un solo flujo a fiduciaria |
| MF-13·N-06/N-09 · PA-06·N-05 | NG-028 | S-06 | Trazabilidad del dinero: pista única ministración→reintegro |
| PA-01·N-11 · PA-02·N-02 | NG-029 | S-07 | Plantilla + generador = catálogo único de contratos |
| MF-13·N-02 · PA-05·N-06 · PA-04·N-04 · E-02·N-10 | NG-031 | S-08 | Un listado de incumplidos consultable y bloqueante para todo el organismo |
| E-02·N-01 · E-03·N-E03-01/03 · E-04·N-01/N-07 · Karina03·N-01/02/04 · PA-01·N-17 | NG-034 | S-09 | Consolidación única de cifras; los reportes son vistas del mismo almacén |
| E-02·N-06/07/08/09 · Karina08·N-01/02/05 · Karina03·N-03/05 | NG-036 | S-09 | Seguimiento de evaluaciones (PAE/ASM): un solo proceso con episodios anuales |
| E-04·N-03/04/06/08 · E-02·N-05/11 · T-02·N-05 | NG-038 | S-09 | Calendario de entregas + canal único de requerimientos |
| T-02·N-01/02/06/12 | NG-040 | S-10 | Normateca con vigencias y avisos de cambio |
| T-01·N-04 · PA-03·N-03 · (X-03·V-01) | NG-044 | S-11 | **Catálogo único de formatos FO-PB/SGC** con opciones por proceso (clave del encargo del profesor: "un solo sistema con 5 opciones") |
| PA-02·N-04 · PA-04·N-01 | NG-048 | S-12 | Un módulo de vales de planta para todos los programas |
| MF-11·N-04/05/02 | NG-059 | S-16 | Evaluación de daño de incendio: un solo flujo SIG-campo |
| MF-02·N-MF02-01 · MF-09·N-MF09-04 | NG-013 | S-03 | Repositorio/publicación de capas único |
| Karina08·N-03 · E-03·N-E03-05/06 | NG-037 | S-09 | Tablero + exportación: vista del mismo almacén de datos |

**Notas de proveniencia:** 14 necesidades vienen de 3 análisis previos en `Docs/Karina/Masa forestal/` (03/04/08), que **no están en el inventario de 25 unidades** y cubren procesos ya documentados en MF-03, E-02 y E-03: se conservaron sus necesidades (fusionadas arriba) pero sus documentos quedan fuera del catálogo. Si el equipo decide retirar esos archivos, ninguna necesidad se pierde.

## 4. Alcance resultante del SGD (18 sistemas)

| Sistema | Qué resuelve | Necesidades |
|---|---|---|
| S-01 Expediente documental único | Folio, carga/digitalización, checklist por régimen, histórico/refrendo, localización archivística | NG-001…007 + R01–R02 |
| S-02 App móvil de campo offline | GPS, minutas firmadas, fotos EXIF, captura dasométrica y de verificación, sincronización | NG-008…010 + R03 |
| S-03 Plataforma SIG | Geoprocesamiento/anti-traslapes, raster e índices, capas WMS/WFS, visor y GeoPDF | NG-011…015 |
| S-04 Dictaminación y elegibilidad | Tabla de puntos, semáforo, validación de verificaciones, prelación de lista de espera | NG-016…019 + R04 |
| S-05 Gestión de comités | Convocatoria con plazos, quórum, actas firmadas, bitácora inmutable, acuerdos numerados | NG-020…024 + R05 |
| S-06 Pagos y ministraciones | Reglas 70/30 y ≤5 ha, layouts a fiduciaria, CLABEs, trazabilidad del dinero | NG-025…028 + R06 |
| S-07 Contratos y convenios | Plantillas validadas, generación por expediente, copia al beneficiario | NG-029 + R07 |
| S-08 Incumplimiento y reintegro | Evidencia, listado de incumplidos, bloqueos, devoluciones, reasignación | NG-030…033 + R08 |
| S-09 Estadística e indicadores | Consolidación por ejercicio/beneficiario, MIR, PAE/ASM, tableros, entregas regulatorias | NG-034…039 |
| S-10 Marco jurídico y Normateca | Vigencias, Gaceta, SAIR/SIPAMR, avisos de cambio | NG-040…042 |
| S-11 Archivo, ISO y catálogo de formatos | CGCA/inventario, formatos SGC, auditorías y certificados, PADA, e.firma | NG-043…047 |
| S-12 Planta y viveros | Vales, inventario de viveros, alertas de recolección | NG-048 + R09 |
| S-13 Interoperabilidad externa | SINAT, RAN/RPP, encuesta RETYS | NG-049…051 |
| S-14 Portal ciudadano | Resultados fundados, ventanilla digital, publicación de instrumentos | NG-052…054 + R10 |
| S-15 Inventario forestal | Diseño muestral INFyS, biometría/carbono, versiones de la capa | NG-055…056 |
| S-16 Sanidad e incendios | CAD, SCI/PAI, evaluación de daño, ITF con PST | NG-057…060 + R11 |
| S-17 Control de plazos | Relojes de prevención y tiempos de respuesta con alertas | NG-061 |
| S-18 Adquisiciones y contabilidad | Facturas/pólizas, vistos buenos, proveedores objetados | NG-062…063 + R12 |

## 5. Pendientes de la tabla

1. **Personificación incompleta** (⚠️): los roles operativos de campo (técnicos de DRF, SIG, brigadas, Protección Forestal, contabilidad, subcomités) no llegan al [DIR]; para cerrar se necesita el organigrama de segundo nivel de cada Dirección. Las necesidades **no se atribuyen a personas desconocidas**: quedan en el puesto y marcadas ⚠️.
2. **Órganos colegiados**: Consejo Directivo, Comités y CVT se expresan como necesidades de **dato/decisión** (NG-023, NG-R05, NG-021); sus integraciones vigentes siguen en T-02·V-04 y PA-01·V-02/V-03.
3. **MIR vigente 2025-2026**: la MIR 2022 está capturada (`Programas de apoyo/Evaluacion_PAE/evaluacionEspecifDesemProgPresup20240829.pdf` pp. 23–28); falta la vigente para NG-035 (X-02·V-01).
4. **Formatos sin plantilla** (NG-044): FO-PB-503, 509-A y 520 A/B siguen sin versión pública (X-03·V-01, MF-07·V-MF07-04); el catálogo debe recabarlos del SGC.
5. **Documentos de `Docs/Karina/`**: decidir si se archivan definitivamente (sus necesidades ya están absorbidas — §3).
