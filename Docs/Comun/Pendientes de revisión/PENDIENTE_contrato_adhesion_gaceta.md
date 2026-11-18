# PENDIENTE — Descarga de Contratos de Adhesión históricos (Gaceta del Gobierno)

> **Fecha de alta:** 2026-11-16.
> **Qué es:** localización de **modelos completos del Contrato de Adhesión** publicados como **Anexo 3** de las Reglas de Operación de programas forestales (2013–2015) en la Gaceta del Gobierno del Estado de México. No son la plantilla vigente 2026 ni cubren los programas actuales del FIPASAHEM — su valor es probar la **existencia previa del documento**, su estructura (declaraciones, cláusulas de objeto/ministración/obligaciones/vigencia/firmas de DG y beneficiario) y servir de comparativo para el formato actual.
> **Alimenta:** vacío [V-04 de PA-01](../../Joni/Programas%20de%20apoyo/PA-01_PSAHEM.md) (plantilla de Contrato de Adhesión no capturada) y la necesidad NG-029 de la [tabla maestra](../../TABLA_NECESIDADES.md).
> **Pistas de origen:** hallazgo de agente con búsqueda web (2026-11-16); descripciones de los dos documentos 2014 **sin verificar aún** — solo la de 2013 está verificada (ver estado abajo).

## Estado de las fuentes

| # | Documento (según pista) | URL original (legislacion.edomex.gob.mx) | Sitio | Wayback Machine (instantánea verificada 2026-11-16) |
|---|---|---|---|---|
| 1 | RO Plantaciones Forestales Comerciales 2013 (Reconversión Productiva) — Contrato de Adhesión **Anexo 3** | `…/files/files/vigentes/jul121.PDF` (12-jul-2013) | ❌ caído (HTTP 000, verif. 2026-11-16) | ✅ **descargada y verificada (2026-11-16)** → [PROBOSQUE documentación 2013.pdf](<../PROBOSQUE%20documentación%202013.pdf>): Gaceta 12-jul-2013 (Tomo CXCVI No. 10), 32 pp., RO PFC 2013 + Anexos 1–4 — Anexo 3 = Contrato de Adhesión en **3 variantes** (ejidos pp. 14–17 · persona física pp. 18–21 · jurídico colectiva pp. 22–25) |
| 2 | RO 2014 — modelos para personas físicas, jurídico-colectivas y núcleos agrarios; ministraciones 70/30 | `…/files/files/pdf/gct/2014/abr302.PDF` (30-abr-2014) | ❌ caído (HTTP 000) | ❌ **la única instantánea está truncada** (verif. 2026-11-16: el crawler de ene-2025 recibió 1,048,576 de 1,268,473 bytes — PDF roto, sin xref, ilegible); sin otras instantáneas ni ruta alternativa (`vigentes/abr302` sin captura). Ruta de cierre: Gaceta completa del 30-abr-2014 en periodicooficial.edomex.gob.mx o el sitio original al recuperarse. Prioridad baja: feb192 ya contiene los convenios que se le atribuían (físicas, jurídico colectivas y núcleos agrarios; ministraciones 70/30) |
| 3 | RO 2014 — variantes de reforestación/PRORRIM | `…/files/files/pdf/gct/2014/feb192.PDF` (19-feb-2014) | ❌ caído (HTTP 000) | ✅ **descargada y verificada (2026-11-16)** → [PROBOSQUE documentación 2014.pdf](<../PROBOSQUE%20documentación%202014.pdf>): Gaceta 19-feb-2014 (Tomo CXCVII No. 32 — es la del **19-feb**, no la del 30-abr), 40 pp., Convocatoria + RO PRORRIM 2014 + Anexos 1–5 — Anexo 3 = Convenio de Aceptación en **2 variantes** (ejidos y bienes comunales pp. 14–17 · físicas/jurídico colectivas pp. 17–20) + tabla de compensación por pendiente GPS p. 22 |

