/* Saludo del bot */
alert("Hola, soy Habby");


/* Registro del usuario */
let usuario = prompt("Ingresa tu nombre aquí");
console.log(`El usuario registrado es: ${usuario}`);
alert("Hola" + " " + (usuario)+ " " + "soy tu calculadora IMC"); 


/* Registro del peso y estatura */
let peso = parseInt(prompt("Ingresa tu peso en Kilogramos"));
console.log(`El usuario ${usuario} registró tener : ${peso} kg`);
let altura = parseInt(prompt("Ingresa tu estatura en Centimetros"));
let alturaEnCm = altura / 100;
console.log(`El usuario ${usuario} registró medir : ${altura} cm`);

alert("Estamos calculando tu estado, si deseas continuar dale Aceptar");

/*   
 Calculadora de IMC
 IMC = Peso / (Altura x Altura)
 < 19: delgadez
 entre 20 y 25: normal
 entre 26 y 30: sobrepeso
 > de 30: obesidad
*/
let pesoIMC = (peso / (alturaEnCm * alturaEnCm));
console.log(`Al calcular su peso y altura, vimos que ${usuario} registra un IMC de: ${pesoIMC} `)
alert("Su IMC es de" + " " + (peso / (alturaEnCm * alturaEnCm)) + " " + "Click en aceptar para ver tu estado");

/* Informacion del estado IMC */
if (pesoIMC < 20) {
    console.log(`${usuario} registró delgadez`)
    alert("Tu estado es de delgadez");
}
if (pesoIMC >= 20 && pesoIMC < 26) {
    console.log(`${usuario} registró un peso normal`)
    alert("Felicidades, tienes un peso normal");
}
if (pesoIMC >= 26 && pesoIMC <  30) {
    console.log(`${usuario} registró estar en Sobrepeso`)
    alert("Preocúpate, te encuentras en un estado de Sobrepeso");
}
if (pesoIMC >= 30) {
    console.log(`${usuario} registró Obesidad`)
    alert("Empecemos la dieta, ya que tu estado es de Obesidad");
}