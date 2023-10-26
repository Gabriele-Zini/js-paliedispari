## ESERCIZIO

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

### SOLUZIONE

**raccolta dati**

1. si chiede all'utente di inserire una parola tramite prompt

**Logica del Programma**

1. si crea una funzione che verifica se una parola è palindroma con un argomento "word" e tre variabili:
   - una variabile string = "":
   - una variabile pal = "";
   - una variabile flag impostata sul false;

```javascript
let string = "";
let pal = "";
let flag = false;
```
<br>

2. si impostano due cicli for, uno che incrementa e uno che decrementa, sulla lunghezza della stringa word.
3. all'interno del ciclo che incrementa si prendono le varie iterazioni e si aggiungono alla variabile string.
4. all'interno del ciclo che decrementa si prendono le varie iterazioni e si aggiungono alla variabile pal.
5. si imposta una condizione per cui se string === pal la flag diventa true e si ritorna il valore booleano di flag alla fine della funzione;
   <br>

```javascript
function isPalindrome(word) {
  let string = "";
  let pal = "";
  let flag = false;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    string += word[i];
  }
  console.log(string);

  for (let i = word.length - 1; i >= 0; i--) {
    pal += word[i];
  }
  console.log(pal);

  if (string === pal) {
    flag = true;
  }
  console.log(flag);
  return flag;
}
```
<br>

6.  si imposta una funzion myTrimmed per invalidare l'userInput composto solo da spazi vuoti; - la funzione ha un argomento word - all'interno della funzione si dichiara una variabile wordTrimmed con valore " "; - si effettua un ciclo su word e ogni volta che word[i] è diverso da uno spazio vuoto si aggiunge alla variabile wordTrimmed: in questo modo la parola o le parole non hanno oiù spazi vuoti

        ```javascript

    // funzione trimmer personalizzata
    function myTrim(word) {
    let wordTrimmed = "";
    for (i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
    wordTrimmed += word[i];
    }
    }
    return wordTrimmed;
    }
    ```
    <br>
7. si invoca la funzione isPalindrome() con argomento l'input dell'utente e si imposta la condizione per determinare qualche messassio mettere nell'alert.

```javascript
// main code
isPalindrome(userWord);
if (!isPalindrome(userWord)) {
  alert(`${userWord} non è una parola palindroma`);
} else if (!myTrim(userWord)) {
  alert("non si possono inserire solo spazi vuoti");
} else {
  alert(`${userWord} è una parola palindroma`);
}

```