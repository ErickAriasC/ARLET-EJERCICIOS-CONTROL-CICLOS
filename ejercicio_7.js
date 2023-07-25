// La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas. Hacer un programa en JavaScript
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se pregunta al usuario si es devolución o perdida.
// b. Se le pide al usuario de la biblioteca que indique la cantidad de días de retraso.
// c. La cantidad de libros prestados o revistas
// • Revistas 500 pesos día.
// • Libro 600 pesos día.
// d. Si es perdida, debe de pagar 10000 por ejemplar

//VALIDACION motivo DEL LIBRO 
// let estado=prompt(`Presione 1.Devolucion 2.Perdida`);
let motivo=2;
//mostrar motivo
if (motivo==1) {
    console.log("MOTIVO: Devolución");
}else if(motivo==2){
    console.log("MOTIVO: Perdida");
}

//VALIDACION LIBROS O REVISTAS?
// let objeto=prompt(`¿Que pidió prestado?\nPresione 1.Libro 2.Revista`)
let objeto=2;
//mostrar objeto 
if (objeto==1) {
    console.log("OBJETO: Libro");
}else if(objeto==2){
    console.log("OBJETO: Revista");
}

//VALIDACION CANTIDADES
// let cantidad=prompt(`Digite el numero de ${objeto}s que pidio prestados` )
let cantidad=3;
console.log(`CANTIDAD:${cantidad}`);

//VALIDACION DIAS DE RETRASO
// let dias=prompt("Digite el numero de dias que tiene de retraso")
let dias=2;
console.log(`DIAS DE RETRASO:${dias}`);

if (motivo==1) {
    if (objeto==1) {
        console.log(`MULTA:${(dias*600)*cantidad}`);
    } else if(objeto==2) {
        console.log(`MULTA:${(dias*500)*cantidad}`);
    }
} else if(motivo==2) {
    console.log(`MULTA:${cantidad*10000}`);
}