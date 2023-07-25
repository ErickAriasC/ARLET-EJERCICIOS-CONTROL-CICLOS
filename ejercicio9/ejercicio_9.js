// Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus
// votos de forma electrónica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o
// características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// d. El sistema debe arrojar el ganador y perdedor de la votación

//VALIDACION 10 VOTOS
let voto;
let votoAna=0;
let votoDiego=0;

for (let i = 0; i <10; i++) {
   voto=Number(prompt(`PRESIONE EL NUMERO DEL CANDIDATO POR EL CUAL DESEA VOTAR\n1.Ana Maria Suarez 2.Diego Acero`));
    //SUMATORIA
    if (voto==1) {
        votoAna++;
    } else if(voto==2) {
        votoDiego++;
    }

    alert(`Ana Maria Suarez: ${votoAna}\nDiego Acero: ${votoDiego}`);

    //VALIDACION RESULTADOS
    if (i==9) {
        if (votoAna>votoDiego) {
            alert(`GANÓ: Ana Maria Suarez\nPERDIÓ: Diego Acero`)
        }else{
            alert(`GANÓ: Diego Acero \nPERDIÓ: Ana Maria Suarez `)
        }
       }
}