// var nameOfDog; //esto es lo que sucede, js sube la variable pero solo la declaracion
console.log(nameOfDog)
var nameOfDog = "Elmo"

console.log(nameOfDog) //esta si lo muestra


nameOfCat()

function nameOfCat(){
    console.log(`El mejor gato es ${elmo}`)
} // Como puedes ver la funcion tambien se elevo, las funciones son como ciudadanos de primera clase, cuando carga el js, primero carga las funciones despues el resto

var elmo = "Elmito" //A esta variable se le elevo la declaracion 