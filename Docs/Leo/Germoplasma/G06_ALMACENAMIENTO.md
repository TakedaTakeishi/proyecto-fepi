# G6 — Almacenamiento del Banco de Germoplasma

> Proyecto: Sistema de Gestión Documental PROBOSQUE (fase de entendimiento del problema).
> Documento de trabajo de Leonardo para el proceso **G6** del mapa [`01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md`](../../Joni/Germoplasma/01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md).
> Fecha de análisis: 2026-09-21.

---

## 1. Objeto y alcance

Definir el proceso documental de **almacenamiento de semilla forestal en el Banco de Germoplasma**: su resguardo, su vínculo con el inventario formal y los puntos de trazabilidad que conectan con salida interna y retorno.

**Incluye:**
- Resguardo de semilla en banco tras calidad/laboratorio.
- Flujo documental de inventario de semillas y validación institucional.
- Trazabilidad mínima hacia salida a viveros (G8) y retorno de no sembrada (G10).

**Excluye:**
- Programación/colecta de campo (G1–G2).
- Bitácora de ingreso inicial y beneficio (G3–G4), salvo como antecedente.
- Pruebas de laboratorio y criterios de aceptación (G5).
- Procedimiento operativo completo de retorno (G10), hoy no documentado en detalle.

## 2. Base documental (origen de requisitos)

| Clave | Documento (ruta real) | Uso verificable |
|---|---|---|
| [MP06] | `Docs/Comun/Germoplasma/86_manualProcDirRestYFtoFtal.pdf` | Procedimiento 4.2, **pdf pp. 31–37** (flujo) y **pp. 38–42** (formatos). Punto central de G6: “La semilla es almacenada… con temperatura adecuada…” (**p. 35, paso 17**); inventario e informe final (**p. 35, paso 19**); cadena de firmas inventario (**p. 36, pasos 20–23**); entrega con vale foliado y bitácora (**p. 37, paso 27**); campos del Formato de Salida y nota de retorno (**pp. 41–42**). |
| [GER] | `Docs/Comun/Sitio web/colecta_germoplasma.html` | Capacidad institucional publicada del banco: **10 toneladas**; existencia agregada publicada: **2.8 toneladas**; laboratorio (humedad, pureza, semillas/kg, viabilidad, germinación). |
| [MAPA] | `Docs/Joni/Germoplasma/01_MAPA_PROCESOS_Y_VACIOS_GERMOPLASMA.md` | Delimita G6 (parcial): documentado “temperatura adecuada” y “fecha límite de siembra”; vacíos obligatorios: condiciones físicas reales, empaque, caducidad por especie y mermas/deterioro; visita a campo obligatoria. |
| [INV] | `Docs/Joni/Germoplasma/00_INVENTARIO_Y_GUIA_GERMOPLASMA.md` | Ruta de lectura y síntesis verificada: MP06 4.2 (pp. 31–37) y formatos (pp. 38–42); también consigna que no se conoce inventario por lote/especie actualizado ni condiciones físicas reales. |
| [G9] | `Docs/Joni/Germoplasma/G09_DISTRIBUCION_GERMOPLASMA.md` | Plantilla metodológica (secciones, trazabilidad) y uso de campos de salida de semilla para conectar almacenamiento con entrega/retorno. |
| [DIR] | `Docs/Comun/Manual Jurídico/Directorio.txt` | Personificación de titulares de DRFF, SRyPP, UCSF y delegaciones; confirma ausencia de titulares operativos del Banco/Jefatura del Depto. de Producción de Planta. |
| [MGO] | `Docs/Comun/Manual Jurídico/dic161d.pdf` | Funciones vigentes: DRFF reporta avances y resultados de conservación de germoplasma (**p. 25, f.1**); SRyPP coordina recolecta y venta/capitalización (**p. 26, f.3/f.12**). |

> Convención de cita en este documento: `pdf p. X` = página del archivo PDF; `paso N` = numeración del diagrama/procedimiento del MP06.

## 3. Glosario de siglas y términos

