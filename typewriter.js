const sentence = "hello there from lighthouse labs";

let i = 0;

function printCharacter() {
  if (i < sentence.length) {
    process.stdout.write(sentence[i]);
    i++;
  } else {
    clearInterval(intId);
    console.log(); // Add a new line after printing the sentence
  }
}

let intId = setInterval(printCharacter, 50);