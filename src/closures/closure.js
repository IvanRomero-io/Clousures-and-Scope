function greeting(){
    let userName = "oscar"

    function displayUsername(){
        return `hello ${userName}`
    }

    return displayUsername
}

const g = greeting()
console.log(g) //De esta manera te va a imprimir es la funcion completa, la sintacxis
console.log(g()) //Con esta manera te va a devolver el resultado