// Realizar un programa en JavaScript que imprima los números del 
// 1 al 6 sin imprimir el número 5, usando ciclos


function number() {
    for (let i = 1; i <=6; i++) {
        //condicion para que no imprima el 5 
        // console.log(`${i}`);

        if (i!=5) {
            console.log(`${i}`);
        }
       
    }
}

number();