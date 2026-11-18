# Reporte de Cambios y Justificación: Etapas 6 y 7 (Tabla de Necesidades)

> **Objetivo:** Documentar las modificaciones realizadas a las filas de las Etapas 6 y 7 respecto a la versión original de la `TABLA_NECESIDADES.md`, atendiendo a los tres criterios de revisión solicitados por el profesor: redacción orientada a artefactos/sistemas, revisión de stakeholders correctos (dolientes del negocio), validación de páginas/fuentes y cruce transversal de programas.

---

## 1. Criterios de Corrección Aplicados

1. **Redacción Orientada a Artefactos/Sistemas:** Se eliminaron las redacciones basadas en acciones vagas (ej. "saber dónde", "un registro que documente") y se sustituyeron por herramientas sistémicas concretas ("módulo", "visor móvil", "API", "flujo de trabajo/workflow", "motor de cálculo").
2. **Cruce Transversal de Programas:** Se detectó que muchas necesidades estaban limitadas a un solo proceso (ej. `MF-07` o `MF-13`). Al verificar las Reglas de Operación (RO), se comprobó que acciones como la inspección en campo, los ajustes proporcionales y el padrón de incumplidos aplican para todos los programas. Se añadió la etiqueta **[PA-01 a PA-06]** donde correspondía.
3. **Ajuste de Stakeholders:** Se reasignó la necesidad al "doliente" real del negocio (quien se beneficia de la herramienta), en lugar de asignarla únicamente al operador de la misma.
4. **Validación de Citas y Páginas:** Se verificaron las páginas de las fuentes documentales, detectando y corrigiendo atribuciones falsas o páginas erróneas (ej. páginas 60/89 inexistentes en las RO, o artículos de la LGDFS que no decían lo que afirmaba la tabla original).

---

## 2. Cambios Específicos en la Etapa 6 (Ejecución y actualización en campo)

| ID | Cambio realizado | Justificación del cambio |
| :--- | :--- | :--- |
| **NG-008** | **Redacción:** Se cambió a *"Aplicación móvil de captura en campo con funcionamiento fuera de línea (offline)"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** Define la herramienta concreta. <br>**Cruce:** Todos los programas de apoyo requieren que el personal técnico vaya a campo y levante una minuta con fotografías EXIF, no solo en delimitación inicial. |
| **NG-010** | **Redacción:** Se precisó a *"Formulario digital estandarizado de levantamiento dasométrico"*. | **Artefacto:** Sustituye el verbo "capturar" por el instrumento digital que se debe programar. |
| **NG-055** | **Redacción:** Se cambió a *"Módulo generador de diseño muestral"*. | **Artefacto:** Le da estructura de software a la necesidad de planificar los conglomerados. |
| **NG-056** | **Redacción:** Se cambió a *"Motor de cálculo biométrico y alométrico"*. | **Artefacto:** Define el componente de backend que procesará las fórmulas matemáticas del inventario. |
| **NG-057** | **Redacción:** *"Sistema de Despacho Asistido por Computadora (CAD)"*. <br>**Origen (CRÍTICO):** Se eliminó la afirmación de que el Art. 210 del `Reg_LGDFS` mandata el flujo de despacho y se envió al vacío `V-T11`. | **Artefacto:** Nombra el sistema estándar para emergencias. <br>**Validación:** El Art. 210 habla de proponer NOMs, no del flujo de despacho. Se corrigió para **no afirmar algo que la fuente no dice**. |
| **NG-058** | **Redacción:** *"Bitácora digital del Sistema de Comando de Incidentes (SCI)"*. <br>**Origen (CRÍTICO):** Se envió al vacío normativo `V-T11`. | **Artefacto:** Herramienta concreta. <br>**Validación:** El SCI opera en la práctica, pero la NOM que lo regula está pendiente según el transitorio OCTAVO del reglamento. |
| **NG-059** | **Redacción:** *"Herramienta de teledetección y medición de daños"*. <br>**Origen (CRÍTICO):** Se eliminó la cita de "clasificación por severidad (Art. 212)" y se envió a `V-T07`. | **Artefacto:** Herramienta SIG concreta. <br>**Validación:** Al buscar la palabra "severidad" en el Reglamento de la LGDFS, arroja 0 resultados. Era una alucinación del análisis previo. |
| **NG-060** | **Stakeholder:** Se cambió del PST a **R41 (Depto. Sanidad Forestal)**. <br>**Redacción:** *"Portal web de recepción externa"*. | **Stakeholder:** Aunque el PST es quien *usa* el portal para subir el Informe, quien *necesita* el portal para dejar de recibir y procesar papel es el Departamento de Sanidad Forestal. |
| **NG-049** | **Redacción:** *"Interfaz de interoperabilidad (API) con el sistema SINAT"*. | **Artefacto:** Se especifica que la "conexión" debe ser una API para extraer datos federales. |
| **NG-R03** | **Redacción:** *"Módulo de emisión de comprobantes digitales con firma electrónica"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** Define el sistema que reemplazará la práctica física de firmar la minuta por duplicado en papel carbón. Aplica a todos los programas. |

