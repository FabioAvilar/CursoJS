//if ... else

// Se a hora estiver entre 06 ate 12 Bom dia!
// se estiver entre 12 ate 18 boa tarde
// caso contrario boa noite

let hora = 15
 
if (hora > 6 && hora < 12) {
    console.log("bom dia")
}
else if (hora > 12 && hora < 18) {
    console.log("boa tarde")
}
else {
    console.log("boa noite")
}