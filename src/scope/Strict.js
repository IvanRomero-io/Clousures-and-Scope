'use strict'//Este metodo hace que sea OBLIGATORIO, que debe ser declarado la variable, este es el famoso moto estricto
pi = 3.1416
console.log(pi) //Lo va a devolver a persar de no haber declarado variable, el propi Js lo declaro por el mismo

function myFunction(){
    'use strict'
    return pi = 3.1416
}

console.log(myFunction())//Aca podemos ver que como usamos el modo estricto en una funcion, tampoco devolvio la variable ya que no fue declarada, en cambio si le quitamos el modo estricto si se va a ejecutar