---

## 3. Cambios Específicos en la Etapa 7 (Inspección, vigilancia y fiscalización)

| ID | Cambio realizado | Justificación del cambio |
| :--- | :--- | :--- |
| **NG-009** | **Redacción:** *"Visor móvil de expedientes sin conexión"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** Define la herramienta (app de consulta). <br>**Cruce:** Los inspectores necesitan ver el expediente offline para auditar cualquier programa, no solo aprovechamientos. |
| **NG-018** | **Redacción:** *"Motor de cálculo de cumplimiento y ajustes (regla de negocio)"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. <br>**Origen (CRÍTICO):** Se corrigieron las páginas de las Reglas de Operación (de p. 60 y 89 a pp. 14-16). | **Artefacto:** Es un componente lógico del sistema. <br>**Cruce:** Todos los programas exigen un ajuste si el cumplimiento baja del 100% al 70%. <br>**Validación:** Las RO publicadas en Gaceta no tienen 60 u 80 páginas; se localizaron y citaron las páginas reales del PDF. |
| **NG-030** | **Redacción:** *"Gestor de incidencias e incumplimientos"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** Herramienta para adjuntar pruebas (denuncias, minutas). El incumplimiento afecta a todos los programas. |
| **NG-031** | **Stakeholder:** Se añadió **R20 Unidad Jurídica (UJIGEV)**. <br>**Redacción:** *"Padrón centralizado y bloqueante de Personas Incumplidas"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Stakeholder:** La UJIGEV es quien tiene la obligación normativa de revisar este listado antes de autorizar nuevos pagos. <br>**Artefacto:** Debe ser "bloqueante" sistémicamente. Es una regla universal. |
| **NG-032** | **Redacción:** *"Flujo de trabajo (workflow) para requerimientos de reintegro"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** Sistematiza la regla de negocio de que "sin acuerdo del comité, Finanzas no puede cobrar". Aplica a la recuperación de dinero en cualquier programa. |
| **NG-033** | **Redacción:** *"Módulo de reasignación presupuestal"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** Define el componente financiero que tomará dinero cancelado y lo inyectará a los folios de la Lista de Espera en todos los programas. |
| **NG-028** | **Redacción:** *"Tablero de trazabilidad financiera"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. <br>**Origen:** Se hizo explícita la contradicción normativa (`V-T14`) sobre a qué cuenta se devuelve el dinero. | **Artefacto:** Panel de control (dashboard). <br>**Validación:** Se descubrió que la RO de PSAH dice devolver al Fideicomiso, pero en otra página dice devolver a DAFGD. Se ancló esta contradicción para resolverla en el diseño. |
| **NG-039** | **Redacción:** *"Portal de auditoría y fiscalización (log inalterable)"*. | **Artefacto:** Cierra la petición expresa del profesor ("¿cuánto dinero regresó?") garantizando un registro inmutable (log) para el OSFEM y el OIC. |
| **NG-R08** | **Redacción:** *"Plataforma ciudadana y sistema de notificaciones automatizadas"*. <br>**Alcance:** Se agregó `[PA-01 a PA-06]`. | **Artefacto:** El ciudadano no necesita "un medio", necesita un "portal o plataforma" para subir comprobantes de devolución o escritos de desistimiento transversalmente. |
| **NG-R11** | **Redacción:** *"Generador de reportes de atención de siniestros"*. <br>**Origen:** Se dejó en claro que es una *Práctica Inferida* (`V-T15`). | **Artefacto:** Módulo de salida de documentos. <br>**Validación:** Las fuentes no obligan a dar un reporte al ciudadano cuando se apaga un incendio, por lo que se marca como un vacío comunicativo a resolver. |