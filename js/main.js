// Un alert() espone 5 numeri generati casualmente.
var numeri = [];

for (let i = 0; i < 5; i++) {
    numeri.push(random(1, 100));
}

alert(numeri);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(indovinaNumeri, 30000);

function indovinaNumeri() {

    for (var i = 0; i < 5; i++) {
        parseInt(prompt("Inserisci un numero di quelli estratti"));
    }

}
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Introdurre la parte di grafica oltre a quella di logica