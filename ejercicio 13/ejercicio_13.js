// El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o 
// usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen 
// un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o 
// características (programa básico-simulación):
// a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
// b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
// c. El sistema le mostrara toda la información de cada una de las referencias en particular.

let marcaCarro=Number(prompt(`PRESIONE EL NUMERO CORRESPONDIENTE A LA MARCA DEL CARRO QUE DESEA ESCOGER\n1. CHEVROLET 2. MAZDA 3. RENAULT`))
let referenciaCarro=0;

switch (marcaCarro) {
    case 1:
        identificarReferenciaCarro();
        alert(`MARCA: CHEVROLET\nREFERENCIA: ${referenciaCarro}`)
        break;
    case 2:
        identificarReferenciaCarro();
        alert(`MARCA: MAZDA\nREFERENCIA: ${referenciaCarro}`)

        break;
    case 3:
        identificarReferenciaCarro();
        alert(`MARCA: RENAULT\nREFERENCIA: ${referenciaCarro}`)

        break;

    default:
        break;
}

function identificarReferenciaCarro() {
    referenciaCarro=Number(prompt(`SELECCIONE EL NUMERO QUE CORRESPONDE A LA REFENCIA QUE DESEA ESCOGER\n1. Captiva 2. Traaker`))
    if (referenciaCarro==1) {
        referenciaCarro="Captiva";
    } else if(referenciaCarro==2) {
        referenciaCarro="Traker";
    }
}