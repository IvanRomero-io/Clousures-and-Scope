function greeting(){
    let useName = "Ana"
    console.log(useName)

    if(useName === "Ana"){
        console.log(`Hello ${useName}!`)
    }
}

greeting()
//Este no se puede acceder porque esa variable es de scope global
console.log(useName)