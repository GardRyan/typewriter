process.stdout.write('hello from spinner1.js... \rheyyy\n');
const char = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-','/r\\', '\r|'];

let i = 0;

function printCharacter() {
  if (i < char.length) {
    process.stdout.write(char[i]);
    i++;
  } else {
    clearInterval(intId);
    console.log(); // Add a new line after printing the sentence
  }
}

let intId = setInterval(printCharacter, 200);