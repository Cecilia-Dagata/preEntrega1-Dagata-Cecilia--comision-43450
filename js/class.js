class Excursion {
    constructor(tematica, codigo, nivel, dificultad, detalle, duracion, precio) {
        this.tematica = tematica
        this.codigo = codigo
        this.nivel = nivel
        this.dificultad = dificultad
        this.detalle = detalle
        this.duracion = duracion
        this.precio = precio
        
        this.precioConDescuento = function (descuento){
            return (this.precio * descuento)
        }
        /*some*/
        this.limitarPorTematica = function (){
            if (this.tematica !== paqueteUsuario.tematica){
                console.warn("Las excursiones que seleccione deben pertenecer todas a una misma temática.")
            }else{
                console.log("Puedes agregar hasta 5 excursiones a tu paquete final.")
            }
        }
    }
}
    /*eliminarExcursion() {
        this.excursiones.pop()
    }*/
    