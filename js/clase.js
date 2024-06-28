var nombre = "karol";
var edad = 34;
var esMayorEdad = false;

//propiedad?
console.log(nombre.length);

//metodo

console.log(nombre.includes("m"));

var Persona = {
    nombre: "Karol",
    edad: 34,
    esMayorEdad: true
}
var resultado = suma(1,5);
console.log("Resultado " +resultado);
resta(6,1);
saludo();


function suma(numero, numero2){
    return numero + numero2;
}


function resta(numero, numero2){
   console.log(numero - numero2);
}

function saludo(){
    var nombre = "Tatiana";
    console.log("Hola!" + nombre);
}

console.log("Hola!" + nombre);

if(edad > 17){
    console.log("es mayor de edad");
} else {
    console.log("es menor de edad");
}
edad = 14;
var resultado = edad > 17 ? "es mayor de edad" : "es menor de edad";
console.log(resultado);

for(let i = 0; i < 10 ; i++){
    console.log(i);
}

let array = [1,243,5,67,8,3];

for(let x in array){
    console.log(array[x]);
}

edad = 40;
do {
    edad +=1;
    console.log(edad);
} while(edad < 50);


edad = 40;
while(edad < 50){
    edad +=1;
    console.log(edad);   
}

var titulo = document.getElementById("Titulo");

var nuevoElemento = document.createElement("h2");
nuevoElemento.innerText = "Hola este es un nuevo titulo";
document.getElementById("imagenPrincipal").appendChild(nuevoElemento);

var miBoton = document.getElementById("boton_envio");

miBoton.addEventListener("mouseover", function(){
    miBoton.value ="Enviando..";
})

miBoton.addEventListener("mouseout", function(){
    miBoton.value ="Enviar";
})