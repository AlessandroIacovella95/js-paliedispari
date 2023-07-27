# Esercizio di oggi: Paliedispari

## Palidroma:
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

## Svolgimento:

- Chiedo all'utente di inserire una parola tramite prompt
- Creo una funzione:
  - Dichiaro una variabile d'appoggio
  - Converto la parola scritta dall'utente tutto in minuscolo
  - Tolgo gli spazi dalla parola
  - Ciclo **WHILE**:
    - Inizializzo la 'i'
    - Condizione del while
    - Aggiungo alla variabile "result" il valore di userAnswer
    - Decremento la i
- **SE** la parola inserita dall'utente è uguale alla parola    nella variabile result
    - Stampo che la parola è palindroma
  - **ALTRIMENTI**
    - Stampo che la parola non è palindroma
- Invoca la funzione

<hr>

## Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## Svolgimento:
- Chiedo all'Utente di scegliere tra pari e dispari
  - Ciclo **WHILE** così da far inserire all'utente solo i valori accettati
- Chiedo all'Utente un numero da 1 a 5
  - Ciclo **WHILE** così da far inserire solo numeri validi
- Tramite funzione genero randomicamente un numero compreso tra 1 e 5
- Sommo il numero dell'Utente con il numero random
- Tramite funzione stabilisco se la somma sia pari o dispari
- Dichiaro il vincitore tramite condizione "if"


