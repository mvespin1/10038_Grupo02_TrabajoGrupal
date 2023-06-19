//EJEMPLO 1
const textoJson1 = '{"nombre":"Jason", "edad":22, "pais":"Ecuador"}';
const persona1 = JSON.parse(textoJson1);
document.getElementById("demoJson1").innerHTML = persona1.nombre + " tiene la edad de: " + persona1.edad + " años.";

//EJEMPLO 2
const persona2 = {nombre:"Jason", edad:22, pais:"Ecuador"};
const textoJson2 = JSON.stringify(persona2);
document.getElementById("demoJson2").innerHTML = textoJson2;