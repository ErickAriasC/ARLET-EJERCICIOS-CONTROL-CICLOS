// Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente a base de pizza,
// sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
// b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
// • Pizza a 7000 por unidad
// • Sándwich a 5000 unidad
// • Ensalada a 15000 unidad
// c. Se le pide al usuario si desea agregar salsa que vale 3000.
// d. El sistema indica el costo que paga el cliente por su producto

// VALIDACION PRODUCTO
// let producto=prompt(`Por favor escoja el producto que desea llevar\n1.Pizza 2.Sandwiches 3.Ensalada`);
let producto=3;
// mostrar producto
if (producto==1) {
    console.log("PRODUCTO: PIZZA");
} else if(producto==2) {
    console.log("PRODUCTO: SANDWINCH");
} else if (producto==3){
    console.log("PRODUCTO: ENSALADA");
}

//VALIDACION CANTIDADES
// let cantidad=prompt(`Digite el numero de unidades que desea llevar`);
let cantidad=3;
console.log(`CANTIDAD:${cantidad}`);

//VALIDACION SALSA 
// let salsa=prompt("¿Desea agregar salsa?\nEscoja 1.Si 2.No")
let salsa=2;
// mostrar salsa
if (salsa==1) {
    console.log("SALSA: SI");
}else if(salsa==2) {
    console.log("SALSA: NO");
}

//COSTOS
let costo=0;
switch (producto) {
    case 1:
        costo=cantidad*7000;
        salsa==1?costo=costo+3000:costo=costo;
        console.log(`VALOR TOTAL:${costo}`);
        break;

    case 2:
        costo=cantidad*5000;        
        salsa==1?costo=costo+3000:costo=costo;
        console.log(`VALOR TOTAL:${costo}`);
        break;

    case 3:
        costo=cantidad*15000;
        salsa==1?costo=costo+3000:costo=costo;
        console.log(`VALOR TOTAL:${costo}`);
        break;

    default:
        break;
}

