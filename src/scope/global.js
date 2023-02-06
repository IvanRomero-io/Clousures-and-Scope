// 'use strict'
var a //Declarando
var b = "b" //Declarando y asignando
b = "bb" // Re-asignando
var a = "aa" //Redeclaracion


//Global Scope o variables globales, cualquie variable que se encuentren en el documento fuera de una funcion, este se puede ejecutar en cualquier momento
//y ser utilizado en otra funcion o ser Re-declarado desde otra fucion
var fruit = "apple"

function bestFruit(){
    console.log(fruit)
}

bestFruit()

//Ahora si no declaras la variable dentro de la funcion (osea declarar con var, let o const), pasara a ser global, aca puedes ver que se imprime dos veces la variable, Pero hay un misterioso amigo que soluciona eso, se llama 'use strict', que hace que no la lea como variable, que realmente es el propia javascript que la creo por nosotros, esta se usa al inico de todo
function countries(){
    country = "Colombia" //Gobal
    console.log(country)
}

countries()
console.log(country)



//Alunos datos extra
//**let: se puede ejecutar en su mismo bloque si esta en uno, no fuera de el, por ejemplo si esta declarado en un ciclo dentro del mismo scope, no se puede llamar fuera de ese ciclo
//puede ser una variable global si esta afuera de un bloque y hasta arriba de nuetro comienzo de codificar o de donde la estamos llamando
//Puede ser cambiada con una funcion, ciclo etc.

//**const: No puede cambiarse su valor despues de ser inicializadam y siempre al ser declarada tiene que se inicializada

//var: Muy parecido al let, pero si puede ser llamada fuera de su bloque en la misma funcion  


//Otro caso es si tenemos una variable con scope global, con un mismo nombre de una variable de con un scope local, cuando se ejecupe primero va a buscar en el scope local y si no la encuentra la va a buscar en un scope global hasta encontrarla 

var fruta = "manzana"

// los "{}" son los famosos bloques
function buscaFruta(){
    var fruta = "pera"
    console.log("Quiero una " + fruta)
}

buscaFruta()
//Como podemos ver al ejecutarla, solamente usa la variable en el scope local, y la otra se escondio, esto se le llama VARIABLE SHADOWING
//Como puedes ver, si llamamos una variable en una funcion con scope local, primero busca dentro de su scope local y si no encuentra se va al scope global

// Pero hay una manera de acceder a ella, podemos usar el onjeto "window" para que valla directo al scope global

var fruta = "manzana"

// los "{}" son los famosos bloques
function buscaFruta(){
    var fruta = "pera"
    console.log("Quiero una " + window.fruta)
}

buscaFruta()
