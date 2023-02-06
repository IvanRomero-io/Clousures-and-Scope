//Inicializas
var firstName // Undefined
firstName = "Ivan"
console.log(firstName) //Regreso "Ivan" 

//Re-Asignar
var lastName = "David"
lastName = "Ana"
console.log(lastName)//Regreso "Ana"

//Declarar asignar y re-asignar
var secondName = "David"
var secondName = "Ana"
console.log(secondName) // Regreso "Ana"


//Con let

let fruit = "Apple" // Declarar y inicializar
fruit = "kiwi" //Re-signar
console.log(fruit) //Hasta aca devuelve kiwi
// let fruit = "banana" //Hasta aca rompe el codigo jaja, tira un mensaje de error

//Con const
const animal = "dog" //Declara y asigna
animal = "cat"
// const animal = "monkey"  //Tira error ya que la constante no puede ser igual a otra
console.log(animal) //Devuelve un fallo que no se puede reasignar

const vehicles = []
vehicles.push("🧨")
console.log(vehicles) // Nos enseña nuestro elemento en el array, las constante si se puede cambiar de valores en una lista de arrays

const chupaElement = vehicles.pop() //Este metodo saca el ultimo elemento del array y lo puedes meter enn una variable
console.log(chupaElement, vehicles) // Aca podemos revisarlas