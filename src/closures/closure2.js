// function moneyBox(coins){
//     let saveCoins = 0
//     saveCoins += coins
//     console.log(`MoneyBox: $${saveCoins}`)
// }

// moneyBox(5)
// moneyBox(5)

function moneyBox(){
    let saveCoins = 0
    console.log(saveCoins + " <-- Variable fuera del closure") 
    function countCoins(coins){
        console.log(saveCoins + " <-- Variable en closure")
        saveCoins += coins //Variable protegida
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}


const myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxAna = moneyBox()
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)


//Ejemplo Personal

function petShop(){
    let pets = []
    function addNewPet(petName){
        pets.push(petName)
        console.log(`Mascotas en el sistema: ${pets}`)
    }
    return addNewPet
}

const petShopMagarita = petShop()
petShopMagarita('Camila')
petShopMagarita('Lulu')
petShopMagarita('Coco')

//Ejemplo mio potenciado con comentarios


function petShop(){
    let pets = []
    return{
        addNewPet(petName){ //En esta funcion voy a agregar a una mascota
            pets.push(petName)
            return pets
        },
        getPetList(){ //En esta funcion voy a devolver la lista de mascotas
           return console.log(`Mascotas en el sistema: ${pets}`)
        },
        removePet(petName){ //En esta funcion voy a borrar a una mascota
           let indice = pets.indexOf(petName)//Obtiene la posicion de la mascota
           pets.splice(indice, 1)//Coloca la posicion y solo 1 porque es la cantidad al elemento a eliminar 

           console.log(pets)
           return pets
        }
    }
   
}

const petShopSevilla = petShop() // Asigne
petShopSevilla.addNewPet("Lola") //Agrege
petShopSevilla.addNewPet("Vito") //Agrege
petShopSevilla.addNewPet("Moonshine") //Agrege
petShopSevilla.getPetList() //Mostre
petShopSevilla.removePet("Vito") //Borre
petShopSevilla.getPetList() //mostre