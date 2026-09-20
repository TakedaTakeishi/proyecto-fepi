# AGENTS.md — Proyecto SGD PROBOSQUE (FEPI)

## Qué es y en qué fase estamos

Sistema de Gestión Documental (SGD) para PROBOSQUE (organismo forestal del Estado de México) con tres dominios:

1. **Control de masa forestal** (imágenes de satélite)
2. **6 programas de apoyo** (los 6 `RO_2026_*.pdf`: PSAH, Restauración Hidrológico-Forestal, Capturando Carbono, Plantaciones Sustentables, Manejo Forestal Sustentable, Programa Estatal Guardabosques)
3. **Banco de germoplasma**

**Fase actual: entendimiento del problema.** El repo NO tiene código — solo fuentes (PDF/HTML/xlsx/docx) y documentos de análisis en Markdown. No generar andamiaje de software ni asumir stack tecnológico salvo que se pida explícitamente. El alcance del sistema se define después de documentar los procedimientos de los 3 dominios.

## Estructura (reorganizada 2026-09-14; equipo reorganizado 2026-09-19)

**Equipo (2026-09-19):** documentan solo 4 investigadores — **Joni, Leonardo, Octavio, Patatuchi** (reparto por fases en el README raíz). **Alan, Karina y Xareni pasan a programadores** (ya no documentan procesos; sus carpetas quedan como archivo/para código y sus informes en `Reportes por reclamar/` son fuente de E-02). Nuevos procesos **E-01..E-04** (estadística de cierre de temporada, sustento verificado en el MGO 2025: UIPPE f.1/11/13 y SAMIF f.8/9) — MF-08 quedó absorbida por E-02/E-03.

- `Docs/Comun/` — **fuentes primarias compartidas**, por dominio: `Manual Jurídico/`, `Sitio web/` (copia offline de 39 páginas), `Germoplasma/`, `Programas de apoyo/` (con `Reportes por reclamar/`), `Masa forestal/`, `Finanzas y adquisiciones/`, `Gestión documental y calidad/`, `Pendientes de revisión/`. Ver `Docs/Comun/README.md`.
- Carpetas personales — **solo trabajo propio** (análisis, diagramas, reportes): `Docs/Joni/` (germoplasma: `Germoplasma/` con docs numerados `00_` guía/inventario, `01_` mapa de procesos y vacíos, y **análisis de procesos con prefijo `<ID>##_`** — p. ej. `G09_DISTRIBUCION_GERMOPLASMA.md`, donde el ID (`G##` fundamental / `GS##` soporte) coincide con el del mapa `01_` y del README —seguir la numeración—, `Diagramas/` con `.mmd`/`.puml` heredados y SVG canónicos generados por script (`gen-diagramas.mjs`)), `Docs/Alan/` y `Docs/Xareni/` (programas de apoyo), `Docs/Karina/` (masa forestal). Por crear cuando inicien: `Docs/Leonardo/`, `Docs/Octavio/`, `Docs/Patatuchi/`.
- Regla: un documento fuente NO se duplica en carpetas personales; si alguien necesita una copia de trabajo, la mueve desde `Comun/` a su carpeta y lo anota.

## Formato estándar para análisis de procedimientos (aplica a los 3 dominios)

Plantilla de referencia: `Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md`. Secciones obligatorias:

