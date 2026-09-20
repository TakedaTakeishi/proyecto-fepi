# Proceso P-03 — Cálculo de índices de cobertura y deforestación

> Proyecto: Documentación de procesos PROBOSQUE — Cobertura de la masa forestal.
> Proceso elegido por ser uno de los tres más sencillos de las 8 fases del diagrama general, medido por: número de actores (3), ausencia de coordinación interinstitucional externa vinculante y ausencia de trabajo de campo o tecnología especializada.

---

## 1. Objeto y alcance

Calcular los **indicadores de cobertura y manejo de la masa forestal** del programa presupuestario 03020201 «Desarrollo Forestal» —abarcando acciones de reforestación, manejo forestal maderable y servicios ambientales— y conciliarlo contra el presupuesto ejercido del ejercicio fiscal, dejándolo listo para su validación metodológica externa.

**Dentro del alcance:** recepción del dato de superficie desde el SIG/campo → cálculo de los índices (MIR) → conciliación con presupuesto ejercido → revisión interna → envío a validación externa.

**Fuera del alcance:** el levantamiento de datos en campo y su carga al SIG (proceso previo, Fase 2), el dictamen de solicitudes individuales (Fase 4), y la publicación final del informe (Fase 8, que consume el resultado de este proceso).

## 2. Base documental (origen de los requisitos)

| Clave | Documento | Uso |
|---|---|---|
| [MIR-2026] | Programa Presupuestario 03020201 «Desarrollo Forestal» 2026 | Define las fórmulas exactas y la periodicidad oficial de los indicadores de cobertura y manejo forestal. |
| [FICHAS-2024] | Fichas Técnicas de Diseño y Seguimiento de Indicadores 2024, PROBOSQUE | Documenta la metodología de cálculo y el desglose de variables para indicadores trimestrales operativos (ej. sanidad forestal). |
| [EVAL23-CONAC] | Evaluación Específica de Desempeño, Formato CONAC de difusión de resultados, PROBOSQUE, 2023 | Confirma la existencia del SIG y del Sistema de Gestión de Calidad como fuente del dato, y documenta la debilidad de que el origen está en hojas de cálculo no sistematizadas. |
| [MGO] | Manual General de Organización de PROBOSQUE, Gaceta del Gobierno, 28-may-2012 | Ubica a la Unidad de Información, Planeación, Programación y Evaluación (UIPPE) y a las Direcciones sustantivas dentro del organigrama. |
| [ROP-GEN] | Reglas de Operación de programas forestales de PROBOSQUE | Define la superficie objetivo y los criterios de qué cuenta como "superficie bajo manejo". |

## 2.1 Glosario

| Término / sigla | Significado | Fuente |
|---|---|---|
| MIR | Matriz de Indicadores para Resultados del Pp. «Desarrollo Forestal» | [MIR-2026] |
| UIPPE | Unidad de Información, Planeación, Programación y Evaluación de PROBOSQUE | [MGO] |
| PAE | Programa Anual de Evaluación del Estado de México | [EVAL23-CONAC] |
| ASM | Aspectos Susceptibles de Mejora, hallazgos de una evaluación externa que retroalimentan el proceso | [EVAL23-CONAC] |

## 3. Roles (stakeholders)

| ID-rol | Rol / Stakeholder | Unidad real | Tipo |
|---|---|---|---|
| R1 | Direcciones sustantivas (Protección Forestal; Restauración y Fomento Forestal) | Fuente del dato de campo/SIG (Fase 2) | Interno |
| R2 | Unidad de Información, Planeación, Programación y Evaluación (UIPPE) | Calcula y reporta el indicador en la MIR | Interno |
| R3 | Dirección de Administración, Finanzas y de Gestión Documental | Concilia presupuesto ejercido vs. superficie atendida | Interno |
| R4 | Dirección General de PROBOSQUE | Revisa y autoriza el indicador antes de enviarlo a validación externa | Interno |
| R5 | CONEVAL / instancia evaluadora externa contratada bajo el PAE | Valida consistencia metodológica del indicador | Externo |

## 4. Funciones y actividades por rol

| Rol | Función | Actividades clave |
|---|---|---|
| R1 | Proveer el dato base | Entregar la superficie bajo manejo (reforestada, perturbada, con problemas) actualizada, heredada de la Fase 2 en hojas de cálculo. |
| R2 | Calcular el indicador | Aplicar las fórmulas de la MIR (Nivel Fin, Propósito y Componente), cargar el resultado, documentar memoria de cálculo. |
| R3 | Conciliar presupuesto | Cruzar el presupuesto ejercido del ejercicio fiscal contra la superficie reportada. |
| R4 | Autorizar | Revisar el cálculo preliminar y autorizar su envío a evaluación externa. |
| R5 | Validar | Revisar la consistencia metodológica y emitir observaciones (ASM) si corresponde. |

## 5. Reglas de negocio verificadas

