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
