// Escriba un programa que dado un numero de tabla de multiplicar las imprima en la consola.

let number=6;
console.log(`TABLAS DE MULTIPLICAR DEL NUMERO ${number}`); 
let multiplicador=0;

for (let i = 0; i < 10; i++) {
    multiplicador+=1;
    console.log(`${number} x ${multiplicador} = ${number*multiplicador}`);    
}