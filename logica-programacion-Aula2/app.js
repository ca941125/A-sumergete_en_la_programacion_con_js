let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) 
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroDeUsuario);
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario == numeroSecreto);
    if ( numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p','Acertaste el número');
    }else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10: ');