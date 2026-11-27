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
4. **Lo que falta:** esas marcas son tarea pendiente — hay que borrar lo marcado, fusionar lo implícito y completar la redacción — y además corregir erratas. Eso es lo que este documento instruye.
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

**Moraleja (lo que antes decía enrevesado «el paso final de un flujo se verbaliza dentro del servicio que lo produce»):** cuando una cosa es el remate automático de otro servicio (el comprobante al terminar de subir el expediente), no la listes como servicio aparte. Y si la mantienes como servicio, nómbrala por lo que el usuario puede hacer con ella — no por el nombre del papelito.

### 1.3. ¿Y qué pasó con SC-05 al final?

En la segunda revisión, ya sobre la tabla 2.3, el profesor aceptó SC-05 como servicio **si se redacta como funcionalidad**:

> «¿Comprobante de recepción qué? — Genera comprobante de recepción» (rev. 2, 00:17–00:19).

O sea: con verbo y describiendo lo que se hace. Por eso en las acciones de abajo SC-05 **no se borra**: se reescribe. Lo que sí se borra es lo que no pasa la prueba del botón (SC-07, SC-08, SC-32, SC-52, SC-53, SC-21, SC-26, SC-31 — ver §5).

---

## 2. Segunda idea: donde alguien trabaja, el servicio debe dejarle trabajar

La segunda regadera fue a los servicios que **solo dicen "consultar"**. Pasó en la revisión 2, en la fila del Módulo 3 (Evaluación y asignación), donde todos los servicios decían "Permite consultar…". La conversación:

1. Nos leyó la fila: «…permite consultar la lista de espera y los priorizados, permite consultar los dictámenes. ¿Consultar y dónde la genera?» (rev. 2, 00:55–00:57). Si solo hay consultas, **¿quién crea la lista? ¿de dónde sale?**
2. Nos recordó cómo se forma la lista de espera — el comité sesiona, evalúa expedientes, los que proceden y hay presupuesto se publican como lista de beneficiarios, y los que proceden pero no hay presupuesto **son** la lista de espera: «Pero eso hay que crearlo. ¿Dónde lo creo?» (rev. 2, 01:24–01:34).
3. Y la clave: «Esta consulta, pero no está la generación. **La generación es el trabajo del comité propiamente**» (rev. 2, 01:55). El trabajo de la gente (registrar la lista, armar el paquete de dictámenes) tiene que poder hacerse en el sistema.
4. Su balance de toda la fila: «Ahorita vi, solamente hay una consulta y una generación. Entonces, ¿dónde voy a hacer todo mi trabajo del comité propiamente?» (rev. 2, 02:20). Si en un momento hay cuatro servicios y tres son "consultar", el módulo no sirve para trabajar.

**Moraleja:** revisen cada fila preguntándose **quién trabaja en ese momento y qué necesita hacer**. Cada cosa que esa persona hace tiene que poder hacerse (generar, registrar, entregar) — además de poderse consultar. Un módulo de solo consultas está mal.

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

## 5. Acciones fila por fila (antes → después)

Con las tres ideas de arriba (botón, generación, redacción) ya se entiende cada acción. Van por fila, en el orden de la tabla.

### 5.1. Fila MOD-02 · Recepción e integración (la más discutida)

