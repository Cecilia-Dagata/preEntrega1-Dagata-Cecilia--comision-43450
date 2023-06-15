let codigo = " "
let tarifaServicio = 0.03


habilitarExcursion()

function iniciarProceso(fn) {
    fn()
}

function ingresarEmail() {
    let emailIngresado = prompt("Ingresa un e-mail de contacto")
    if (emailIngresado.trim().toLowerCase() !== " " && emailIngresado.includes("@")) {
        alert("Una vez realizada la compra te enviaremos: \n -factura con el detalle de la misma \n -horarios y toda la información necesaria para tus viajes a " + emailIngresado)
    } else {
        console.warn("No pudimos validar el email ingresado. Reinténtalo.")
        emailIngresado()
    } return
}

function comprobarEdad() {
    let edadIngresada = parseInt(prompt("Indica tu edad para poder comenzar con el proceso."))

    if (edadIngresada >= 18) {
        ingresarEmail()
    } else {
        console.warn("Lo sentimos, para realizar cualquiera de los tours debes ser mayor de 18 años.")
    }
}
// iniciarProceso(comprobarEdad)

alert("Busca entre las excursiones disponibles aquellas que se ajustan a la temática de tu interés")

function filtrarTematica() {
    let tematicaIngresada = (prompt("Ingresa el nombre de la temática"))
    let tematicaCoincidente = excursiones.filter((excursion) => excursion.tematica.toLowerCase().includes(tematicaIngresada.toLowerCase()))

    if (tematicaIngresada.length === 0) {
        console.error("Por favor, ingresa una temática válida")
        filtrarTematica()
    } else {
        console.table(tematicaCoincidente)
    } return (tematicaCoincidente)
}
// filtrarTematica()


function discriminarEnArray() {
    const resumen = excursiones.map((excursion) => {
        return {
            codigo: excursion.codigo,
            detalle: excursion.detalle,
            precio: excursion.precio,
            // tarifaServicio: excursion.precio * 0.03,
            // importeCompuesto: excursion.precio + excursion.precio * 0.03
        }
    })
    console.table(resumen)
}

function filtrarPrecios() {
    let precioIngresado = parseInt(prompt("Ingresa un valor para conocer las excursiones disponibles"))

    const rangoUno = excursiones.filter(excursion => excursion.precio > 0 && excursion.precio <= 30000) === precioIngresado;
    console.table(rangoUno)
    const rangoDos = excursiones.filter(excursion => excursion.precio > 31000 && excursion.precio <= 70000 === precioIngresado);
    console.table(rangoDos)
    const rangoTres = excursiones.filter(excursion => excursion.precio > 71000 && excursion.precio <= 100000 === precioIngresado);
    console.table(rangoTres)
}
// filtrarPrecios()


alert("Elige tus excursiones -máx. 5-")

function buscarExcursion(codigo) {
    // codigoIngresado = parseInt(prompt("Ingresa el código de una excursión"))
    codigo = excursiones.find((excursion) => excursion.codigo === parseInt(codigo))

    if (codigo === undefined) {
        console.error("El código ingresado no es válido. Reinténtelo.")
    } else {
        console.log(codigo)
    }
}


function seleccionarExcursion() {
    codigo = parseInt(prompt("Ingresa el código de una excursión"))
    let excursionSeleccionada = buscarExcursion(codigo)
    if (excursionSeleccionada !== undefined) {
        carrito.push(excursionSeleccionada)
        console.log(carrito)
        let continuar = confirm("¿Deseas agregar otra excursión?")
        if (continuar === true) {
            seleccionarExcursion()
        } else {
            cerrarCompra()
        }
    }
}
seleccionarExcursion()

/*
eliminarExcursion() {
       this.excursiones.pop()
   }

function revisarCarrito (){
    console.log(carrito.length)
}

carrito.push(codigoDeReferencia)
revisarCarrito()


function visualizarCarrito() {
    console.table(carrito)
}



function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que desean realizar el tour"))

    if (cantidadViajeros != 0 && cantidadViajeros <= 9) {
        console.log("El cálculo de los costos del viaje se hará para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros != 0 && cantidadViajeros >= 10) {
        console.log("El cálculo de los costos del viaje se hará para: " + cantidadViajeros + " " + "personas")
    } else {
        console.error("La cantidad ingresada no puede ser menor a 1 persona. Reintentalo.")
    } return cantidadViajeros
}
 cantidadViajeros = contabilizarViajeros()

*/
function cerrarCompra() {
    let totalFinal = carrito.reduce((acc, excursion) => acc + excursion.precio, 0)
    console.log("El importe a pagar por tu paquete de viaje es de: $" + totalFinal)

}
cerrarCompra()


/*
function calcularCostoCombinado(importeParcial, descuento, fn) {
    let resultante = importeParcial * descuento
    fn(resultante)
}


function cerrarCompra (){
    let totalFinal = changuito.reduce((acc, costo)=> acc + costo.importeCompuesto, 0)
    
    console.log(costos.importeCompuesto)
    console.log("El importe a pagar por tu paquete de viaje es de: $" + totalFinal)
}
cerrarCompra()

function visualizarChanguito (){
    console.table(changuito)
}
visualizarChanguito()



if (carrito.some === excursionElegida) {
        console.warn("La excursión elegida ya ha sido agregada, por favor seleccione otra")
    } else {
        
    }
*/