1. Objeto y alcance (incluido / excluido)
2. Base documental — tabla con **claves de cita** (`[MGO]`, `[VEN]`…) que se reutilizan en todo el doc
3. Glosario de siglas
4. Roles (`R1..Rn`, internos/externos, **personificados**: puesto y titular reales del Directorio para cada rol; donde el Directorio no llega —operativos, jefaturas de Departamento, enlaces externos— marcar ⚠️ **desconocido** y registrar la búsqueda en los vacíos del mapa. Una necesidad no puede atribuirse a una persona que no sabemos quién es)
5. Funciones y actividades por rol
6. Reglas de negocio (`BR-#`, cada una con su fuente `[clave]`)
7. **Procedimiento narrado en pasos con ID único por modalidad** (p. ej. `A1..A8`, `B1..B9`) — los pasos son el ancla de trazabilidad; al paso se cita externamente como `<ID>·A#` (proceso·paso, p. ej. `G9·A5`)
8. **Diagrama de actividad en SVG con carriles por rol, generado por script**: los carriles son los roles/responsables (R#); los nodos llevan solo **ID del paso + acción** (sin claves de fuente ni notas "(inferido)" — eso va en las tablas). Reglas de flujo: todo desciende (ninguna arista sube, salvo un bucle explícito) y las flechas aterrizan en el **centro del borde** del nodo siguiente, nunca en una esquina. Plantilla del generador: `Docs/Joni/Diagramas/G09/gen-diagramas.mjs` (Node, sin dependencias) — se edita el **script**, no los `.svg`; `node gen-diagramas.mjs <dir>` regenera los SVG en `Diagramas/<ID>##/` y el `.md` solo los inserta. Estilo sobrio claro: fondo #FAFBFC, carriles #F7F8FA, cajas #E8F0FE/#93B4E0, decisiones #FDF6E3/#D8BC6A, aristas #566171. Rasterizar vista de prueba: `msedge --headless=new --disable-gpu --window-size=W,H --screenshot=out.png file:///<ruta>.svg`.
9. Tabla de necesidades: `N-##` | Rol | Necesidad | Prioridad **A/M/B** | **Paso del procedimiento** (columna que enliza cada necesidad con el paso, p. ej. "Proceso A, paso 3") | Origen `[clave]` (con páginas). La necesidad es lo tangible que el rol **requiere para ejecutar su paso** (consultar, comprobar, recibir, girar, enterarse…), anclada al proceso que manda; NUNCA una solución o entregable nuestro ("documentar el procedimiento", "definir la serie") — eso va a vacíos/§10
10. Registros que el SGD debe gestionar (catálogo documental)
11. Vacíos y siguientes pasos

Mantener la cadena de trazabilidad: `[clave fuente] → BR-# → paso → N-##`.

## Trampas al trabajar con las fuentes

- Muchos PDF están **escaneados sin capa de texto** (p. ej. certificados ISO; `jul301b.pdf` dejó de ser uno: es la versión 2025 con texto): una búsqueda de texto devuelve 0 resultados y eso NO significa que el dato no exista. Verificar renderizando las páginas como imagen.
- Contradicciones entre versiones: priorizar `RO_2026_*` (web, consolidado) sobre `REGLAS_OPS_*` (Gaceta, "modificaciones").
- Distinguir siempre **verificado** (con página/cita) de **supuesto** ("a confirmar"); los hallazgos relevantes van fechados.
- Los documentos 00/01/02 (hoy en `Docs/Joni/Germoplasma/`) aún citan rutas viejas `Docs/MANUALES/...`; se rehacen. Tras la reorganización, las fuentes están en `Docs/Comun/`. Usar siempre rutas reales del disco al crear enlaces.

## Trampas al traer contenido de la web (probosque.edomex.gob.mx / retys.edomex.gob.mx)

- `webfetch` sobre URLs del sitio PROBOSQUE (p. ej. `.../node/261`) a veces revienta con **"Decode error"** aunque devuelva 200. Alternativa que sí funciona: `Invoke-WebRequest -OutFile` a la carpeta temporal y parsear el HTML con regex.
- Las **cédulas RETYS** son páginas enormes: pedir `format=html` (con `format=text` se pierden los `href`) y, si la salida se trunca, hacer grep al archivo guardado. **Los formatos descargables reales viven en `backretys.edomex.gob.mx/storage/FormatosTramites/...`** (enlaces que solo aparecen en el HTML).
- Tras descargar un archivo, **verificar el tipo real** (magic bytes: `%PDF`), porque un "200 OK" puede ser HTML disfrazado.
- El contenido dinámico que interesa se **transcribe con fecha** a `Docs/Comun/Retys EdoMex/` (las páginas pueden cambiar o desaparecer); no basta con citar la URL.

## Git

- Cada integrante trabaja en su carpeta (`Docs/Joni|Alan|Xareni|Karina/`) y sube a su rama (`joni_rama`, `alan_rama`, `rama-karina`); el merge a `main` se hace al condensar avance, con mensaje `Merge: cambios de <nombre>`. **Jon es quien hace los merges**; commits estructurales/consolidación (p. ej. reorganizar el repo) van directo en `main`. No force-push sin pedirlo.
- Idioma de documentos, commits y conversación: español.
