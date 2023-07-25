// Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, cuadernos,
// pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y sencilla.
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básicosimulación):a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino
// debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar

//VALIDACION TAMAÑO STIKER
// let tamañoSticker=prompt(`Escoja el tamaña del sticker\nEscoja 1.Pequeño 2.Grande`);
let tamañoSticker = 2;
//mostrar tamaño sticker
if (tamañoSticker == 1) {
  console.log(`TAMAÑO:Pequeño`);
} else if (tamañoSticker == 2) {
  console.log(`TAMAÑO:Grande`);
}

//COSTOS SEGUN TAMAÑO
let costo = 0;
//pequeño
function calcularCostoPequeño() {
  costo = cantidadStickers * 4000;
  return `VALOR TOTAL:${costo}`;
}
//grande
function calcularCostoGrande() {
  costo = cantidadStickers * 6000;
  return `VALOR TOTAL:${costo}`;
}

//VALIDACION CANTIDAD STICKERS
//let cantidadStickers=prompt(`Digite el numero de stickers que desea llevar`);
let cantidadStickers = 10;

if (cantidadStickers < 10) {
  console.log("RECUERDA QUE DEBES LLEVAR MINIMO 10 STICKERS");
} else {
  if (tamañoSticker == 1) {
    console.log(calcularCostoPequeño());
  } else if (tamañoSticker == 2) {
    console.log(calcularCostoGrande());
  }
}
