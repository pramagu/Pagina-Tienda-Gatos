$("#logout").hide();
const formularioModal = document.querySelector("#formularioModal");
const logout = document.querySelector("#logout");

if (localStorage.getItem("Nombre") && localStorage.getItem("Email")) {
    document.getElementById("prueba1").innerHTML = "Usuario: " + localStorage.getItem("Nombre");
    document.getElementById("prueba2").innerHTML = "Email: " + localStorage.getItem("Email");
    $("#logout").show();
    $("#login").hide();
}

formularioModal.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.querySelector("#nombreModal").value;
    const email = document.querySelector("#emailModal").value;
    const password = document.querySelector("#contrasenaModal").value;

    const alertaPrevia = document.querySelector("#alerta");

    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    const alerta = document.createElement("DIV");

    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alert alert-danger");



    if (nombre === "" || email === "" || password === "") {
        alerta.textContent = "Todos los campos son obligatorios";
        formularioModal.appendChild(alerta);
    } else {
        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        $("#modalRegisterForm").hide();
        $(".modal-backdrop").hide();
        $("#login").hide();
        $("#logout").show();
        document.getElementById("prueba1").innerHTML = "Usuario: " + localStorage.getItem("Nombre");
        document.getElementById("prueba2").innerHTML = "Email: " + localStorage.getItem("Email");
    }



});

logout.addEventListener("click", e => {
    localStorage.clear();
    $("#logout").hide();
    $("#login").show();
    document.getElementById("prueba1").innerHTML = "";
    document.getElementById("prueba2").innerHTML = "";
});





