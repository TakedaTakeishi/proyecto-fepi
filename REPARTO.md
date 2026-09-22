# Reparto del sprint — 22 y 23 de septiembre de 2026

El profesor decidió que el germoplasma queda fuera del proyecto. Todo el esfuerzo se concentra en **masa forestal (MF)** y los **6 programas de apoyo (PA)**. Lo que nos pidió, y que organiza las tareas de estos dos días:

1. Saber **qué documentos y qué datos entran y salen en cada paso** de los procedimientos.
2. Cuáles son los **requisitos de masa forestal**: qué se clasifica y qué se busca en los mapas satelitales.
3. Cuáles son los **objetivos de los programas**.
4. **Cómo se revisan** los programas y **si existen formatos** para ello.
5. La **fiscalización y la estadística** de los programas.

Los documentos de referencia: catálogo en el `README.md` raíz; plantilla en `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md` (12 secciones; la sección 12 es la tabla de entrada/salida por paso).

## Joni

- **Completar los 4 documentos que ya terminé** (`PA-01_PSAHEM.md`, `E-02_ESTADISTICA_EVALUACION_TEMPORADA.md`, `E-04_ESTADISTICA_INSTITUCIONAL.md`, `T02_MARCO_JURIDICO_INSTITUCIONAL.md`): añadir al final de cada uno una tabla con una fila por paso — qué documento o dato entra (con la ruta real del archivo en `Docs/Comun/` o la página de la fuente), qué datos se capturan en ese paso, y qué documento sale (con el nombre de su formato si existe).
- **Escribir el documento "Cómo se revisan los programas de apoyo y con qué formatos" (X-03)** — nuevo: `Docs/Joni/Programas de apoyo/X-03_REVISIONES_Y_FORMATOS.md`. Debe responder quién revisa cada programa (Comisión de Verificación Técnica, Comités de Admisión y Seguimiento, Instancia Normativa), en qué momento (visita de campo o revisión de papeles), y listar cada formato que existe de verdad (FO-PB-501A, FO-PB-501B, FO-PB-502, guía del proyecto técnico, minutas de verificación) con la ruta del archivo en disco; lo que no tenga versión descargable se anota como vacío. Fuentes: capítulos de verificación y evaluación de los 6 `RO_2026_*.pdf`, `Docs/Comun/Programas de apoyo/Comites/` y `FIPASAHEM/`, y los `.docx` de formatos.
- **Documentar qué pasa cuando un beneficiario incumple: rescisión y reintegro (MF-13)** — nuevo: `Docs/Joni/Masa_Forestal/MF-13_RESCISION_REINTEGRO.md`, plantilla completa. Fuentes: `RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` pp. 21–23, `RO_2026_CapturandoCarbono.pdf` pp. 11–13, `Docs/Comun/Masa forestal/Reg_LGDFS.pdf`.
- **Documentar la gestión documental y la calidad ISO 9001 (T-01)** — nuevo: `Docs/Joni/Transversal/T-01_GESTION_DOCUMENTAL_CALIDAD.md`. Fuentes: `Docs/Comun/Gestión documental y calidad/` y `Docs/Comun/Sitio web/certificacion_iso9001.html`. Ojo: los certificados ISO están escaneados, hay que leerlos como imagen.

*Por qué importa:* el profesor quiere saber "qué se sube, qué se anota, qué formato se usa" en cada paso — eso cubre la tabla de entrada/salida y el documento de revisiones. Y preguntó explícitamente por el proceso de fiscalización y "cuánto dinero regresó": el documento de rescisión cierra el ciclo del dinero, mostrando cómo se cobra un apoyo mal aplicado.

## Valeria (Patatuchi)

- **Completar los 5 documentos de masa forestal ya terminados** (MF-01, MF-02, MF-03, MF-07 y E-03 en `Docs/Valeria/Masa_Forestal/`) con la misma tabla de entrada/salida por paso.
- **Escribir el documento "Qué necesita PROBOSQUE de los mapas satelitales" (X-01)** — nuevo: `Docs/Valeria/Masa_Forestal/X-01_REQUISITOS_MASA_FORESTAL.md`. Debe responder con evidencia: qué clases de vegetación y cobertura distinguen en los mapas, con qué umbrales (bosque templado con dosel ≥50%, selva baja caducifolia ≥40%, matorral ≥40% para dictaminar apoyos), qué buscan en las imágenes (pérdida de cobertura, zonas quemadas, plagas, carbono) y con qué capas trabaja el SIG de PROBOSQUE. Fuentes: `Docs/Comun/Sitio web/inventario_forestal.html`, `RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf` pp. 8–9 y glosario, `RO_2026_CapturandoCarbono.pdf` pp. 7–9, funciones de SAMIF/SAPCAT en el MGO, y lo ya escrito en MF-02 y MF-03.
- **Documentar el Inventario Estatal Forestal y de Suelos (MF-09)** — nuevo: `Docs/Valeria/Masa_Forestal/MF-09_INVENTARIO_ESTATAL.md`. Fuentes: `Docs/Comun/Sitio web/inventario_forestal.html` (edición 2022: conglomerados, parcelas, cartografía) y MGO SAMIF f.12 (actualización con CONAFOR).
- **Documentar los aprovechamientos autorizados (MF-12)** — nuevo: `Docs/Valeria/Masa_Forestal/MF-12_APROVECHAMIENTOS_DEMIF.md`. Fuentes: `Docs/Comun/Masa forestal/AUTORIZACIONES_DEMIF_ago2023.xlsx` y `PROBOSQUE-concesiones-2023.pdf`.

