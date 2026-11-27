# Instrucciones para terminar la tabla 2.3 — consolidado de módulos, momentos y servicios

**Fecha:** 27 de noviembre de 2026. **Autor:** Joni, con base en las dos revisiones del 26-nov (transcripciones en `Speech to text/Transcripción de retroalimentación/salida/FEPI Revisión 2026-11-26/`).

**Documento a modificar:** [Arquitectura_y_matriz_de_servicios.md](Arquitectura_y_matriz_de_servicios.md), **solo la tabla 2.3** («Consolidado: módulos, momentos y servicios»).

**Estado actual:** la 2.3 se creó en el commit `5270196` ya con las marcas del profesor escritas en medio: `(borrar)`, `(existente en el 5)`, `(implícito en 4)`, `(implícito en 5)`, `(implícito en 22)`, `(implícito en 27)`, `(implícito en 30)`. **La tarea es resolver esas marcas y dejar la tabla limpia**, aplicando el criterio que el profesor repitió en las dos revisiones.

---

## 1. El criterio del profesor (léanlo antes de tocar nada)

De la transcripción, estas son sus reglas, con la cita textual:

1. **Un servicio es una funcionalidad que alguien invoca** — hay una pantalla o un botón que la ejecuta:
   > «Un servicio es como agarro, tengo la interfaz, y entonces hay uno que dice captura de solicitudes, y otro genera comprobante de recepción» (rev. 1, 03:42).
   > «No hay un botón que diga comprobante de recepción. Si no es parte del ciclo y al final me das un comprobante» (rev. 1, 05:52).
   Lo que ocurre **automáticamente** dentro de otro servicio, o como paso intermedio del flujo, **no es un servicio aparte**: se fusiona en el servicio que lo hace o se elimina de la lista.
2. **Cada servicio se redacta como una funcionalidad con verbo, en una línea:** «Permite registrar los documentos, tal… No pongan todo este choro. Sino algo que yo pueda leer así en una línea» (rev. 1, 08:45–08:52). Formato pedido: **Módulo → generalidad del módulo → servicios que brinda**, con el momento visible (rev. 1, 08:33–08:54). Eso es exactamente lo que ya tiene la 2.3; falta cumplirlo en las celdas de servicios.
3. **La descripción es funcional, nivel cliente** (qué hace el software, no cómo se implementa):
   > «Yo quiero una descripción funcional. A nivel de cliente. Quiero saber qué hace tu software» (rev. 1, 05:30–05:33).
4. **Donde alguien hace el trabajo, el servicio debe permitir hacerlo — no solo consultarlo:**
   > «Si se permite consultar la lista de espera y los priorizados, ¿de dónde se genera?… Pero eso hay que crearlo. ¿Dónde lo creo?… Es que es este momento donde se hace… Esta consulta, pero no está la generación. La generación es el trabajo del comité propiamente» (rev. 2, 01:01–01:57).
   > «Ahorita vi, solamente hay una consulta y una generación. Entonces, ¿dónde voy a hacer todo mi trabajo del comité propiamente?» (rev. 2, 02:20).
5. **El paso final de un flujo se verbaliza dentro del servicio que lo produce.** El comprobante es el final de subir el expediente; si queda como servicio, se redacta por lo que realmente se puede hacer con él (rev. 1, 03:08–06:06).

---

## 2. Qué significa cada marca del profesor

Los números que usó son **los IDs de los servicios** («Ese es el 07», rev. 1, 06:42; «4, 5, 6, 7» = SC-04…SC-07, rev. 1, 06:47). «Implícito en 4» = la función ya está dentro de SC-04; «existente en el 5» = ya está en SC-05. En la revisión 2, «porque es el 3» se refería a la **fila del Módulo 3** (un compañero preguntó «¿cuál es el 3?» y la discusión siguió en la dictaminación).

---

## 3. Acciones fila por fila (antes → después)

### Fila MOD-02 · Recepción e integración (la fila que más discutió)

