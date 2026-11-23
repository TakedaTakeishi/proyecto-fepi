# Propuesta de solución por módulos — SGD PROBOSQUE

Clasificación funcional propuesta de las **30 necesidades de prioridad Alta o Media de las etapas 1 a 9**. Cada necesidad tiene un módulo principal y puede compartir información con otros módulos. El cruce relaciona necesidad, programa y fuente citada en la columna Origen de [TABLA_NECESIDADES.md](../TABLA_NECESIDADES.md#3-tabla-maestra).

Fecha de elaboración: 22 de noviembre de 2026.

## 1. Cuadro sinóptico de los 9 módulos

![Cuadro sinóptico de los 9 módulos y sus 30 necesidades](Diagramas/modulos-probosque.png)

El expediente se comparte entre módulos. Contratos, minutas, comprobantes y resultados se vinculan con el expediente del predio correspondiente.

## 2. Programas y ámbitos

| Sigla | Programa |
|---|---|
| PSAH | Pago por Servicios Ambientales Hidrológicos |
| RHF | Restauración Hidrológico-Forestal |
| CC | Capturando Carbono |
| PS | Plantaciones Sustentables |
| MFS | Manejo Forestal Sustentable |
| PEG | Programa Estatal de Guardabosques |

La tabla de necesidades actual trata RFI (Restauración Forestal Integral) como modalidad de RHF. Las funciones de UIPPE y la evaluación del programa presupuestario tienen un ámbito institucional propio.

## 3. Propuesta de solución y construcción general

Se propone una aplicación web con nueve módulos. Los componentes tecnológicos se expresan de forma general para definir su función antes de seleccionar herramientas específicas.

| Módulo | Propuesta de solución | Cómo se hará, en términos generales |
|---|---|---|
| **1. Convocatorias y recepción de solicitudes** | Publicar requisitos, registrar solicitudes, emitir acuses y controlar faltantes. | **Formularios web** para capturar solicitudes y comprobar requisitos; **base de datos relacional** para relacionar programas, convocatorias, solicitudes y documentos; **generación de documentos** para emitir acuses. |
| **2. Expedientes y archivo documental** | Integrar, actualizar, conservar y consultar expedientes. | **Base de datos relacional** para vincular predios, personas, solicitudes y documentos; **almacenamiento de archivos** para documentos digitalizados y sus versiones; **consultas y filtros** para localizar expedientes. |
| **3. Notificaciones y seguimiento de respuestas** | Registrar avisos, entregas, respuestas y plazos. | **Flujo de seguimiento** con estados y fechas; **base de datos relacional** para conservar notificaciones y respuestas; **servicio de avisos** para informar pendientes y vencimientos; almacenamiento de constancias de entrega. |
| **4. Evaluación y resolución de solicitudes** | Elaborar dictámenes, organizar listas de espera e integrar la documentación para los órganos decisores. | **Formularios de evaluación** y **reglas configurables por programa**; **base de datos relacional** para criterios, dictámenes y resultados de evaluación; **generación de documentos** para dictámenes y paquetes de sesión. |
| **5. Contratos y control de recursos económicos** | Preparar contratos y dar seguimiento a pagos, cobros, reintegros y reasignaciones. | **Generación de documentos desde formatos autorizados**; **base de datos relacional con transacciones** para mantener consistentes los movimientos económicos; **reglas de cálculo y comprobación** por programa; conciliación de montos y comprobantes. |
| **6. Verificación en campo y conclusión del apoyo** | Documentar visitas, evidencias y conclusión del apoyo. | **Formularios web adaptables a dispositivos móviles**, consulta del expediente, **carga de archivos** y **flujo de revisión** de resultados y documentos firmados. |
| **7. Incumplimientos y restricciones de acceso a apoyos** | Registrar incumplimientos y administrar el listado de personas y predios restringidos. | **Base de datos relacional** para causales, evidencias, acuerdos y restricciones; **comprobaciones durante la recepción y los pagos**; historial de altas y exclusiones. |
| **8. Resultados, padrones e informes institucionales** | Consolidar resultados, mantener padrones y controlar entregas de información. | **Consultas y agregación de datos** por ejercicio, programa y región; conservación de cortes fechados; **generación y exportación de informes** y seguimiento de su aprobación y entrega. |
| **9. Auditoría y evaluación externa** | Consultar la trazabilidad del apoyo y atender hallazgos. | **Historial de operaciones** relacionado con el expediente; **consultas de trazabilidad**; preparación de paquetes documentales y seguimiento de responsables, plazos y evidencias de atención. |

Toda la aplicación compartiría una **base de datos relacional**, **almacenamiento documental** y **control de acceso por usuarios y roles**.

## 4. Correspondencia entre módulos, necesidades y programas

Las referencias de la última columna reproducen las que actualmente aparecen en Origen. Cada página se refiere al PDF indicado, salvo mención expresa de la Gaceta. Las menciones de programas en los análisis del equipo indican procedencia; cada condición requiere respaldo en su fuente primaria.

| Módulo | Necesidad | Programa o ámbito de procedencia | Evidencia citada en Origen |
|---|---|---|---|
| **1. Convocatorias y recepción** | **NG-001 · Conocer convocatoria y requisitos** | Los seis programas | Convocatoria 2026, pp. 8–10; solicitud FO-PB-501A. |
| | **NG-002 · Entregar la solicitud y obtener constancia** | Convocatoria común a los programas | Convocatoria, p. 9, base Cuarta; comprobante del FO-PB-501A. |
| | **NG-003 · Validar la entrega** | PSAH, RHF, CC, PS y MFS; recepción común de la convocatoria | RO-PSAH, pp. 10–12 y 19; referencias equivalentes de las otras cuatro reglas. |
| **2. Expedientes y archivo** | **NG-005 · Archivar y consultar expedientes** | PSAH y CC; también gestión archivística institucional | RO-PSAH, pp. 11–12, 19 y 21; RO-CC, pp. 5 y 8; instrumentos archivísticos. |
| | **NG-064 · Actualizar el expediente** | PSAH | RO-PSAH, pp. 11–12 y 17, cambios de representación y fallecimiento. |
| **3. Notificaciones** | **NG-065 · Notificar actualizaciones del trámite** | PSAH | RO-PSAH, p. 19, §10.1, fracciones III y VI. |
| | **NG-R08 · Notificar incumplimientos** | PSAH | RO-PSAH, pp. 16–17, obligaciones, suspensión y bajas. |
| **4. Evaluación y resolución** | **NG-007 · Emitir dictamen jurídico** | Principalmente PSAH; referencias complementarias de CC | RO-PSAH, pp. 4, 10–12 y 19–20; RO-CC, pp. 6–9. |
| | **NG-016 · Emitir dictamen técnico uniforme** | PSAH; MFS aparece como procedencia del análisis | RO-PSAH, pp. 8–9. El criterio de «desempate» atribuido a MFS está pendiente de respaldo. |
| | **NG-019 · Aplicar prelación y ordenar lista de espera** | Lista de espera común; criterios específicos de PSAH | Convocatoria, base Sexta; RO-PSAH, p. 12, §8.1.2. |
| | **NG-024 · Entregar documentación a los órganos decisores** | PSAH, CC y PS; también Consejo Directivo | RO-PSAH, p. 19; reglamentos de comités CC y PS; Manual de Organización. |
| **5. Contratos y recursos económicos** | **NG-029 · Formalizar contratos** | Los seis programas | Convocatoria y reglas de PSAH, RHF, CC, PS, MFS y PEG; requisitos contractuales y bancarios. |
| | **NG-025 · Dispersar ministraciones** | PSAH, RHF, CC, PS y PEG | Reglas sobre pagos de esos programas y Manual de Contabilidad. MFS requiere precisar su regla particular de pago para este cruce. |
| | **NG-066 · Controlar requisitos para ministraciones** | Los seis programas | La fila distingue requisitos de campo y gabinete para PSAH, RHF, CC, PS, MFS y PEG. |
| | **NG-R06 · Confirmar recepción y cobro** | PSAH y PEG; referencias complementarias de CC para reintegros | RO-PSAH, p. 4 y §10.1; RO-PEG, p. 13, §10.1 XV. |
| | **NG-032 · Tramitar reintegros** | PSAH y CC | RO-PSAH, p. 17, §8.1.9.3; RO-CC, p. 15, §8.1.9.c. |
| | **NG-033 · Reasignar recursos no ejercidos** | Reasignación común de la convocatoria; detalle de PSAH | Convocatoria, p. 11, base Sexta; RO-PSAH, pp. 17 y 20. |
| **6. Verificación y conclusión** | **NG-008 · Registrar visitas de verificación** | PSAH, RHF/RFI, CC y PS; referencias de supervisión de MFS y PEG | Reglas de cada programa. MFS y PEG tienen diferencias respecto a los documentos de las visitas. |
| | **NG-018 · Revisar resultados y evidencias de visitas** | PSAH | RO-PSAH, pp. 19–20, verificación y supervisión. |
| | **NG-067 · Informar la conclusión de actividades** | PSAH y CC para informe final; RHF y PS para conclusión de actividades | RO-PSAH, p. 16; RO-CC, pp. 7–8; RO-RHF, p. 6; RO-PS, p. 7. |
| | **NG-068 · Dar por concluido el apoyo** | PSAH, RHF, CC, PS y MFS | Apartado §8.2, «Graduación», de las cinco reglas. |
| **7. Incumplimientos** | **NG-030 · Asentar incumplimientos y evidencia** | PSAH | RO-PSAH, pp. 7, 17 y 21. |
| | **NG-031 · Impedir apoyos a personas restringidas** | PSAH y CC con citas expresas; PS, MFS y RFI aparecen en los análisis de procedencia | RO-PSAH, pp. 9–10 y 20–21; RO-CC, p. 15; listado de incumplidos. |
| | **NG-R13 · Administrar el listado de incumplidos** | PSAH y CC | RO-PSAH, p. 17; RO-CC, p. 15, reglas de exclusión del listado. |
| **8. Resultados y padrones** | **NG-034 · Reunir cifras de ejecución** | PSAH como evidencia específica; estadística institucional de programas | RO-PSAH, p. 20, §16.1; listado PSAH; funciones de UIPPE. |
| | **NG-037 · Presentar avances y resultados** | Programas de la Dirección de Restauración y Fomento Forestal | Manual de Organización, p. 25; ficha de indicador. |
| | **NG-038 · Controlar entregas de información** | Institucional, a través de UIPPE | Manual de Organización, pp. 16–17; reportes financieros y de ayudas y subsidios. |
| | **NG-069 · Integrar padrón final** | PSAH, RHF, CC, PS y MFS | Apartado §8.1.5 de las cinco reglas y lineamientos de padrones. |
| **9. Auditoría y evaluación** | **NG-036 · Dar seguimiento a evaluaciones externas** | Programa presupuestario Desarrollo Forestal | Evaluación CONAC 2023, términos de referencia y convenios de seguimiento. |
| | **NG-039 · Auditar resultados y ruta del recurso** | PSAH y CC como evidencia específica; fiscalización institucional | RO-PSAH, §17 y disposiciones de pagos y reintegros; RO-CC, p. 15; información financiera. |

## 5. Servicios funcionales por módulo

Cada servicio agrupa acciones que satisfacen una o varias necesidades y comparte los datos del expediente con los demás servicios.

| Módulo | Servicio propuesto | Qué permite hacer | Necesidades satisfechas |
|---|---|---|---|
| **1. Convocatorias y recepción** | **Consulta de convocatorias y requisitos** | Consultar programas, requisitos, oficinas receptoras y fechas de recepción. | NG-001 |
| | **Recepción de solicitudes y emisión de acuses** | Registrar la entrega y generar una constancia de los documentos recibidos. | NG-002 |
| | **Validación e integración de solicitudes** | Comprobar requisitos, registrar cotejos y faltantes, controlar la complementación y turnar el expediente integrado. | NG-003 |
| **2. Expedientes y archivo** | **Archivo y consulta de expedientes** | Clasificar, conservar y localizar expedientes actuales e históricos, con sus documentos y relaciones. | NG-005 |
| | **Actualización del expediente** | Incorporar cambios de representación, titularidad y documentación, conservando sus antecedentes. | NG-064 |
| **3. Notificaciones** | **Notificación del estado del trámite** | Comunicar faltantes y resoluciones, registrar entregas y controlar respuestas y plazos. | NG-065 |
| | **Notificación de incumplimientos** | Comunicar los hechos y motivos del incumplimiento y conservar la constancia correspondiente. | NG-R08 |
| **4. Evaluación y resolución** | **Dictaminación jurídica** | Revisar la documentación legal y asentar si la solicitud procede, con sus fundamentos y motivos. | NG-007 |
| | **Dictaminación técnica** | Aplicar los criterios técnicos del programa y documentar la elegibilidad del predio. | NG-016 |
| | **Prelación y lista de espera** | Organizar las solicitudes factibles conforme a los criterios y autorizaciones aplicables. | NG-019 |
| | **Integración de documentación para sesiones** | Reunir y entregar avisos, dictámenes, informes y anexos a los órganos decisores. | NG-024 |
| **5. Contratos y recursos económicos** | **Formalización de contratos** | Preparar contratos, gestionar su validación y firma y conservar los datos bancarios correspondientes. | NG-029 |
| | **Control de requisitos de ministración** | Registrar qué comprobantes se recibieron y cuáles están pendientes antes de solicitar cada pago. | NG-066 |
| | **Tramitación de ministraciones** | Calcular montos conforme al programa, preparar solicitudes y registrar la emisión del pago. | NG-025 |
| | **Confirmación de recepción y cobro** | Incorporar el acuse o confirmación de que la persona recibió y cobró el apoyo. | NG-R06 |
| | **Gestión de reintegros** | Tramitar la devolución autorizada y registrar cuenta, monto, fecha y comprobante. | NG-032 |
| | **Reasignación de recursos** | Relacionar los montos disponibles con solicitudes factibles y documentar la reasignación autorizada. | NG-033 |
| **6. Verificación y conclusión** | **Recepción del aviso e informe de conclusión** | Recibir el aviso de término y los documentos que acreditan las actividades realizadas. | NG-067 |
| | **Registro de verificaciones en campo** | Documentar cada visita con el formato correspondiente, resultados, firmas y evidencias. | NG-008 |
| | **Revisión de resultados de las verificaciones** | Consultar y revisar los resultados y las evidencias de las visitas para la supervisión. | NG-018 |
| | **Conclusión del apoyo** | Comprobar y asentar el cumplimiento total o con ajuste y registrar la graduación correspondiente. | NG-068 |
| **7. Incumplimientos** | **Registro de incumplimientos y evidencias** | Asentar qué se detectó, cuándo, bajo qué causal y con qué documentos de respaldo. | NG-030 |
| | **Administración del listado de incumplidos** | Registrar altas y solicitudes de exclusión con sus acuerdos y comprobantes. | NG-R13 |
| | **Comprobación de restricciones** | Advertir sobre personas o predios restringidos al revisar solicitudes y tramitar recursos. | NG-031 |
| **8. Resultados y padrones** | **Consolidación de cifras de ejecución** | Reunir superficies, montos y cumplimiento por ejercicio, programa y persona beneficiaria. | NG-034 |
| | **Presentación y validación de resultados** | Preparar avances y resultados para su revisión y aprobación por la Dirección General. | NG-037 |
| | **Control de entregas institucionales** | Registrar requerimientos, información entregada, destinatarios y fechas. | NG-038 |
| | **Integración y actualización de padrones** | Mantener la relación final de personas que recibieron apoyos y preparar su consulta y entrega. | NG-069 |
| **9. Auditoría y evaluación** | **Consulta de trazabilidad y evidencia para auditoría** | Recorrer la documentación desde la ministración hasta el resultado publicado y preparar la evidencia solicitada. | NG-039 |
| | **Seguimiento de evaluaciones externas** | Registrar responsables, entregas de información, hallazgos y comprobantes de atención. | NG-036 |

Esta primera distribución contiene **30 servicios funcionales para las 30 necesidades**. Los servicios se relacionan entre sí. Control de requisitos de ministración consulta contratos y verificaciones, mientras que Consulta de trazabilidad y evidencia para auditoría reúne la evidencia generada durante el trámite.

La correspondencia uno a uno facilita revisar la cobertura inicial. La agrupación posterior de servicios dependerá de que compartan una misma finalidad y responsable.

## 6. Relación entre propuesta de solución y servicios

El cruce se realiza por módulo entre la propuesta de solución de la sección 3 y los servicios funcionales de la sección 5. La propuesta y la forma de construcción se presentan una vez por módulo y aplican a los servicios de sus filas siguientes.

| Módulo | Propuesta de solución | Cómo se hará | Servicio | Necesidad satisfecha |
|---|---|---|---|---|
| **1. Convocatorias y recepción de solicitudes** | Publicar requisitos, registrar solicitudes, emitir acuses y controlar faltantes. | **Formularios web** para capturar solicitudes y comprobar requisitos; **base de datos relacional** para relacionar programas, convocatorias, solicitudes y documentos; **generación de documentos** para emitir acuses. | **Consulta de convocatorias y requisitos** | NG-001 |
|  |  |  | **Recepción de solicitudes y emisión de acuses** | NG-002 |
|  |  |  | **Validación e integración de solicitudes** | NG-003 |
| **2. Expedientes y archivo documental** | Integrar, actualizar, conservar y consultar expedientes. | **Base de datos relacional** para vincular predios, personas, solicitudes y documentos; **almacenamiento de archivos** para documentos digitalizados y sus versiones; **consultas y filtros** para localizar expedientes. | **Archivo y consulta de expedientes** | NG-005 |
|  |  |  | **Actualización del expediente** | NG-064 |
| **3. Notificaciones y seguimiento de respuestas** | Registrar avisos, entregas, respuestas y plazos. | **Flujo de seguimiento** con estados y fechas; **base de datos relacional** para conservar notificaciones y respuestas; **servicio de avisos** para informar pendientes y vencimientos; almacenamiento de constancias de entrega. | **Notificación del estado del trámite** | NG-065 |
|  |  |  | **Notificación de incumplimientos** | NG-R08 |
| **4. Evaluación y resolución de solicitudes** | Elaborar dictámenes, organizar listas de espera e integrar la documentación para los órganos decisores. | **Formularios de evaluación** y **reglas configurables por programa**; **base de datos relacional** para criterios, dictámenes y resultados de evaluación; **generación de documentos** para dictámenes y paquetes de sesión. | **Dictaminación jurídica** | NG-007 |
|  |  |  | **Dictaminación técnica** | NG-016 |
|  |  |  | **Prelación y lista de espera** | NG-019 |
|  |  |  | **Integración de documentación para sesiones** | NG-024 |
| **5. Contratos y control de recursos económicos** | Preparar contratos y dar seguimiento a pagos, cobros, reintegros y reasignaciones. | **Generación de documentos desde formatos autorizados**; **base de datos relacional con transacciones** para mantener consistentes los movimientos económicos; **reglas de cálculo y comprobación** por programa; conciliación de montos y comprobantes. | **Formalización de contratos** | NG-029 |
|  |  |  | **Control de requisitos de ministración** | NG-066 |
|  |  |  | **Tramitación de ministraciones** | NG-025 |
|  |  |  | **Confirmación de recepción y cobro** | NG-R06 |
|  |  |  | **Gestión de reintegros** | NG-032 |
|  |  |  | **Reasignación de recursos** | NG-033 |
| **6. Verificación en campo y conclusión del apoyo** | Documentar visitas, evidencias y conclusión del apoyo. | **Formularios web adaptables a dispositivos móviles**, consulta del expediente, **carga de archivos** y **flujo de revisión** de resultados y documentos firmados. | **Recepción del aviso e informe de conclusión** | NG-067 |
|  |  |  | **Registro de verificaciones en campo** | NG-008 |
|  |  |  | **Revisión de resultados de las verificaciones** | NG-018 |
|  |  |  | **Conclusión del apoyo** | NG-068 |
| **7. Incumplimientos y restricciones de acceso a apoyos** | Registrar incumplimientos y administrar el listado de personas y predios restringidos. | **Base de datos relacional** para causales, evidencias, acuerdos y restricciones; **comprobaciones durante la recepción y los pagos**; historial de altas y exclusiones. | **Registro de incumplimientos y evidencias** | NG-030 |
|  |  |  | **Administración del listado de incumplidos** | NG-R13 |
|  |  |  | **Comprobación de restricciones** | NG-031 |
| **8. Resultados, padrones e informes institucionales** | Consolidar resultados, mantener padrones y controlar entregas de información. | **Consultas y agregación de datos** por ejercicio, programa y región; conservación de cortes fechados; **generación y exportación de informes** y seguimiento de su aprobación y entrega. | **Consolidación de cifras de ejecución** | NG-034 |
|  |  |  | **Presentación y validación de resultados** | NG-037 |
|  |  |  | **Control de entregas institucionales** | NG-038 |
|  |  |  | **Integración y actualización de padrones** | NG-069 |
| **9. Auditoría y evaluación externa** | Consultar la trazabilidad del apoyo y atender hallazgos. | **Historial de operaciones** relacionado con el expediente; **consultas de trazabilidad**; preparación de paquetes documentales y seguimiento de responsables, plazos y evidencias de atención. | **Consulta de trazabilidad y evidencia para auditoría** | NG-039 |
|  |  |  | **Seguimiento de evaluaciones externas** | NG-036 |

El resultado comprende **9 módulos, 30 servicios y 30 necesidades**.

## 7. Fuentes de consulta

La trazabilidad completa, con páginas, numerales y vacíos por necesidad, se conserva en la columna Origen de la [tabla maestra](../TABLA_NECESIDADES.md#3-tabla-maestra).

- [Convocatoria 2026 de los Programas de Apoyo](../Comun/Programas%20de%20apoyo/CONVOCATORIA_2026_Programas_Apoyo.pdf).
- [Reglas de Operación del PSAH 2026](../Comun/Programas%20de%20apoyo/RO_2026_PagoServiciosAmbientales_Hidrológicos.pdf).
- [Reglas de Operación de RHF 2026](../Comun/Programas%20de%20apoyo/RO_2026_Restauración_Hidrológico-Forestal.pdf).
- [Reglas de Operación de CC 2026](../Comun/Programas%20de%20apoyo/RO_2026_CapturandoCarbono.pdf).
- [Reglas de Operación de PS 2026](../Comun/Programas%20de%20apoyo/RO_2026_PlantacionesSustentables.pdf).
- [Reglas de Operación de MFS 2026](../Comun/Programas%20de%20apoyo/RO_2026_ManejoForestalSustentable.pdf).
- [Manual General de Organización](../Comun/Manual%20Jurídico/dic161d.pdf).