URLs completas de Wayback (formato `id_` = bytes originales; el formato normal puede dar bloqueo anti-bot):

1. `http://web.archive.org/web/20251208105930id_/https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/vigentes/jul121.PDF`
2. `http://web.archive.org/web/20250113074724id_/https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2014/abr302.PDF`
3. `http://web.archive.org/web/20240925154655id_/https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2014/feb192.PDF`

## Pista suelta: Gaceta de febrero 2015 (PRORRIM / PSAH)

El agente reportó "Convenios de Aceptación similares para PRORRIM y menciones de Contrato de Adhesión para PSAH" en Gacetas de **febrero 2015**, **sin URL exacta**. El patrón de archivo es `…/files/files/pdf/gct/2015/feb???.PDF` (número desconocido). Cómo cerrar: buscar en el archivo de la Gaceta (`periodicooficial.edomex.gob.mx`) o en la Wayback CDX (`http://web.archive.org/cdx/search/cdx?url=legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2015/*&output=text&limit=100`) los números de febrero 2015.

## Script de descarga (cuando se ejecute)

```bash
cd "Docs/Comun/Pendientes de revisión"
# nombres siguiendo la convención de la carpeta (minúsculas, como ago201a.pdf)
curl -sL --max-time 120 -A "Mozilla/5.0" -o jul121.pdf \
  "http://web.archive.org/web/20251208105930id_/https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/vigentes/jul121.PDF"
curl -sL --max-time 120 -A "Mozilla/5.0" -o abr302.pdf \
  "http://web.archive.org/web/20250113074724id_/https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2014/abr302.PDF"
curl -sL --max-time 120 -A "Mozilla/5.0" -o feb192.pdf \
  "http://web.archive.org/web/20240925154655id_/https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/gct/2014/feb192.PDF"
# verificar tipo real (un 200 puede traer HTML disfrazado o bloqueo anti-bot)
for f in jul121.pdf abr302.pdf feb192.pdf; do printf "%s: " "$f"; head -c 5 "$f"; echo ""; done
# esperar: %PDF en los tres
```

Si la Wayback da la página "Your request is being blocked…", reintentar con el sufijo `id_` (ya incluido) o tras unos minutos.

## Al descargar, verificar

1. Que el **Anexo 3** (o el anexo equivalente) contenga el modelo completo del contrato: declaraciones, cláusulas (objeto, montos, ministraciones, obligaciones, vigencia), firmas del Director General y del beneficiario/comisariado.
2. Anotar qué **programa** cubre cada modelo (PFC/Reconversión 2013; variantes 2014; PRORRIM 2015) y su esquema de ministración (50/50, 70/30).
3. Registrar el hallazgo en [V-04 de PA-01](../../Joni/Programas%20de%20apoyo/PA-01_PSAHEM.md) como **evidencia de existencia previa** — sin sustituir la búsqueda de la plantilla vigente 2026, que sigue requiriendo SAIMEX/entrevista al SGC (los modelos históricos no son el formato del FO-PB vigente).

## Resultado del pase 2026-11-16 (impacto en vacíos)

