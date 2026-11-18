---
name: review-necesidades
description: Checklist para revisar, corregir o consolidar necesidades de Docs/TABLA_NECESIDADES.md o de su documento fuente. Responde la pregunta obligada del profesor "¿dónde dice que debe hacer eso?" y codifica las correcciones del equipo (sesiones 2026-11-16 y 2026-11-17). Usar ANTES de editar cualquier fila NG-###.
---

# Review de necesidades — checklist y lecciones

## Cuándo usarla

Al revisar, corregir o consolidar cualquier necesidad (`NG-###`, `NG-R##`) de `Docs/TABLA_NECESIDADES.md` o las tablas `N-##` de los procesos fuente. Cubre también retiros (falta de fuente o decisión de alcance), fusiones y separaciones de filas.

## Checklist base (obligatorio en cada fila)

1. **Cita contra PDF**: cada afirmación de la celda Origen se verifica contra el documento original (página/numeral), no contra un `.md` del equipo — un `.md` solo sirve como puntero a su tabla de vacíos.
2. **Verbos de fuente, no de diseño**: la Descripción usa los verbos que usan las fuentes ("complementar", no "prevención"); si el concepto no existe en fuente, es diseño y no va en la necesidad.
3. **Ausencias → vacío**: lo que no está en fuentes se marca `⚠️ Inferido` en Origen con su cierre (entrevista/SAIMEX), o se retira (ver E3). Nunca se presenta como documentado.
4. **Un artefacto, un nombre**: sin sinónimos inventados para la misma cosa.

## Redacción, capas y stakeholders (sesiones 2026-11-16/17)

### A · Redacción de las celdas (Descripción, Notas y Origen)

- **A1 — Orden de proceso.** Las restricciones se ordenan como ocurren en la vida del trámite (recepción → asiento → validación → faltantes/plazos → folio → turno). Si la cadena se lee cronológicamente, está bien ordenada.
- **A2 — Lenguaje llano + barrido de jerga en TODA la fila.** Nada de tecnicismos flotantes ni juridismos; el barrido cubre Descripción, Notas, **Fronteras y etiquetas del Origen** e intros de sección. La jerga del equipo ("detonar", "motor de reglas", "circuito del turno") se reemplaza por verbos de fuente o lenguaje directo ("la condicionan a documentos", "los requisitos"). Prueba: si un lector que no vio la fuente pregunta "¿esto qué significa?", la frase está mal.
- **A3 — Casos separados, no mezclados.** Cuando la fuente distingue casos (con/sin contrato; por programa; por canal), la celda los separa explícitamente — cada caso con su acción y su consecuencia.
- **A4 — Referencias con contexto.** Ninguna mención que asuma conocimiento externo: "la publicación del listado" debe decir cuál publicación y qué dice y qué no dice.
- **A5 — Mini-contexto en orden causal de la fuente.** El contexto narra la secuencia que la fuente establece (validación del proyecto → elaboración → firma), no el orden en que se redactó la fila. Verificar quién hace qué antes de quién.
- **A6 — Fidelidad de número y condicionalidad.** La celda copia la condición de la fuente: "el adéndum, **cuando lo haya**" (la RO dice "en su caso"), nunca "sus adéndums" en plural absoluto. No pluralizar ni universalizar lo que la fuente pone condicional.
- **A7 — Las entradas del Origen también se redactan con lógica.** Cada entrada (⚠️, etiqueta, Fronteras) es una cadena completa: qué pasó → por qué → de dónde vino el error → qué queda en su lugar. Una entrada que obliga a releer ("la palabra no aparece… el ajuste es la regla; venía de…") está mal escrita.

### B · Sujeto, capas y stakeholders

