# Metodología de trabajo — Scrumban con MoSCoW y trabajo en parejas

Este documento define cómo el equipo reparte el trabajo, cómo sabe si el avance está en buen camino y cómo registra la retroalimentación del profesor, a partir de la siguiente entrega del proyecto SGD PROBOSQUE (materia FEPI). Es referencia de uso obligado en el triaje y el reparto de tareas de cada ciclo.

El método se eligió comparando seis candidatas (Scrum, Kanban, Scrumban, DSDM, XP y Crystal Clear). Se adopta **Scrumban como base**, con **MoSCoW** para priorizar y **trabajo en parejas** para las tareas medianas; de las otras cinco no se toma el marco completo, solo técnicas concretas que se recuperan en la combinación.

Punto de partida: somos 6 personas; el profesor revisa avances cada 2-3 días, comenta los documentos en el momento y espera correcciones de un día para otro. El ciclo es: presentación → comentarios → correcciones → avance.

## 1. Las piezas

### Scrum

Scrum completo es más que trabajar en ciclos. Fija tres roles (Product Owner, que decide qué se hace primero; Scrum Master, que vela por que el proceso se cumpla; y el equipo de desarrollo), cuatro eventos (planeación del ciclo, reunión diaria, revisión y retrospectiva) y dos listas de trabajo (el backlog del producto y el del ciclo).

Lo que conservamos: el ciclo corto que termina en una entrega con revisión, la reunión diaria breve y el backlog priorizado.

Lo que omitimos, y por qué:

- **Roles fijos.** Con 6 estudiantes y sin jerarquías reales, nombrar un Product Owner y un Scrum Master concentraría decisiones en una persona sin que exista la autoridad ni la dedicación para ejercerlas; las decisiones de cada ciclo se toman en el triaje, con todos presentes.
- **Ciclo de duración fija e inamovible.** El profesor pide cambios a mitad del trabajo y espera correcciones de un día para otro; un ciclo cerrado que no admite reordenar el trabajo en el medio chocaría con eso. De ahí que se use la base flexible (Scrumban) y no el marco puro.
- **Retrospectiva formal en cada ciclo.** Con ciclos de 2-3 días, una retrospectiva completa cada vez costaría más tiempo del que devuelve; se hará una mini-retro de 10 minutos solo cuando algo haya salido mal (una entrega incumplida, un reproceso).

### Kanban

Kanban organiza el trabajo como tarjetas en un tablero con columnas (por hacer, en curso, hecho). Cada quien mueve sus propias tarjetas conforme avanza y, de un solo vistazo, se ve qué pendiente hay, quién tiene cada tarea y qué está detenido.

De Kanban puro se omite la ausencia de compromisos de entrega: un flujo continuo sin fechas deja el reparto librado a que cada quien tome tareas cuando pueda, y con entregas cada 2-3 días se necesita un momento definido para asignar y comprometer trabajo. Por eso el flujo continuo se combina con la cadencia de revisión de Scrum: esa mezcla es Scrumban.

### MoSCoW

Cuatro etiquetas para clasificar por importancia (son las iniciales en inglés). Se toma de DSDM solo esta técnica: su marco completo asume roles de gobierno y ciclos de semanas, desproporcionados para un equipo de 6.

| Etiqueta                        | Significado                                    | Ejemplo nuestro                                                                      |
| ------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Must** (imprescindible) | La entrega no vale sin esto                    | Corrección señalada como error en la revisión                                     |
| **Should** (debería)     | Importante, pero la entrega sobrevive sin esto | Completar la sección de insumos y productos por paso (§12) de un proceso pendiente |
| **Could** (podría)       | Se hace si sobra tiempo                        | Revisar ortografía y formato de las tablas                                          |
| **Won't** (no hará)      | Se deja fuera por ahora                        | Reorganizar carpetas del repositorio durante el ciclo                                |

Sirve tanto para las tareas del proyecto como para los comentarios del profesor.

### WIP

*WIP* son las siglas en inglés de *Work In Progress* («trabajo en curso»). Un **límite WIP** es un número máximo de tareas que una persona puede tener simultáneamente en curso; para nosotros: **2**. Si ya tienes dos y quieres una más, primero terminas una de las dos. Evita acumular tareas empezadas y ninguna terminada, y hace visible cuando alguien está saturado o atorado.

### Triaje

