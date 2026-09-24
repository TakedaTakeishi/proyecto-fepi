# X-01 — Criterios y Especificaciones de Clasificación Satelital para la Masa Forestal

> Proyecto: Sistema de Gestión Documental PROBOSQUE (Módulo Masa Forestal / SIG)[cite: 1].  
> **Documento técnico normativo de referencia para los procesos MF-02 y MF-03**.

---

## 1. Objeto y alcance

Estandarizar los criterios técnicos, bandas espectrales, firmas radiométricas, categorías de vegetación y umbrales de densidad de dosel que el SGD y el SIG de PROBOSQUE deben utilizar para procesar imágenes satelitales ópticas y de radar, permitiendo identificar cambios en la masa forestal: pérdida de cobertura, incendios, plagas forestales, biomasa y aptitud para proyectos de carbono[cite: 5.2].

---

## 1.1 Entradas y Salidas del Módulo Técnico

| Tipo | Elemento | Formato / Sensor | Fuente / Destino |
|---|---|---|---|
| **Entrada** | Mosaicos satelitales | Sentinel-2 (MSI), Landsat 8/9 (OLI), Planet | Servidores espaciales / Copernicus / USGS |
| **Entrada** | Capa base de zonificación forestal | Vectorial UTM WGS84 del Inventario 2022 | SIG PROBOSQUE |
| **Salida** | Matriz de firmas espectrales calibradas | Tablas de reflectancia por categoría fito-geográfica | SGD / Módulo de Teledetección |
| **Salida** | Capas ráster de alertas y detección temática | GeoTIFF (NDVI, NBR, dNBR, SAVI) | Módulos de dictaminación e inspección |

---

## 2. Categorías de Cobertura Vegetal y Uso de Suelo

Conforme al Inventario Estatal Forestal y de Suelos 2022 de PROBOSQUE, el SGD categorizará el territorio en las siguientes clases fito-geográficas[cite: 5.2]:

| Código | Categoría | Especies representativas | Rango NDVI esperado | Umbral de dosel |
|---|---|---|---|---|
| **C-01** | Bosque Templado de Coníferas | *Pinus*, *Abies religiosa* (oyamel), *Cupressus* | $0.65 - 0.88$ | $\ge 60\%$ (Denso) |
| **C-02** | Bosque de Latifoliadas | *Quercus* (encino), *Alnus* (aile) | $0.60 - 0.82$ | $\ge 50\%$ (Semidenso) |
| **C-03** | Bosque Mixto | Pino-Encino / Encino-Pino | $0.55 - 0.80$ | $\ge 50\%$ |
| **C-04** | Bosque Mesófilo de Montaña | Bosque de niebla, alta humedad | $0.70 - 0.90$ | $\ge 70\%$ |
| **C-05** | Selva Baja Caducifolia | Zonas cálidas del sur del Estado de México[cite: 5.2] | $0.35 - 0.70$ (estacional) | $\ge 30\%$ |
| **C-06** | Matorral y Vegetación Semiárida | Matorral xerófilo, nopaleras | $0.25 - 0.45$ | $\ge 20\%$ |
| **C-07** | Áreas Antrópicas y Exclusiones | Agrícola, asentamientos humanos, vías de comunicación | $< 0.25$ | $0\%$ (Excluido) |

---

## 3. Umbrales de Densidad de Dosel (Cobertura de Copa)

Para la dictaminación de programas de apoyo (PSAH y Capturando Carbono), se establecen los siguientes estratos de densidad:
- **Bosque Denso o Compacto:** Cobertura de dosel $\ge 60\%$. Elegible con calificación máxima.
- **Bosque Semidenso:** Cobertura de dosel entre $40\%$ y $59\%$. Elegible para PSAH condicionado a compromiso de enriquecimiento forestal[cite: 1].
- **Bosque Fragmentado o Abierto:** Cobertura de dosel entre $20\%$ y $39\%$. No elegible para conservación directa; canalizable a programas de reforestación o restauración hidrológica.
- **Área No Forestal:** Cobertura de dosel $< 20\%$. Rechazo automático en programas de protección de masa forestal[cite: 1].