- **BR-1** El cálculo de cobertura se rige por las fórmulas oficiales de la MIR 2026. Las principales son:
  - **Restauración (Nivel Fin):** $ \% = \left(\frac{\text{Superficie forestal perturbada incorporada a acciones}}{\text{Superficie forestal perturbada en el Edoméx}}\right) \times 100 $
  - **Servicios Ambientales (Nivel Propósito):** $ \% = \left(\frac{\text{Superficie aprobada por servicios ambientales}}{\text{Superficie de áreas forestales potenciales}}\right) \times 100 $
  - **Manejo Maderable (Nivel Componente):** $ \text{Tasa} = \left(\frac{\text{Superficie bajo manejo final} - \text{Superficie bajo manejo inicial}}{\text{Superficie bajo manejo inicial}}\right) \times 100 $
- **BR-2** Sólo cuenta para el indicador la superficie efectivamente comprobada dentro del área de enfoque atendida; la superficie sólo planeada no ejecutada no se contabiliza.
- **BR-3** Los indicadores estratégicos de cobertura general tienen una frecuencia de medición **Anual**, mientras que los indicadores de gestión operativos (como la atención de sanidad forestal) se miden de forma **Trimestral**.
- **BR-4** El indicador debe someterse a validación metodológica externa dentro del Programa Anual de Evaluación (PAE) estatal.

## 6. Procedimiento narrado

1. R1 aporta el dato de superficie actualizado (resultado de la Fase 2). *Nota operativa: Actualmente estos datos provienen de proyectos mantenidos en hojas de cálculo (Excel) que no constituyen una base de datos sistematizada*.
2. R2 aplica las fórmulas oficiales (BR-1) según la periodicidad del indicador (anual o trimestral) y carga el resultado a la MIR del Pp. «Desarrollo Forestal».
3. R3 concilia el dato de superficie contra el presupuesto ejercido del ejercicio fiscal.
4. R2 integra la memoria de cálculo (ficha técnica) y remite el indicador preliminar a R4.
5. R4 (Dirección General) revisa (da el Visto Bueno) y autoriza el indicador para su publicación y envío a evaluación externa.
6. R5 (instancia evaluadora bajo el PAE) valida la consistencia metodológica anual y, en su caso, emite Aspectos Susceptibles de Mejora (ASM).
7. R2 incorpora las observaciones de R5 si existen, y consolida el indicador final del ejercicio.
8. El indicador final pasa a la Fase 8 (Reporte de resultados e indicadores) para su publicación.

## 7. Diagrama de proceso (carriles por rol, notación BPMN)

![Diagrama de proceso — Fase 3: Cálculo de índices de cobertura](fase3_calculo_indices.png)

## 8. Tabla de necesidades

Prioridad: **A** = obligatoria (la exige norma o el proceso se detiene), **M** = media (control/consistencia), **B** = deseable.

| ID | Rol / Stakeholder | Necesidad | Prioridad | Origen | Paso del procedimiento relacionado |
|---|---|---|---|---|---|
| N-01 | R2 UIPPE | Calcular y reportar el indicador de cobertura en la MIR | A | Normativo — MIR 2026 | Paso 2. Relacionado con Fase 2 (insumo) y Fase 8 (resultado) |
| N-02 | R3 Administración | Vincular presupuesto ejercido con la superficie efectivamente cubierta | A | Organizacional | Paso 3. Interno a esta fase |
| N-03 | R5 CONEVAL/evaluador | Validar consistencia metodológica del indicador | M | Normativo — Programa Anual de Evaluación | Paso 6. Relacionado con Fase 8 (Reporte) |
| N-04 | R2 UIPPE | Recibir de la Fase 2 un dato de superficie confiable y sistematizado | A | Derivada — hoy el dato de origen vive en hojas de cálculo (riesgo documentado) | Paso 1. Relacionado directamente con Fase 2 |
| N-05 | R4 Dirección General | Contar con la Ficha Técnica documentada antes de otorgar el Vo. Bo. | A | Normativo / Fichas 2024 | Paso 5. Previo a Fase 8 |

## 9. Registros que el proceso debe gestionar

| Registro | Genera | Contiene | Retención sugerida |
|---|---|---|---|
| Ficha técnica de indicador (MIR) | R2 | Fórmula, variables, meta, avance trimestral/anual, firmas de elaboración y Vo. Bo. | Ciclo del ejercicio fiscal + histórico |
| Memoria de cálculo del indicador | R2 | Superficie atendida, superficie potencial, cálculo de tasa de variación | A definir por Archivo institucional |
| Reporte de conciliación presupuestal | R3 | Presupuesto autorizado/modificado/ejercido vs. superficie atendida | Fiscal (Cuenta Pública) |
| Informe de validación metodológica (ASM) | R5 | Hallazgos, observaciones, recomendaciones | Ciclo de mejora continua |

## 10. Vacíos remanentes (Riesgos operativos actuales)

1. **Vulnerabilidad del dato de origen (Heredado de la Fase 2):** Tal como señala la evaluación de desempeño, la información operativa sigue proviniendo de hojas de cálculo de Excel en las áreas sustantivas, en lugar de una base de datos institucional robusta, lo que traslada el riesgo de error humano directo al cálculo final de R2.
2. **Opacidad en la conciliación presupuestal:** El mecanismo exacto de conciliación presupuestal (R3) no está documentado paso a paso en manuales públicos; se opera bajo inferencia lógica entre el gasto ejercido y el avance de las metas trimestrales/anuales.