| Servicio actual | Qué dijo el profesor | Acción |
|---|---|---|
| SC-04 «Permite la captura y entrega de solicitudes» | «La recepción permite la captura y entrega de solicitudes» (rev. 2, 00:05) — la aceptó | **Mantener y ampliar.** Dos servicios se fusionan dentro de él: la carga de documentos (SC-52) y la asignación de oficina regional (SC-53). Redacción sugerida: «Permite capturar la solicitud y registrar su entrega con los documentos requeridos, quedando asignada a la Delegación que corresponde según el municipio del predio». **Cuidado:** la asignación regional fue pedido explícito del profesor — la función no se pierde, vive dentro de SC-04 |
| SC-05 «Comprobante de recepción» | «Genera comprobante de recepción» (rev. 2, 00:19) | **Reescribir con verbo**, incluyendo la recuperación (la conversación de §1.2): «Permite generar el comprobante de recepción con los documentos entregados, folio, fecha y firma/sello de quien recibe, y recuperarlo después con el folio» |
| SC-07 «Complementación del expediente **(borrar)** en el caso de ;» | «Complementación del expediente, ¿a qué se refiere?… Lo borraremos ahora» (rev. 1, 06:39) | **BORRAR de la fila.** No pasa la prueba del botón: la complementación ocurre dentro del flujo — SC-06 (la revisión detecta faltantes) + SC-13 (la notificación lo avisa) + SC-14 (el plazo de 5 días hábiles se controla) — y la persona vuelve a entrar por SC-04/SC-52. Al borrar el servicio, borra también el resto de la frase inconclusa («en el caso de ;») |
| SC-08 «Folio y turno del expediente **(existente en el 5)**» | «Folio y turno del expediente, ¿a qué se refiere?… ya está en el 5, o sea, ya lo tenemos en el 5» (rev. 2) | **BORRAR de la fila.** El folio ya vive en el comprobante (SC-05) — por eso el profesor dijo que ya lo tenemos "en el 5". El «turno» del expediente queda expresado en SC-55 (la lista de aspirantes turna a evaluación) |
| SC-32 «Consulta de restricciones **(implícito en 5)**» | Marcada como implícita | **Quitar de la fila.** No hay botón de "consultar restricciones": esa comprobación corre cuando se revisa la solicitud y el resultado se muestra al revisor — vive dentro de la revisión (SC-06), que toma los datos de SC-31. *Nota:* la marca del equipo dice «implícito en 5»; al dejar la fila limpia, si no queda claro a cuál servicio quedó implícita, anótenlo en una línea al pie de la tabla para aclararlo en la próxima sesión |
| SC-52 «Carga e integración de documentos **(implícito en 4)**» | Implícita en SC-04 | **Quitar de la fila.** Subir los documentos es parte de capturar la solicitud (SC-04). Que un archivo subido no esté validado lo resuelve el personal en la revisión (SC-06) |
| SC-53 «Asignación de oficina regional **(implícito en 4)**» | Implícita en SC-04 | **Quitar de la fila.** La Delegación receptora queda determinada al capturar/entregar (base Cuarta de la Convocatoria: la DRF según el municipio del predio) |
| SC-55 «Permite consultar la lista de aspirantes» | (Mismo problema de §2: solo consulta) | **Cambiar el verbo:** la lista se **genera**: «Permite generar la lista de aspirantes al cierre de la recepción y turnarla a evaluación» (así lo define su ficha en §3: «genera por programa la lista de aspirantes… y la turna») |

**Resultado esperado de la fila:** tres servicios — SC-04, SC-05, SC-55 — cada uno con verbo y en una línea.

### 5.2. Fila MOD-03 · Evaluación y asignación (el «3» de la revisión 2)

| Servicio actual | Qué dijo el profesor | Acción |
|---|---|---|
| SC-15 «Permite generar la dictaminación jurídica» | Correcto en estructura | **Mantener**, precisando quién trabaja: «Permite registrar el dictamen jurídico (UJIGEV) con su procedencia, fundamentos y motivos» |
| SC-16 «Permite registrar la dictaminación técnica» | Correcto | **Mantener** con el mismo estilo |
| SC-17 «Permite consultar la lista de espera y los priorizados» | «¿de dónde se genera?… Pero eso hay que crearlo… La generación es el trabajo del comité propiamente» (rev. 2, 01:16–01:57) | **Cambiar a generación + consulta:** «Permite generar la lista de espera y los priorizados en la sesión del comité y consultarlas» |
| SC-18 «Permite consultar los dictámenes» | «¿Consultar y dónde la genera?» (rev. 2, 00:56) | **Cambiar:** «Permite integrar el paquete de dictámenes e informes de las solicitudes procedentes y entregarlo al Comité o CASPEG» |

**Prueba de cierre de la fila (palabras del profesor):** «Algo que me diga realmente. Y yo ya digo, ah, hace esto, hace esto y ya tengo todo cubierto» (rev. 2, 02:20). La fila debe cubrir el trabajo completo del momento: dictaminar → priorizar → armar paquete → entregar.

### 5.3. Filas restantes con marca (no discutidas fila por fila; se aplica el mismo criterio)

