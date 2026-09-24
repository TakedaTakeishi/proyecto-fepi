# PA-04 · Plantaciones Sustentables

> Plantilla adaptada para el Programa Plantaciones Sustentables, alineada a las Reglas de Operación 2026 y la normativa de su Comité de Admisión y Seguimiento[cite: 60, 66].
> Fecha de análisis: 23 de septiembre de 2026. Método: extracción de conceptos de apoyo, montos, requisitos de masa forestal y fiscalización, incorporando la tabla de entrada/salida por paso según el reparto del sprint[cite: 55, 66].
> Citación externa de pasos: **PA4·A2**, **PA4·B3**, **PA4·C2** (proceso·paso).

## 1. Objeto y alcance

**Incluye** el ciclo anual del Programa Plantaciones Sustentables, enfocado en la reconversión productiva de terrenos agropecuarios o degradados hacia vocación forestal comercial y su posterior mantenimiento: aprobación de reglas por el Comité → ingreso de Solicitud Única (FO-PB-501A) → diagnóstico técnico forestal (verificación de cobertura y levantamiento GIS) → dictaminación técnica/jurídica → autorización del Comité → firma del Contrato de Adhesión → primera ministración (70%) + entrega de Vale de Planta → ejecución de obras (trazo, plantación o mantenimiento) → verificación en campo → segunda ministración (30%) o ajuste proporcional → graduación[cite: 66].

**Fuera del alcance:** La producción y logística interna de las plantas forestales, magueyes o árboles de navidad dentro de los viveros de PROBOSQUE, así como la expedición del Registro Nacional de Plantaciones Forestales Comerciales (trámite federal de SEMARNAT)[cite: 66].

## 2. Base documental (claves de cita)

| Clave | Archivo / ubicación | Qué aporta |
|---|---|---|
| [RO-PS] | `RO_2026_PlantacionesSustentables.pdf` | Reglas de Operación 2026. Fija los tres conceptos de apoyo (\$10k para establecimiento, \$5k para mantenimiento, y donación de planta para navideñas), umbrales de densidad y causales de reintegro[cite: 66]. |
| [RIC-PS] | `REGLAMENTO_Comite_PlantacionesSustentables_4.pdf` | Atribuciones del Comité Interinstitucional, facultado para aprobar el Padrón de Beneficiarios, analizar conflictos, decretar suspensiones y autorizar el cierre del programa[cite: 60]. |
| [501A] | `FORMATO_FO-PB-501A_SolicitudUnica_2026_3.docx` | Formato de Solicitud Única. Capta la tipología específica de la plantación (Maderable, Navideño, Agave, Celulósico, Dendroenergético, Follaje, Biocombustible, Agroforestal)[cite: 75]. |
| [502] | `FORMATO_FO-PB-502_RegInfo_Solicitante_Beneficiario_2026_3.docx` | Registro de Información de la persona solicitante y/o beneficiaria. Contiene los datos personales, de contacto y designación de la segunda persona beneficiaria[cite: 73]. |

## 3. Glosario de siglas

*   **PFC**: Plantación Forestal Comercial. Establecimiento inducido de vegetación forestal en terrenos agropecuarios o preferentemente forestales para industrialización/comercialización[cite: 66].
*   **MIAF**: Milpa Intercalada con Árboles Frutales. Sistema agroforestal apoyado por el programa[cite: 66].
*   **DRF**: Delegación Regional Forestal. Instancia desconcentrada (9 en total) que opera el programa en ventanilla y campo[cite: 66].

## 4. Roles (personificados)

| ID | Rol | Puesto y unidad (fuente) | Tipo |
|---|---|---|---|
| R28 | Persona beneficiaria | Propietarias y/o poseedoras de terrenos que realizan la reconversión o mantenimiento (de 0.5 a 150 ha)[cite: 66]. | Externo |
| R29 | Delegaciones (DRF) | Reciben el FO-PB-501A, elaboran el "Diagnóstico Técnico Forestal" (visitas/GIS), otorgan asesoría gratuita y verifican las obras[cite: 66]. | Interno desconcentrado |
| R31 | Dir. Ejecutora (Restauración) | Integra expedientes, emite el Dictamen Técnico, genera el Vale de Planta, contratos y tramita las ministraciones (70/30)[cite: 66]. | Interno |
| R20 | Unidad Jurídica (UJIGEV) | Dictamina legalmente la propiedad/posesión (contratos, usufructos $\le$ 5 años) y exige devoluciones por incumplimiento[cite: 60, 66]. | Interno |
| R32 | Comité (Plantaciones) | Instancia normativa; aprueba padrones, evalúa conflictos, autoriza modificaciones y aprueba el informe final[cite: 60, 66]. | Colegiado |
| R15 | Administración y Finanzas | Dispersa las transferencias electrónicas (SPEI) o cheques excepcionales a los beneficiarios[cite: 66]. | Interno |

## 5. Funciones y actividades por rol

