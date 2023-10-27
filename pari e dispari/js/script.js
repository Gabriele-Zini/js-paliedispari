// VARIABLES

// const variables
const eventBtn = document.getElementById("even-btn");
const oddBtn = document.getElementById("odd-btn");
const numberUser = document.getElementById("user-number");
const computerNumber = document.getElementById("rnd-number");
const result = document.querySelector(".result");

// let variables
let numberUserSelect;
let randomNum;
let userChoice;
let message = "";

// EVENT LISTENER

// event listener per il numero selezionato dall'utente nell'elemento select
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

// bottone per generare un numero random del computer e stampare il risultato nel DOM
computerNumber.addEventListener("click", function () {
  randomNumber(1, 5);
  checkResult(randomNum, numberUserSelect, userChoice);
  console.log("---------------------------");
  result.innerHTML = message;
});

// FUNCTION

// funzione per generare il numero random
function randomNumber(min, max) {
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum;
}

// funzione per sapere se la somma dei due numeri è pari o dispari
function oddOrEvenSum(num1, num2) {
  let sum = num1 + num2;
  let flag = false;
  if (sum % 2 === 0) {
    flag = true;
  }
  return flag;
}

// funzione che stampa il risultato
function checkResult(num1, num2, choice) {
  let sum = num1 + num2;
  message = "";

  if (choice === "even" && oddOrEvenSum(num1, num2)) {
    console.log(`${num1} + ${num2} = ${sum} è pari, l'utente ha vinto`);
    message = `${num1} (numero del computer) + ${num2} (numero dell'utente) = ${sum} è pari, l'utente ha <span class="result-span">vinto</span>`;
  } else if (choice === "odd" && !oddOrEvenSum(num1, num2)) {
    console.log(
      `${num1} + ${num2} = ${sum} è dispari, l'utente ha <span class="result-span">vinto</span>`
    );
    message = `${num1} (numero del computer) + ${num2} (numero dell'utente) = ${sum} è dispari, l'utente ha <span class="result-span">vinto</span>`;
  } else if (choice === "even" && !oddOrEvenSum(num1, num2)) {
    console.log(`${num1} + ${num2} = ${sum} è dispari, l'utente ha perso`);
    message = `${num1} (numero del computer) + ${num2} (numero dell'utente) = ${sum} è dispari, l'utente ha <span class="result-span">perso</span>`;
  } else {
    console.log(`${num1} + ${num2} = ${sum} è pari, l'utente ha perso`);
    message = `${num1} (numero del computer) + ${num2} (numero dell'utente) = ${sum} è pari, l'utente ha <span class="result-span">perso</span>`;
  }
}
