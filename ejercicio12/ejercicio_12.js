// La Champions League es la competición de fútbol más importante en el mundo. Se juega cada año entre los 
// mejores equipos de Europa y es organizada por la Unión de Asociaciones Europeas de Fútbol (UEFA). Los 
// equipos compiten por la Copa de Europa y la gloria de ser el mejor equipo. Hacer un programa en JavaScript que 
// cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Ingresar por el usuario el nombre del primer equipo
// b. Ingresar por el usuario el marcador del primer equipo.
// c. Ingresar por el usuario el nombre del segundo equipo
// d. Ingresar por el usuario el marcador del segundo equipo
// e. Hacer el ingreso para 3 fechas particulares de la Champions League.
// f. Mostrar Resultados de ranking de equipos.

//VALIDACION INGRESO DE DATOS EQUIPOS

//datos EQUIPO 1
let equipoA=prompt("INGRESE EL NOMBRE DEL EQUIPO A");
let golesA=0;
let contadorGolesA=0;
let puntosA=0;

//datos EQUIPO 2
let equipoB=prompt("INGRESE EL NOMBRE DEL EQUIPO B");
let golesB=0;
let contadorGolesB=0;
let puntosB=0;

//datos EQUIPO 3
let equipoC=prompt("INGRESE EL NOMBRE DEL EQUIPO C");
let golesC=0;
let contadorGolesC=0;
let puntosC=0;

// fechas
// let puntos=0;
// FECHA 1
// equipoA vs equipoB
alert(`FECHA N°1\n${equipoA} vs ${equipoB}`)
golesA=Number(prompt(`Ingrese el marcador del equipo ${equipoA}`));
contadorGolesA+=golesA;

golesB=Number(prompt(`Ingrese el marcador del equipo ${equipoB}`));
contadorGolesB+=golesB;

alert(`MARCADOR FINAL\n${equipoA} vs ${equipoB}\n${golesA} - ${golesB}`);

//SUMATORIA DE PUNTOS
if (golesA>golesB) {
  puntosA+=3
} else if (golesA<golesB) {
  puntosB+=3
}else if (golesA==golesB) {
  puntosA+=1
  puntosB+=1
}


// FECHA 2
// equipoA vs equipoC
alert(`FECHA N°2\n${equipoA} vs ${equipoC}`)
golesA=Number(prompt(`Ingrese el marcador del equipo ${equipoA}`));
contadorGolesA+=golesA

golesC=Number(prompt(`Ingrese el marcador del equipo ${equipoC}`));
contadorGolesC+=golesC;

alert(`MARCADOR FINAL\n${equipoA} vs ${equipoC}\n${golesA} - ${golesC}`);

//SUMATORIA DE PUNTOS
if (golesA>golesC) {
  puntosA+=3
} else if (golesA<golesC) {
  puntosC+=3
}else if (golesA==golesC) {
  puntosA+=1
  puntosC+=1
}

// FECHA 3
// equipoB vs equipoC
alert(`FECHA N°3\n${equipoB} vs ${equipoC}`)
golesB=Number(prompt(`Ingrese el marcador del equipo ${equipoB}`));
contadorGolesB+=golesB;

golesC=Number(prompt(`Ingrese el marcador del equipo ${equipoC}`));
contadorGolesC+=golesC;

alert(`MARCADOR FINAL\n${equipoB} vs ${equipoC}\n${golesB} - ${golesC}`);

//SUMATORIA DE PUNTOS
if (golesB>golesC) {
  puntosB+=3
} else if (golesB<golesC) {
  puntosC+=3
}else if (golesB==golesC) {
  puntosB+=1
  puntosC+=1
}


//RANKING
alert(`RANKING FECHAS\nEQUIPOS   PUNTOS\n${equipoA}      ${puntosA}\n${equipoB}      ${puntosB}\n${equipoC}      ${puntosC}`)
