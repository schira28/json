function eventHandler(e) {
    e.preventDefault()
    let nome = document.querySelector("#name").value
    let cognome = document.querySelector("#surname").value
    let eta = document.querySelector("#age").value
    let sesso = document.querySelector("#gender").value
    utente = { nome, cognome, eta, sesso}
    utenti.push(utente)

    console.log(utenti)
}

let utenti = []

document.querySelector("#invia").addEventListener("click", eventHandler)
function print(){
    let i
    for(i)
}

