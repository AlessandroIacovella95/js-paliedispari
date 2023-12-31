//* Chiedo all'Utente di scegliere tra pari e dispari
let userChoice = prompt('Pari o dispari?', 'Pari').trim().toLowerCase;
    
//* Ciclo While per far accettare solo i due valori necessari
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    alert('Dati non validi');
    userChoice = prompt('Pari o dispari?')
}
    
console.log("Scelta dell'Utente: " + userChoice );
    
//* Chiedo all'Utente un numero compreso tra 1 e 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
    
//* Ciclo While per far accettare solo i numeri all'interno dell'intervallo
while (isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
    alert ('Dati non validi');
    userNumber = prompt('Inserisci un numero da 1 a 5')
}
    
console.log("Numero dell'Utente: " + userNumber );

let minimo = 1;
let massimo = 5;

//* Tramite funzione genero randomicamente un numero compreso tra 1 a 5
function randomNumber(min, max) {
    const radomPcNumber = Math.floor(Math.random () * ((max + 1) - min)) + min;
    return radomPcNumber
}

const pcNumber = randomNumber(minimo, massimo);

console.log('Numero random del PC: ' + pcNumber);

//* Sommo il numero dell'Utente con il numero random
const sum = pcNumber + userNumber

console.log("La somma è: " + sum);

//* Funzione per stabilire se la somma sia pari o dispari
function isEven(number) {
    let result;

    if (number % 2 == 0) {
        result = true;     
    } else {
        result = false;
    }

    return result  
}

const evenSum = isEven(sum)

//* Dichiaro il vincitore tramite condizione "if"
if ((userChoice === 'pari' && evenSum) || (userChoice === 'dispari' && !evenSum)) {
    console.log('Utente hai vinto');
} else {
    console.log('Pc hai vinto');
}