- **B1 — Sujeto general; verbos específicos como restricciones.** Patrón aprobado: *Un medio/mecanismo para ___* + restricciones organizadas como **qué / quién-cómo / cuándo-plazos / garantías**. **Verbos cognitivos en el sujeto son actividad** ("conocer a tiempo", "que se sepa"): el medio no conoce — "lleva el control de…", "para que el estado quede registrado y consultable".
- **B2 — El sistema avisa; las personas deciden.** Ninguna necesidad se redacta como si el artefacto decidiera: el chequeo "compara y avisa con sus razones"; decidir es de las personas.
- **B3 — Condición en Descripción, explicación en Origen.** La restricción lleva solo la condición; el porqué y la cita viven en Origen.
- **B4 — Contenido ≠ persistencia.** "Que se explique el motivo" y "que el aviso sea recuperable" son restricciones distintas: contenido vs registro consultable después. No confundir ni fusionar.
- **B5 — Stakeholder = quien necesita y ejercita el medio.** La columna nombra al **ejecutor**: personificado cuando la fuente o el Directorio nombran al titular; **genérico cuando no** ("la delegación que corresponde", "el técnico encargado de…", "el puesto responsable de…"). El receptor se nombra en el **sujeto** ("notificar **a la persona**…") — nunca como stakeholder por el método de doble lado (**retirado el 2026-11-17**; el marco es el de las tres capas: actividad → necesidad → solución). Detalles: **stakeholders mixtos permitidos** cuando varios necesitan el mismo medio — anota el papel de cada uno entre paréntesis ("R29 (comprobación al recibir) · R30 (asienta sustituciones)"); **corolario**: una restricción que solo repite el papel del stakeholder muere ("que la realice la DRF" sobra si la DRF es el stakeholder); **oficinas múltiples**: patrón "9 titulares [DIR] + ejemplo" ("p. ej. Toluca: **Nombre**, Encargado del Despacho").
- **B6 — Términos de fuente sin definir → definición en Origen.** Si la fuente usa una palabra sin glosario (p. ej. "adendum"), la entrada del Origen la define: con la definición externa **rotulada** ("diccionario jurídico en línea — no es fuente del organismo"), URL + fecha de consulta y **transcrita** (no solo la URL); nunca presentada como evidencia del organismo.

### C · Fusiones, separaciones y retiros

- **C0 — Antes de proponer fila nueva: barrido anti-duplicación.** Revisar §3 (tablas por etapa), §4 (fusionadas) y §5 (sistemas): si una fila existente cubre el medio, la necesidad va ahí como restricción, no como fila nueva.
- **C1 — Test de sub-paso.** Si una fila describe un paso interior de otra necesidad del mismo ejecutor, es restricción de la general, no fila.
- **C2 — Test de redundancia en ambas direcciones.** ¿Satisfacer A implica satisfacer B? Si sí, B es restricción de A (subsumción: "girar bien no garantiza mandar bien; mandar bien garantiza el giro" → el giro se subsume en mandar). Si ninguno implica al otro, son filas distintas aunque compartan tema.
- **C3 — Detectar duplicados cita por cita.** Dos filas que cuelgan de la misma cita y la misma persona son una sola; los aportes específicos pasan a restricciones.
- **C4 — Metas de diseño promovibles** si se redactan como condición del medio. La implementación sigue en §5.
- **C5 — Toda fusión/movimiento declara Fronteras** en el Origen (qué es de esta fila y qué es del vecino) y queda en bitácora y/o §4 — jamás como paréntesis con fecha dentro de las columnas.
- **C6 — Separación de doble finalidad.** Una fila que empaca dos finalidades con **stakeholders o pasos distintos** se separa en dos (NG-025 → calcular R31 + pendientes R30 → NG-066); **los orígenes se mudan con su mitad** y ambas declaran Fronteras.
- **C7 — Retiro de fila sin fuente total.** Una fila enteramente "propuesta" cuya sustancia la cubre el instrumento o la práctica existente se **retira**, transfiriendo la pregunta al vacío/entrevista correspondiente. Antes de retirar, buscar **evidencia histórica** (los modelos archivados pueden probar que el instrumento mismo la satisfacía — "por duplicado al calce y al margen" — o que al desaparecer esa práctica **la necesidad nacería con fundamento**).
- **C8 — Retiro por decisión de alcance (profesor/equipo).** Borrar las filas y barrer **todos** los puntos de contacto: traza en §4, §5 (sistema sin filas vivas se retira; encabezado y mapa se ajustan), §8 (ejemplos marcados), V-## (marcas o preguntas que mueren), intros de sección, Fronteras de vecinos, nota de bitácora fechada, y **avisar a los dueños** de los docs origen afectados.