*Por qué importa:* el profesor pidió dejar de hablar de "imágenes satelitales" en general y decir **qué** se clasifica y **cómo**: categorías, criterios, histórico de incendios, zonas y prioridades. Ese documento es la base para poder prometer cualquier función de mapas en el SGD. El inventario y los permisos de aprovechamiento son las dos fuentes reales de los números que SAMIF reporta cada mes y cada año (E-03).

## Leonardo (Leo)

- **Documentar tres programas de apoyo: PA-02 Restauración Hidrológico-Forestal, PA-03 Capturando Carbono y PA-04 Plantaciones Sustentables** — nuevos en `Docs/Leo/Programas de apoyo/`. No hay que inventar la estructura: se copia `PA-01_PSAHEM.md` y se rellena con lo que **difiere** en cada RO (quiénes son elegibles, montos, tipo de apoyo, su comité, sus formatos), citando página. Cada documento incluye desde el inicio la tabla de entrada/salida por paso. Fuentes: `RO_2026_Restauración_Hidrológico-Forestal.pdf`, `RO_2026_CapturandoCarbono.pdf`, `RO_2026_PlantacionesSustentables.pdf`, los formatos FO-PB de `Docs/Comun/Programas de apoyo/`, los reglamentos de comité en `Comites/`, y los informes previos en `Reportes por reclamar/`.
- **Escribir el documento "Objetivos de los 6 programas" (X-02)** — nuevo: `Docs/Leo/Programas de apoyo/X-02_OBJETIVOS_PROGRAMAS.md`: tabla comparativa — programa | objetivo general (texto copiado del RO, con página) | a quién atiende | tipo y monto del apoyo | indicador con que mide si cumplió. Fuentes: la sección de objetivo de los 6 `RO_2026_*.pdf` (la lectura ya viene de la tarea anterior) y `FICHAS_Programas_Sociales_2023.xlsx`.
- **Documentar sanidad forestal (MF-10): qué pasa cuando un bosque se enferma** — nuevo: `Docs/Leo/Masa_Forestal/MF-10_SANIDAD_FORESTAL.md`, plantilla completa. Fuentes: `Docs/Comun/Masa forestal/NOTATEC2_EmergenciaFitosanitaria.pdf` y `Docs/Comun/Sitio web/sanidad_forestal.html`.

*Por qué importa:* el profesor pidió "entender los objetivos de cada programa" y "cuáles son los compromisos y objetivos del programa", porque sin eso no hay forma de justificar por qué el SGD mide nada. Y estos tres programas completan la mitad de los programas del alcance: los 6 comparten el ciclo de PA-01, así que documentarlos es llenar diferencias, no empezar de cero.

## Octavio

- **Documentar los dos programas que faltan: PA-05 Manejo Forestal Sustentable y PA-06 Restauración Forestal Integral** — nuevos en `Docs/Octavio/Programas de apoyo/`, con el mismo método (copiar la estructura de PA-01 y llenar diferencias). Fuentes: `RO_2026_ManejoForestalSustentable.pdf`, la `GUÍA_ProyectoTécnico_RestauraciónForestalIntegral_2026.pdf` y el formato FO-PB-501B para PA-06, los reglamentos de comité en `Comites/`, y el informe previo en `Reportes por reclamar/`.
- **Documentar incendios forestales: prevención y combate (MF-11)** — nuevo: `Docs/Octavio/Masa_Forestal/MF-11_INCENDIOS.md`, plantilla completa. Fuentes: `Docs/Comun/Sitio web/incendios_forestales.html` y las funciones del Sistema de Comando de Incidencias en el MGO.
- **Documentar finanzas y adquisiciones (T-03)** — nuevo: `Docs/Octavio/Transversal/T-03_FINANZAS_ADQUISICIONES.md`: de dónde sale el dinero de los programas, cómo llega al beneficiario (los pagos 70/30 a través del fideicomiso FIPASAHEM) y cómo se contrata. Fuentes: `Docs/Comun/Finanzas y adquisiciones/`, `Docs/Comun/Manual Jurídico/jul301b.pdf` (manual de contabilidad 2025, tiene texto) y `Docs/Comun/Programas de apoyo/FIPASAHEM/`.
- **Documentar los trámites en línea (T-04)** — nuevo: `Docs/Octavio/Transversal/T-04_TRAMITES_RETYS.md`: qué trámites de PROBOSQUE están en el RETYS del Estado, con qué cédula y qué formato descargable oficial. Además, transcribir la cédula RETYS del trámite PSAHEM (ID 51) y guardarla en `Docs/Comun/Trámites RETYS/` — esto cierra el vacío V-07 de PA-01. Fuentes: `retys.edomex.gob.mx` (pedir la página en `format=html` para no perder los enlaces a los formatos), `Docs/Comun/Sitio web/tramites_servicios.html` y `mejora-regulatoria.html`.

*Por qué importa:* el profesor puso el dinero en el centro: "¿cómo se justifica?", "¿cuál es el proceso de fiscalización?". Finanzas explica de dónde viene cada peso que pagan los programas y qué papel deja esa salida de dinero, y conecta con la parte de reintegro que documenta Joni. Los trámites RETYS importan porque son la única fuente oficial que muestra **el formato tal cual lo recibe el público**; sin eso estaríamos inventando nombres de formatos. Incendios completa el ciclo de vigilancia de masa forestal junto con el histórico que pide el profesor.

## Reglas comunes a todas las tareas

1. Plantilla: las 12 secciones de `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md` (la sección 12 es la tabla de entrada/salida por paso).
2. Todo dato va con su fuente y página; lo que no esté en las fuentes se marca como vacío (V-##), nunca se inventa.
3. Diagramas: SVG generados con el script plantilla `Docs/Joni/Diagramas/PA01/gen-diagramas.mjs` (se edita el script, no el `.svg`).
4. Al terminar cada documento, cambiar el estado en el README raíz y subir a la rama propia; Joni consolida a `main`.
