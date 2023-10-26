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
  randomNumber();
  checkResult();
  console.log("---------------------------");
  result.innerHTML = message;
});


// FUNCTION

// funzione per generare il numero random
function randomNumber() {
  randomNum = Math.floor(Math.random() * 5 + 1);
  console.log(randomNum + " numero computer");
}

// funzione per sapere se la somma dei due numeri è pari o dispari
function oddOrEvenSum(number1, number2) {
  let sum = number1 + number2;
  let flag = false;
  if (sum % 2 === 0) {
    flag = true;
  }
  return flag;
}

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