| Término | Significado | Fuente |
|---|---|---|
| Banco de Germoplasma | Instalación donde se conserva semilla forestal para producción de planta | [MP06][GER] |
| Inventario de semillas | Documento de avance que el responsable de colecta emite, firma y turna para validación institucional | [MP06 p. 35–36] |
| Vale/Formato de salida de semilla | Documento foliado con datos técnicos por lote para la entrega de semilla | [MP06 pp. 37, 41–42] |
| Fecha límite de siembra | Límite máximo fuera del banco; si no se siembra, debe regresar al banco antes de esa fecha | [MP06 p. 41] |
| DRFF / SRyPP / UCSF / DRF | Dirección de Restauración y Fomento Forestal / Subdirección de Restauración y Producción de Planta / Unidad de Conservación de Suelos Forestales / Delegación Regional Forestal | [MGO][DIR] |

## 4. Roles (personificados)

> Donde el Directorio no identifica titular operativo, se marca **⚠️ desconocido**.

| ID | Rol | Unidad / puesto | Titular identificado | Tipo |
|---|---|---|---|---|
| R1 | Responsable de Colecta de Germoplasma Forestal | Operativo del Programa de Colecta | ⚠️ desconocido en [DIR] | Interno |
| R2 | Custodia del Banco de Germoplasma | Operativo del banco | ⚠️ desconocido en [DIR] | Interno |
| R3 | Jefatura del Depto. de Producción de Planta | SRyPP / Depto. Producción de Planta | ⚠️ titular de jefatura no listado; referencia jerárquica: **Iván Delfino Gómez Patiño** (Subdirector SRyPP) | Interno |
| R4 | Revisión técnica intermedia de inventario | Unidad/Subdirección de Conservación de Suelos Forestales | **Juan Alberto Araujo** (Subdirector) | Interno |
| R5 | Visto bueno directivo | Dirección de Restauración y Fomento Forestal | **Emmanuel Mondragón Romero** (Encargado del Despacho) | Interno |
| R6 | Delegación/vivero solicitante y receptor de semilla | Delegaciones Regionales Forestales y viveros | Delegados listados en [DIR] (operador de vivero ⚠️ desconocido) | Interno |

## 5. Funciones y actividades por rol

| Rol | Función principal en G6 | Actividades (pasos §7) |
|---|---|---|
| R1 | Informar estado de semilla almacenada | G6·A3 |
| R2 | Conservar y despachar semilla almacenada | G6·A2, G6·A7, G6·A8 |
| R3 | Recibir/validar trámite de inventario y solicitudes autorizadas | G6·A4, G6·A6 |
| R4 | Revisión y firma intermedia del inventario | G6·A5 |
| R5 | Visto bueno final del inventario | G6·A6 |
| R6 | Solicitar y recibir semilla para siembra | G6·A7, G6·A9 |

## 6. Reglas de negocio (`G6·BR-#`)

- **G6·BR-1 (documentado):** La semilla se almacena con **temperatura adecuada** para conservar viabilidad hasta su siembra. [MP06 pdf p. 35, paso 17]
- **G6·BR-2 (documentado):** El Responsable de Colecta emite **Inventario de semillas** (original y copia con rúbrica) e **informe final** del programa. [MP06 pdf p. 35, paso 19]
- **G6·BR-3 (documentado):** El inventario sigue cadena formal de revisión/firma: Depto. Producción de Planta → UCSF → DRFF → retorno al Depto. [MP06 pdf p. 36, pasos 20–23]
- **G6·BR-4 (documentado):** La entrega de semilla se realiza con **vale/formato foliado**, firma de recibido y registro en bitácora. [MP06 pdf p. 37, paso 27; pp. 41–42]
- **G6·BR-5 (documentado):** El formato de salida exige datos técnicos por lote (lote, fecha de colecta, peso, semillas/kg, % llenas, % germinación, planta a obtener, fecha límite de siembra). [MP06 pp. 41–42]
- **G6·BR-6 (documentado):** Si la semilla no se siembra, debe **regresar al banco antes de la fecha límite**; la responsabilidad recae en jefatura de vivero. [MP06 p. 41, nota]
- **G6·BR-7 (documentado institucional):** La cifra de 10 t de capacidad y 2.8 t almacenadas es **agregada institucional publicada**; no sustituye inventario por lote/especie. [GER]
- **G6·BR-8 (inferido por continuidad):** Para sostener G8/G10, el almacenamiento debe conservar trazabilidad de lote que alimente salida y retorno; el mecanismo operativo exacto sigue pendiente. [MP06 pp. 41–42][MAPA]
- **G6·BR-9 (pendiente de confirmación):** Condiciones físicas reales (cámara/ventilación), empaque, caducidad por especie y control de mermas/deterioro no están documentados en fuente normativa consultada. [MAPA][INV]