Del inglés *triage*, la clasificación que se hace en urgencias médicas para atender primero a quien más lo necesita. Aquí es la reunión corta de **20-30 minutos** después de cada presentación: se lee cada comentario, se le pone etiqueta MoSCoW, se anota a qué sección afecta y quién se encarga. Convierte los comentarios sueltos en tarjetas con dueño y prioridad.

### Trabajo en parejas

Dos personas trabajan una misma tarea: una redacta y la otra revisa en el momento, turnándose cada tanto. Se usa en las tareas medianas: reparte el conocimiento del proyecto entre todos.2. Cómo se combinan

### El tablero

Un solo tablero para todo el equipo, con cinco columnas:

`Backlog → Por hacer → En curso (WIP ≤ 2 por persona) → Hecho`

más una columna de entrada: **Feedback**, donde llegan las tarjetas recién nacidas de los comentarios del profesor, pendientes de triaje. Reglas:

- Todo el trabajo vive como tarjeta en el tablero. Lo que no está en el tablero, no se hace.
- **Hecho** significa: ya se mostró al profesor y no pidió cambios sobre ello. Nadie mueve una tarjeta a Hecho por cuenta propia.
- Cada tarjeta tiene un solo responsable; en el caso de las parejas, se nombra igualmente un responsable de la tarjeta.

### El ciclo (cada 2-3 días)

1. **Presentación al profesor.** Cumple el papel de la revisión de fin de ciclo.
2. **Captura del feedback.** Cada comentario del profesor se anota *en el momento* como tarjeta de feedback, con el formato de la tabla siguiente.
3. **Triaje (20-30 min, justo después de la presentación).** Se lee cada tarjeta: se clasifica con MoSCoW, se identifica la sección afectada y se asigna responsable. Las Must se reparten de inmediato.
4. **Reparto del resto.** Must/Should inmediatamante, tareas medianas en parejas mixtas, según lo descrito en §1.
5. **Días de trabajo.** Reunión diaria de 5 minutos: cada quien dice qué hizo, qué hará hoy y qué le estorba. La única pregunta que importa: **¿qué falta para los Must?**
6. **Víspera de la entrega.** Chequeo del tablero: ¿todas las Must están en Hecho? Si no, se decide ahí mismo qué se recorta o quién apoya, y se avisa antes de la presentación, nunca durante.
7. **Presentación.** Se muestra el avance, el profesor comenta y las tarjetas nuevas van a Feedback. Vuelve al paso 2.

### La tarjeta de feedback (formato estándar)

| Campo             | Contenido                                 | Ejemplo                            |
| ----------------- | ----------------------------------------- | ---------------------------------- |
| Observación      | Lo que dijo el profesor, textual y breve  | «Falta la fuente de la pág. 8»  |
| Sección afectada | Documento y sección                      | `Solucion.md`, tabla de módulos |
| Prioridad         | MoSCoW, puesta en el triaje               | Must                               |
| Responsable       | Una sola persona                          | Joni                               |
| Estado            | Pendiente / En curso / Listo para mostrar | En curso                           |
| Origen            | Presentación y fecha                     | Presentación 4, 24-nov-2026       |

### La regla de avance

Para saber si el avance va bien existe una sola regla, y la respuesta se lee directamente del tablero:

> **El trabajo va bien cuando todas las tarjetas Must de la próxima presentación están en Hecho.**

Si hay una Must todavía en curso con el tiempo justo, se ve de inmediato; si las Must están en Hecho, lo que quede en Should/Could es ganancia.

## 3. Conclusión — el flujo completo

1. Se presenta el avance al profesor (cada 2-3 días).
2. Cada comentario se convierte en una **tarjeta de feedback** en el momento.
3. **Triaje** de 20-30 min: MoSCoW + responsable + sección afectada.
4. **Reparto:** Must/Should primer, medianas en **parejas mixtas**.
5. Durante los días intermedios: tarjetas en el tablero, WIP ≤ 2 por persona, reunión diaria de 5 min.
6. Víspera: chequeo de que las Must estén en **Hecho**.
7. Presentación → el ciclo se repite.

Todo se sostiene en tres ideas: **una sola fuente de verdad** (el tablero), **una sola regla de salud** (Must en Hecho antes de la entrega) y **una sola clasificación** (MoSCoW) para tareas y comentarios. Se omiten deliberadamente las ceremonias completas de Scrum, las gráficas de avance y los ciclos mayores de 3 días: con entregas cada 2-3 días y correcciones inmediatas, el tablero y la regla de salud bastan.

*Pendiente por decidir en equipo: ¿dónde pondremos el tablero? (Joni vota por Excalidraw, fácil y sencillo)*
