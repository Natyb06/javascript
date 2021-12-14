
//----------------------Declaración de constante para Valor del Ticket------------------------------

const valorTicket = 200.00;

//----------------------Declaración de constantes para Valores de descuento-------------------------

const descuentoEstudiante = 80 / 100;

const descuentoTrainee = 50 / 100;

const descuentoJunior = 15 / 100;

//----------------------Declaración de función para calcular Importe total a pagar------------------

function totalImporteAPagar(cantidadTickets, descuentoCategoriaSeleccionada) {
    
    return Intl.NumberFormat("es-AR").format(((cantidadTickets * valorTicket) * (1 - descuentoCategoriaSeleccionada)));

}

//----------------------Eventos de los inputs y desplegable-----------------------------------------

let datosCompra = {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    cantidad: 0,
    categoria: ""
}

let nombre = document.querySelector("#inputNombre");
let apellido = document.querySelector("#inputApellido");
let email = document.querySelector("#inputCorreoElectronico");
let cantidad = document.querySelector("#inputCantidad");
let categoria = document.querySelector("#selectCategoria");
let totalAPagar = document.querySelector("#totalAPagar");

//-----------------------Seleccionar elementos y asociarles un evento-----------------------------

let btnResumen = document.querySelector("#boton-resumen");
let btnBorrar = document.querySelector("#boton-borrar");

btnResumen.addEventListener('click', function(evento){

    let descuentoCategoriaSeleccionada = "";

    switch (categoria.value) {
        case "estudiante":
            descuentoCategoriaSeleccionada = descuentoEstudiante;
            break;
        
        case "trainee":
            descuentoCategoriaSeleccionada = descuentoTrainee;
            break;
        
        case "junior":
            descuentoCategoriaSeleccionada = descuentoJunior;
            break;
    }

    totalAPagar.value = "Total a pagar: $ " + totalImporteAPagar(cantidad.value, descuentoCategoriaSeleccionada);
})

btnBorrar.addEventListener('click', function(evento){

    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    categoria.value = "estudiante";
    totalAPagar.value = "Total a pagar: $";

})