## 7. Procedimiento narrado (ancla de trazabilidad)

**Modalidad A — Almacenamiento y control documental asociado**

- **G6·A1 (inferido por continuidad G5→G6):** R1/R2 reciben la semilla ya beneficiada y con resultados de calidad para preparar su resguardo en banco. [MP06 pp. 34–35; MAPA]
- **G6·A2 (documentado):** R2 almacena la semilla en el Banco de Germoplasma a temperatura adecuada para mantener viabilidad. [MP06 p. 35, paso 17]
- **G6·A3 (documentado):** R1 reporta avances mediante Inventario de semillas (rúbrica) y entrega informe final del programa de colecta. [MP06 p. 35, paso 19]
- **G6·A4 (documentado):** R3 recibe inventario, firma y turna a UCSF. [MP06 p. 36, paso 20–21]
- **G6·A5 (documentado):** R4 revisa inventario, firma y turna a DRFF. [MP06 p. 36, paso 22]
- **G6·A6 (documentado):** R5 revisa, da visto bueno y regresa inventario al Depto. de Producción de Planta para trámite. [MP06 p. 36, paso 23]
- **G6·A7 (documentado, enlace con G8):** R2 entrega semilla contra solicitud autorizada usando formato/vale foliado con datos técnicos y registro en bitácora. [MP06 p. 37, paso 27; pp. 41–42]
- **G6·A8 (documentado, enlace con G10):** Si la semilla no se siembra dentro del plazo, debe retornar al banco antes de la fecha límite de siembra. [MP06 p. 41, nota]
- **G6·A9 (documentado parcial):** R6 recibe semilla para siembra; la operación detallada de seguimiento posterior pertenece a G8 y el retorno operativo completo a G10. [MP06 p. 37; MAPA]

## 8. Diagrama de actividad (SVG con carriles por rol)

> Generado por script en `Docs/Leo/Diagramas/G06/gen-diagramas.mjs` (no editado a mano). En el nodo solo se coloca ID+acción; las fuentes quedan en §2/§6/§7.

![G6·A — Almacenamiento del Banco de Germoplasma](../Diagramas/G06/G6-A-almacenamiento.svg)

## 9. Tabla de necesidades (N-##)

Prioridad: **A** obligatoria · **M** media · **B** baja.

| ID | Rol | Necesidad (acción/información requerida) | Prior. | Paso | Origen verificable |
|---|---|---|---|---|---|
| N-01 | R2 | Conocer condición mínima de conservación para almacenar semilla viable | A | G6·A2 | [MP06 p. 35, paso 17] |
| N-02 | R1 | Reportar existencias y avances mediante Inventario de semillas firmado | A | G6·A3 | [MP06 p. 35, paso 19] |
| N-03 | R3 | Recibir inventario e integrarlo al flujo formal de validación | A | G6·A4 | [MP06 p. 36, pasos 20–21] |
| N-04 | R4 | Revisar, firmar y turnar inventario a DRFF | A | G6·A5 | [MP06 p. 36, paso 22] |
| N-05 | R5 | Emitir visto bueno del inventario para trámite institucional | A | G6·A6 | [MP06 p. 36, paso 23] |
| N-06 | R2 | Entregar semilla con folio y datos técnicos por lote | A | G6·A7 | [MP06 p. 37, paso 27; pp. 41–42] |
| N-07 | R6 | Recibir semilla con fecha límite de siembra explícita | A | G6·A7/G6·A9 | [MP06 pp. 41–42] |
| N-08 | R2·R6 | Registrar y atender retorno de semilla no sembrada antes de fecha límite | A | G6·A8 | [MP06 p. 41, nota] |
| N-09 | R3·R2 | Consultar inventario real por lote/especie para autorizar y despachar | A | G6·A4/G6·A7 | [MP06 p. 35, paso 19; p. 37, paso 27]; brecha actual [MAPA] |
| N-10 | R2 | Contar con registro de mermas/deterioro y caducidad por especie | A | G6·A2/G6·A8 | Vacío documentado en [MAPA] (G6 “Qué falta”) |
| N-11 | R3·R5 | Distinguir dato agregado institucional (10 t/2.8 t) de inventario operativo por lote | M | transversal | [GER]; contraste operativo [MP06 pp. 35–37] |

