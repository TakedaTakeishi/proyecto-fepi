# Tabla de necesidades — Calculadora de masa forestal GeoBosque

> Fecha de elaboración y verificación documental: **2026-11-18**.
> Alcance solicitado: consulta de tipos de bosques, matorrales y árboles; navegación entre años; comparación de mapas; estadísticas de cambios; transiciones de uso del suelo; causas documentadas; presentación relacionada de tablas y mapas.
> Estructura de referencia: [Tabla de necesidades general de PROBOSQUE](<C:/Users/ROG/Documents/fepi/proyecto-fepi/Docs/TABLA_NECESIDADES.md>). Los IDs `CMF-###` pertenecen a este documento y no sustituyen los `NG-###` de aquella tabla.

## 1. Objeto y alcance

Sustentar las necesidades que atenderá la calculadora de masa forestal de GeoBosque. En este documento, el nombre **calculadora de masa forestal** se refiere a consultar, comparar y cuantificar la **superficie y los cambios de cobertura y uso del suelo**. No se presupone que las hectáreas permitan calcular directamente toneladas de biomasa, carbono, volumen de madera o número de árboles.

La unidad de consulta será el territorio seleccionado, los periodos disponibles y las categorías de vegetación de la fuente. La identificación de árboles se ofrecerá al nivel respaldado por los datos: tipo de bosque, grupo o especie registrada. La cartografía de tipos de vegetación no acredita por sí sola la identificación de cada árbol.

La comparación describirá **qué cambió, dónde, cuánto y entre qué fechas**. La causa se mostrará únicamente cuando exista evidencia asociada al área y periodo; en los demás casos figurará como **no determinada**. Una transición de bosque a agricultura describe un cambio de clase, pero no demuestra por sí sola quién lo ocasionó ni mediante qué proceso.

## 2. Método y nivel de evidencia

Se adopta el criterio de tres capas de la tabla de referencia: **actividad → necesidad → solución**. La tabla maestra conserva las columnas **Stakeholder, ID, Descripción, Notas, Prioridad y Origen**. El sujeto de la necesidad se redacta como «Un medio para…» o «Un mecanismo para…»; el contexto y las condiciones se ubican en Notas. Los controles de pantalla y la organización visual se describen en §6.

| Etiqueta | Significado |
| --- | --- |
| **Documentado** | El contenido o actividad consta en una fuente original, con página y numeral verificados. No implica que esa fuente ordene construir GeoBosque. |
| **Solicitado** | Función o condición expresamente requerida por el usuario en esta conversación. Tiene autorización de producto, aunque no sea una obligación institucional. |
| **Inferido** | Condición técnica propuesta para atender la necesidad; no se presenta como una práctica confirmada de PROBOSQUE. Se relaciona con un vacío de §7. |

**Límite de las fuentes:** los artículos 13–15 de [RLGDFS] regulan el Inventario Nacional Forestal y de Suelos y las funciones de las autoridades allí señaladas. Se utilizan como fundamento del contenido forestal y temporal. La relación institucional con PROBOSQUE se apoya en [MGO25], que asigna funciones relativas al Inventario Estatal en coordinación con CONAFOR. Ninguna de estas citas exige por sí sola una interfaz pública, un selector anual o mapas separados por líneas.

Las prioridades expresan el alcance de este producto: **Alta** para las funciones centrales solicitadas; **Media** para atribuir causas, porque depende de contar con evidencia adicional. No son prioridades oficiales de PROBOSQUE. Los actores se nombran por su función: las fuentes revisadas no identifican a la persona que operará GeoBosque.

## 3. Fuentes y trazabilidad documental

Las páginas son las del **archivo PDF**, no la numeración de la Gaceta impresa. Los documentos de análisis del equipo son antecedentes; las afirmaciones institucionales se sustentan en las fuentes originales.

