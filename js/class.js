class Excursion {
    constructor(tematica, codigo, nivel, dificultad, detalle, duracion, precio) {
        this.tematica = tematica
        this.codigo = codigo
        this.nivel = nivel
        this.dificultad = dificultad
        this.detalle = detalle
        this.duracion = duracion
        this.precio = precio
        
        /*limitarPorTematica = function (){
            if (this.tematica !== tematicaCoincidente){
                console.warn("Las excursiones que seleccione deben pertenecer todas a una misma temática.")
            }else{
                console.log("Puedes agregar hasta 5 excursiones a tu paquete final.")
            }
        }
        calcularImporteCompuesto = function (tarifaServicio){
            return (this.precio * tarifaServicio)
        }*/
    }
}
   
    
  