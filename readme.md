Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Si, lo abbiamo intravisto mentre facevamo la lezione sulle stringhe e i numeri (Cerco un operatore che fa al caso mio)

Consigli del giorno:

Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Ricordate di usare il console.log() sia in fase di preparazione e verifica dei dati che ovviamente durante il degugging per scovare potenziali errori!


## istructions
- Dobbiamo scrivere un programma che stampi in console i numeri da 1 a 100:
    
    - usiamo il ciclo for (let i=1; i<=100; i++) {}
    - stampiamo all'interno del ciclo for la lista dei numeri con:
        - const elementList = `<li class="">${}</li>`
        - console.log(elementList);

    - dopo aver stampato la lista creaiamo il leyout su css:

        - dando una grandezza e una larghezza;
        - centrando i numeri ed il testo all'intenrno del quadrato che creeremo;
        - aggiungiamo il colore ai nostri quadratini:

            - per i multipli di 3:
                - stampiamo Fizz al posto dei numeri;
                - cambiamo il colore al quadratino;

            - per i multipli di 5:
                - stampiamo Buzz al posto dei numeri;
                - cambiamo il colore al quadratino;

            - per i multipli di 3 e di 5:
                - stampiamo FizzBuzz al posto dei numeri;
                - cambiamo il colore al quadratino;
- 

## tools
- ciclo for;
- const/let;
- console.log();