---

## 4. Detección Temática Específica en Imágenes Satelitales

### 4.1 Pérdida de Cobertura y Deforestación
- **Índice base:** Diferencia temporal de NDVI ($\Delta NDVI = NDVI_{t2} - NDVI_{t1}$).
- **Criterio de alerta:** Una caída en $\Delta NDVI < -0.20$ entre dos periodos en un mismo predio activa una bandera roja en el SGD, bloqueando ministraciones y detonando una orden de inspección urgente en MF-07.

### 4.2 Incendios Forestales y Severidad de Daño
- **Índice base:** Índice de Calcinación Normalizado (NBR): $(NIR - SWIR) / (NIR + SWIR)$.
- **Severidad del incendio:** Calculada mediante el $\Delta NBR$ (diferencia de NBR pre y post-fuego):
  - $\Delta NBR < 0.10$: Sin daño o rebrote.
  - $0.10 \le \Delta NBR < 0.44$: Severidad baja a moderada.
  - $\Delta NBR \ge 0.44$: Severidad alta (combustión total de dosel).

### 4.3 Detección de Plagas y Descortezadores
- **Firma espectral:** Pérdida de reflectancia en el infrarrojo cercano (estrés hídrico y pérdida de clorofila) combinada con incremento en la banda roja (*red-edge* en Sentinel-2).
- **Alerta de sanidad forestal:** Agrupaciones continuas de más de $0.5\text{ ha}$ con decoloración del follaje en bosque de coníferas generan un punto de verificación fitosanitaria para el Comité Técnico.

### 4.4 Estimación de Biomasa y Captura de Carbono
- Cruce de la densidad de dosel y el índice de área foliar (LAI) con tablas de biomasa aérea del Inventario Estatal Forestal 2022 para calcular toneladas métricas de carbono equivalente ($t CO_2 eq/ha$)[cite: 5.2].

---

## 5. Diagrama del Proceso de Clasificación Espectral

```mermaid
flowchart TD
    A([Imágenes Multiespectrales]) --> B[Corrección atmosférica y calibración radiométrica]
    B --> C[Aplicación de máscara de nubes y sombras]
    C --> D{Objetivo del análisis}
    D -- Dictamen de Elegibilidad --> E[Cálculo de NDVI / SAVI y densidad de dosel]
    D -- Alerta de Deforestación --> F[Análisis multitemporal delta NDVI]
    D -- Sanidad / Plagas --> G[Detección de estrés hídrico bandas Red-Edge]
    D -- Siniestros / Incendios --> H[Cálculo de NBR y severidad delta NBR]
    E --> I[Homologación con categorías del Inventario 2022]
    F --> J[Generación de alertas en SGD]
    G --> J
    H --> J
    I --> K([Cédula temática transferible a MF-02 y MF-03])
```

## 6. Procedimiento narrado (anclas de trazabilidad)

- **X01·P1** R-01 (Analista SIG) programa la ingesta de escenas multiespectrales (Sentinel-2 / Landsat) y aplica filtros automáticos de calibración radiométrica y máscaras de nubosidad/sombras.
- **X01·P2** R-02 (Motor Espectral) ejecuta el cálculo de índices estandarizados (NDVI, SAVI, NBR) según la ecorregión y tipo de cobertura fito-geográfica definida en el Inventario Estatal 2022.
- **X01·P3** R-02 segmenta la cobertura arbórea por umbrales de densidad de copa (compacta >= 60%, semidensa 40-59%, fragmentada 20-39%, no forestal < 20%) y aplica la máscara de exclusión de áreas antrópicas.
- **X01·P4** R-02 corre el análisis multitemporal diferencial (delta NDVI y delta NBR) contrastando con la escena basal del ejercicio previo para identificar anomalías espectrales.
- **X01·P5** R-01 revisa las anomalías detectadas: si delta NDVI < -0.20 emite alerta de pérdida de dosel/tala; si delta NBR >= 0.10 clasifica polígono de severidad de incendio; si detecta estrés en red-edge emite bandera de sospecha de plaga descortezadora.
- **X01·P6** R-03 (Dictaminador Técnico) valida las capas temáticas resultantes y emite el **Dictamen de Clasificación Espectral y Alertas Tempranas**, transfiriendo los insumos a los procesos de apoyo (MF-02, MF-03) o de fiscalización (MF-07).

