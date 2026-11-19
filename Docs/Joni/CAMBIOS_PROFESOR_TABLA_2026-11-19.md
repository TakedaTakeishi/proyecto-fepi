# Cambios del profesor en la TABLA_NECESIDADES — a conservar en el merge

> **Origen:** commit `490a2ad` *"Tablas llenas y revisadas una vez."* (joni-rama, 2026-11-19 00:22), comparado contra su padre `72c92df` (el main del 17-nov). Solo tocó `Docs/TABLA_NECESIDADES.md` (85 líneas ±).
> **Para qué sirve:** guía del merge — estos cambios **deben quedarse**: al resolver cualquier conflicto de estas filas, gana la versión de `joni-rama` (esta). Está organizado en: (A) prioridades, (B) redacción de Descripciones, (C) comentarios de acción del profesor dentro de filas, (D) retiros, (E) nota aparte, (F) normalización de formato.
> **Convención:** se cita el texto ANTES (72c92df) → AHORA (490a2ad). Los textos entre paréntesis de la columna del profesor son **instrucciones pendientes**, no redacción final — se listan en (C) con su acción correspondiente.

## A · Cambios de prioridad (7 filas)

| ID | Etapa | Antes | Ahora |
|---|---|---|---|
| NG-020 (convocar sesiones) | 4 | Alta | **Baja** |
| NG-021 (paquete de dictámenes a vocales) | 4 | Alta | **Baja** |
| NG-022 (actas de sesión) | 4 | Alta | **Bajo** |
| NG-023 (acuerdos numerados) | 4 | Alta | **Baja** |
| NG-035 (contraste contra metas/MIR) | 8 | Alta | **Media** |
| NG-036 (seguimiento de evaluaciones PAE) | 8 | Alta | **Media** |
| NG-038 (entregas a instancias estatales) | 8 | Alta | **Media** |

Sin cambio de prioridad pero con retiro marcado: NG-049, NG-057, NG-058, NG-060 (ver D). NG-R06 conserva Alta pero con instrucción dentro de la celda (ver C).

## B · Cambios de redacción en la Descripción (el profesor reescribió el sujeto)

| ID | Etapa | Antes | Ahora (versión del profesor — conservar) |
|---|---|---|---|
| NG-002 | 1 | Un medio para **acreditar** la entrega de su solicitud. | Un medio para **realizar la entrega** de su solicitud. |
| NG-005 | 1 | Un medio para archivar y consultar los expedientes. | Un medio para archivar y consultar los expedientes, **tanto como los de la convocatoria actual como los históricos** |
| NG-007 | 1 | Un mecanismo para **dictaminar un expediente** (resolver si procede o no, y por qué). | Un mecanismo para **generar el dictamen jurídico de un expediente** (resolver si procede o no, y por qué) |
| NG-008 | 6 | Un medio para **dejar constancia de la verificación en campo**, tomando en cuenta… | Un medio para **registrar la visita de la verificación en campo**, dejando constancia de, tomando en cuenta… |
| NG-010 | 6 | Un medio para **dejar constancia del cumplimiento de las actividades**, tomando en cuenta… | Un medio para **realizar un registro de la supervisión que valide el cumplimiento de las actividades**, tomando en cuenta… |
| NG-011 | 1 | Un mecanismo para **que la geometría del polígono quede documentada**. | Un mecanismo para **registrar la geometría del polígono, formando parte del expediente** |
| NG-012 | 2-3 | Un mecanismo para determinar la cobertura arbolada y la superficie factible de cada predio. | Un mecanismo para determinar la cobertura arbolada y la superficie factible de cada predio, **sometido en la convocatoria.** |
| NG-013 | 2-3 | Un medio para **consultar y compartir la información geoespacial institucional**. | Un medio para **compulsar la información de la poligonal levantada en el campo vs la información geoespacial institucional.** |
| NG-016 | 4 | Un mecanismo para **aplicar la tabla de puntos del dictamen técnico** con criterios uniformes… | Un mecanismo para **emitir un dictamen técnico** con criterios uniformes, determinando con precisión la elegibilidad del predio. |
| NG-025 | 5 | Un mecanismo para **mandar los apoyos** a las personas beneficiarias como lo dicta el programa | Un mecanismo para **dispersar las ministraciones correspondientes según las RO a las personas beneficiarias como** |
| NG-029 | 5 | Un mecanismo para **emitir** contratos de adhesión | Un mecanismo para **formalizar (llenado, adendum)** contratos de adhesión |
| NG-064 | 1 | Un mecanismo para actualizar el expediente… durante el programa. | Un mecanismo para actualizar el expediente… durante el programa **si existe alguna condición establecida en las RO (ejemplo, fallecimiento)** |
| NG-065 | 1 | Un medio para notificar a la persona solicitante las actualizaciones de su trámite. | Un medio para notificar… **en en el caso que existan faltantes** |
| NG-066 | 5 | Un mecanismo para llevar el **control de los documentos** para la segunda ministración | Un mecanismo para llevar el **control del avance para la ministración posterior** |

### Erratas a pulir en el merge (sin perder la intención del profesor)