*   **R28 (Beneficiaria):** Prepara el terreno, recoge la planta en un plazo $\le$ 30 días, planta el 100% de la superficie asignada, da mantenimiento y permite la supervisión[cite: 66].
*   **R29 (DRF):** Valida linderos, polígonos (máximo 2 polígonos por hectárea), emite el Diagnóstico y firma la minuta de verificación de sobrevivencia final[cite: 66].
*   **R31 (Ejecutora) y R20 (UJIGEV):** Emiten los dictámenes, depuran el Listado de Incumplidos, gestionan el Contrato de Adhesión y aplican ajustes económicos proporcionales si la ejecución está entre 70% y 99%[cite: 66].
*   **R32 (Comité):** Analiza y autoriza la lista de factibles, resuelve controversias (ej. muerte de planta por sequía/fuerza mayor) y clausura el ejercicio[cite: 60, 66].

## 6. Reglas de negocio

*   **BR-1** Conceptos y Montos de Apoyo:
    1.  *Establecimiento (Maderable/No maderable):* \$10,000.00/ha + Planta gratuita + Acompañamiento.
    2.  *Mantenimiento (hasta 3 años previos):* \$5,000.00/ha (Requiere supervivencia mínima del 50%) + Reposición de planta (máx. 50%).
    3.  *Mantenimiento Navideñas:* Solo reposición de planta (máx. 1,250 piezas) y acompañamiento técnico (Sin recurso económico directo)[cite: 66].
*   **BR-2** Mecánica Financiera: 70% a la firma del Contrato de Adhesión y 30% a la conclusión y verificación de los trabajos[cite: 66].
*   **BR-3** Densidad y Límite de Polígonos: Se donan 1,100 piezas/ha (Maderables), 2,000-2,500 (Navideñas) y 800-2,500 (Agave/Otros). Una hectárea puede dividirse en máximo 2 polígonos (no aplica límite para núcleos agrarios)[cite: 66].
*   **BR-4** Ajuste o Cancelación: Las actividades deben ejecutarse al 100% de la superficie. Si por causa justificada se trabaja menos, el ajuste al pago final no podrá ser menor al 70%. Si es menor al 70%, o si la planta se concentra en una sola fracción del polígono, se decreta el reintegro total[cite: 66].

## 7. Procedimiento

### Proceso A — Registro y Dictaminación

*   **PA4·A1** R32 (Comité) aprueba Reglas, Padrón y montos del programa[cite: 60, 66].
*   **PA4·A2** R28 (Beneficiaria) ingresa las solicitudes FO-PB-501A y FO-PB-502 con los anexos legales (y en su caso, registro de PFC) en la DRF[cite: 66, 73, 75].
*   **PA4·A3** R29 (DRF) verifica datos y realiza el "Diagnóstico Técnico Forestal" en campo, levantando las coordenadas del terreno agropecuario a reconvertir[cite: 66].
*   **PA4·A4** R31 (Dir. Ejecutora) recibe las poligonales, registra el expediente y cruza información con UJIGEV (R20) para emitir el Dictamen Jurídico y el Dictamen Técnico[cite: 66].
*   **PA4·A5** R32 (Comité) analiza los dictámenes y aprueba el Padrón de factibles. Si no hay recurso, R31 notifica Lista de Espera[cite: 60, 66].

### Proceso B — Planta, Contrato y 1ra Ministración

*   **PA4·B1** R31 genera y entrega el "Vale de Salida de Planta" a R28. R28 tiene 30 días para recoger la planta (árboles o agave) en el vivero indicado[cite: 66].
*   **PA4·B2** R31 elabora el Contrato de Adhesión; R28 lo firma y entrega copia de su cuenta CLABE[cite: 66].
*   **PA4·B3** R31 tramita el pago inicial; R15 (Finanzas) dispersa el **70% de los recursos** mediante SPEI[cite: 66].

### Proceso C — Ejecución, Verificación y Cierre

*   **PA4·C1** R28 establece la plantación (trazo, cepas, plantado) distribuida uniformemente en toda el área, o ejecuta las labores de mantenimiento (deshierbe, fertilización, replante)[cite: 66].
*   **PA4·C2** R29 (DRF) acude al predio, evalúa las densidades, elabora el formato de cumplimiento/verificación y lo remite a R31[cite: 66].
*   **PA4·C3 (Bifurcación):** ¿Cumple superficie total de plantación?
    *   Si es No (pero $\ge$70% y justificado): R31 procesa un Ajuste a la segunda ministración.
    *   Si es Sí: R31 tramita la segunda ministración intacta[cite: 66].
*   **PA4·C4** R15 (Finanzas) transfiere el **30% final** o el saldo ajustado[cite: 66].
*   **PA4·C5** R32 (Comité) autoriza el Informe Anual de Resultados (graduación)[cite: 60, 66].

## 8. Diagramas de actividad

