// “Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen
// en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.

//VALIDACION TIPO DE SERVICIO
// **let tipoServicio=prompt("Por favor escoja el servicio que desea usar"+"presione 1.lavado 2.planchado")
let tipoServicio=1
let showServicio="";
//mostrar tipo de servicio
if (tipoServicio==1) {
    showServicio="Lavado";
} else if (tipoServicio==2){
    showServicio="Planchado";
}
console.log("SERVICIO:"+showServicio);

//VALIDACION DOMICILIOS
// let domicilio=prompt("servicio a domicilio?"+"Presione 1.Si 2.No")
let domicilio=2;
let showDomicilio="";
//mostrar domicilio -SI-NO
if (domicilio==1) {
    showDomicilio="Si";
}else if (domicilio==2){
    showDomicilio="No"
}
console.log("DOMICILIO:"+showDomicilio);

//VALIDACION NUMERO PRENDAS
// let numeroPrendas=Number(prompt("ingrese el numero de prendas"));
let numeroPrendas=21;
console.log("N°PRENDAS:"+numeroPrendas);

//VALIDACION COSTOS 
let costo=0;
//En lavados
//lavado en seco
function calcularCostoSeco() {
    costo=numeroPrendas*2000;
    return "TIPO LAVADO:Seco \nVALOR FINAL:"+costo;
}
// lavado normal
function calcularCostoNormal() {
    costo=numeroPrendas*1500;
    return"TIPO LAVADO:Normal \nVALOR FINAL:"+costo;
}

//En planchado
function calcularCostoPlanchado() {
    costo=numeroPrendas*1800;
    if (domicilio==1) {
        costo=costo+3000;
    }
    return"VALOR FINAL:"+costo;
}

//VALIDACION TIPOS DE SERVICIO
let tipoLavado=0;
let showTipoLavado="";
if (tipoServicio==1) {
    // ***tipoLavado=prompt("escoja el tipo de lavado"+"presione 1.Seco 2.Normal")
    tipoLavado=1
    if (tipoLavado==1) {
        console.log(calcularCostoSeco()); 
        showTipoLavado="Seco"
    } else if (tipoLavado==2){
        showTipoLavado="Normal"
        console.log(calcularCostoNormal());
    }
}else if(tipoServicio==2){
    console.log(calcularCostoPlanchado());
}


