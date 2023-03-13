const URL = "https://raw.githubusercontent.com/PabloRamosAguilar/JSON/main/comentarios.JSON";
const URL2 = "https://raw.githubusercontent.com/PabloRamosAguilar/JSON/main/Comentarios2.JSON";
const URL3 = "https://raw.githubusercontent.com/PabloRamosAguilar/JSON/main/comentarios3.JSON";
var divPadre = document.querySelector("#espacioComentarios");
var divPadre2 = document.querySelector("#espacioComentarios2");
var divPadre3 = document.querySelector("#espacioComentarios3");

function pintarComentarios(Comentario, divSeleccionado) {

    Comentario.forEach(objeto => {
        let temporalDiv = document.createElement("DIV");
        let temporalNombre = document.createElement("H3");
        let temporalComentario = document.createElement("P");

        temporalNombre.innerHTML = objeto.nombre;
        temporalComentario.innerHTML = objeto.comentario;

        divSeleccionado.appendChild(temporalDiv);
        temporalDiv.classList.add("row");
        temporalDiv.appendChild(temporalNombre);
        temporalNombre.classList.add("text-center");
        temporalDiv.appendChild(temporalComentario);

    })
}

const consultarAPI = async () => {

    const [respuesta] = await Promise.all([fetch(URL)]);
    const resultado = await respuesta.json();

    pintarComentarios(resultado, divPadre);

    const [respuesta2] = await Promise.all([fetch(URL2)]);
    const resultado2 = await respuesta2.json();

    pintarComentarios(resultado2, divPadre2);

    const [respuesta3] = await Promise.all([fetch(URL3)]);
    const resultado3 = await respuesta3.json();

    pintarComentarios(resultado3, divPadre3);

}

consultarAPI();