const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let num = Number(input[0]);
  let st = "";
  for (let i = 0; i < num; i++) {
    //console.log(st = "*")
    for (let j = 0; j <= i; j++) {
      st += "*";
    }
    st += "\n";
  }
  console.log(st);
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let n = Number(input[0]);
  let line = 1;
  while (line <= n) {
    let star = "";
    let count = 0;
    while (count < line) {
      star += "*";
      count++;
    }
    console.log(star);
    line++;
  }
});
