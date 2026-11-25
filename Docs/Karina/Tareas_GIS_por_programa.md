# Tareas GIS por programa de apoyo

Qué tareas geoespaciales (GIS) piden las Reglas de Operación 2026 de cada programa, cuáles comparten y en qué difieren. Sirve de insumo para la propuesta de solución (arquitectura y matriz).

**Fuentes revisadas:** las seis Reglas de Operación 2026 (`Docs/Comun/Programas de apoyo/RO_2026_*.pdf`), la Convocatoria 2026 y la *Guía del Proyecto Técnico de Restauración Forestal Integral 2026* (RFI, modalidad de RHF). **Las páginas son del PDF**, no de la Gaceta. La Convocatoria no agrega requisitos GIS propios: remite a las reglas.

**Siglas:** PSAH (Pago por Servicios Ambientales Hidrológicos), RHF (Restauración Hidrológico-Forestal, con su modalidad RFI), CC (Capturando Carbono), PS (Plantaciones Sustentables), MFS (Manejo Forestal Sustentable), PEG (Programa Estatal de Guardabosques), SIG (Sistema de Información Geográfica).

---

## 1. Matriz de tareas GIS × programa

**Clave:** + = la regla lo pide (con página) · — = la regla no lo menciona.

### A. Ubicar y delimitar el predio

| # | Tarea GIS | PSAH | RHF / RFI | CC | PS | MFS | PEG | Programas |
|---|---|---|---|---|---|---|---|---|
| 1 | **Recibir la ubicación del predio con la solicitud** (plano, croquis o archivo) | + p. 11 | + RFI: guía pp. 6–7 | + p. 10 | — | + pp. 11–13 | — | 4 |
| 2 | **Validar el polígono recibido** (formato, geometría, superficie, coincidencia con el RAN) | + p. 13 | + RFI: guía p. 7 | — | — | + p. 14 | — | 3 |
| 3 | **Levantar la poligonal en campo** (visita técnica para delimitar y medir la superficie) | + pp. 15, 19 | + pp. 13, 16–17 | + pp. 14, 17 | + pp. 14, 18 | + pp. 21, 26 | — | **5** |
| 4 | **Georreferenciar la superficie aprobada** como dato definitivo del contrato | + p. 15 | + p. 13 | + p. 14 | + p. 15 | — | — | **4** |
| 5 | **Aplicar reglas de tamaño y número de polígonos** | + p. 8 | + pp. 7, 17 | + p. 7 | + p. 7 | + pp. 10–11 | — | **5** |

### B. Analizar y dictaminar

| # | Tarea GIS | PSAH | RHF / RFI | CC | PS | MFS | PEG | Programas |
|---|---|---|---|---|---|---|---|---|
| 6 | **Dictamen técnico con el SIG de PROBOSQUE** (factibilidad del terreno) | + p. 4 | + p. 3 | + p. 4 | + p. 4 | + p. 4 | — | **5** |
| 7 | **Determinar la superficie factible por análisis cartográfico** | + p. 8 | — | + p. 7 | — | + p. 14 | — | 3 |
| 8 | **Medir cobertura o densidad arbolada** y compararla con el umbral del programa | + pp. 3, 8, 12 | + pp. 7, 10 | + p. 7 | — | + p. 14 | — | **4** |
| 9 | **Cruzar el predio con capas de elegibilidad y prioridad** (cuencas, ANP, recarga, etc.) | + pp. 7–9, 12–13 | + p. 10; RFI: guía p. 7 | + p. 12 | — | + pp. 14–15, 19 | + p. 8 | **5** |
| 10 | **Detectar traslapes** con otros programas o apoyos | — | + RFI: guía p. 8 | + p. 9 | — | + pp. 14–15 | — | 3 |
| 11 | **Excluir áreas afectadas por incendios** | + p. 9 | — | + p. 8 | + p. 12 | — | — | 3 |
| 12 | **Elaborar cartografía temática del proyecto** (suelo, vegetación, pendiente, degradación, zonificación, obras) | — | + RFI: guía pp. 9–12 | — | — | + p. 3 (definición de análisis cartográfico) | — | 2 |

### C. Dar seguimiento al apoyo