1. **NG-005** — "tanto como los de… como los de…" es agramatical; intención: incluir **los expedientes de la convocatoria actual y los históricos**. Proponer "…los expedientes, tanto los de la convocatoria actual como los históricos".
2. **NG-065** — "en en el caso que existan faltantes": doble "en". Quedaría "…de su trámite, en el caso de que existan faltantes".
3. **NG-008** — "dejando constancia de, tomando en cuenta…": conector roto. La intención del profesor (registrar la visita + constancia en minuta) queda completa en la restricción; proponer "…registrar la visita de verificación en campo —tomando en cuenta que quede asentada en una minuta…".
4. **NG-025** — la frase termina en "…a las personas beneficiarias como" (colgante). La intención: dispersar las ministraciones conforme a las RO. Sugerir "…dispersar las ministraciones conforme a las RO a las personas beneficiarias asignadas".
5. **NG-012** — "cada predio, sometido en la convocatoria": probablemente quiso decir "presentado en la convocatoria". Confirmar con el profesor o pulir a "sometido a la convocatoria".
6. **NG-019** — quedó un marcador colgante `**?` al final de la Descripción (negrita abierta con interrogación): es una **pregunta del profesor sin resolver** — levantarla en la sesión antes de pulir la fila.

## C · Comentarios de acción dentro de filas (pendientes que el merge debe ejecutar o agendar)

Estos paréntesis no son redacción: son órdenes de trabajo. En el merge se convierten en tareas (y el paréntesis sale de la celda):

| ID | Comentario textual del profesor | Acción que pide |
|---|---|---|
| NG-021 | "(unir con dictamenes)" | Fusionar NG-021 con NG-016 (el paquete de dictámenes que recibe el vocal es parte del dictamen técnico) — pasar por el test C1/C2 de la skill |
| NG-022 | "(Protocolario) ***" | Marcar la fila como protocolaria (posible baja de alcance o degradación) — decidir con el profesor |
| NG-027 | "(unirlo a la formalización del contrato)" | Los datos bancarios al firmar son parte de NG-029 (formalización del contrato) — evaluar fusión en NG-029 como restricción |
| NG-028 | "(quitar y colocar como restricción de la ruta del dinero)" | La fila NG-028 dejaría de ser fila y pasaría a restricción de otra necesidad (¿de NG-025/NG-039?) — pasar por test antes de ejecutar |
| NG-009 | "(repetido y unirlo con el NG-010)" | NG-009 (consultar expediente/polígono en campo) se repite con NG-010 — evaluar fusión |
| NG-R06 | "(añadir como restricción de las ministraciones y cambiar esta para la verificación de recibido del pago)" | Doble acción: (a) la notificación de pago liberado pasa a ser restricción de NG-025; (b) esta fila se re-escopea a "verificación de pago recibido" |
| NG-R06 (celda Prioridad) | "Alta (añadir una necesidad sobre para verificar que le han pagado)" | **Alta una fila nueva**: un medio para verificar que la persona beneficiaria recibió su pago — no existe hoy en la tabla |
| NG-066 (Notas) | "(Que estén las dos ver) Gabinete y documental)" | Chequeo de la fila: "que estén las dos vías visibles — gabinete y documental" (redacción a precisar con el profesor) |
| NG-029 (Notas) | "(llenado y firmado = formalizado) Añadiendo datos bancarios." | Redefinición: formalizado = llenado + firmado; y los datos bancarios entran aquí (conecta con el comentario de NG-027) |

## D · Retiros marcados (4 filas fuera de alcance)

El profesor marcó de baja 4 filas de la Etapa 6 (sanidad/incendios) escribiéndolo en la celda de Prioridad:

| ID | Antes | Ahora (marca del profesor) |
|---|---|---|
| NG-049 (bitácora SINAT desde el ITF) | Alta | **(dar de baja)** |
| NG-057 (reporte de incendio → brigada) | Alta | **Dar de baja (sin alcance)** |
| NG-058 (documentar la atención bajo SCI) | Alta | **(Dar de baja)** |
| NG-060 (ingreso del ITF a la DG) | Media | **(dar de baja)** |

En el merge: ejecutar el retiro con el barrido completo (regla C8 de la skill): filas fuera, traza en §4/§5 (S-16 pierde a 057/058/060 y S-13 pierde a 049), bitácora fechada y aviso a los dueños (MF-11 = Octavio; MF-10 = Leo). NG-059 ya estaba retirada el 17-nov — con estas cuatro, **S-16 (Sanidad e incendios) queda sin filas vivas**: evaluar retirar el sistema del §5 o marcarlo fuera de alcance, igual que S-12.

## E · Nota aparte del profesor (fuera de las tablas)

Justo después de la tabla de la Etapa 8 quedó la línea suelta:

> **"Falta el cierre de los programas."**

Interpretación provisional: el ciclo documentado no cubre el **cierre de los programas** (la fase de fin de vigencia del contrato/programa — a diferencia del cierre del ejercicio que atienden NG-034/NG-038). Confirmar con el profesor qué quiere: ¿una fila nueva de cierre de programa, o completar alguna existente? No ejecutar en el merge sin esa confirmación.

