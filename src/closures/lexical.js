const myGlobal = 0

function myFuncion(){
    const myNumber = 1
    console.log(myGlobal)

    function parent(){ //Funcion interna
        const inner = 2
        console.log(myNumber, myGlobal)

        function child(){//Otra funcion interna
            console.log(inner, myNumber, myGlobal)
        }
        return child()
    }
    return parent()
}

myFuncion()