| Clave | Fuente | Contenido verificado y uso |
| --- | --- | --- |
| **[RLGDFS]** | [Reglamento de la Ley General de Desarrollo Forestal Sustentable](<C:/Users/ROG/Documents/fepi/proyecto-fepi/Docs/Comun/Masa forestal/Reg_LGDFS.pdf>) | **P. 8, art. 13.IV, V y IX:** recursos por vegetación, afectaciones y dinámica de cambio. **P. 9, art. 14.IV.b–c:** escala, resolución, fecha y clases de interpretación, incluidos bosques, selvas, arbustos, matorrales y usos no forestales. **P. 9, art. 14.VI:** compilación y cálculo de resultados. **P. 10, art. 15.I y V:** superficies, cambios en el tiempo con su periodo y afectaciones. |
| **[MGO25]** | [Manual General de Organización de PROBOSQUE](<C:/Users/ROG/Documents/fepi/proyecto-fepi/Docs/Comun/Manual Jurídico/dic161d.pdf>) | **P. 25, función 6 de la Dirección de Restauración y Fomento Forestal:** promover y gestionar la actualización del Inventario Estatal con CONAFOR. **P. 28, función 12 de la Subdirección de Servicios Ambientales y Manejo Integral Forestal:** gestionar, supervisar y validar su información técnica. |
| **[RO-PSAH]** | [Reglas 2026 del Pago por Servicios Ambientales Hidrológicos](<C:/Users/ROG/Documents/fepi/proyecto-fepi/Docs/Comun/Programas de apoyo/RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf>) | **P. 8, §8.1.1.1:** superficie factible mediante análisis cartográfico y campo; formaciones, cobertura, tala y plagas. **P. 12, §8.1.2:** incidencia de cambio de uso del suelo, verificación y cartografía; presión de forestal a urbano o agrícola. Sustenta el uso de información territorial en este programa, no una aprobación automática mediante GeoBosque. |
| **[TAB-NG]** | [Tabla de necesidades general](<C:/Users/ROG/Documents/fepi/proyecto-fepi/Docs/TABLA_NECESIDADES.md>) | **NG-012:** cobertura y superficie; **NG-013:** consulta de información geoespacial; **NG-014:** cambios de cobertura; **V-T07:** metodología satelital pendiente. Es antecedente del análisis, no fuente normativa independiente. |
| **[INEGI-VI]** | [Ficha técnica local de Uso del Suelo y Vegetación, Serie VI](<C:/Users/ROG/Documents/geobosque/metadatos/FICHA_TECNICA CONJUNTO DE DATOS VECTORIALES DE USO DEL SUELO Y VEGETACIÓN ESCALA 1250 000 SERIE VI (Conjunto Nacional).txt>) | Escala **1:250 000**, clasificación de cubierta vegetal, fases sucesionales y usos agrícolas. Declara generación **2015–2017** con imágenes Landsat de **2014**. El año de imagen no debe confundirse con el de elaboración o publicación. |
| **[GEO-README]** | [Descripción técnica de GeoBosque](<C:/Users/ROG/Documents/geobosque/README.md>) | Documenta el cruce de series VI y VII, estadísticas municipales, cartografía simplificada y carácter estimado de las áreas dibujadas. Describe insumos y procesamiento actuales; no prueba necesidades institucionales. |
| **[USUARIO]** | Solicitud de esta conversación, incorporada al alcance de §1 | Requiere tipos de vegetación y árboles, comparación entre años, estadísticas, razón del cambio de suelo y separación visual entre tabla y diferencias del mapa. |

## 4. Secuencia de consulta propuesta

Esta secuencia organiza el producto solicitado; **no se presenta como un procedimiento oficial de PROBOSQUE**. Los pasos `C1…C6` son las anclas de las necesidades de §5.

| Paso | Actividad | Datos de entrada | Resultado esperado |
| --- | --- | --- | --- |
| <a id="C1"></a>**C1** | Delimitar el territorio de consulta. | Límite estatal, municipal o polígono seleccionado. | Área de análisis identificada y su superficie de referencia. |
| <a id="C2"></a>**C2** | Consultar la vegetación y los tipos de árboles disponibles. | Clasificación de vegetación y atributos de la fuente. | Categorías presentes, significado y extensión territorial; especies solo cuando estén registradas. |
| <a id="C3"></a>**C3** | Elegir y contrastar periodos. | Capas de fechas conocidas para la misma área. | Representación de cada periodo y ubicación de las diferencias observadas. |
| <a id="C4"></a>**C4** | Cuantificar superficies y transiciones. | Área común, categorías comparables y resultados del cruce espacial. | Tabla de superficies por periodo, transiciones, diferencias y porcentajes con su base de cálculo. |
| <a id="C5"></a>**C5** | Consultar la causa documentada de un cambio. | Cambio observado y, cuando existan, informes, inspecciones o registros de afectación vinculables. | Causa con evidencia y fecha, o indicación de que no está determinada. |
| <a id="C6"></a>**C6** | Revisar el origen y las limitaciones del resultado. | Metadatos de capas, método de cálculo y cobertura de datos. | Fuente, fechas, escala o resolución y limitaciones consultables. |