> Cada nodo lleva su **ID de paso** (PA4·#) mapeado a la estructura de 6 carriles y refleja la gestión de Vales de Planta y la verificación de densidades.

![PA4 — Plantaciones Sustentables](../Diagramas/PA04/PA4-diagrama.svg)

## 9. Tabla de necesidades

Prioridad: **A** = obligatoria · **M** = media · **B** = deseable.

| ID | Rol | Necesidad | P | Paso | Origen |
|---|---|---|---|---|---|
| N-01 | R31 | **Módulo de Vales y Logística de Planta:** El SGD debe alertar si R28 no recoge la planta en el plazo máximo de 30 días posteriores a la emisión del Vale | A | B1 | [RO-PS p. 95][cite: 66] |
| N-02 | R29 | Herramienta móvil para verificar que la plantación se distribuyó en el 100% de la superficie (rechazar si se concentra en una sola fracción) | A | C2 | [RO-PS p. 89][cite: 66] |
| N-03 | R31 | **Motor de Ajustes 70%:** Si R29 reporta ejecución parcial, el sistema debe exigir una justificación textual (fuerza mayor) antes de permitir recalcular el 30% restante | A | C3 | [RO-PS p. 89][cite: 66] |
| N-04 | R32 | Bitácora inmutable de acuerdos del Comité que bloquee la emisión de recursos a beneficiarios que figuren en la "Lista de Incumplidos" histórica | M | A5 | [RO-PS p. 93][cite: 66] |

## 10. Registros que el SGD debe gestionar (catálogo documental)

*   **FO-PB-501A** (Solicitud Única) y **FO-PB-502** (Registro de Información)[cite: 73, 75].
*   Diagnóstico Técnico Forestal y Archivos GIS (poligonales agropecuarias/forestales)[cite: 66].
*   Dictámenes (Técnico y Jurídico)[cite: 66].
*   **Vale de Salida de Planta** (Documento de control de inventario de viveros)[cite: 66].
*   Contrato de Adhesión (firmado)[cite: 66].
*   Formato de Verificación de Cumplimiento de Actividades en Campo[cite: 66].
*   Comprobantes de Transferencia Bancaria (SPEI - 70/30)[cite: 66].

## 11. Vacíos y siguientes pasos

*   **V-01 Restricción Navideña:** El concepto III (Mantenimiento Navideñas) no lleva recurso económico, solo planta y asesoría. El SGD debe bloquear la generación del pago del 70/30 si se selecciona este concepto en el FO-PB-501A[cite: 66, 75].
*   **Siguiente paso:** Desarrollar en el Módulo de Finanzas del SGD la interconexión con el sistema de viveros (Salida G9), ya que la emisión del Vale de Planta en el paso B1 depende directamente de la disponibilidad del stock reportado por las Delegaciones.

## 12. Tabla de entrada/salida por paso (Fiscalización y Trazabilidad)

| Paso | Actor | Documento / Dato de Entrada (Fuente) | Datos Capturados en Sistema | Documento de Salida (Formato) |
|---|---|---|---|---|
| **PA4·A1** | R32 (Comité) | RO previas y Presupuesto[cite: 66] | Montos unitarios, reglas de elegibilidad. | Acta de Sesión (Reglas)[cite: 60] |
| **PA4·A2** | R28 (Beneficiaria) | Convocatoria vigente[cite: 66] | Tipología de plantación, superficie (ha), CLABE. | FO-PB-501A y FO-PB-502[cite: 73, 75] |
| **PA4·A3** | R29 (DRF) | Expediente inicial[cite: 66] | Validaciones de suelo, polígono GIS (máx 2 por ha). | Diagnóstico Técnico Forestal[cite: 66] |
| **PA4·A4** | R31 / R20 | Polígonos GIS y docs. legales[cite: 66] | Acreditación legal, cruce de padrón de incumplidos. | Dictámenes Técnico y Jurídico[cite: 66] |
| **PA4·A5** | R32 (Comité) | Dictámenes emitidos[cite: 66] | Aprobación de lista de factibles y asignación de recursos. | Acta de Validación (Padrón)[cite: 60] |
| **PA4·B1** | R31 (Ejecutora) | Lista de factibles[cite: 66] | Especie y cantidad de planta (ej. 1,100 maderables/ha). | Vale de Salida de Planta[cite: 66] |
| **PA4·B2** | R31 / R28 | Lista de factibles[cite: 66] | Compromisos de protección, cuenta CLABE verificada. | Contrato de Adhesión firmado[cite: 66] |
| **PA4·B3** | R15 (Finanzas) | Contrato de Adhesión[cite: 66] | Fecha y folio de dispersión del 70%. | Comprobante SPEI (1ra Ministración)[cite: 66] |
| **PA4·C2** | R29 (DRF) | Trabajos en campo[cite: 66] | % de superficie efectivamente plantada, supervivencia. | Formato de Verificación en Campo[cite: 66] |
| **PA4·C3** | R31 (Ejecutora) | Formato de verificación[cite: 66] | Recálculo de superficie (Ajuste) o liberación total. | Dictamen de Ajuste / Solicitud Pago[cite: 66] |
| **PA4·C4** | R15 (Finanzas) | Solicitud de pago final[cite: 66] | Fecha y folio de dispersión del saldo (30% o menor). | Comprobante SPEI (2da Ministración)[cite: 66] |
| **PA4·C5** | R32 (Comité) | Cierre financiero[cite: 66] | Graduación de beneficiarios y consolidación. | Acta de Informe Anual de Resultados[cite: 60, 66] |