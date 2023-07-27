# Esercizio di oggi: Paliedispari

## Palidroma:
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

## Svolgimento:

- Chiedi all'utente di inserire una parola tramite prompt
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