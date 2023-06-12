let codigoDeReferencia = " "
let tarifaServicio = 0.03


habilitarExcursion()
/*
function iniciarProceso(fn){
    fn()
}

function ingresarEmail() {
    let emailIngresado = prompt("Ingresa un e-mail de contacto")
    if (emailIngresado.trim().toLowerCase() !== " " && emailIngresado.includes("@")) {
        alert("Una vez realizada la compra te enviaremos: \n -factura con el detalle de la misma \n -horarios y toda la información necesaria para tus viajes a " + emailIngresado)
    } else {
        console.warn("No pudimos validar el email ingresado. Reinténtalo.")
        emailIngresado()
    }return 
}

function comprobarEdad (){
    let edadIngresada = parseInt(prompt("Indica tu edad para poder comenzar con el proceso."))
    
    if (edadIngresada >= 18){
        ingresarEmail()
    }else{
        console.warn("Lo sentimos, para realizar cualquiera de los tours debes ser mayor de 18 años.")
    }
}
iniciarProceso(comprobarEdad)

alert("Busca entre las excursiones disponibles aquellas que se ajustan a la temática de tu interés")

/*function filtrarTematica() {
    let tematicaIngresada = (prompt("Ingresa el nombre de la temática"))
    let tematicaDeReferencia = excursiones.filter((excursion) => excursion.tematica.toLowerCase().includes(tematicaIngresada.toLowerCase()))
    if (tematicaIngresada.length === 0) {
        console.error("No ha ingresado una temática válida")
        filtrarExcursion()
    } else {
        console.table(tematicaDeReferencia)
    }
}
filtrarTematica()*/

function discriminarEnArray(){
    const costos = excursiones.map((excursion)=> {
        return {
            codigo: excursion.codigo,
            detalle: excursion.detalle,
            precio: excursion.precio,
            tarifaServicio: excursion.precio * 0.03,
            importeCompuesto: excursion.precio + excursion.precio * 0.03
        }
    })
    console.table(costos)
} 
discriminarEnArray()

/*function filtrarPrecios() {
    let precioIngresado = parseInt(prompt("Ingresa un valor para conocer las excursiones disponibles"))
    let precioDeReferencia = costos.filter((excursion) => excursion.precio =< precioIngresado)

        if (precioIngresado != 0 && precioIngresado <= 30000) {
            console.log(precioDeReferencia)
        } else if (precioIngresado >= 31000 && precioIngresado <= 70000) {
            console.log(precioDeReferencia)
        } else if (precioIngresado >= 71000 && precioIngresado <= 100000){
            console.log(precioDeReferencia)
        } else {
            console.error("La cantidad ingresada no coincide con los rangos de precios. Reintentalo.")
        }
}
filtrarPrecios()

alert("Elige tus excursiones -máx. 5-")

function buscarExcursion() {
    let codigoIngresado = parseInt(prompt("Ingresa el código de una excursión"))
    codigoDeReferencia = excursiones.find((excursion) => excursion.codigo === codigoIngresado)
    
    if(codigoDeReferencia === undefined){
        console.error("El código ingresado no es válido. Reinténtelo.")
    }else{
        console.log(codigoDeReferencia)
    }
}
buscarExcursion()

function agregarExcursion() {
    let excursionElegida = parseInt(prompt("Ingresa el código de una excursión"))
    if(changuito.some === excursionElegida){
        console.warn("La excursión elegida ya ha sido agregada, por favor seleccione otra")
    }else{
        changuito.push(excursionElegida)
    }
}
agregarExcursion ()
*/
function cerrarCompra (){
    let totalFinal = changuito.reduce((acc, costo)=> acc + costo.importeCompuesto, 0)
    console.log(acc)
    console.log(costo.importeCompuesto)
    console.log("El importe a pagar por tu paquete de viaje es de: $" + totalFinal)
}
cerrarCompra()

/*
function revisarCarrito (){
    console.log(carrito.length)
}

carrito.push(codigoDeReferencia)
revisarCarrito()
*/

function visualizarCarrito (){
    console.table(carrito)
}
visualizarCarrito()

/*
function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que desean realizar el tour"))

    if (cantidadViajeros != 0 && cantidadViajeros <= 9) {
        console.log("El cálculo de los costos del viaje se hará para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros != 0 && cantidadViajeros >= 10) {
        console.log("El cálculo de los costos del viaje se hará para: " + cantidadViajeros + " " + "personas")
        console.log("Para grupos de 10 o más personas contamos con un descuento del 15%")
    } else {
        console.error("La cantidad ingresada no puede ser menor a 1 persona. Reintentalo.")
    } return cantidadViajeros
}
cantidadViajeros = contabilizarViajeros()

cerrarCompra()
function cerrarCompra (){
    let totalFinal = carrito.reduce((acc, excursion)=> acc + excursion.precio, 0)
    console.log("El importe a pagar por tu paquete de viaje es de: $" + totalFinal)
}
cerrarCompra()



/*function ordenarPorNivel (){
excursiones.sort()
mostrarExcursiones()
}

function calcularCostoCombinado(importeParcial, descuento, fn){
    let resultante = importeParcial * descuento
    fn(resultante)
}
*/