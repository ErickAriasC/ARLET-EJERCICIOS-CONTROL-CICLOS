// // Desarrollar en JavaScript un programa para la gestión reservas de un hotel, el cual, debe tener las
// // siguientes características y consideraciones:
// // 1. Un cliente puede reservar cualquier tipo de habitación: individual, doble y familiar.
// // 2. Las habitaciones pueden ser para fumadores o no fumadores.
// // 3. Las mascotas solo se aceptan en habitaciones familiares.
// // 4. El hotel cuenta con 3 habitaciones de cada tipo.
// // 5. No se puede exceder el //número de personas por habitación: individual 2 personas, 4 personas para
// // doble y 6 personas para familiar.
// // 

// // Un cliente puede reservar cualquier tipo de habitación: individual, doble y familiar.
// const type_room = [
//     { individual: { 
//         mascotas: false, 
//         num_person: 2, //número de personas por habitación
//         num_room:3 //El hotel cuenta con 3 habitaciones de cada tipo.
//         } 
//     }, 
//     { doble: { 
//         mascotas: false, 
//         num_person: 4, //número de personas por habitación
//         num_room:3 //El hotel cuenta con 3 habitaciones de cada tipo.
//         } 
//     }, 
//     { familiar: { 
//         mascotas: true, //Las mascotas solo se aceptan en habitaciones familiares.
//         num_person: 6, //número de personas por habitación
//         num_room:3  //El hotel cuenta con 3 habitaciones de cada tipo.
//         } 
//     }
// ]


// // Las habitaciones pueden ser para fumadores o no fumadores.
// const cigarrillo = [fumadores, no_fumadores]


// El hotel necesita una estadística de las reservas: nombre de quien reserva, país de origen, número de
// personas, el periodo de la estadía, número de personas que están ocupando el hotel y si el huésped trajo
// mascota

class datosReserva {
    constructor(){
        this.nombre_reserva=prompt("ingresa tu nombre completo ")
        this.pais_origen=prompt("ingresa el pais de origen")
        this.num_person_reserva=prompt("ingresa el numero de personas")
        this.periodo_estadia=prompt("ingresa el numero de dias que se quedara")
        this.mascota=prompt("ingrese 1. con mascota 2. sin mascota ")


    }

}

const usuario= new datosReserva();