### D · Higiene de columnas

- **D1 — Todo `paso X·Y` enlazado** al documento del proceso donde surge (rutas con `%20` entre `<>`).
- **D2 — Nada de proveniencia con fecha en las celdas**: fusiones, altas y mudanzas van a la bitácora o §4. En Origen solo: orígenes `documento·N-##`, pasos, evidencia con citas, ⚠️ marcados, Fronteras y vacíos. Las fechas de verificación ("verif. …") sí se quedan.
- **D3 — Terminología con respaldo**: siglas del organismo se citan con su nombre literal; acrónimos opacos se decodifican con la cita del glosario (MLPSA-FC → Fondos Concurrentes CONAFOR–PROBOSQUE).
- **D4 — Muerte de ID = barrido de referencias.** Cuando una fila muere (fusión, retiro, alcance), grep del ID en **todo** el archivo y actualización de cada mención viva: Fronteras de vecinos, §5, §8, V-##, intros. Ningún ID muerto con referente vivo.

### E · Disciplina de verificación (categorías + comprobaciones)

Antes de afirmar algo en una celda, clasificarlo:

1. **Verificable contra un documento del repo** → afirmar con cita y "verificado <fecha>".
2. **Inferido sin fuente pero sustantivo** → mantener en Descripción + `⚠️ Inferido` en Origen con cierre por entrevista. No borrar, no disfrazar.
3. **Afirmación sin ninguna fuente** → retirar; dejar pregunta abierta con puntero al vacío.
4. **Sobregeneralización** → partir por rutas/casos con su fuente cada una.

Comprobaciones mecánicas que acompañan a E1:

- **E5 — La página citada debe existir**: contrasta cada cita contra el conteo real de páginas del PDF ("RO-RHF p. 60" en una RO de 20 páginas = cita imposible → defecto del doc origen, se reporta a su dueño, no se corrige aquí).
- **E6 — La palabra citada debe existir en el PDF**: grep de la palabra exacta antes de mantener la afirmación ("justificación" 0 hits → retirar; "carátulas" → ⚠️ sin fuente).

**E7 — Búsqueda de evidencia (procedimiento):**

- El **nombre del archivo no garantiza el contenido**: la búsqueda por nombre falló y los contratos estaban en "PROBOSQUE documentación 2013.pdf". Busca **por contenido** (grep del texto, PDFs por palabra clave), no solo por nombre.
- Descarta **falsos positivos explícitamente** en el reporte (un "Anexo XIII Modelo de Convenio de Concertación" de SADER no es el instrumento forestal).
- Anota el resultado de la búsqueda **con fecha** en el vacío correspondiente — para que nadie repita el trabajo.

### F · Higiene operativa (para quien edita el archivo)

