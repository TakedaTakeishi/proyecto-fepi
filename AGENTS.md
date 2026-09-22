# AGENTS.md — Proyecto SGD PROBOSQUE (FEPI)

## Qué es y en qué fase estamos

Sistema de Gestión Documental (SGD) para PROBOSQUE (organismo forestal del Estado de México). **Alcance vigente (desde 2026-09-22): dos dominios** —

1. **Control de masa forestal** (imágenes de satélite)
2. **6 programas de apoyo** (los 6 `RO_2026_*.pdf`: PSAH, Restauración Hidrológico-Forestal, Capturando Carbono, Plantaciones Sustentables, Manejo Forestal Sustentable, Restauración Forestal Integral)

**El banco de germoplasma quedó FUERA del alcance** (decisión del profesor, 2026-09-22): todo el trabajo previo está archivado en `Docs/Comun/germoplasma-archivo/` y no se cita desde los procesos vigentes.

**Fase actual: sprint de 2 días (2026-09-22) para cerrar MF + PA** con cinco énfasis pedidos por el profesor: (1) documentos/datos de entrada y salida por paso (sección 12 de la plantilla, y retro-ajustar los 9 procesos 🟢), (2) requisitos de masa forestal — qué se clasifica y busca en los mapas satelitales (doc X-01), (3) objetivos de los 6 programas (X-02), (4) revisiones de los programas y sus formatos (X-03), (5) fiscalización y estadística (E-02/03/04 + MF-13 rescisión/reintegro + T-03). Reparto en el README raíz. El repo NO tiene código — solo fuentes (PDF/HTML/xlsx/docx) y documentos de análisis en Markdown. No generar andamiaje de software ni asumir stack tecnológico salvo que se pida explícitamente.

## Estructura (reorganizada 2026-09-14; equipo reorganizado 2026-09-19)

**Equipo:** documentan solo 4 investigadores — **Joni (`Docs/Joni/`), Leonardo (`Docs/Leo/`), Octavio (`Docs/Octavio/`) y Patatuchi (`Docs/Valeria/`)** (reparto 2026-09-22 en el README raíz). **Alan, Karina y Xareni son programadores** (no documentan; sus informes en `Reportes por reclamar/` son fuente de E-02). Estadística: **E-02/E-03/E-04** (E-01 se eliminó con germoplasma); MF-08 (reporte de resultados) absorbida por E-03; **MF-04/05/06 absorbidas al ciclo de los PA** (2026-09-22); **MF-13 = rescisión y reintegro** (en el README de Valeria figuraba como MF-08).

- `Docs/Comun/` — **fuentes primarias compartidas**, por dominio: `Manual Jurídico/`, `Sitio web/` (copia offline de 39 páginas), `Programas de apoyo/` (con `Reportes por reclamar/`, `FIPASAHEM/`, `Comites/`), `Masa forestal/`, `Finanzas y adquisiciones/`, `Gestión documental y calidad/`, `Pendientes de revisión/`, `germoplasma-archivo/` (❌ fuera de alcance). Ver `Docs/Comun/README.md`.
- Carpetas personales — **solo trabajo propio** (análisis, diagramas, reportes), con **análisis de procesos prefijados por ID** (p. ej. `Docs/Valeria/Masa_Forestal/MF-02_...md`, `Docs/Joni/Programas de apoyo/PA-01_...md`, donde el ID coincide con el del README): `Docs/Joni/` (PA-01, E-02, E-04, T-02 + `Diagramas/` con SVG generados por script), `Docs/Valeria/` (MF-01/02/03/07, E-03), `Docs/Leo/` y `Docs/Octavio/` (en construcción). `Docs/Alan/`, `Docs/Xareni/`, `Docs/Karina/` quedan como archivo/para código.
- Regla: un documento fuente NO se duplica en carpetas personales; si alguien necesita una copia de trabajo, la mueve desde `Comun/` a su carpeta y lo anota.

