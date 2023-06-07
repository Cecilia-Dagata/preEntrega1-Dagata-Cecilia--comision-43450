function iniciarCompra() {
    let confirmarInicio = confirm("Bienvenid@. Para realizar cualquiera de los tours debes ser mayor de 18 años, ¿continuar?")
    if (confirmarInicio) {
        ingresarEmail()
    } else {
        console.log("Para mayor información utiliza la sección de contacto")
        return
    }
}
iniciarCompra()

function ingresarEmail() {
    let userEmail = prompt("Ingresa un e-mail de contacto")
    if (userEmail.trim().toLowerCase() != " " && userEmail.includes("@")) {
        alert("Una vez realizada la compra te enviaremos: \n -factura con el detalle de la misma \n -horarios y toda la información necesaria para tus viajes")
    } else {
        console.warn("No pudimos validar el email ingresado. Reinténtalo.")
        ingresarEmail()
    } return userEmail
}

alert("A continuación te mostramos información resumida sobre los paquetes disponibles")

function mostrarPaquetes() {
    paquetes.forEach((paquete) => {
        console.log("CÓDIGO " + " " + paquete.codigo)
        console.log("TEMÁTICA " + " " + paquete.tematica)
        console.log("IMPORTE " + " " + paquete.importe)
    })
}
mostrarPaquetes()

alert("Busca un paquete que te interese para poder ver las excursiones que incluye")

function buscarPaquetes(codigo) {
    let ingresoCodigo = parseInt(prompt("Ingresa el código de una temática"))
    let resultadoPaquetes = paquetes.find((paquete) => paquete.codigo === ingresoCodigo)
    console.table(resultadoPaquetes.detalle)
}
buscarPaquetes()

alert("Puedes sumar a tu paquete básico hasta (2) dos excursiones de alto riesgo.")

function filtrarExcursiones() {
    let ingresoTematica = prompt("Ingresa con palabras la temática elegida para encontrar excursiones relacionadas")
    let resultadoExcursiones = excursiones.filter((excursion) => excursion.tematica.toLowerCase().includes(ingresoTematica.toLowerCase()))

    if (resultadoExcursiones.length === 0) {
        console.error("No ha ingresado una temática válida")
    } else {
        console.table(resultadoExcursiones)
    }
}
filtrarExcursiones()

/*Pensé usar la class para crear un nuevo objeto con la informacion del paquete básico y la excursion agregada, no le encontré la vuelta, lo sigo trabajando
function SumarExcursion(){
    let excursionesAgregadas = new Paquete(paqueteFinal)
}*/

function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que desean realizar el tour"))

    if (cantidadViajeros != 0 && cantidadViajeros <= 9) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros != 0 && cantidadViajeros >= 10) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else {
        console.error("La cantidad ingresada no puede ser menor a 1 persona. Reintentalo.")
    } return cantidadViajeros
}
cantidadViajeros = contabilizarViajeros()

function definirTraslados() {
    let gastoCompuesto = parseInt(prompt("Ingresa el monto máximo para gastos de: \n -pasajes, \n -traslados \n -entradas generales"))

    switch (gastoCompuesto) {
        case 35000:
            console.log("Has optado por pasajes de tarifa Economic")
            break
        case 90000:
            console.log("Has optado por pasajes de tarifa Standard")
            break
        case 120000:
            console.log("Has optado por pasajes de tarifa Premium")
            break
        default:
            console.warn("El valor ingresado no corresponde a ningún máximo establecido. Ten presente no incluir caracteres especiales")
            break
    }return gastoCompuesto
}
gastoCompuesto = definirTraslados()

function definirHospedaje() {
    let gastoHospedaje = parseInt(prompt("Ingresa el monto máximo para gastos de: \n -hospedaje"))

    switch (gastoHospedaje) {
        case 80000:
            console.log("Has optado por modalidad de hospedaje Economic")
            break
        case 160000:
            console.log("Has optado por modalidad de hospedaje Standard")
            break
        case 240000:
            console.log("Has optado por modalidad de hospedaje Premium")
            break
        default:
            console.error("El valor ingresado no corresponde a ningún máximo establecido. Ten presente no incluir caracteres especiales")
            break
    }return gastoHospedaje
}
gastoHospedaje = definirHospedaje()

//no tiene en cuenta el precio de los paquetes y el cargo por excursiones -si las hubiere- pendiente de resolución
function calcularCostoParcial() {
    let costoParcial = parseInt((gastoCompuesto + gastoHospedaje) * cantidadViajeros)

    console.log("El costo parcial de tu paquete de viaje para" + " " + cantidadViajeros + " " + "personas es $ " + costoParcial + "pesos")
}
costoParcial = calcularCostoParcial

function agradecerCompra() {
    console.log("Tu pago quedó registrado " + "¡disfruta tu viaje!")
}
calcularCostoParcial()
agradecerCompra()