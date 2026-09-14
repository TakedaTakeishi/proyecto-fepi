# AGENTS.md — Proyecto SGD PROBOSQUE (FEPI)

## Qué es y en qué fase estamos

Sistema de Gestión Documental (SGD) para PROBOSQUE (organismo forestal del Estado de México) con tres dominios:

1. **Control de masa forestal** (imágenes de satélite)
2. **6 programas de apoyo** (los 6 `RO_2026_*.pdf`: PSAH, Restauración Hidrológico-Forestal, Capturando Carbono, Plantaciones Sustentables, Manejo Forestal Sustentable, Programa Estatal Guardabosques)
3. **Banco de germoplasma**

**Fase actual: entendimiento del problema.** El repo NO tiene código — solo fuentes (PDF/HTML/xlsx/docx) y documentos de análisis en Markdown. No generar andamiaje de software ni asumir stack tecnológico salvo que se pida explícitamente. El alcance del sistema se define después de documentar los procedimientos de los 3 dominios.

## Estructura (reorganizada 2026-09-14)

- `Docs/Comun/` — **fuentes primarias compartidas**, por dominio: `Manual Jurídico/`, `Sitio web/` (copia offline de 39 páginas), `Germoplasma/`, `Programas de apoyo/` (con `Reportes por reclamar/`), `Masa forestal/`, `Finanzas y adquisiciones/`, `Gestión documental y calidad/`, `Pendientes de revisión/`. Ver `Docs/Comun/README.md`.
- Carpetas personales — **solo trabajo propio** (análisis, diagramas, reportes): `Docs/Joni/` (germoplasma: `Germoplasma/` con docs numerados `00_` guías, `01_` preguntas, `02_` análisis —seguir la numeración—, `Diagramas/` con `.mmd` mermaid y PNG), `Docs/Alan/` y `Docs/Xareni/` (programas de apoyo), `Docs/Karina/` (masa forestal).
- Regla: un documento fuente NO se duplica en carpetas personales; si alguien necesita una copia de trabajo, la mueve desde `Comun/` a su carpeta y lo anota.

## Formato estándar para análisis de procedimientos (aplica a los 3 dominios)

Plantilla de referencia: `Docs/Joni/Germoplasma/02_PROCEDIMIENTO_DISTRIBUCION_GERMOPLASMA.md`. Secciones obligatorias:

1. Objeto y alcance (incluido / excluido)
2. Base documental — tabla con **claves de cita** (`[MGO]`, `[VEN]`…) que se reutilizan en todo el doc
3. Glosario de siglas
4. Roles (`R1..Rn`, internos/externos, con unidad real del Directorio)
5. Funciones y actividades por rol
6. Reglas de negocio (`BR-#`, cada una con su fuente `[clave]`)
7. **Procedimiento narrado en pasos numerados** (por modalidad) — los pasos son el ancla de trazabilidad
8. Diagrama de flujo **mermaid inline** con roles `R#` en los nodos, pero se debe cambiar a un diagrama de procedimientos con los roles en las columnas.
9. Tabla de necesidades: `N-##` | Rol | Necesidad | Prioridad **A/M/B** | **Paso del procedimiento** (columna que enliza cada necesidad con el paso, p. ej. "Proceso A, paso 3") | Origen `[clave]` (con páginas)
10. Registros que el SGD debe gestionar (catálogo documental)
11. Vacíos y siguientes pasos

Mantener la cadena de trazabilidad: `[clave fuente] → BR-# → paso → N-##`.

## Trampas al trabajar con las fuentes

- Muchos PDF están **escaneados sin capa de texto** (p. ej. `jul301b.pdf`, certificados ISO): una búsqueda de texto devuelve 0 resultados y eso NO significa que el dato no exista. Verificar renderizando las páginas como imagen.
- Contradicciones entre versiones: priorizar `RO_2026_*` (web, consolidado) sobre `REGLAS_OPS_*` (Gaceta, "modificaciones").
- Distinguir siempre **verificado** (con página/cita) de **supuesto** ("a confirmar"); los hallazgos relevantes van fechados.
- Los documentos 00/01/02 (hoy en `Docs/Joni/Germoplasma/`) aún citan rutas viejas `Docs/MANUALES/...`; se rehacen. Tras la reorganización, las fuentes están en `Docs/Comun/`. Usar siempre rutas reales del disco al crear enlaces.

## Git

- Cada integrante trabaja en su carpeta (`Docs/Joni|Alan|Xareni|Karina/`) y sube a su rama (`joni_rama`, `alan_rama`, `rama-karina`); el merge a `main` se hace al condensar avance, con mensaje `Merge: cambios de <nombre>`. **Jon es quien hace los merges**; commits estructurales/consolidación (p. ej. reorganizar el repo) van directo en `main`. No force-push sin pedirlo.
- Idioma de documentos, commits y conversación: español.