---

## 7. Tabla de necesidades (con ancla al paso)

| ID | Rol | Necesidad del SGD | Prior. | Paso | Origen documental verificado |
|---|---|---|---|---|---|
| N-X01-01 | R-01 | Módulo de ingesta y preprocesamiento con filtros de calibración atmosférica BOA (Bottom of Atmosphere) | A | X01·P1 | Estándar de Teledetección [INV-FOR] |
| N-X01-02 | R-02 | Librería algorítmica geoespacial para cálculo raster multiespectral (NDVI, SAVI, NBR, dNBR) | A | X01·P2 | [RO-PSAH pp. 4, 8]; Práctica teledetección |
| N-X01-03 | R-02 | Clasificador supervisado con umbrales fijos de dosel y máscara de exclusión antrópica | A | X01·P3 | [RO-PSAH p. 8; RO-CARB pp. 7–9] |
| N-X01-04 | R-02 | Motor de detección de cambios multitemporales pixel a pixel con escenas basales | A | X01·P4 | Metodología de Monitoreo [INV-FOR]; Arts. 35-36 LGDFS |
| N-X01-05 | R-01 | Panel de semaforización de alertas tempranas (deforestación, incendios, descortezadores) | M | X01·P5 | [RO-PSAH p. 21; Manual Proc. pp. 27–28] |
| N-X01-06 | R-03 | Generador automatizado de reportes GeoPDF temáticos y capas vectoriales exportables | A | X01·P6 | [RO-PSAH p. 19; MGO 2025 pp. 21–22] |

---

## 8. Registros que el SGD debe gestionar

| Registro | Genera (paso) | Campos clave requeridos | Retención sugerida |
|---|---|---|---|
| Catálogo de Firmas Espectrales | R-01 (X01·P1–P2) | Especie fito-geográfica, valores de reflectancia por banda, ecorregión, fecha de calibración. | Permanente |
| Capa Ráster de Índices de Cobertura y Alertas | R-02 (X01·P2–P5) | ID Polígono/Predio, tipo de índice (NDVI, NBR, SAVI), valor medio, desviación estándar, clasificación de daño/estrato. | 10 años |
| Cédula de Clasificación Espectral y Alertas | R-03 (X01·P6) | Folio de trámite, ID predio, porcentaje de dosel por estrato, alertas activas (tala/incendio/plaga), firma del dictaminador. | Permanente (Histórico de predio) |

---

## 9. Vacíos y siguientes pasos

1. **V-X01-01 (Frecuencia de actualización en temporada nublada):** Durante los meses de alta pluviosidad (junio a septiembre) en las sierras del Estado de México, la persistencia de nubes anula los sensores ópticos. El sistema carece de un protocolo formal para alternar automáticamente a imágenes de radar de apertura sintética (SAR Sentinel-1) para evaluar cobertura.
2. **V-X01-02 (Calibración de umbrales para especies invasoras):** La presencia de vegetación invasora o zacatonales densos en zonas siniestradas genera valores altos de NDVI artificiales que aparentan arbolado. Se requiere incorporar índices texturales o algoritmos de machine learning para diferenciarlos de copas arbóreas reales.
3. **V-X01-03 (Factores alométricos oficiales de carbono):** PROBOSQUE no cuenta con una tabla de conversión alométrica oficial en sus manuales para traducir directamente la densidad espectral a toneladas de carbono retenidas por tipo de vegetación, dependiendo de aproximaciones bibliográficas de la CONAFOR.

---

## 10. Nota de mantenimiento

Documento técnico transversal **X-01** dentro del Módulo de Masa Forestal / SIG. Archivar en `Docs/Valeria/Masa_Forestal/X-01_CRITERIOS_CLASIFICACION_SATELITAL.md`. Establece las definiciones, umbrales radiométricos y modelos espectrales que alimentan operativamente a **MF-02**, **MF-03** y las alertas de fiscalización de **MF-07**.
