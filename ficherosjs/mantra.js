const sobreNosotros = { 
    titulo: "Bienvenido/a a nuestra tienda de comida para gatos. Sabemos que tu gato es parte de tu familia y queremos ayudarte a darle la mejor alimentación posible. Ofrecemos una amplia variedad de opciones de comida para gatos de alta calidad, ricas en nutrientes y a precios asequibles para satisfacer las necesidades de tu amigo felino. Nuestros productos están diseñados para cubrir todas las etapas de la vida de tu gato, desde su infancia hasta su madurez, y estamos comprometidos con la seguridad y calidad de cada uno de ellos. Además, trabajamos con las mejores marcas del mercado para asegurarnos de que siempre recibas los mejores productos. Si tienes alguna pregunta sobre nuestra comida para gatos, no dudes en ponerte en contacto con nosotros. ¡Estamos aquí para ayudarte a darle a tu gato la alimentación que merece!"
};
const fiabilidad = {
    titulo: "Fiabilidad"

}
const productos = { 
    titulo: "Productos Patentados"

};
const cliente = {
    titulo: "El Cliente es lo Primero"

}

const listaJson = [sobreNosotros,fiabilidad,productos,cliente];

var counter = 0;

$(document).ready(function () {       
        listaJson.map(function (json) {
            document.getElementById(counter).innerHTML = json.titulo;
            counter++;
        });
}); 