| Servicio actual en 2.3 | Qué dijo el profesor | Acción |
|---|---|---|
| SC-04 «Permite la captura y entrega de solicitudes» | «La recepción permite la captura y entrega de solicitudes» (rev. 2, 00:05) — **correcto** | **Mantener.** Ampliar la redacción para que absorba lo que se le fusiona: la carga de documentos (SC-52) y la oficina regional (SC-53): «Permite capturar la solicitud y registrar su entrega con los documentos requeridos, quedando asignada a la Delegación que corresponde según el municipio del predio». Ojo: **no perder la función de asignación regional** — era un pedido explícito del profesor; no desaparece, vive dentro de SC-04 |
| SC-05 «Comprobante de recepción» | «¿Comprobante de recepción qué? — Genera comprobante de recepción» (rev. 2, 00:17–00:19) | **Redactar con verbo:** «Permite generar el comprobante de recepción con los documentos entregados, folio, fecha y firma/sello de quien recibe, y recuperarlo después con el folio» (la recuperación es lo que lo justifica como servicio propio: rev. 1, 06:00 «Agarro, pongo un folio y recupero mi comprobante») |
| SC-07 «Complementación del expediente **(borrar)** en el caso de ;» | «Complementación del expediente, ¿a qué se refiere?… Lo borraremos ahora, porque…» (rev. 1, 06:39; rev. 2 en «Cambios aplicados» de la transcripción) | **BORRAR de la fila.** No es un servicio invocado: la complementación ocurre dentro del flujo — revisión (SC-06 detecta faltantes) + notificación (SC-13 avisa) + plazo (SC-14 controla los 5 días hábiles) — y el usuario complementa re-entrando por SC-52/SC-04. Al borrar, **eliminar también el resto de la frase inconclusa** («en el caso de ;») |
| SC-08 «Folio y turno del expediente **(existente en el 5)**» | «Folio y turno del expediente, ¿a qué se refiere?… No sé qué es eso… ya está en el 5, o sea, ya lo tenemos en el 5» (rev. 2) | **BORRAR de la fila.** El folio ya vive en el comprobante (SC-05). Si el «turno» importa, queda expresado en SC-55 (la lista de aspirantes turna a evaluación) — no como servicio aparte |
| SC-32 «Consulta de restricciones **(implícito en 5)**» | Marcada como implícita | **Quitar de la fila.** La comprobación de restricciones no es un botón: corre al revisar la solicitud y muestra el resultado al revisor — queda dentro de la revisión (SC-06), que toma los datos de SC-31. *Nota:* la marca del equipo dice «implícito en 5»; si al aclarar con el equipo el «5» resulta otro servicio, anoten en la fila final a cuál quedó implícita — en 2.3 se quita igual |
| SC-52 «Carga e integración de documentos **(implícito en 4)**» | Implícita en SC-04 | **Quitar de la fila.** Subir los documentos es parte de capturar la solicitud (SC-04). La validación de los archivos la hace el personal en la revisión (SC-06) |
| SC-53 «Asignación de oficina regional **(implícito en 4)**» | Implícita en SC-04 | **Quitar de la fila.** La Delegación receptora queda determinada al capturar/entregar (base Cuarta de la Convocatoria: la DRF según el municipio del predio). Ver que la redacción nueva de SC-04 lo mencione |
| SC-55 «Permite consultar la lista de aspirantes» | (Mismo error que en MOD-03: solo consulta) | **Cambiar el verbo:** la lista se **genera**: «Permite generar la lista de aspirantes al cierre de la recepción y turnarla a evaluación» (así lo define su §3: «genera por programa la lista de aspirantes… y la turna a Evaluación y asignación») |

**Resultado esperado de la fila:** SC-04, SC-05 y SC-55 — tres funcionalidades, cada una con verbo y en una línea.

### Fila MOD-03 · Evaluación y asignación (el «3» de la revisión 2)

| Servicio actual en 2.3 | Qué dijo el profesor | Acción |
|---|---|---|
| SC-15 «Permite generar la dictaminación jurídica» | Correcto en estructura | **Mantener**, precisando quién: «Permite registrar el dictamen jurídico (UJIGEV) con su procedencia, fundamentos y motivos» |
| SC-16 «Permite registrar la dictaminación técnica» | Correcto | **Mantener** con el mismo estilo |
| SC-17 «Permite consultar la lista de espera y los priorizados» | «¿de dónde se genera?… Pero eso hay que crearlo… La generación es el trabajo del comité propiamente» (rev. 2, 01:16–01:57) | **Cambiar a generación + consulta:** «Permite generar la lista de espera y los priorizados en la sesión del comité y consultarlas» — sin generación, el comité no puede hacer su trabajo |
| SC-18 «Permite consultar los dictámenes» | «¿Consultar y dónde la genera?» (rev. 2, 00:56) | **Cambiar:** no es solo consultar; es integrar y entregar: «Permite integrar el paquete de dictámenes e informes de las solicitudes procedentes y entregarlo al Comité o CASPEG» |

**Criterio de cierre de la fila (palabras del profesor):** «Algo que me diga realmente. Y yo ya digo, ah, hace esto, hace esto y ya tengo todo cubierto» (rev. 2, 02:20). La fila debe cubrir el trabajo completo del momento: dictaminar → priorizar → armar paquete → entregar. Con solo consultas, «¿dónde voy a hacer todo mi trabajo del comité?»

### Filas restantes con marca (no se discutieron fila por fila, pero aplican el mismo criterio)