## 5. Tabla maestra de necesidades

### Etapa 1 · Territorio y tipos de vegetación

| Stakeholder | ID | Descripción | Notas | Prioridad | Origen |
| --- | --- | --- | --- | --- | --- |
| Persona usuaria que consulta un territorio; personal técnico que lo analiza | **CMF-001** | **Un medio para delimitar el territorio al que corresponde la consulta.** | *Antes de consultar o comparar vegetación, la persona determina el área de interés.* Se toma en cuenta que el territorio seleccionado quede identificado, que sus límites sean visibles y que las consultas posteriores correspondan a esa misma área. | Alta | Paso [C1](#C1). **Documentado:** [RO-PSAH] p. 8, §8.1.1.1, relaciona superficie y análisis cartográfico de los predios. **Inferido:** selección estatal, municipal o por dibujo como alcance de GeoBosque; no constituye validación jurídica o catastral → [V-CMF-01](#V-CMF-01). **Frontera:** delimita el área; CMF-004 calcula los cambios dentro de ella. |
| Persona usuaria que identifica la vegetación del territorio | **CMF-002** | **Un medio para consultar los tipos de vegetación presentes en el territorio seleccionado.** | *Con el área identificada, la persona revisa qué vegetación existe en la fecha consultada.* Se toma en cuenta que distinga los bosques, selvas, matorrales y demás clases disponibles; que explique sus nombres; que permita localizar cada tipo; y que los árboles se describan por grupo o especie únicamente cuando la fuente lo respalde. | Alta | Paso [C2](#C2). **Documentado:** [RLGDFS] p. 8, art. 13.IV, y p. 9, art. 14.IV.c. [INEGI-VI] describe la clasificación de cubierta vegetal. **Solicitado:** consulta de tipos de bosques, matorrales y árboles. **Inferido:** catálogo explicativo y filtros como solución; detalle de especies y definición de qué clases se agrupan como forestales → [V-CMF-02](#V-CMF-02). **Frontera:** consulta clases; CMF-004 compara sus superficies. |

### Etapa 2 · Comparación temporal y estadísticas

| Stakeholder | ID | Descripción | Notas | Prioridad | Origen |
| --- | --- | --- | --- | --- | --- |
| Persona usuaria que compara fechas; personal técnico que analiza cobertura | **CMF-003** | **Un medio para comparar la distribución de la vegetación entre periodos identificados.** | *La persona elige dos periodos disponibles para observar qué partes del mismo territorio cambiaron.* Se toma en cuenta que ambos periodos permanezcan identificados, que se distingan sus representaciones y las áreas de cambio, que las categorías conserven un significado comparable y que no se ofrezcan como disponibles años sin datos. | Alta | Paso [C3](#C3). **Documentado:** [RLGDFS] p. 10, art. 15.I.b, considera cambios de vegetación con el periodo correspondiente. **Solicitado:** navegación entre años y diferencias del mapa. **Inferido:** comparación interactiva; frecuencia y homologación de capas → [V-CMF-03](#V-CMF-03). Antecedente: [TAB-NG] NG-014 y V-T07. **Frontera:** ubicación visual de cambios; CMF-004 cuantifica y tabula. |
| Persona usuaria que interpreta las cifras; personal técnico que calcula superficies | **CMF-004** | **Un medio para cuantificar los cambios de superficie de la vegetación y los usos del suelo entre los periodos seleccionados.** | *Después de elegir el área y los periodos, la persona requiere cifras que correspondan a lo representado.* Se toma en cuenta que indique superficie inicial y final por clase, aumentos, disminuciones y balance; que identifique la clase de origen y destino de cada transición; que exprese hectáreas y porcentajes con su denominador; y que cada fila pueda relacionarse con las áreas correspondientes del mapa. Las áreas sin datos deben distinguirse de las que no cambiaron. | Alta | Paso [C4](#C4). **Documentado:** [RLGDFS] p. 9, art. 14.VI, y p. 10, art. 15.I, sustentan cálculo de superficies y cambios temporales; [RO-PSAH] p. 12, §8.1.2, reconoce transiciones de forestal a urbano o agrícola. **Solicitado:** estadísticas y relación entre tabla y diferencias del mapa. **Inferido:** métricas concretas, denominadores, correspondencia interactiva y tratamiento de áreas no comparables → [V-CMF-04](#V-CMF-04). **Frontera:** describe cuánto y de qué clase a cuál; CMF-005 trata la causa. |

### Etapa 3 · Explicación y respaldo del cambio

| Stakeholder | ID | Descripción | Notas | Prioridad | Origen |
| --- | --- | --- | --- | --- | --- |
| Persona usuaria que consulta por qué cambió un área; personal técnico que interpreta la evidencia | **CMF-005** | **Un medio para consultar la causa documentada de los cambios observados.** | *Una diferencia entre mapas permite observar una transición, pero la persona también necesita interpretar su origen.* Se toma en cuenta que distinga transición de clase y causa, que cada causa indique la evidencia y fecha que la respaldan, y que se muestre «causa no determinada» cuando falte ese respaldo. La presencia de una afectación cercana no bastará para atribuírsela al área. | Media | Paso [C5](#C5). **Documentado:** [RLGDFS] p. 10, art. 15.V, agrupa afectaciones; [RO-PSAH] pp. 8 y 12, §§8.1.1.1 y 8.1.2, considera tala, plagas, incendios y cambio de uso mediante análisis y verificación. **Solicitado:** razón del cambio de suelo. **Inferido:** asociación de cada cambio con un registro causal; disponibilidad, responsable de validación y criterios de asociación → [V-CMF-05](#V-CMF-05). **Frontera:** no obtiene causas automáticamente de una diferencia de clases. |

### Condiciones transversales · Procedencia e interpretación

| Stakeholder | ID | Descripción | Notas | Prioridad | Origen |
| --- | --- | --- | --- | --- | --- |
| Persona usuaria que interpreta el resultado; personal técnico que verifica los insumos | **CMF-006** | **Un medio para consultar la procedencia y las limitaciones de la información utilizada.** | *Al interpretar una cifra o diferencia territorial, la persona necesita reconocer qué datos la sustentan.* Se toma en cuenta que se identifiquen fuente, fecha o periodo de referencia, escala o resolución, clasificación y método de cálculo; que se diferencien fecha de observación y fecha de publicación; y que las estimaciones y limitaciones de comparación permanezcan visibles. | Alta | Paso [C6](#C6), aplicable a [C2](#C2)–[C5](#C5). **Documentado:** [RLGDFS] p. 9, art. 14.IV.b, considera escala, resolución y fecha de toma; [INEGI-VI] distingue elaboración e imágenes de referencia. [GEO-README] declara simplificación y estimaciones en polígonos dibujados. **Solicitado:** resultados interpretables al navegar entre años. **Inferido:** presentación persistente de metadatos al usuario → [V-CMF-06](#V-CMF-06). **Frontera:** explica respaldo y límites; no realiza los cálculos de CMF-004. |

## 6. Solución propuesta y correspondencia con las necesidades

Estas decisiones concretan la solicitud del usuario. **No son requisitos literales de los documentos de PROBOSQUE.**

| Componente propuesto | Comportamiento esperado | Necesidades atendidas |
| --- | --- | --- |
| Selección territorial | Elegir el territorio y mantener su contorno identificado durante la consulta. La opción de dibujar debe informar que sus superficies son estimadas. | CMF-001 y CMF-006 |
| Tipos de vegetación y árboles | Consultar categorías con nombre y color; filtrar bosques, matorrales u otras clases disponibles. Mostrar grupos o especies de árboles solo con su respaldo; indicar cuando no exista ese detalle. | CMF-002 |
| Selección de periodos | Elegir fecha inicial y final entre las disponibles; mostrar su fuente y periodo real de referencia. Separar series de vegetación de series anuales de pérdida de cobertura arbórea. | CMF-003 y CMF-006 |
| Mapas comparativos | Mostrar mapa inicial y final con el mismo encuadre; identificar cada fecha y distinguir espacialmente las áreas que cambiaron mediante colores, contornos o una capa de diferencias. No confundir una línea divisoria de pantalla con el límite territorial de un cambio. | CMF-003 |
| Tabla de cambios | Una fila por clase o transición, según la vista: superficie inicial, final, diferencia y porcentaje definido. Ejemplo: «bosque → agricultura». Seleccionar una fila resalta sus áreas en el mapa; la selección de un área identifica su fila correspondiente. | CMF-004 |
| Separación de tabla y mapas | Organizar tabla y mapas en bloques con encabezados y líneas divisorias visibles. Separar las filas de resultados y usar la misma clave y color de transición en tabla y mapa, acompañados de etiquetas. La separación visual no altera el área calculada. | Condición de presentación de CMF-003 y CMF-004, solicitada por el usuario |
| Explicación del cambio | Presentar en campos distintos «transición observada» y «causa documentada». Mostrar evidencia, fecha y estado de validación de la causa cuando existan; de lo contrario, «no determinada». | CMF-005 |
| Fuentes y límites | Permitir consultar metadatos y explicar las diferencias entre clasificación de vegetación, pérdida de cobertura arbórea y causa del cambio. | CMF-006 |

### Criterios de cálculo propuestos

Los siguientes criterios son **decisiones técnicas pendientes de validación** en V-CMF-04:

- **Diferencia de superficie por clase:** superficie final menos superficie inicial, dentro de la misma área comparable. No equivale por sí sola a pérdida bruta ni a ganancia bruta.
- **Variación porcentual por clase:** diferencia dividida entre superficie inicial, multiplicada por 100. Si la superficie inicial es cero, mostrar «no aplica» y el cambio absoluto; no dividir entre cero.
- **Transición:** superficie que pasó de una clase de origen a otra de destino. El total de transiciones y permanencias debe corresponder al área efectivamente comparada, con su tolerancia de cálculo declarada.
- **Balance forestal:** entradas menos salidas de las clases definidas como forestales. La lista de clases incluidas debe quedar explícita antes de publicar este balance; no excluir automáticamente selvas o matorrales por su nombre.
- **Tasa anual:** si se incorpora, declarar fórmula, periodo y unidades. No presentarla como requisito documental ya confirmado ni como sustituto de la causa del cambio.

## 7. Vacíos y siguientes pasos

| ID | Información pendiente | Evidencia del vacío o límite | Cómo se cierra | Necesidades afectadas |
| --- | --- | --- | --- | --- |
| <a id="V-CMF-01"></a>**V-CMF-01** | Territorios admitidos y validez de límites dibujados. | [RO-PSAH] regula el análisis de predios, no la selección libre de municipios o polígonos de GeoBosque; [GEO-README] declara estimaciones. | Confirmar con el responsable del producto las selecciones admitidas y documentar su uso orientativo. | CMF-001 |
| <a id="V-CMF-02"></a>**V-CMF-02** | Catálogo homologado de vegetación, definición de superficie forestal y detalle de árboles disponible. | [RLGDFS] enumera formaciones, pero no establece el catálogo particular de GeoBosque. Una clase de bosque no acredita todos los árboles presentes. | Revisar diccionarios y atributos de las capas; validar agrupaciones y etiquetas con personal forestal. Identificar expresamente qué grupos o especies pueden mostrarse. | CMF-002 y CMF-004 |
| <a id="V-CMF-03"></a>**V-CMF-03** | Periodos comparables y frecuencia temporal por producto. | [RLGDFS] pide identificar el periodo, sin fijar una serie anual para GeoBosque. [INEGI-VI] distingue la elaboración 2015–2017 de las imágenes 2014; [GEO-README] utiliza series VI/VII y datos Hansen. | Registrar metadatos de cada producto y verificar fechas, leyendas y cobertura espacial. No atribuir una clasificación anual completa a una capa que solo registra pérdida arbórea. | CMF-003 y CMF-006 |
| <a id="V-CMF-04"></a>**V-CMF-04** | Método definitivo de superficies, homologación, denominadores y tolerancias. | [RLGDFS] respalda cálculos; no prescribe las fórmulas ni la implementación de GeoBosque. [GEO-README] declara geometrías simplificadas para áreas dibujadas. | Documentar proyección, fuente de geometría, precisión, área común sin datos faltantes, tratamiento de permanencias y reglas de porcentaje. Verificar consistencia entre tabla y mapa. | CMF-004 |
| <a id="V-CMF-05"></a>**V-CMF-05** | Evidencias causales, acceso a ellas y persona que valida la atribución. | [RLGDFS] clasifica afectaciones y [RO-PSAH] exige análisis y verificación; no se ha acreditado una base vinculada a cada transición de GeoBosque. | Solicitar registros de incendios, inspección, sanidad u otros informes pertinentes; definir asociación espacial y temporal y responsable de validación. Mantener «no determinada» mientras falte respaldo. | CMF-005 |
| <a id="V-CMF-06"></a>**V-CMF-06** | Metadatos completos y explicación del alcance para cada capa. | Se verificaron la ficha Serie VI y el README; eso no acredita por sí solo todos los metadatos de Serie VII ni del producto Hansen utilizado. | Completar fichas por producto, con versión, observación, publicación, escala o resolución, clasificación, procesamiento y limitaciones. | CMF-006 |

## 8. Relación con la tabla general y resultado del análisis

| Antecedente en la tabla general | Cobertura en este documento | Distinción de alcance |
| --- | --- | --- |
| NG-012 — cobertura y superficie factible | CMF-002 y CMF-004 | GeoBosque consulta y calcula superficies; estos resultados no sustituyen la verificación de campo ni determinan elegibilidad para apoyos. |
| NG-013 — información geoespacial | CMF-001, CMF-002 y CMF-006 | Se concreta una consulta territorial con procedencia identificada. |
| NG-014 — cambios de cobertura | CMF-003, CMF-004 y CMF-005 | Se separan comparación, cuantificación y causa para no atribuir a la cartografía una explicación que no contiene. |
| V-T07 — metodología satelital pendiente | V-CMF-03 y V-CMF-04 | La navegación temporal y el cálculo requieren verificar comparabilidad y método. El art. 15.I.b de [RLGDFS] sustenta el contenido temporal, pero no resuelve esos detalles técnicos. |

**Resultado:** existe fundamento para atender la consulta por tipos de vegetación y la cuantificación de cambios entre periodos. La interacción anual, la distribución de mapas y tablas, sus líneas divisorias y la selección relacionada son soluciones solicitadas para atender esa necesidad. La identificación de especies y la explicación causal dependen del detalle y evidencia disponibles. La tabla conserva **seis necesidades distintas por finalidad** y reúne los elementos visuales como condiciones de las necesidades correspondientes, sin multiplicar filas por cada control de pantalla.

**Alcance de la revisión:** se contrastaron las citas centrales con el texto de los PDF originales del acervo y con los metadatos locales indicados. Los análisis del equipo se usaron como antecedentes. Los archivos escaneados sin texto no se utilizaron para afirmar ausencia de requisitos. No se modificó la tabla general de PROBOSQUE.

[RLGDFS]: <Comun/Masa forestal/Reg_LGDFS.pdf>
[MGO25]: <Comun/Manual Jurídico/dic161d.pdf>
[RO-PSAH]: <Comun/Programas de apoyo/RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf>
[TAB-NG]: <TABLA_NECESIDADES.md>
[INEGI-VI]: <C:/Users/ROG/Documents/geobosque/metadatos/FICHA_TECNICA CONJUNTO DE DATOS VECTORIALES DE USO DEL SUELO Y VEGETACIÓN ESCALA 1250 000 SERIE VI (Conjunto Nacional).txt>
[GEO-README]: <C:/Users/ROG/Documents/geobosque/README.md>
