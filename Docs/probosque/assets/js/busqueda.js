const paginas = [
    {
        titulo: "Página principal",
        archivo: "index.html",
        contenido: "PROBOSQUE Portal de Servicios Forestales conservación programas de apoyo banco de semillas"
    },
    {
        titulo: "Conservación de la masa forestal",
        archivo: "conservacion.html",
        contenido: "conservación masa forestal delimitación polígono tenencia cobertura SIG índices cobertura dictamen comité operación estímulos económicos ejecución actualización campo inspección vigilancia fiscalización resultados indicadores"
    },
    {
        titulo: "Programas de apoyo",
        archivo: "apoyos.html",
        contenido: "programas apoyo dueños terrenos forestales PSAHEM servicios ambientales hidrológicos restauración hidrológico forestal Reforestando EdoMéx manejo forestal sustentable plantaciones sustentables capturando carbono Procarbono restauración forestal integral"
    },
    {
        titulo: "Banco de semillas",
        archivo: "semillas.html",
        contenido: "banco semillas especies forestales disponibilidad conservación almacenamiento manejo"
    }
];

function buscar() {

    const texto = document
        .getElementById("query")
        .value
        .toLowerCase()
        .trim();

    const resultados = document.getElementById("resultados");

    resultados.innerHTML = "";

    if (texto === "") {
        return;
    }

    const encontrados = paginas.filter(pagina =>
        pagina.contenido.toLowerCase().includes(texto)
    );

    if (encontrados.length === 0) {
        resultados.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
    }

    encontrados.forEach(pagina => {

        const resultado = document.createElement("div");

        resultado.innerHTML = `
            <p>
                <a href="${pagina.archivo}">
                    <strong>${pagina.titulo}</strong>
                </a>
            </p>
        `;

        resultados.appendChild(resultado);
    });
}