## F · Normalización de formato (conservar, no es del profesor)

En ~25 filas los enlaces planos `](ruta)` pasaron a la convención del documento `](<ruta>)` — Etapa 4 completa, Etapa 8 completa, Etapa 2-3 (stakeholders y orígenes de NG-012/013/014), Etapa 6 (NG-008/010/049/057/058/060) y NG-R05. Uniforma el estilo con Etapas 1/5/7; **no se revierte en el merge**.

## G · Inventario completo de anotaciones del profesor (verificación de barrido)

Barrido sistemático sobre `490a2ad` de todos los paréntesis/marcadores dentro de las filas de las etapas (§3). Nada quedó fuera — cada uno tiene su destino en este documento:

| # | ID | Anotación textual (verbatim) | Dónde está en la celda | Tratamiento |
|---|---|---|---|---|
| 1 | NG-009 | `(repetido y unirlo con el NG-010)` | Descripción | C · evaluar fusión NG-009+NG-010 |
| 2 | NG-019 | `**?` (marcador colgante al final de la Descripción) | Descripción | B-6 · pregunta sin resolver, levantar en sesión |
| 3 | NG-021 | `(unir con dictamenes)` | Descripción | C · evaluar fusión NG-021+NG-016 |
| 4 | NG-022 | `(Protocolario) ***` | Descripción | C · decidir alcance con el profesor |
| 5 | NG-027 | `(unirlo a la formalización del contrato)` | Descripción | C · evaluar fusión NG-027→NG-029 |
| 6 | NG-028 | `(quitar y colocar como restricción de la ruta del dinero)` | Descripción | C · fila → restricción (pasar por test C1–C3) |
| 7 | NG-029 | `(llenado y firmado = formalizado) Añadiendo datos bancarios.` | Notas | C · redefine "formalizado" + conecta con NG-027 |
| 8 | NG-064 | `si existe alguna condición establecida en las RO (ejemplo, fallecimiento)` | Descripción (redacción, no orden) | B · conservar como redacción |
| 9 | NG-065 | `en en el caso que existan faltantes` (errata "en en") | Descripción | B-2 · pulir sin perder la intención |
| 10 | NG-066 | `(Que estén las dos ver) Gabinete y documental)` | Notas | C · precisar con el profesor |
| 11 | NG-025 | frase terminando en `…beneficiarias como` (colgante) | Descripción | B-4 · completar la intención |
| 12 | NG-R06 | `(añadir como restricción de las ministraciones y cambiar esta para la verificación de recibido del pago)` | Descripción | C · re-escope + restricción en NG-025 |
| 13 | NG-R06 | `Alta (añadir una necesidad sobre para verificar que le han pagado)` | Prioridad | C · **alta de fila nueva** (verificación de pago recibido) |
| 14 | NG-049 | `(dar de baja)` | Prioridad | D · retiro con barrido C8 |
| 15 | NG-057 | `Dar de baja (sin alcance)` | Prioridad | D · retiro con barrido C8 |
| 16 | NG-058 | `(Dar de baja)` | Prioridad | D · retiro con barrido C8 |
| 17 | NG-060 | `(dar de baja)` | Prioridad | D · retiro con barrido C8 |
| 18 | — | `"Falta el cierre de los programas."` | Nota suelta tras la tabla de Etapa 8 | E · confirmar con el profesor antes de actuar |

Notas del barrido: (a) el bloque **Transversales al ciclo** quedó intacto — ninguna anotación nueva; (b) el `**?` de NG-020 detectado en el barrido es el interrogante legítimo de su stakeholder ("⚠️ ¿**Irán Terán Cordero**?"), no anotación del profesor; (c) NG-012 "sometido en la convocatoria" está en B-5 (errata a pulir).

## H · Resumen de instrucciones para el merge

1. **Resolver a favor de joni-rama** en todas las filas listadas en (A), (B) y (F).
2. **Corregir erratas** de (B) sin cambiar la intención del profesor (proponer redacción y confirmar las dudosas: NG-012, NG-019).
3. **Convertir los paréntesis de (C) en tareas** y sacarlos de las celdas (regla D2: nada de proveniencia/instrucciones dentro de las columnas); las fusiones que piden (NG-021+016, NG-027→029, NG-009+010, NG-028→restricción, NG-R06 re-escope + fila nueva de verificación de pago) pasan por los tests C1–C3 de la skill antes de ejecutarse.
4. **Ejecutar los retiros de (D)** con barrido C8 completo.
5. **Confirmar la nota (E)** con el profesor antes de crear la fila de cierre de programas.
6. **Contexto del merge:** mientras tanto, `origin/main` avanzó el 18-nov (388634b "Create Etapa4.md", d98744a "Add Etapa4 section", 7089d5b "Subo tabla_geobosque" — material de la Etapa 4 de Valeria) y `rama-karina` trae 2 commits nuevos ("Etapas 2-3 y 8: programa por necesidad y definición del cierre"). El merge ahora tiene tres frentes: este commit de joni-rama, lo nuevo de main y lo nuevo de Karina — planificar el orden antes de fusionar.
