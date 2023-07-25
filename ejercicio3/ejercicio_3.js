// La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. Hacer un programa en JavaScript 
// que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Solicitar al usuario el costo de la casa.
// b. Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo)
// c. Calcular la comisión de la inmobiliaria en la venta así:
// • Si es usado, tiene el 10% de comisión basado en el costo de la vivienda.
// • Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda.
// d. El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y cuanto es el valor recibido 
// por la inmobiliaria.

//costo casa y tipo de inmueeble
let costoCasa=Number(prompt("Ingrese el costo de la casa"));
let tipoInmueble=prompt("¿cual es el tipo de inmueble?\n"+"1. Usado 2. Nuevo");
let comision=0;
// true->String
// false->number

//tipo string
while(isNaN(tipoInmueble)===true)  {
    tipoInmueble=prompt("POR FAVOR INGRESE UN NUMERO VALIDO\n"+"¿cual es el tipo de inmueble?\n"+"1. Usado 2. Nuevo");
    number();
}

//accione tipo number
function number() {
    if(isNaN(tipoInmueble)===false) {
        if (tipoInmueble==1 || tipoInmueble==2 ) {
            //CALCULO DE COMISION 
            if (tipoInmueble==1) {
                comision=costoCasa*0.1;
                alert(`El propietario recibe ${costoCasa-comision} y la inmobiliaria recibe ${comision}`);
            }else if(tipoInmueble==2){
                comision=costoCasa*0.12;
                alert(`El propietario recibe ${costoCasa-comision} y la inmobiliaria recibe ${comision}`);
            }
        }else{
            while (tipoInmueble!=1 || tipoInmueble!=2 ) {
                tipoInmueble=prompt("POR FAVOR pp UN NUMERO VALIDO\n"+"¿cual es el tipo de inmueble?\n"+"1. Usado 2. Nuevo");
                //CALCULO DE COMISION 
                if (tipoInmueble==1) {
                    comision=costoCasa*0.1;
                    alert(`El propietario recibe ${costoCasa-comision} y la inmobiliaria recibe ${comision}`);
                break;
                }else if(tipoInmueble==2){
                    comision=costoCasa*0.12;
                    alert(`El propietario recibe ${costoCasa-comision} y la inmobiliaria recibe ${comision}`);
                break;
                }    
            }
        }
    }   
}
number();




