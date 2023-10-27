// variabile con prompt dell'utente
let userWord = prompt("inserisci una parola");
userWord = myTrim(userWord);

// main code
isPalindrome(userWord);
if (!isPalindrome(userWord)) {
  alert(`${userWord} non è una parola/frase palindroma`);
} else if (!myTrim(userWord)) {
  alert("non si possono inserire solo spazi vuoti");
} else {
  alert(`${userWord} è una parola/frase palindroma`);
}

// funzione verifica palindromi
function isPalindrome(word) {
  let string = "";
  let pal = "";
  let flag = false;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    string += word[i];
    pal = word[i] + pal;
  }
  console.log(string);

  if (string === pal) {
    flag = true;
  }
  console.log(flag);
  return flag;
}

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

console.log(myTrim("hello world"));
