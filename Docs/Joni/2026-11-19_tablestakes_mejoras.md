# Mejoras propuestas para tablestakes — a partir del merge del 2026-11-19

> **Qué es:** MCP server para leer/editar tablas en Markdown. Vive en `C:\Users\Joni\Documents\Programas\tablestakes` (fork de `TakedaTakeishi/tablestakes` sobre el upstream de Oliver Borchers), conectado en `opencode.jsonc` l.32–36 vía `uv run --directory ... python -m tablestakes`. Fuente en `src/tablestakes/`, con suite de tests en `tests/`.
> **De dónde salen estas propuestas:** del merge del 2026-11-19 (`Docs/TABLA_NECESIDADES.md`, 1.2 MB, ~40 tablas, filas de 3000–6000 caracteres). En ese merge usé tablestakes solo para validar (`validate_tables` — que de hecho detectó dos errores míos reales: pipe doble en Etapa 9 y celdas extra en §4) y terminé trabajando con scripts de Node por anclajes de substring frágiles. Este documento destila qué mejoras harían que el flujo "de la skill" (search → read → update) sea el camino natural también en archivos así de grandes.

## M1 · Lectura paginada de celdas gigantes (`get_cell` con rebanado)

- **Problema (evidencia):** las celdas Origen/Notas de la tabla maestra miden 3000–6000 caracteres. `read_table` devuelve la tabla completa y satura la salida; `get_cell` la devuelve entera también. Para trabajar tuve que volcar celdas a archivos temporales con scripts.
- **Propuesta:** extender `get_cell` (o añadir `read_cell_slice`) con `start`/`length` (0-based, en caracteres), y un parámetro `max_length` por defecto razonable (p. ej. 2000) con indicador `truncated: true, total: N` para que el agente pida el resto por rebanadas.
- **Módulo:** `src/tablestakes/tools/read.py` (el parámetro ya existe como patrón en `list_tables(preview_rows)`).
- **Esfuerzo:** bajo. **Test:** `tests/test_tools_read.py` — celda de 6000 chars leída en 3 rebanadas = concatenación exacta.

## M2 · Reemplazo de fila completa (`replace_row`)

- **Problema (evidencia):** el portado de Octavio fue "tomar la fila de su versión, sustituir la Descripción y escribir la fila entera". Hoy eso exige `update_cells` con N celdas o `replace_table` completo con el hash. Un `replace_row(table_index, row_index, cells)` que valide conteo de celdas contra el header lo hace en una llamada.
- **Propuesta:** nueva herramienta en `tools/write.py` reutilizando `_safe_write` y `_serialize_table` (ya existen y son atómicas).
- **Esfuerzo:** medio-bajo. **Test:** `tests/test_tools_write.py` — reemplazo conservando padding del resto de la tabla.

## M3 · Operaciones por lotes entre tablas (`batch_edit`)

- **Problema (evidencia):** cada fusión de fila fue una operación entre tablas: borrar la fila en §3 + insertar traza en §4 + nota en bitácora + ajustar S-02 en §5. Hoy son 4 llamadas con 4 hashes, y una falla a medias deja el archivo inconsistente (me pasó con S-02, cuyo ancla no coincidió por el padding).
- **Propuesta:** `batch_edit(operations: [{table_index, op, args, version}], ...)` que valide **todos** los hashes antes de escribir ninguno y aplique en un solo `_atomic_write` por archivo (o rechace todo si alguno falla). Para archivos de un solo .md esto da atomicidad real entre tablas.
- **Módulo:** `tools/write.py` + `hasher.py` (el hash es por tabla-sustrato, sirve tal cual).
- **Esfuerzo:** medio. **Test:** lote donde la 3ª operación falla → ninguna escritura aplicada.

## M4 · Normalización de padding (`normalize_table`)

