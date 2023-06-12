let carrito = [{ tematica: "Intervención humana", codigo: 12123, nivel: "plus", dificultad: "media", detalle: "Petra: la ciudad perdida", duracion: "4:00 horas", precio: 45000 },
, { tematica: "Experiencia paranormal", codigo: 48484, nivel: "premium", dificultad: "media", detalle: "Aokigahara: el bosque de los suicidas", duracion: "3:00 horas", precio: 66900 }
]

let changuito = []

const excursiones = []
const costos = []

function habilitarExcursion (){
    excursiones.push(new Excursion ("Intervención humana", 12120, "basico", "baja", "Skara Brae: yacimiento prehistórico de 5000 años", "3:30 horas", 19000))
    excursiones.push(new Excursion ("Intervención humana", 12121, "basico", "media", "Knossos: el palacio y el laberinto del Minotauro", "4:50 horas", 22000))
    excursiones.push(new Excursion ("Intervención humana", 12122, "plus", "baja", "Oradour-sur-Glane: la masacre nazi", "3:15 horas", 38000))
    excursiones.push(new Excursion ("Intervención humana", 12123, "plus", "media", "Petra: la ciudad perdida", "4:00 horas", 45000))
    excursiones.push(new Excursion ("Intervención humana", 12124, "premium", "media", "Naours: ciudad subterránea construida en el siglo V", "3:20 horas", 66200))
    excursiones.push(new Excursion ("Intervención humana", 12125, "premium","alta", "Alejandría: la ciudad sumergida y el Palacio de Cleopatra", "4:10 horas", 71400))
    excursiones.push(new Excursion ("Naturaleza hostil", 24240, "basico", "media", "Dominica: El lago hirviente", "3:40 horas", 15900))
    excursiones.push(new Excursion ("Naturaleza hostil", 24241, "basico", "media", "Saltstraumen: el canal de los remolinos gigantes", "3:10 horas", 20000 ))
    excursiones.push(new Excursion ("Naturaleza hostil", 24242, "plus", "alta", "Gouffre Berger: la cueva de la muerte", "3:15 horas", 35700))
    excursiones.push(new Excursion ("Naturaleza hostil", 24243, "plus", "alta", "Huayna Picchu: el monte más empinado del mundo", "5:00 horas", 69000))
    excursiones.push(new Excursion ("Naturaleza hostil", 24244, "premium", "alta", "La piscina del diablo: en el mismo borde de las Cataratas Victorias", "4:30 horas", 85800))
    excursiones.push(new Excursion ("Naturaleza hostil", 24245, "premium", "alta", "Monte Merapi: el volcán más activo de Indonesia", "5:40 horas", 99300 ))
    excursiones.push(new Excursion ("Zona de desastre", 36360, "basico", "baja", "Pompeya:la ciudad sepultada", "4:30 horas", 31000))
    excursiones.push(new Excursion ("Zona de desastre", 36361, "basico", "baja", "Mar de Aral:el mar desaparecido", "3:20 horas", 24000))
    excursiones.push(new Excursion ("Zona de desastre", 36362, "plus", "media", "Kolmanskop: el pueblo enterrado en arena", "4:20 horas", 16000))
    excursiones.push(new Excursion ("Zona de desastre", 36363, "plus", "media", "Bhaktapur: ciudad vieja ciudad nueva", "3:40 horas", 13000))
    excursiones.push(new Excursion ("Zona de desastre", 36364, "premium", "media", "Centralia: Ciudad en llamas que no ha dejado de arder desde 1960", "1:30 horas", 63000))
    excursiones.push(new Excursion ("Zona de desastre", 36365, "premium", "alta", "Pripyat: Zona de mayor radiación en el mundo", "2:15 horas", 97100))
    excursiones.push(new Excursion ("Experiencia paranormal", 48480, "basico", "baja", "Belchite: el pueblo de las psicofonías", "7:00 horas", 18000))
    excursiones.push(new Excursion ("Experiencia paranormal", 48481, "basico", "media", "Dargavs: la ciudad de los muertos", "7:30 horas", 33000))
    excursiones.push(new Excursion ("Experiencia paranormal", 48482, "plus", "media", "Montsegur: el castillo maldito", "2:20 horas", 27000))
    excursiones.push(new Excursion ("Experiencia paranormal", 48483, "plus", "baja", "Poveglia: la isla embrujada", "4:10 horas", 66000))
    excursiones.push(new Excursion ("Experiencia paranormal", 48484, "premium", "media", "Aokigahara: el bosque de los suicidas", "3:00 horas",6600))
    excursiones.push(new Excursion ("Experiencia paranormal", 48485, "premium", "alta", "Amityville: la casa de los asesinatos", "7:00 horas", 84500))
}

function mostrarExcursiones(){
    excursiones.forEach((excursion) => console.table(excursion))
}


