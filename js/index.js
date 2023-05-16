function contabilizaViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que viajarán"))

    if (cantidadViajeros >= 1 || cantidadViajeros <= 9) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros >= 10 || cantidadViajeros <= 100) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
        alert("Obtienes un descuento del 15% sobre el costo final")
    } else {
        console.error("La cantidad ingresada no responde a los parámetros establecidos.")
    } return cantidadViajeros
}

function defineTraslados() {
    let gastoCompuesto = parseInt(prompt("Ingresa el monto máximo para gastos de pasajes, traslados y entradas generales"))

    switch (gastoCompuesto) {
        case 35000:
            console.log("Has optado por pasajes de tarifa Economic")
            break
        case 90000:
            console.log("Has optado por pasajes de tarifa Standard")
            break
        case 120000:
            console.log("Has optado por pasaje de tarifa Premium")
            break
        default:
            console.warn = "El valor ingresado no corresponde a ningún máximo establecido."
            break
    }return gastoCompuesto
}

function defineHospedaje() {
    let gastoHospedaje = parseInt(prompt("Ingresa el monto máximo en concepto de hospedaje"))

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
            console.error = "No pudimos registrar el valor ingresado, revisa los montos nuevamente."
            break
    }return gastoHospedaje
}

function calculaTotal(gastoCompuesto, gastoHospedaje) {
    let costoFinal = parseFloat(gastoCompuesto + gastoHospedaje) * cantidadViajeros
    console.log("El precio final de tu paquete de viaje es de " + costoFinal)
    return costoFinal

}

function calculaDescuento(costoFinal, descuentoGrupo) {
    let montoDescuento = costoFinal * descuentoGrupo
    console.log("El descuento por grupo es de: ")
    return montoDescuento
}

function precioDescontado(costoFinal, montoDescuento) {
    let costoPromocional = costoFinal - montoDescuento
    console.log("El precio del paquete de viaje con descuento promocional por grupo es de: " + costoPromocional)
    return costoPromocional
}



alert("Armemos tu plan de gastos.")
contabilizaViajeros()
defineTraslados()
defineHospedaje()
calculaTotal()
calculaDescuento()
precioDescontado()
