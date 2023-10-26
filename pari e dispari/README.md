## ESERCIZIO

**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

### SOLUZIONE

**raccolta dati**

1. scelta dell'utente su pari o dispari
2. numero inserito dall'utente da 1 a 5

**logica del programma**

1. si impostano gli eventListener per gli input dell'utente e per il bottone che genera il numero random del computer e stampa il risultato;

```javascript
// event listener per il numero selezionato dall'utente
numberUser.addEventListener("change", function () {
  numberUserSelect = parseInt(numberUser.value);
  console.log(numberUserSelect + " numero utente");
});

// bottone per scegliere dispari
eventBtn.addEventListener("click", function () {
  userChoice = "even";
  console.log("l'utente ha scelto pari");
  eventBtn.classList.add("bg-red");
  oddBtn.classList.remove("bg-red");
});

// bottone per scegliere pari
oddBtn.addEventListener("click", function () {
  userChoice = "odd";
  console.log("l'utente ha scelto dispari");
  oddBtn.classList.add("bg-red");
  eventBtn.classList.remove("bg-red");
});

// bottone per generare un numero random del computer
computerNumber.addEventListener("click", function () {
  randomNumber();
  checkResult();
  console.log("---------------------------");
  result.innerHTML = message;
});
```
<br>

2. all'interno del eventListener che genera il numero rando ci sono due funzioni:
    - la funzione randomNumber che genera il numero random
    - e la funzione che calcola e stampa il risultato
3. nella funzione che calcola il risultato c'è un'altra funzione che restituisce un valore booleano che determina se una somma tra due numeri è pari o dispari. La funzione si chiama oddOrEvenSum(number1, number2) ed è composta da due variabili:
    - la variabile sum = number1 + number2 che calola la somma tra i due argomenti;
    - la condition flag che diventa true quando la somma restituisce un valore pari

```javascript
function oddOrEvenSum(number1, number2) {
  let sum = number1 + number2;
  let flag = false;
  if (sum % 2 === 0) {
    flag = true;
  }
  return flag;
}

```
<br>

4. la funzione checkResult() imposta le 4 condizioni in virtù delle quali si stabilisce chi ha vinto. Queste condizioni sono impostate in base alla funzione oddOrEvenSum(number1, number2), che, a seconda se restituisce un valore true o false e in base alle scelte dell'utente, determina il messaggio da stampare nel DOM

```javascript
// funzione che stampa il risultato
function checkResult() {
  let sum = randomNum + numberUserSelect;
  message = "";

  if (userChoice == "even" && oddOrEvenSum(randomNum, numberUserSelect)) {
    console.log(
      `${randomNum} + ${numberUserSelect} = ${sum} è pari, l'utente ha vinto`
    );
    message = `${randomNum} (numero dell'utente) + ${numberUserSelect} (numero del computer) = ${sum} è pari, l'utente ha <span class="result-span">vinto</span>`;
  } else if (
    userChoice === "odd" &&
    !oddOrEvenSum(randomNum, numberUserSelect)
  ) {
    console.log(
      `${randomNum} + ${numberUserSelect} = ${sum} è dispari, l'utente ha <span class="result-span">vinto</span>`
    );
    message = `${randomNum} (numero dell'utente) + ${numberUserSelect} (numero del computer) = ${sum} è dispari, l'utente ha <span class="result-span">vinto</span>`;
  } else if (
    userChoice == "even" &&
    !oddOrEvenSum(randomNum, numberUserSelect)
  ) {
    console.log(
      `${randomNum} + ${numberUserSelect} = ${sum} è dispari, l'utente ha perso`
    );
    message = `${randomNum} (numero dell'utente) + ${numberUserSelect} (numero del computer) = ${sum} è dispari, l'utente ha <span class="result-span">perso</span>`;
  } else {
    console.log(
      `${randomNum} + ${numberUserSelect} = ${sum} è pari, l'utente ha perso`
    );
    message = `${randomNum} (numero dell'utente) + ${numberUserSelect} (numero del computer) = ${sum} è pari, l'utente ha <span class="result-span">perso</span>`;
  }
}
```
<br>

5. Infine la funzione che calcola il risultato viene inserita nell'eventListener che genera il numero random del computer da 1 a 5 insieme alla funzione randomNumber() e a result con la proprietà .innerHTML per stampare l'algoritmo sul DOM.

```javascript
// bottone per generare un numero random del computer  e srampare il risultato nel DOM
computerNumber.addEventListener("click", function () {
  randomNumber();
  checkResult();
  console.log("---------------------------");
  result.innerHTML = message;
});
```
