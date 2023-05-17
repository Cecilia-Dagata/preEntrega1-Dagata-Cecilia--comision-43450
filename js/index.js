/*Se realizan los cálculos para una sola de las temáticas*/

function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que viajarán"))

    if (cantidadViajeros >= 1 && cantidadViajeros <= 9) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros >= 10 || cantidadViajeros <= 100) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
        alert("Contamos con un descuento de 20% para grupos a partir de 10 personas")
    } else {
        console.error("La cantidad ingresada no responde a los parámetros establecidos.")
    } return cantidadViajeros
}

function definirTraslados() {
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

function definirHospedaje() {
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

/*Calculo sin descuento*/

function calcularTotal() {
    let costoParcial = parseInt((gastoCompuesto + gastoHospedaje) * cantidadViajeros)
    console.log("El costo final de tu paquete de viaje para" + " " + cantidadViajeros + "personas es de $" + costoParcial + " " + "pesos")
    confirm("¿Deseas continuar con el pago?")
}

alert("Armemos tu plan de gastos.")

cantidadViajeros = contabilizarViajeros()
gastoCompuesto = definirTraslados()
gastoHospedaje = definirHospedaje()
costoParcial = calcularTotal()