| # | Tarea GIS | PSAH | RHF / RFI | CC | PS | MFS | PEG | Programas |
|---|---|---|---|---|---|---|---|---|
| 13 | **Comprobar que los trabajos se hicieron dentro del polígono o predio asignado** | + p. 13 | + pp. 14–15, 17 | — | + p. 15 | — | — | 3 |
| 14 | **Vigilar cambios de cobertura o uso de suelo** durante el apoyo | + pp. 16–17 | — | + p. 14 | — | — | + p. 10 | 3 |
| 15 | **Registrar evidencia fotográfica** (georreferenciada en PEG) | + p. 13 | + p. 10 | — | — | — | + p. 10 | 3 |
| 16 | **Recibir el informe final con información geográfica** de los trabajos | + p. 7 | — | + p. 7 | — | — | — | 2 |
| 17 | **Evaluar sobrevivencia de la planta** | — | + pp. 6, 10 | — | + p. 7 | — | — | 2 |
| 18 | **Comparar el polígono con el del año anterior** (refrendo) | + p. 6 | — | + p. 5 | — | — | — | 2 |
| 19 | **Levantar el inventario de carbono** en sitios de muestreo | — | — | + pp. 4, 6 | — | — | — | 1 |

---

## 2. Lo que hacen todos o casi todos (núcleo común)

Estas tareas aparecen en **4 o 5 de los 5 programas con predio** (PSAH, RHF, CC, PS, MFS). Se construyen **una sola vez** y las usan todos:

1. **Levantar la poligonal en campo** (#3). Lo hacen las Delegaciones Regionales en los cinco; en MFS lo levanta un técnico externo.
2. **Dictaminar con el SIG de PROBOSQUE** (#6). Las cinco reglas lo definen igual: un SIG de **código abierto con estándares OGC**.
3. **Cruzar el predio con capas** (#9). Todos cruzan, pero cada uno con capas distintas (ver §3).
4. **Aplicar reglas de tamaño del polígono** (#5). Todos lo hacen, con rangos distintos.
5. **Georreferenciar la superficie aprobada** (#4). PSAH, RHF, CC y PS usan casi la misma frase: «verificada en campo, georreferenciada y aceptada como dato definitivo».
6. **Medir cobertura o densidad arbolada** (#8), en PSAH, RHF, CC y MFS.

**PEG es distinto:** apoya a núcleos agrarios, no a predios con polígono. Su regla no pide levantar ni dictaminar un polígono. Solo pide ubicar al núcleo respecto a ANP y al «Bosque de Agua» (p. 8), hacer recorridos de vigilancia y entregar un reporte con fotos georreferenciadas (p. 10).

---

## 3. Qué piden igual y qué piden diferente

| Aspecto | Igual en todos | Diferente por programa |
|---|---|---|
| **Cómo llega la ubicación** | La ubicación forma parte del expediente | **PSAH y CC:** plano, croquis o captura de Google Earth con **al menos una coordenada** de un vértice, firmado (PSAH p. 11, CC p. 10). **MFS:** polígono **georreferenciado en shapefile** (pp. 11–12); para certificación FSC, croquis con coordenadas **UTM** de la industria (pp. 12–13). **RFI:** shapefile en **EPSG 32614 (WGS84 / UTM 14N)** con tabla de atributos fija (guía p. 7). **PS y RHF general:** no piden archivo; el polígono se levanta en campo |
| **Quién levanta el polígono** | La visita técnica para delimitarlo | Delegaciones de PROBOSQUE en PSAH, RHF, CC y PS; **técnico externo** de la persona solicitante en MFS (p. 21) |
| **Umbral de cobertura** | Se mide en porcentaje sobre el polígono | **PSAH:** **50–100 %** en bosque templado y 40–100 % en tropical y semiárido (p. 8); prioriza 75–100 % (p. 12). **RHF:** **máximo 49 %** (p. 7); prioriza 0–30 % (p. 10). **CC:** densidad arbolada **≥ 60 %** templado y ≥ 50 % semiárido o tropical (p. 7). **MFS:** superficie arbolada factible para aprovechamiento (p. 14). **PS:** no fija cobertura; mide sobrevivencia ≥ 50 % en mantenimiento (p. 7) |
| **Superficie** | Se calcula desde el polígono | **PSAH:** 20–400 ha en cuenca alta (450 con FSC), 20–300 en media y baja (p. 8). **CC:** 1–200 ha (p. 7). **RHF:** mínimo 0.5 ha; ningún polígono menor de 0.25 ha (p. 7). **PS:** máximo 2 polígonos en 1 ha y 5 en superficies mayores (p. 7). **RFI:** el shapefile no puede diferir más de ±5 % de la superficie propuesta (guía p. 7) |
| **Capas que se cruzan** | Cada programa cruza con capas oficiales | **PSAH:** Zonas de Recarga Hídrica (ZRHCEM, capa propia de PROBOSQUE), ANP, captación y recarga de acuíferos (APCRMA), acuíferos sobreexplotados, presión a la deforestación (INECC), tipos de bosque del Inventario Estatal 2022, capa de parcelas del RAN (pp. 7–9, 13). **CC:** partes altas de cuencas, sitios prioritarios de biodiversidad, áreas para aves, APCRMA (p. 12). **RHF:** partes altas de cuencas (p. 10); RFI: áreas elegibles y uso de suelo y vegetación de INEGI (guía pp. 5, 7). **MFS:** ANP federales y estatales, zonas de alto potencial y zonas prioritarias de MFS (pp. 14–15, 19). **PEG:** ANP estatales, «Bosque de Agua», zonas críticas de tala, incendios y plagas (p. 8) |
| **Traslapes** | — | **CC:** excluye polígonos en otro mecanismo de compensación por carbono (p. 9). **MFS:** identifica sobreposiciones con predios con algún programa (p. 14) y da puntos a quien no tiene (p. 15). **RFI:** sin traslapes con otros apoyos en los últimos 5 años (guía p. 8). CC, PS, RHF y PEG además piden **declarar** si hay otro apoyo con el mismo propósito (CC p. 14, PS p. 15, RHF p. 13, PEG p. 10); un cruce espacial permitiría comprobarlo |
| **Incendios** | — | **PSAH:** excluye áreas incendiadas en la temporada actual y la anterior, **por análisis cartográfico** y campo (p. 9). **CC:** solo si el incendio bajó la densidad mínima (p. 8). **PS:** temporada anterior (p. 12) |
| **Causa de baja por cambio espacial** | — | **PSAH:** alteración de cobertura o superficie **mayor al 10 %** (p. 17). **CC:** no cambiar uso de suelo ni cobertura (p. 14). **RHF:** reintegro si se planta fuera de los polígonos o en menos del 70 % de la superficie (pp. 14–15) |
| **Refrendo** | — | **PSAH:** mantiene **el mismo polígono** (p. 6). **CC:** el polígono **puede variar** de un año a otro (p. 5). **PS:** cambiar el polígono antes de plantar requiere aprobación (p. 15) |

---

## 4. Qué implica para la arquitectura

**Un solo componente GIS para todos**, con lo que varía guardado como **parámetros por programa**, no como código distinto por programa:

| Común (se construye una vez) | Configurable por programa |
|---|---|
| Capa de predios y polígonos ligada al expediente, con historial por ejercicio (sirve para refrendos y cambios) | Formato de entrada aceptado (croquis con coordenada, shapefile, sistema de coordenadas) |
| Captura de la poligonal en campo, con fotos georreferenciadas | Rangos de superficie y número de polígonos |
| Cálculo de superficie y validación de geometría | Umbral de cobertura o densidad |
| Cruce del polígono con capas (y catálogo de capas oficiales) | Qué capas se cruzan y cuántos puntos dan |
| Detección de traslapes entre polígonos de todos los programas | Ventana de traslape (años) y si excluye o solo resta puntos |
| Visor para dictamen y supervisión | Causas de baja espaciales (porcentaje de cambio permitido) |

**Relación con la tabla de necesidades:** este núcleo atiende **NG-011** (registrar la geometría del polígono), **NG-012** y **NG-013** (cobertura y cruce con información institucional, hoy en Baja por Geobosques), **NG-014** (cambios de cobertura) y **NG-073** (GPS y fotos de campo).

---

## 5. Huecos que conviene señalar

- **Ninguna regla menciona imágenes satelitales ni GPS por nombre.** Hablan de «análisis cartográfico», «Sistema de Información Geográfica» y «georreferenciada». El uso de imágenes para medir cobertura es inferencia, no requisito escrito.
- **PS y RHF general no dicen en qué formato llega la ubicación.** Solo la guía de RFI fija el shapefile y su sistema de coordenadas.
- **Solo PSAH publica una capa propia** (ZRHCEM, en la página de PROBOSQUE, p. 13). Las demás capas que citan las reglas son de otras instituciones (INEGI, RAN, INECC y las declaratorias de ANP).
- **La ubicación de PEG es por núcleo agrario**, sin polígono de predio; habría que confirmar si se quiere registrar su área de influencia.
