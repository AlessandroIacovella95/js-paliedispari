// * Chiedo all'utente di inserire una parola
let userWord = prompt('Inserisci una parola');

//* Creo una funzione di nome Palindorma
function Palindroma(){

    //* dichiaro una variabile d'appoggio
    let result = '';
    
    //* Converto la parola scritta dall'utente tutto in minuscolo
    userWord = userWord.toLowerCase();

    //* Tolgo gli spazi
    userWord = userWord.trim(); 
    
    //* Creo il ciclo WHILE

    //* Inizializzo la i
    let i = userWord.length - 1;

    //* Condizone while
    while( i >= 0) {
        
        //* Aggiungo alla variabile "result" useranswer[i]
        result += userWord[i];
        console.log(result);

        //* Decremento la i
        i--
    }
    
    //* SE useranswer è uguale a result
    if ( userWord === result) {
        //* la parola è palindroma
        console.log('La parola è palindroma')
        //* la parola non è palindroma
    } else {
        console.log ('La parola non è palindroma')
    }
    
}

//* Invoca la funzione
Palindroma()