- **V-04 de PA-01 (NG-029) — llenado parcial**: se cuentan **5 modelos completos** — 3 Contratos de Adhesión 2013 (ejidos/comunidades, persona física, persona jurídico colectiva) y 2 Convenios de Aceptación 2014 (núcleos agrarios; físicas/jurídico colectivas) — con estructura íntegra: antecedentes, declaraciones (facultades del DG en art. 10 fr. I y XI del Reglamento Interno 2008), cláusulas (ministraciones 50/50 con sobrevivencia 80/60 en 2013; 70/30 con intereses moratorios 5% mensual en 2014; vigencia 1 año; fuero Toluca/Metepec) y firmas (DG PROBOSQUE + Jefe de la Unidad Jurídica + beneficiario + testigos Director DRFF/Delegado Regional). La **plantilla vigente 2026 sigue abierta** — ya no se duda de la existencia del documento; falta la versión actual. Ruta de cierre nueva: las RO históricas de los programas actuales publicaron sus modelos como anexo de la Gaceta.
- **V-T02 — llenado parcial**: **ADDATE queda expandida** — "Acta de delimitación, destino y asignación de tierras ejidales" (2014, convocatoria base SEGUNDA fr. III, p. 3: al presentar el ADDATE se integra la información del núcleo del **PHINA** del RAN; corroborada en el checklist del Anexo 1 de 2013). ADDATBC sigue sin expandir (hipótesis "tierras de bienes comunales" = supuesto, no citarla como verificada).
- **No se llenan**: V-T05/X-03·V-01 (los FO-PB-520/509-A/503 son otros formatos); V-T10 (el vale de planta se menciona — 2013 cláusula QUINTA·B; 2014 obligación 3 del Convenio — pero el formato no viene); V-T17/PA-01·V-06 (los Anexos 2/4/5 de verificación son precedentes históricos, no la minuta vigente); V-T01/V-T03.
- **Hallazgo extra**: tabla oficial "Compensación para superficies inclinadas reducidas en proyección horizontal (GPS)" (2014, p. 22; la RO la declara vinculante en art. 10 fr. VI a) — único estándar técnico publicado de medición de superficie en campo; insumo para MF-01/MF-07 (NG-008/NG-010) y el diseño del S-02.

## Pendientes para el merge (2026-11-16 — NO aplicar antes de la unión de ramas)

El análisis ya está hecho y verificado; estas ediciones se ejecutan **al hacer el merge** para evitar colisiones innecesarias (PA-01 es de Joni; la TABLA la edita el equipo en paralelo). Antes de editar: re-extraer los anclas exactas (regla F1 de la skill `review-necesidades` — tras el merge las filas pueden haberse corrido).

1. **V-T02 en `Docs/TABLA_NECESIDADES.md`** — dos filas: renglón 4b de §8 (dice "las siglas no están expandidas en ninguna fuente") y la fila V-T02 de la tabla de vacíos. Cerrar **parcialmente**: ADDATE = "Acta de delimitación, destino y asignación de tierras ejidales" — [Gaceta 19-feb-2014, p. 3, convocatoria base SEGUNDA fr. III](<../PROBOSQUE%20documentación%202014.pdf>) (al presentar el ADDATE se integra la información del núcleo del PHINA del RAN); corroborada en el checklist del Anexo 1 de 2013 (p. 12). Queda abierta: ejemplo documental y confirmación RAN/SAIMEX; ADDATBC sigue sin expandir (hipótesis "tierras de bienes comunales" = supuesto, no citarla como verificada).
2. **V-04 en `Docs/Joni/Programas de apoyo/PA-01_PSAHEM.md`** — coordinar con Joni o tras el merge: actualizar N-11, la fila V-04 (tabla de vacíos) y §12·B1 con el llenado parcial: **5 modelos completos** en esta carpeta (`PROBOSQUE documentación 2013.pdf` pp. 14–25: 3 Contratos de Adhesión; `PROBOSQUE documentación 2014.pdf` pp. 14–20: 2 Convenios de Aceptación). El vacío se re-enfoca a la **plantilla vigente 2026**; rutas de cierre: RO históricas de los programas actuales en la Gaceta (los modelos salían como anexo de las RO) o SAIMEX al SGC.
3. **Renombrar/mover los 2 PDFs** a `Comun/Programas de apoyo/` con nombres descriptivos (p. ej. `GACETA_2013-07-12_RO_PFC2013_Anexo3_ContratoAdhesion.pdf` y `GACETA_2014-02-19_CONV_RO_PRORRIM2014_Anexos.pdf`) — al moverlos, actualizar los enlaces de este archivo.
4. *(Opcional)* Registrar la tabla de compensación por pendiente GPS (2014, p. 22) como insumo histórico en MF-01/MF-07 (NG-008/NG-010) si el equipo la quiere entre las fuentes del S-02.
