// Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema
// o disciplina específica. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características
// (programa básico-simulación):
// a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
// b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta.d. Se debe mostrar los resultados del examen

alert("EXAMEN");
let puntos=0;
//PREGUNTAS EXAMEN 
//Pregunta 1
let p1=Number(prompt(`PREGUNTA N°1\n1+1 es igual a 3\nPresione\n1.VERDADERO 2.FALSO`));
if (p1==2) {
    puntos=puntos+10;
    alert("CORRECTO!")
}else{
    alert("INCORRECTO")
}
//Pregunta 2
let p2=Number(prompt(`PREGUNTA N°2\nUn perro tiene 2 colas\nPresione\n1.VERDADERO 2.FALSO`));
if(p2==2) {
    puntos=puntos+10;
    alert("CORRECTO!")
}else{
    alert("INCORRECTO")
}
//Pregunta 3
let p3=Number(prompt(`PREGUNTA N°3\nAMARILLO en ingles es YELLOW\nPresione\n1.VERDADERO 2.FALSO`));
if(p3==1) {
    puntos=puntos+10;
    alert("CORRECTO!")
}else{
    alert("INCORRECTO")
}
//Pregunta 4
let p4=Number(prompt(`PREGUNTA N°4\nEl antonimo de BUENO es MALO\nPresione\n1.VERDADERO 2.FALSO`));
if(p4==1) {
    puntos=puntos+10;
    alert("CORRECTO!")
}else{
    alert("INCORRECTO")
}
//Pregunta 5
let p5=Number(prompt(`PREGUNTA N°5\n5 es mayor a 3\nPresione\n1.VERDADERO 2.FALSO`));
if(p5==1) {
    puntos=puntos+10;
    alert("CORRECTO!")
}else{
    alert("INCORRECTO")
}

//puntaje
alert(`PUNTAJE FINAL:${puntos}`);