| Fila | Marca | Acción |
|---|---|---|
| MOD-04 | SC-21 «calcular montos **(implícito en 22)**» | **Quitar de la fila.** El cálculo ocurre dentro de SC-22 al tramitar el pago; su redacción debe mencionar que emite el pago con el monto calculado según el esquema del programa |
| MOD-04 | Errata y sin verbo | «resgistrar» → «Permite registrar los datos bancarios…»; a SC-20 y SC-23 darles verbo completo |
| MOD-04 | SC-48 «Planta y vales» (sin verbo) | Redactar: «Permite registrar la asignación de planta y emitir/consultar vales (RHF/PS)» |
| MOD-05 | SC-26 «Pemite notificar el aviso e informe de conclusión **(implícito en 27)**» | **Quitar de la fila.** Recibir el aviso y el informe de conclusión es lo que dispara el registro de la visita: queda dentro de SC-27 (su redacción debe mencionar que la visita se registra a partir del aviso de conclusión y su informe). Ojo con el verbo si se conserva algo: quien avisa es la persona beneficiaria — «Permite registrar el aviso e informe de conclusión», no "notificar" |
| MOD-05 | SC-31 «Listado de incumplidos **(implícito en 30)**» | **Quitar de la fila.** El listado se actualiza al registrar el incumplimiento o la baja (SC-30); en 2.3 sale de la fila de MOD-05 porque queda implícito en SC-30 |
| MOD-05 | Errata | «evalución» → «evaluación»; «Pemite» → «Permite»; ajustar verbos de SC-27 y SC-28 («Permite registrar las visitas…», «Permite revisar las evidencias…») |
| MOD-01, MOD-06, MOD-07, MOD-08, MOD-09, MOD-10–13 | Sin marcas, pero sin verbo | Uniformar: todo servicio de la 2.3 inicia con «Permite…» en una línea. Ya lo cumplen SC-02, SC-03, SC-50 y varios de MOD-03/04/05; no lo cumplen SC-24, SC-29, SC-33–37, SC-01, SC-06, SC-09–14, SC-54, SC-38–42, SC-49, SC-51 y SE-01–06. El profesor pidió el formato para todas las filas (rev. 1, 08:33) |

---

## 6. Limpieza transversal (hacer al final)

1. **Ninguna marca queda en 2.3:** fuera todos los «(borrar)», «(implícito en N)», «(existente en el N)» y las frases inconclusas.
2. **Erratas:** «Pemite» (2 veces), «resgistrar», «evalución», y el «1» suelto en «SC-02 Permite crear una convocatoria adjuntando los datos1» → «adjuntando los datos y requisitos».
3. **Una línea por servicio:** si la redacción crece, casi siempre son dos servicios mezclados — sepáralos o recorta; no metas párrafos.
4. **No cambies los IDs en 2.3:** aunque quiten servicios de la fila, los IDs que sobreviven se llaman igual (el reordenamiento del catálogo §3 es la pasada siguiente).

---

## 7. Fuera del alcance de esta ronda (no tocar todavía)

- **§3 Catálogo general y §4 Matriz:** los servicios que salen de la fila de 2.3 (SC-07, SC-08, SC-21, SC-26, SC-31, SC-32, SC-52, SC-53) **siguen existiendo en §3 y §4**. Fusionarlos ahí y ajustar sus columnas G/U es la siguiente pasada, cuando el profesor valide la 2.3 limpia. No lo hagan ahora para no mezclar cambios.
- **Los verbos de §3:** mismo criterio (generación donde falta), pero después.
- No agregar servicios nuevos, no cambiar momentos, no cambiar IDs.

---

## 8. Checklist de entrega

- [ ] Ninguna marca `(borrar)` / `(implícito en N)` / `(existente en el N)` ni frase inconclusa en la tabla 2.3.
- [ ] Todos los servicios de la 2.3 empiezan con «Permite…» y se leen en una sola línea.
- [ ] La fila MOD-02 queda con **tres** servicios (SC-04, SC-05, SC-55) y la asignación de oficina regional está mencionada dentro de SC-04.
- [ ] SC-17 y SC-18 incluyen la **generación** (lista de espera y paquete de dictámenes), no solo consulta; SC-55 genera la lista de aspirantes.
- [ ] Las funciones que salieron de la fila quedan descritas dentro del servicio que las absorbe (SC-04: carga de documentos + oficina regional; SC-05: folio; SC-06/SC-13/SC-14: complementación; SC-22: cálculo de montos; SC-27: aviso de conclusión; SC-30: listado).
- [ ] Erratas corregidas y conteo de servicios por fila consistente con lo anterior.

**Prueba final, como la haría el profesor:** abre la 2.3 y recórrela módulo por módulo preguntándote «¿quién trabaja aquí y puede hacer todo su trabajo?». Si algún momento solo ofrece consultas, algo falta — y si un servicio no pasa la prueba del botón, no es servicio.