- **Problema (evidencia):** mi primer portado dejó filas con espacio inicial (` | S-06 …`) y el re-formateo del editor dejó la Etapa 1 con padding desigual; las anclas por substring fallaron por eso tres veces. El fork ya escribe preservando el ancho (commit `a810107` "width-preserving writes"), pero no hay forma de **re-alinear** una tabla que llegó desalineada.
- **Propuesta:** `normalize_table(table_index)` — re-pad a los anchos actuales del header (opción `align: "header"`), sin tocar el contenido de las celdas. Es cosmético, así que separada de las herramientas de contenido.
- **Módulo:** `tools/write.py` (la lógica de anchos del commit `a810107` ya la calcula).
- **Esfuerzo:** bajo. **Test:** tabla desalineada → `validate_tables` pasa antes y después; los anchos quedan uniformes.

## M5 · Respuestas de escritura con diff mínimo

- **Problema (evidencia):** las escrituras devuelven solo `v:{hash}` y el workflow manda re-leer la tabla — en esta tabla maestra eso es re-descargar ~1 MB por edición. Tras la fusión NG-010→NG-008 verifiqué referencias con un script en vez de re-leer.
- **Propuesta:** que las herramientas de escritura devuelvan además `changed_rows: [índices]` (ya los conocen al momento de aplicar) y, opcionalmente, `changed_cells` con un resumen de ≤80 caracteres por celda. El agente valida el resultado sin re-leer todo.
- **Módulo:** `tools/write.py` (cada `apply` ya tiene el contexto de filas tocadas).
- **Esfuerzo:** bajo. **Test:** assert del campo en los tests existentes de escritura.

## M6 · Instructions del server para archivos grandes

- **Problema:** la cadena `instructions` de `server.py` describe el flujo ideal para tablas medianas; en un archivo de 40 tablas con celdas de 6k chars el agente no sabe que conviene `search_tables` + `get_cell` en vez de `read_table` completo, ni que `list_tables` barato precede a todo.
- **Propuesta:** añadir dos líneas al instructions: "En archivos con muchas tablas o filas muy largas: localiza con `search_tables`, lee celdas sueltas con `get_cell`, y reserva `read_table` para el hash previo a editar".
- **Módulo:** `src/tablestakes/server.py` (solo texto).
- **Esfuerzo:** trivial.

## Qué NO tocar

- **`hasher.py`** (hash SHA-256 de 12 chars por tabla-sustrato): el optimistic concurrency funcionó bien; los STALE_READ fueron correctos y raros.
- **Escrituras atómicas** (`_atomic_write`/`_safe_write`): son la base de la confianza en las ediciones.
- **El formato de hash "12-char hex tras v:"** — está documentado y adoptado en la skill (`F4.1–F4.4` de `review-necesidades`).

## Nota honesta: parte de la fricción no era del tool

La truncación a 2000 caracteres que sufrí al leer celdas venía de mi **harness** (cap del Read por línea), no de tablestakes — `read_table`/`get_cell` entregan la celda completa. Y el rechazo inicial a usar el flujo de la skill fue mío: `search_tables` con regex (p. ej. `\| NG-021 \|`) hubiera sustituido tres de mis anclajes frágiles por substring. M6 (instructions) ataca justamente esto.

## Plan sugerido

| # | Mejora | Prioridad | Cuándo conviene |
|---|--------|-----------|-----------------|
| M6 | Instructions para archivos grandes | Alta (trivial) | ya |
| M1 | Celdas paginadas | Alta | antes del próximo pase de revisión de filas |
| M3 | batch_edit entre tablas | Alta | antes del próximo merge de necesidades |
| M5 | diff mínimo en escrituras | Media | junto con M3 |
| M2 | replace_row | Media | junto con M3 |
| M4 | normalize_table | Baja | oportunista |

Como el fork es de Joni (`TakedaTakeishi/tablestakes`, árbol limpio, tests al día), cada mejora puede ser un commit propio en el fork con su test — y de paso considerar mandar los parches genéricos (M1, M3, M5) como PR al upstream de Borchers.
