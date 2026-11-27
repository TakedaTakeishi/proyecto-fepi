# Instrucciones para terminar la tabla 2.3 — consolidado de módulos, momentos y servicios

**Fecha:** 27 de noviembre de 2026. **Escrita por:** Joni, para el equipo.
**Basada en:** las dos revisiones del 26-nov con el profesor. Las transcripciones están en `Speech to text/Transcripción de retroalimentación/salida/FEPI Revisión 2026-11-26/` (los números entre paréntesis son los minutos de la grabación, para que puedan buscar el momento).
**Documento a modificar:** [Arquitectura_y_matriz_de_servicios.md](Arquitectura_y_matriz_de_servicios.md), **solo la tabla 2.3** («Consolidado: módulos, momentos y servicios»). Nada más.

---

## 0. Si no viniste a las revisiones, empieza aquí

La historia en cinco pasos:

1. **Tenemos una propuesta de solución organizada así:** momentos del trámite → módulos (MOD-01 a MOD-13) → servicios (SC-## comunes y SE-## específicos). Cada módulo es una pantalla o conjunto de pantallas de la aplicación; cada servicio es una cosa que se puede hacer dentro de él.
2. **En la primera revisión** el profesor vio la tabla 2.1 (catálogo de módulos) y el catálogo de servicios. Lo regañó dos cosas: que los servicios no estaban redactados como funcionalidades, y que varios no eran servicios de verdad. Al final de esa revisión pidió: háganme la **tabla 2.3**, una vista consolidada donde yo vea, por módulo: la generalidad del módulo, el momento en que se usa y los servicios que brinda. «Si lo hacen ahorita lo puedo revisar» (rev. 1, 09:25).
3. **El equipo creó la 2.3** (está en el commit `5270196`) y en la **segunda revisión** se la pasó al profesor fila por fila. Él fue hablando y marcando problemas; nosotros fuimos anotando sus marcas **dentro de la tabla, entre paréntesis**: `(borrar)`, `(existente en el 5)`, `(implícito en 4)`, etc.
4. **Lo que falta:** resolver esas marcas (borrar, fusionar, redactar) y corregir erratas. Cómo hacerlo está en §6 — **con su criterio**; las instrucciones no les dictan el resultado de cada fila.
5. **Alcance de esta ronda: solo la tabla 2.3.** El catálogo (§3) y la matriz (§4) se arreglan en la pasada siguiente, cuando el profesor apruebe la 2.3 limpia. No los toquen todavía.

---

## 1. Primera idea del profesor: ¿qué es un «servicio» de verdad?

Esta es la pregunta de fondo de la primera revisión, y sin entenderla no se entienden las marcas. La reconstruyo con la conversación del comprobante, que es donde la dejó clara.

### 1.1. La prueba del botón

Para el profesor, un servicio es una cosa que **alguien puede hacer con el software**: abres la aplicación, hay una pantalla o un botón, lo usas, y obtienes un resultado. Literalmente:

> «Un servicio es como agarro, tengo la interfaz, y entonces hay uno que dice *captura de solicitudes*, y otro que dice *genera comprobante de recepción*» (rev. 1, 03:42).

La contraprueba que usó todo el tiempo:

> «No hay un botón que diga comprobante de recepción» (rev. 1, 05:52).

Si nadie puede "picarle" a algo, **no es un servicio**: es un paso automático dentro de otro servicio, o una consecuencia del flujo. Eso no lo escribimos como servicio aparte — y aquí está la primera fuente de las marcas de borrado.

### 1.2. La conversación del comprobante, paso a paso

Nosotros teníamos a SC-05 como «Comprobante de recepción». El profesor la cuestionó así:

1. Primero preguntó **qué hace** con ese nombre: «Comprobante de recepción, ¿qué quiere decir eso?» (rev. 1, 02:43). El nombre solo no dice nada — un servicio tiene que decir su funcionalidad.
2. Al ver la descripción («genera y consulta el acuse…»), razonó: **generar el comprobante es el último paso de subir el expediente** — «Pero genera el acuse no es el paso final de tu captura… Entonces, ¿por qué es un servicio extra?» (rev. 1, 03:14). Es decir: si el comprobante sale solito al terminar la captura, no hay botón para él, no es servicio.
3. Después nos propuso el escenario en que **sí** sería un servicio: «Agarro, pongo un folio y recupero mi comprobante. Si es así, sí» (rev. 1, 06:00). O sea: si hay una pantalla donde la persona escribe su folio y vuelve a descargar su comprobante (porque lo perdió), **eso** sí se puede picar — y se redacta por eso.
4. Y cerró: «Pero entonces no es esto» (rev. 1, 06:05) — tal como estaba nombrada, no.

**Moraleja:** cuando una cosa es el remate automático de otro servicio (el comprobante al terminar de subir el expediente), no la listes como servicio aparte. Y si la mantienes como servicio, nómbrala por lo que el usuario puede hacer con ella — no por el nombre del papelito.

### 1.3. ¿Y qué pasó con SC-05 al final?

En la segunda revisión, ya sobre la tabla 2.3, el profesor aceptó SC-05 como servicio **si se redacta como funcionalidad**:

> «¿Comprobante de recepción qué? — Genera comprobante de recepción» (rev. 2, 00:17–00:19).

O sea: con verbo y describiendo lo que se hace. Por eso SC-05 **no es de las marcadas para borrar**: se reescribe. Lo que sí sale son las que no pasan la prueba del botón — ver §5.

---

## 2. Segunda idea: donde alguien trabaja, el servicio debe dejarle trabajar

La segunda regadera fue a los servicios que **solo dicen "consultar"**. Pasó en la revisión 2, en la fila del Módulo 3 (Evaluación y asignación), donde todos los servicios decían "Permite consultar…". La conversación:

1. Nos leyó la fila: «…permite consultar la lista de espera y los priorizados, permite consultar los dictámenes. ¿Consultar y dónde la genera?» (rev. 2, 00:55–00:57). Si solo hay consultas, **¿quién crea la lista? ¿de dónde sale?**
2. Nos recordó cómo se forma la lista de espera — el comité sesiona, evalúa expedientes, los que proceden y hay presupuesto se publican como lista de beneficiarios, y los que proceden pero no hay presupuesto **son** la lista de espera: «Pero eso hay que crearlo. ¿Dónde lo creo?» (rev. 2, 01:24–01:34).
3. Y la clave: «Esta consulta, pero no está la generación. **La generación es el trabajo del comité propiamente**» (rev. 2, 01:55). El trabajo de la gente (registrar la lista, armar el paquete de dictámenes) tiene que poder hacerse en el sistema.
4. Su balance de toda la fila: «Ahorita vi, solamente hay una consulta y una generación. Entonces, ¿dónde voy a hacer todo mi trabajo del comité propiamente?» (rev. 2, 02:20). Si en un momento hay cuatro servicios y tres son "consultar", el módulo no sirve para trabajar.

**Moraleja:** en cada momento del trámite trabaja alguien (el comité, el revisor, el técnico). Cada cosa que esa persona hace tiene que poder hacerse en el sistema — generar, registrar, entregar — además de poderse consultar. Un módulo de solo consultas está mal.

---

## 3. Tercera idea: cómo se redacta cada servicio

Esto lo pidió en la revisión 1, con el catálogo enfrente:

> «Módulo. La generalidad del módulo. Y después qué servicios brinda. […] Traten de resumir esto un poco. Permite registrar los documentos, tal. No pongan todo este choro. Sino algo que yo pueda leer así en una línea. Para entender qué hace… Y quiero ver el momento» (rev. 1, 08:33–08:54).

O sea, el formato que él quiere leer es:

- **Módulo** → **generalidad del módulo en una oración** → **lista de servicios**, cada servicio escrito como «Permite <verbo>…» en una línea.
- Cada servicio es **descripción funcional, nivel cliente**: «Yo quiero una descripción funcional. A nivel de cliente. Quiero saber qué hace tu software» (rev. 1, 05:30). Qué puede hacer la gente con el software — no cómo está implementado por dentro («eso ya tiene que ver con tu arquitectura como implementas», rev. 1, 05:40).
- El momento debe verse (por eso la 2.3 tiene columna de momento).

La tabla 2.3 ya tiene esa estructura de columnas; lo que falta es que **todas las celdas de servicios cumplan el formato** (varias no traen verbo, y algunas traen el "choro" que él no quiere).

---

## 4. Cómo leer las marcas que quedaron en la tabla

Dos cosas que confundieron en la sesión misma, aclaradas:

1. **Los números de las marcas son los IDs de los servicios.** El profesor así los usó siempre: «Ese es el 07» (rev. 1, 06:42, refiriéndose a SC-07) y contó «4, 5, 6, 7» para SC-04…SC-07 (rev. 1, 06:47). Entonces:
   - `(implícito en 4)` = «esa función ya está dentro de SC-04» — fusiónala ahí.
   - `(existente en el 5)` = «ya la tenemos en SC-05» — no hace falta como servicio aparte.
2. **«Es el 3» se refería a la fila del Módulo 3**, no a un servicio. En la revisión 2 el profesor dijo «esto todavía lo tenemos que modificar, porque es el 3» y un compañero preguntó «¿cuál es el 3?»; la discusión siguió en la fila de dictaminación (MOD-03). Fue el módulo donde faltaba la generación.

---

## 5. Lo que el profesor ya decidió en la sesión (hechos, no criterio nuestro)

Estos puntos no son negociables ni cuestión de criterio — el profesor los dijo. Aplíquenlos tal cual; el resto de cada fila es suyo:

1. **La complementación del expediente sale de la fila** (SC-07): «Complementación del expediente, ¿a qué se refiere?… Lo borraremos ahora» (rev. 1, 06:39; confirmado en rev. 2). No es un botón — ocurre dentro del flujo de revisión, notificación y plazo.
2. **El folio ya está en el comprobante** (SC-08 sale de la fila): «Folio y turno del expediente, ¿a qué se refiere?… ya está en el 5, o sea, ya lo tenemos en el 5» (rev. 2).
3. **En MOD-03 hace falta la generación:** «Esta consulta, pero no está la generación. La generación es el trabajo del comité propiamente» (rev. 2, 01:55) — la lista de espera y el paquete de dictámenes se deben poder generar, no solo consultar.
4. **El comprobante se redacta con verbo:** «Genera comprobante de recepción» (rev. 2, 00:19) — y la justificación de tenerlo como servicio propio es la recuperación con el folio (rev. 1, 06:00).

Además, hay más marcas de "(implícito en N)" en filas que no discutió fila por fila (MOD-04 y MOD-05) — ellas nacen del mismo criterio; evalúenlas con el método de §6.

---

## 6. Método para procesar la tabla (paso a paso, con su criterio)

Recorran la tabla **fila por fila** y, dentro de cada fila, **servicio por servicio**, aplicando tres pruebas en orden. Anoten decisiones al margen mientras trabajan; al final hacen la limpieza (§7).

### Prueba 1 — ¿Pasa la prueba del botón? (§1)

Pregúntense: **¿quién abre esta pantalla y con qué intención? ¿Hay un momento en que alguien "le pica" a esto?**

- Si sí → es servicio, continúen con la prueba 2.
- Si no (ocurre solo dentro del flujo de otro servicio, o es una consecuencia automática: un documento que se genera al final, un dato que se llena solo, una consulta que el sistema hace por su cuenta al revisar) → **no es servicio aparte**. Quítenlo de la fila y **verifican dónde queda su función**: el servicio que la absorbe debe mencionarla en su redacción de una línea, para que no se pierda nada (el profesor dijo que lo que absorbe otro debe "hacerlo explícito": «Algo que me diga realmente… y ya tengo todo cubierto», rev. 2, 02:20).

### Prueba 2 — ¿La fila deja trabajar a quien trabaja en ese momento? (§2)

Para cada fila, identifiquen primero **quién trabaja** en ese momento y qué le toca hacer (rev. 1, 09:02: «pasa de la ventanilla, pasa a área central, y ahí revisan… si algo falta, notifican, y son esos cinco días» — el profesor quería ver dónde está cada cosa y quién la hace). Luego revisen los servicios de la fila contra ese trabajo:

- Todo lo que esa persona **hace** debe poder hacerse: generar, registrar, capturar, entregar, decidir.
- Lo que solo se puede **consultar** pero alguien tiene que crearlo primero, está incompleto: agreguen el verbo de generación al servicio (o al que corresponda).
- La fila completa debe permitir recorrer el momento de principio a fin; si solo hay consultas, falta la parte de trabajo.

### Prueba 3 — ¿Se lee en una línea, con verbo, a nivel cliente? (§3)

- Empieza con «Permite <verbo>…».
- Una línea legible; si crece, probablemente hay dos servicios mezclados — sepárenlos o recorten.
- Funcional (qué hace el software), no de implementación interna.
- Si el nombre solo (como «Comprobante de recepción») no dice la funcionalidad, redáctenla — y si el servicio solo tiene sentido como "volver a obtener algo que ya se generó" (recuperar con folio), dígalo así.

### Ejemplo de aplicación (ilustrativo, no receta)

Así se ve el método aplicado a una fila — la de MOD-02, que fue la más discutida. **No lo copien tal cual en las demás: cada fila se resuelve con su propio análisis.**

- SC-04 (captura y entrega) **pasa el botón** (la persona captura y entrega su solicitud). Al pasarle la prueba 2, notamos que dentro de la fila hay servicios que no tienen botón propio: subir los documentos (parte de la captura) y la oficina regional que corresponde al predio (dato que la solicitud determina). Ambos quedan **dentro** de SC-04, y su redacción de una línea debe mencionarlos para que no se pierdan.
- SC-05 (comprobante) **se reescribe** con verbo y con su justificación: generar el comprobante al terminar la entrega y recuperarlo después con el folio.
- SC-07 (complementación) **no pasa el botón**: detectar faltantes es parte de la revisión (SC-06), avisarlo es la notificación (SC-13), controlar los 5 días es el plazo (SC-14) — y la persona complementa volviendo a entrar por SC-04. Sale de la fila; el equipo decidió con el profesor borrarlo (§5.1).
- SC-08 (folio y turno) **ya vive en el comprobante** (§5.2); el turno del expediente lo expresaría la lista de aspirantes al turnar a evaluación.
- SC-55 (lista de aspirantes) **tenía el problema de §2**: decía "consultar" pero la lista se genera al cerrar la recepción — se corrige el verbo.

### Registro para la siguiente pasada

Lleven una lista corta (puede ser al final del archivo, fuera de la tabla, o en su nota de commit) con: **qué servicios salieron de la fila y en cuál quedaron absorbidos**. Con esa lista, la pasada siguiente (catálogo §3 y matriz §4) es mecánica.

---

## 7. Limpieza transversal (hacer al final)

1. **Ninguna marca queda en 2.3:** fuera todos los «(borrar)», «(implícito en N)», «(existente en el N)» y las frases inconclusas.
2. **Erratas:** «Pemite» (2 veces), «resgistrar», «evalución», y el «1» suelto en «SC-02 Permite crear una convocatoria adjuntando los datos1» → «adjuntando los datos y requisitos».
3. **Consistencia de conteo:** si quitan servicios de la fila, no cambien los IDs en 2.3 (el reordenamiento del catálogo §3 es la pasada siguiente).

---

## 8. Fuera del alcance de esta ronda (no tocar todavía)

- **§3 Catálogo general y §4 Matriz:** los servicios que salgan de la fila de 2.3 **siguen existiendo en §3 y §4**. Fusionarlos ahí y ajustar sus columnas G/U es la siguiente pasada, cuando el profesor valide la 2.3 limpia. No lo hagan ahora para no mezclar cambios.
- **Los verbos de §3:** mismo criterio (generación donde falta), pero después.
- No agregar servicios nuevos, no cambiar momentos, no cambiar IDs.

---

## 9. Checklist de entrega

- [ ] Ninguna marca `(borrar)` / `(implícito en N)` / `(existente en el N)` ni frase inconclusa en la tabla 2.3.
- [ ] Todos los servicios de la 2.3 empiezan con «Permite…» y se leen en una sola línea.
- [ ] Cada fila pasa la prueba de §2: quien trabaja en ese momento puede hacer todo su trabajo (generar, registrar, entregar), no solo consultar.
- [ ] Los servicios que salieron de la fila están descritos dentro del servicio que los absorbe (y nada perdió su función — especialmente la asignación de oficina regional y el folio).
- [ ] Quedó el registro de qué servicios salieron y dónde quedaron absorbidos (§6).
- [ ] Erratas corregidas.

**Prueba final, como la haría el profesor:** abre la 2.3 y recórrela módulo por módulo preguntándote «¿quién trabaja aquí y puede hacer todo su trabajo?». Si algún momento solo ofrece consultas, algo falta — y si un servicio no pasa la prueba del botón, no es servicio.