- **F1 — Anclas tolerantes**: re-extraer el texto exacto antes de cada edición (el equipo edita en paralelo y su formateador re-alinea tablas). Los anclajes deben ser **mid-cell** (sin terminar en la zona de padding junto al pipe final) o regex con `\s*` en las fronteras de celda. Normalizar espacios duros (`\xa0`).
- **F2 — Cirugía de filas con verificación estructural**: tras insertar/borrar, comprobar que cada ID vivo tiene exactamente 1 fila y los retirados 0; los índices capturados antes de un `pop` quedan obsoletos (lección NG-061). `git diff` recupera cualquier fila perdida.
- **F3 — Nada se escribe sin `assert` del ancla**: si el texto no matchea, re-extraer; nunca "adaptar a ojo".
- **F4 — tablestakes (MCP) es la herramienta estándar de cirugía de tablas**: flujo `search_tables` (fila + índice + hash) → `get_cell`/`read_table` → `update_cells` (requiere hash) → `validate_tables` al cierre. **STALE_READ = alguien editó en paralelo**: re-leer y reintentar — el hash protege tu escritura, pero tu editor sin recargar puede pisar la del agente: **recargar el buffer después de cada escritura**. Nota de API directa: `update_cells` exige modelos `CellUpdate` (la coerción de dicts es de la capa MCP). Para texto fuera de tabla (intros, bitácora), `edit`/script.
- **F4.1 — Enumerar el catálogo ANTES de escribir un script**: el catálogo de herramientas que el agente ve por defecto es **parcial** (en code mode se muestran 4 de las 14 de tablestakes). Antes de recurrir a un script, correr `search({ namespace: "tablestakes" })` y revisar las 14: hay `update_cells` (lote de celdas), `insert_row`, `delete_row`, `move_row`, `insert_column`/`delete_column`/`rename_column`, `replace_table` (tabla entera) y `create_table`. Lección del 2026-11-17: se reemplazó la Etapa 4 completa con un script cuando `replace_table` existía — la prueba del no-op (en copia, `/tmp`) confirmó que funciona.
- **F4.2 — Mapa de decisión de herramienta** (2026-11-17, verificado con no-ops sobre TABLA_NECESIDADES.md): 1 celda → `get_cell`+`update_cells`; varias celdas → `update_cells` en lote (preserva el padding de las celdas no tocadas); fila → `insert_row`/`delete_row`/`move_row`; columna → `insert_column`/`delete_column`/`rename_column`; **tabla entera** → `replace_table`; tabla nueva → `create_table`. Script solo si el cambio cruza prosa fuera de tablas (intros de sección, bitácora, encabezados) o varias tablas + prosa a la vez — con los asserts de F3 y la verificación F2/F5.
- **F4.3 — Contrato de `read_table` y el corte para `replace_table`**: `read_table` devuelve **3 bloques**: línea 0 = metadatos (`v:hash … N r M c [sección]`), línea 1 = **descriptores de columna** (`A:Stakeholder | B:ID | …`, sin pipes — no es contenido), líneas 2+ = la tabla real. `new_content` = `lineas.slice(2).join("\n").trimEnd()`. Cortar con `.slice(1)` mete los descriptores como si fueran contenido y el resultado sale corrupto: encabezado reescrito como `| A:Stakeholder | B:ID |…` y **separador duplicado** (ocurrió en la prueba del 2026-11-17).
- **F4.4 — Efectos colaterales conocidos de `replace_table`** (no-ops verificados): (a) normaliza el separador `|---|` → `| --- |` (diff cosmético de 1 línea); (b) **quita el padding manual de las columnas** — en tablas alineadas (Etapas 1/5/7) re-alinea toda la tabla y el diff se vuelve ruidoso (22 líneas afectadas en la prueba de la Etapa 1), aunque el contenido sale intacto; en tablas sin padding (Etapa 4 al estilo de Valeria) el no-op fue limpio salvo el separador. Regla: en tablas con padding, preferir `update_cells` por celda tocada; `replace_table` solo cuando la tabla entera cambia o cuando aceptas el re-alineado.
- **F5 — Verificación post-script y buffer único**: un solo buffer mutado en secuencia — nunca reconstruir desde un snapshot tomado antes de las ediciones en memoria (borró dos ediciones ya aplicadas). Al terminar un script: grep de artefactos (llaves sin interpolar `{VAR}`) y cierre estándar: `validate_tables` + grep de IDs muertos. Ojo con concatenación de strings multi-línea en JS (requiere `+` explícito).

## Orden de revisión sugerido para una fila

1. Sujeto llano, sin verbos cognitivos (A2, B1, B6) → 2. Restricciones en orden de proceso y por casos (A1, A3, A5, A6) → 3. ¿El sistema avisa y no decide? (B2) → 3.5. ¿El stakeholder es el ejecutor? (B5) → 4. Citas en Origen, explicaciones fuera de Descripción (B3, B6) → 5. Tests de fusión/separación (C1–C3) → 6. Evidencia clasificada y comprobada (E1–E6) → 7. Pasos enlazados y limpieza (D1, D2) → 8. Fronteras declaradas (C5) → **Cierre**: `validate_tables` + grep de IDs muertos y artefactos (F5).