| Fila | Marca | Acción |
|---|---|---|
| MOD-04 | SC-21 «calcular montos **(implícito en 22)**» | **Quitar de la fila.** El cálculo ocurre dentro de SC-22 al tramitar el pago. Añadir a la redacción de SC-22 que emite el pago con el monto calculado según el esquema del programa |
| MOD-04 | Errata | «resgistrar» → «Permite registrar los datos bancarios…»; a SC-20 y SC-23 darles verbo completo en una línea |
| MOD-04 | SC-48 «Planta y vales» (sin verbo) | Redactar: «Permite registrar la asignación de planta y emitir/consultar vales (RHF/PS)» |
| MOD-05 | SC-26 «Pemite notificar el aviso e informe de conclusión **(implícito en 27)**» | **Quitar de la fila.** Recibir el aviso/informe de conclusión es lo que dispara el registro de la visita: queda dentro de SC-27 (su redacción debe mencionar que la visita se registra a partir del aviso de conclusión y su informe). Ojo con el verbo: quien avisa es la persona beneficiaria, no el sistema — si se conserva algo, «Permite registrar el aviso e informe de conclusión» |
| MOD-05 | SC-31 «Listado de incumplidos **(implícito en 30)**» | **Quitar de la fila.** El listado se actualiza al registrar el incumplimiento/baja (SC-30); su consulta vive en SC-31 del catálogo si se necesita como pantalla aparte, pero en 2.3 sale de la fila de MOD-05 (queda implícito en SC-30) |
| MOD-05 | Errata | «evalución» → «evaluación»; «Pemite» → «Permite»; a SC-27 y SC-28 ajustar verbos («Permite registrar las visitas…», «Permite revisar las evidencias…») |
| MOD-01, MOD-06, MOD-07, MOD-08, MOD-09, MOD-10–13 | Sin marcas, pero sin verbo | Uniformar: todo servicio de la 2.3 inicia con «Permite…» en una línea (SC-02, SC-03, SC-50 ya lo cumplen; SC-24, SC-29, SC-33–37, SC-01, SC-06, SC-09–14, SC-54, SC-38–42, SC-49, SC-51 y SE-01–06 no). El profesor pidió el formato para todas las filas: «Necesito lo que les pedí… y después qué servicios brinda» (rev. 1, 08:33) |

---

## 4. Limpieza transversal de la tabla (hacer al final)

1. **Ninguna marca queda en 2.3:** eliminar todos los «(borrar)», «(implícito en N)», «(existente en el N)» y las frases inconclusas.
2. **Erratas:** «Pemite» (2 veces), «resgistrar», «evalución», y el «1» suelto en «SC-02 Permite crear una convocatoria adjuntando los datos1» → «adjuntando los datos y requisitos».
3. **Una línea por servicio:** si la redacción crece, es señal de que hay dos servicios mezclados — separar o recortar, no meter párrafos.
4. **Consistencia de conteo:** si quitan servicios de la fila, no cambien los IDs en 2.3 (los IDs se reordenan en una pasada posterior del catálogo §3, no aquí).

---

## 5. Fuera del alcance de esta ronda (no tocar todavía)

- **§3 Catálogo general de servicios y §4 Matriz:** los servicios que salen de la fila de 2.3 (SC-07, SC-08, SC-21, SC-26, SC-31, SC-32, SC-52, SC-53) **siguen existiendo en §3 y §4**. Fusionarlos ahí (y ajustar sus columnas G/U) es la **siguiente pasada**, cuando el profesor valide la 2.3 limpia. No lo hagan ahora para no mezclar cambios.
- **Los verbos de §3:** mismo criterio (generación donde falta), pero después de que se apruebe la 2.3.
- No agregar servicios nuevos ni cambiar momentos ni IDs.

---

## 6. Cómo saben que quedó (checklist de entrega)

- [ ] Ninguna marca `(borrar)` / `(implícito en N)` / `(existente en el N)` ni frase inconclusa en la tabla 2.3.
- [ ] Todos los servicios de la 2.3 empiezan con «Permite…» y se leen en una sola línea.
- [ ] La fila MOD-02 queda con **tres** servicios (SC-04, SC-05, SC-55) y la asignación de oficina regional está mencionada dentro de SC-04.
- [ ] SC-17 y SC-18 incluyen la **generación** (lista de espera y paquete), no solo consulta; SC-55 genera la lista de aspirantes.
- [ ] Las funciones que salieron de la fila quedan descritas dentro del servicio que las absorbe (SC-04: carga de documentos + oficina regional; SC-05: folio; SC-06/SC-13/SC-14: complementación; SC-22: cálculo de montos; SC-27: aviso de conclusión; SC-30: listado).
- [ ] Erratas corregidas y conteo de servicios por fila consistente con lo anterior.

Con la 2.3 así, la relée como el profesor: módulo → generalidad → servicios «Permite…», y verifiquen que cada momento cubra todo el trabajo de quien lo ejecuta.
