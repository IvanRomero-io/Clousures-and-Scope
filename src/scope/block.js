function fruits(){
    if(true){
        var fruit1 = "Apple"
        let fruit2 = "kiwi"
        const fruit3 = "Banana"
    }

    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
//Solamente se va a ejecutar var, ya que los otros dos solo se ejecutan en el bloque
fruits()

//En cambio si los movemos al bloque, si se van a ajecutar
function fruits(){
    if(true){
        var fruit1 = "Apple"
        let fruit2 = "kiwi"
        const fruit3 = "Banana"
        console.log(fruit2)
        console.log(fruit3)
    }

    console.log(fruit1)
    
}
fruits()