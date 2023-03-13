const CALENDARIOJSON = "https://raw.githubusercontent.com/PabloRamosAguilar/PaginaDualManuelPablo2-DAW/main/calendario.JSON";

const fechaescribir = document.getElementById("fechaHoy");
let fecha = new Date();
let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
fechaescribir.innerText += fechahoy;



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        pintarEvento(myObj);


    }
};



function show() {
    document.getElementById("L0").style.visibility = "visible";
    document.getElementById("L1").style.visibility = "visible";
    document.getElementById("L33").style.visibility = "visible";
    document.getElementById("L34").style.visibility = "visible";
}

function hide() {
    document.getElementById("L0").style.visibility = "hidden";
     document.getElementById("L1").style.visibility = "hidden";
    document.getElementById("L33").style.visibility = "hidden";
    document.getElementById("L34").style.visibility = "hidden";
}

xmlhttp.open("GET", CALENDARIOJSON, true);
xmlhttp.send();


function pintarEvento(Evento) {
    let counter = 0;


    Evento.forEach(objeto => {

        let temporalobjeto = document.getElementById("" + counter);
        let temporalevento = document.getElementById("E" + counter);




        temporalobjeto.innerHTML = objeto.dia;
        temporalevento.innerHTML = objeto.evento;

        if (objeto.dia < fecha.getDate()) {
            document.getElementById("L" + counter).style.backgroundColor = "pink";
        };
        if (objeto.dia == fecha.getDate()) {
            document.getElementById("L" + counter).style.backgroundColor = "wheat";
            document.getElementById("L" + counter).innerHTML += "dia actual";
        };
        if (objeto.evento !== "") {
            document.getElementById("E" + counter).style.backgroundColor = "lightblue";

        };

        counter++
    });


};
