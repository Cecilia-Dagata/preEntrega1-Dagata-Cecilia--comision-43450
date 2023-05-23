/*Se realizan los cálculos para una sola de las temáticas*/
let confirmarInicio = confirm ("Bienvenid@. Para armar tu plan de viaje necesitamos establecer qué gastos quieres realizar.")
if (confirmarInicio === true){
    ingresarEmail()
}else{
    console.log("Vemos que no te has decidido. Si necesitas ayuda utiliza la sección de contacto y a la brevedad nos comunicaremos contigo.")
}

function ingresarEmail() {
    userEmail = prompt("Ingresa un e-mail para poder: \n -enviarte información de presupuesto \n -factura con el detalle de tu compra")
    if (userEmail.trim().toLowerCase() != "" && userEmail.includes("@")) {
        alert("Los datos que ingresas quedan resguardados por nuestra política de información.")
    } else {
        console.warn("No pudimos validar el email ingresado. Reinténtalo.")
        ingresarEmail()
    } return userEmail
}

function seleccionarTour() {
    let eleccionTour = parseInt(prompt("A continuación ingresa el código del tour elegido"))

    if (eleccionTour === tourA) {
        console.log("Elegiste el tour con temática: Intervención humana")
    } else if (eleccionTour === tourB) {
        console.log("Elegiste el tour con temática: Naturaleza Hostil")
    } else if (eleccionTour === tourC) {
        console.log("Elegiste el tour con temática: Zona de desastre")
    } else if (eleccionTour === tourD) {
        console.log("Elegiste el tour con temática: Experiencia paranormal")
    } else {
        console.error("No pudimos reconocer el código ingresado. Reinténtalo.")
    }return
}

eleccionTour = seleccionarTour()

function contabilizarViajeros() {
    let cantidadViajeros = parseInt(prompt("Ingresa la cantidad de personas que desean realizar el tour"))

    if (cantidadViajeros != 0 && cantidadViajeros <= 9) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
    } else if (cantidadViajeros != 0 && cantidadViajeros >= 10) {
        console.log("Se registra solicitud de hospedaje para: " + cantidadViajeros + " " + "personas")
        alert("Contamos con un descuento de 20% para grupos a partir de 10 personas")
    } else {
        console.error("La cantidad ingresada no puede ser menor a 1 persona. Reintentalo.")
        contabilizarViajeros()
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
            definirTraslados()
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
            definirHospedaje()
            break
    }return gastoHospedaje
}
gastoHospedaje = definirHospedaje()

/*Calculo sin descuento*/

function continuarProceso() {
    let continuarPago = confirm("¿Deseas continuar con el proceso?")

    while (continuarPago === true) {
        calcularCostoParcial()
        continuarPago === false
    }
}

function calcularCostoParcial() {
    let costoParcial = parseInt((gastoCompuesto + gastoHospedaje) * cantidadViajeros)

    console.log("El costo parcial de tu paquete de viaje para" + " " + cantidadViajeros + " " + "personas es de $" + " " + "pesos")
}


function agradecerCompra() {
    console.log("Tu pago quedó registrado " + "¡disfruta tu viaje!")
}


continuarProceso()
agradecerCompra()