## 10. Registros que el SGD debe gestionar (catálogo documental)

> Retención: **no inventada**; se deja “a definir” mientras no exista serie/tabla específica confirmada para germoplasma.

| Registro | Generador (paso) | Campos sustentados en fuente | Retención |
|---|---|---|---|
| Inventario de semillas (original/copia) | R1 (G6·A3) | Avances de colecta; rúbrica; circuito de firmas posteriores | a definir |
| Informe final del Programa de Colecta | R1 (G6·A3) | Informe final de avances del programa | a definir |
| Solicitud de Semilla | R6 (proceso hermano G8) | Fecha, región, vivero, solicitante, especie, cantidad de planta, presupuesto, año, tipo de envase, firmas | a definir |
| Formato de salida de Semilla del Banco de Germoplasma | R2 (G6·A7) | Folio, fecha salida, solicitante, vivero, región, uso, especie, lote, fecha colecta, presupuesto, peso, semillas/kg, % llenas, % germinación, planta a obtener, fecha límite, firmas | a definir |
| Bitácora de entrega/salida de semilla | R2 (G6·A7) | Registro de entrega y firma de recibido ligado a folio | a definir |
| Registro de retorno de semilla no sembrada | R2/R6 (G6·A8) | Debe vincular folio/lote/fecha límite y cantidad devuelta (estructura exacta pendiente) | a definir |
| Registro de mermas/deterioro en almacenamiento | R2 (transversal G6) | No existe formato confirmado en fuentes actuales | a definir |

## 11. Vacíos y siguientes pasos

1. **Visita a campo obligatoria (explícita):** confirmar condiciones físicas reales del banco (cámara de frío o ventilación, temperatura/humedad operativa, empaque y control diario). [MAPA]
2. Confirmar **caducidad por especie** y política interna de vigencia (incluyendo el tema de especies ortodoxas vs recalcitrantes solo como investigación técnica, no como regla ya aprobada por PROBOSQUE). [MAPA]
3. Levantar el proceso real de **mermas/pérdidas/deterioro**: quién registra, cuándo, con qué formato y qué autorización requiere. [MAPA][INV]
4. Identificar titular operativo de **R1/R2/R3 jefatura** y responsables de vivero para validar necesidades con personas concretas (hoy varios puestos quedan en ⚠️ desconocido). [DIR]
5. Verificar en campo si siguen vigentes los formatos 2006 tal cual o si existe versión operativa actual no publicada. [MP06][INV]
6. Integrar evidencia del proceso G10 (retorno) para cerrar el ciclo documental sin huecos entre salida y reingreso.

## 12. Nota de mantenimiento y relación con procesos vecinos

- Este archivo cubre **solo G6** y vive en `Docs/Leo/Germoplasma/G06_ALMACENAMIENTO.md`.
- Dependencias del flujo:
  - **Entrada desde G5**: la semilla llega después de calidad/laboratorio para su resguardo.
  - **Salida hacia G7**: el inventario de semillas es el control documental que reporta avances y existencias.
  - **Salida hacia G8**: la entrega para viveros usa formato foliado con datos técnicos de lote.
  - **Enlace con G10**: la nota de “regresar antes de fecha límite” existe, pero el procedimiento operativo completo de retorno sigue pendiente.
- Mantenimiento recomendado: cuando se obtenga la visita de campo, actualizar primero §6 (reglas), §7 (pasos) y §10 (registros) para no mezclar inferencias con hechos verificados.