## Formato estándar para análisis de procedimientos (aplica a los 2 dominios)

Plantilla de referencia: `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md`. Secciones obligatorias:

1. Objeto y alcance (incluido / excluido)
2. Base documental — tabla con **claves de cita** (`[MGO]`, `[VEN]`…) que se reutilizan en todo el doc
3. Glosario de siglas
4. Roles (`R1..Rn`, internos/externos, **personificados**: puesto y titular reales del Directorio para cada rol; donde el Directorio no llega —operativos, jefaturas de Departamento, enlaces externos— marcar ⚠️ **desconocido** y registrar la búsqueda en los vacíos del mapa. Una necesidad no puede atribuirse a una persona que no sabemos quién es). **No es el organismo quien publica: es el ingeniero que recibe el archivo y actualiza la página** — toda necesidad pertenece a la persona que ejecuta. Si un rol **no admite personificación** (órgano deliberativo tipo comité/consejo/fiduciaria/entidad federal: su actividad es deliberar o decidir, no producir documentos), no se fuerza: se conserva como cuerpo decisor solo cuando aparece en el flujo de documentos, se marca **「posible fuera de alcance del SGD」**, y el vacío correspondiente explica la búsqueda (o la no-necesidad). Lo que el SGD gestiona de esos órganos es solo sus registros: lo que entra (informe, dictamen) y lo que sale (acta, acuerdo)
5. Funciones y actividades por rol
6. Reglas de negocio (`BR-#`, cada una con su fuente `[clave]`)
7. **Procedimiento narrado en pasos con ID único por modalidad** (p. ej. `A1..A8`, `B1..B9`) — los pasos son el ancla de trazabilidad; al paso se cita externamente como `<ID>·A#` (proceso·paso, p. ej. `G9·A5`)
8. **Diagrama de actividad en SVG con carriles por rol, generado por script**: los carriles son los roles/responsables (R#); los nodos llevan solo **ID del paso + acción** (sin claves de fuente ni notas "(inferido)" — eso va en las tablas). Reglas de flujo: todo desciende (ninguna arista sube, salvo un bucle explícito) y las flechas aterrizan en el **centro del borde** del nodo siguiente, nunca en una esquina. Plantilla del generador: `Docs/Joni/Diagramas/PA01/gen-diagramas.mjs` (Node, sin dependencias) — se edita el **script**, no los `.svg`; `node gen-diagramas.mjs <dir>` regenera los SVG en `Diagramas/<ID>##/` y el `.md` solo los inserta. Estilo sobrio claro: fondo #FAFBFC, carriles #F7F8FA, cajas #E8F0FE/#93B4E0, decisiones #FDF6E3/#D8BC6A, aristas #566171. Rasterizar vista de prueba: `msedge --headless=new --disable-gpu --window-size=W,H --screenshot=out.png file:///<ruta>.svg`.
9. Tabla de necesidades: `N-##` | Rol | Necesidad | Prioridad **A/M/B** | **Paso del procedimiento** (columna que enliza cada necesidad con el paso, p. ej. "Proceso A, paso 3") | Origen `[clave]` (con páginas). La necesidad es lo tangible que el rol **requiere para ejecutar su paso** (consultar, comprobar, recibir, girar, enterarse…), anclada al proceso que manda; NUNCA una solución o entregable nuestro ("documentar el procedimiento", "definir la serie") — eso va a vacíos/§10. Cuidado con los términos ambiguos: toda palabra técnica se usa con el significado que le dan las fuentes, no con el nuestro — si un concepto (p. ej. "folio") solo existe como número del formato y nosotros lo usamos como identificador de expediente, eso es diseño del SGD y va a los vacíos, no a la necesidad; tampoco se admiten etiquetas como "necesidad derivada de N-xx" sin rol ni paso. Cuando la necesidad choca con algo ausente en las fuentes, la celda de Origen lo **referencia** (`→ V-##`), no lo resume a medias
10. Registros que el SGD debe gestionar (catálogo documental)
11. Vacíos y siguientes pasos: **tabla de vacíos con IDs estables `V-##`** (referenciables desde §8), columnas: ID | qué falta en el mundo real | evidencia de que es vacío (archivo+ancla) | cómo se cierra (entrevista/SAIMEX/entrega SGD, con su ID del mapa si existe) | necesidades y pasos afectados. Separar vacíos de **tareas** nuestras (auditar X, convertir a RF) — las tareas no son vacíos
12. **Insumos y productos por paso (énfasis del profesor, 2026-09-22)** — tabla con una fila por paso del §7: `Paso` | **Documento/dato de entrada** (con referencia directa: ruta del formato real en `Docs/Comun/` o clave de fuente + página; si el dato se obtiene de un sistema —SIG, SAIMEX, RETYS—, decir el sistema y qué campo) | **Datos que se capturan/procesan** | **Documento de salida** (con su formato cuando exista). Toda celda "no existe en fuentes" se enlaza a su `V-##`. Los 9 procesos 🟢 existentes deben retro-ajustarse con esta sección

Mantener la cadena de trazabilidad: `[clave fuente] → BR-# → paso → N-##` y, desde 2026-09-22, también `paso → entrada/salida (§12)`.

## Trampas al trabajar con las fuentes

- Muchos PDF están **escaneados sin capa de texto** (p. ej. certificados ISO; `jul301b.pdf` dejó de ser uno: es la versión 2025 con texto): una búsqueda de texto devuelve 0 resultados y eso NO significa que el dato no exista. Verificar renderizando las páginas como imagen.
- Contradicciones entre versiones: priorizar `RO_2026_*` (web, consolidado) sobre `REGLAS_OPS_*` (Gaceta, "modificaciones").
- Distinguir siempre **verificado** (con página/cita) de **supuesto** ("a confirmar"); los hallazgos relevantes van fechados.
- Los documentos de germoplasma archivados (`00_`, `01_`, G9, GS3, G06 en `Docs/Comun/germoplasma-archivo/`) aún citan rutas viejas `Docs/MANUALES/...` y `Docs/Joni/Germoplasma/...`; **no se rehacen** — están fuera de alcance. Usar siempre rutas reales del disco al crear enlaces en documentos vigentes.

## Trampas al traer contenido de la web (probosque.edomex.gob.mx / retys.edomex.gob.mx)

- `webfetch` sobre URLs del sitio PROBOSQUE (p. ej. `.../node/261`) a veces revienta con **"Decode error"** aunque devuelva 200. Alternativa que sí funciona: `Invoke-WebRequest -OutFile` a la carpeta temporal y parsear el HTML con regex.
- Las **cédulas RETYS** son páginas enormes: pedir `format=html` (con `format=text` se pierden los `href`) y, si la salida se trunca, hacer grep al archivo guardado. **Los formatos descargables reales viven en `backretys.edomex.gob.mx/storage/FormatosTramites/...`** (enlaces que solo aparecen en el HTML).
- Tras descargar un archivo, **verificar el tipo real** (magic bytes: `%PDF`), porque un "200 OK" puede ser HTML disfrazado.
- El contenido dinámico que interesa se **transcribe con fecha** a `Docs/Comun/` (las páginas pueden cambiar o desaparecer; el acervo germoplasma de `Retys EdoMex/` ya está en `germoplasma-archivo/`); no basta con citar la URL.

## Git

- Cada integrante trabaja en su carpeta (`Docs/Joni|Leo|Octavio|Valeria/`) y sube a su rama (`joni_rama`, `alan_rama`, `rama-karina`); el merge a `main` se hace al condensar avance, con mensaje `Merge: cambios de <nombre>`. **Jon es quien hace los merges**; commits estructurales/consolidación (p. ej. reorganizar el repo) van directo en `main`. No force-push sin pedirlo.
- Idioma de documentos, commits y conversación: español.
