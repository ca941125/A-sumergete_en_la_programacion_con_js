// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector();
// parrafo.innerHTML = 'Indica un número del 1 al 10: ';

let numeroSecreto = generarNumeroSecreto();

 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto == numeroDeUsuario);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10: ')

