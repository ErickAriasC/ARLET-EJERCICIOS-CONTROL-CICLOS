// hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
// a. El usuario solo puede ingresar monedas o billetes
// • Si es moneda, aceptar monedas de 500, 1000 solamente.
// • Si es billete, de 2000 y 5000.
// b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero, si no tiene que devolver o el valor de la
// devolución.
// c. ¡Mostrar un mensaje “vuelve pronto!”

let devoluciones=0;
let costoServicio=500;
// let tipoPago=prompt("¿como desea realizar su pago?\n"+"1. Moneda 2. Billete");
let tipoPago=2;
// mostrar tipo de pago
if (tipoPago==1) {
    console.log("TIPO DE PAGO: Moneda");
    pagoMoneda();
    costo();
} else if (tipoPago==2){
    console.log("TIPO DE PAGO: Billete");
    pagoBillete();
    costo();
}

//acciones segun el tipo de pago 
//MONEDA
function pagoMoneda() {
    // let moneda=prompt("Escoja la moneda a ingresar\n"+"1. 500 2. 1000");
    let moneda=2;
    if (moneda==1){
        devoluciones=500;
        console.log(`Has ingresado: ${devoluciones}`);
    }else if(moneda==2){
        devoluciones=1000;
        console.log(`Has ingresado: ${devoluciones}`);
    }    
}

//BILLETE
function pagoBillete() {
    // let billete=prompt("Escoja el billete a ingresar\n"+"1. 2000 2. 5000");
    let billete=2;
    if (billete==1){
        devoluciones=2000;
        console.log(`Has ingresado: ${devoluciones}`);
    }else if(billete==2){
        devoluciones=5000;
        console.log(`Has ingresado: ${devoluciones}`);
    }   
}

//VALIDACION SERVICIO
//costo servicio
function costo() {
    devoluciones=devoluciones-costoServicio;
    if (devoluciones==0) {
        console.log("DEVOLUCIÓN: Sin devolución");
    } else{
        console.log(`DEVOLUCION: ${devoluciones}`);
    }
}
//mesaje final
console.log("VUELVE PRONTO");

