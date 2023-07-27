// * Chiedo all'utente di inserire una parola
let userWord = prompt('Inserisci una parola');

//* Creo una funzione di nome Palindorma
function Palindroma(word){

    //* dichiaro una variabile d'appoggio
    let result = '';
    
    //* Converto la parola scritta dall'utente tutto in minuscolo
    word = word.toLowerCase();

    //* Tolgo gli spazi
    word = word.trim(); 
    
    //* Creo il ciclo WHILE

    //* Inizializzo la i
    let i = word.length - 1;

    //* Condizone while
    while( i >= 0) {
        
        //* Aggiungo alla variabile "result" useranswer[i]
        result += word[i];
        console.log(result);

        //* Decremento la i
        i--
    }
    
    //* SE useranswer è uguale a result
    if ( word === result) {
        //* la parola è palindroma
        console.log('La parola è palindroma')
        //* la parola non è palindroma
    } else {
        console.log ('La parola non è palindroma')
    }
    
}

//* Invoca la funzione
Palindroma(userWord)