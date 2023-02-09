function solution(cipher, code) {
  let answer = "";
  for (let i = 0; i < cipher.length; i++) {
    if ((i + 1) % code === 0) {
      answer += cipher[i];
    }
  }

  return answer;
}

function solution(cipher, code) {
  let answer = [];
  let array = cipher.split("");
  console.log(array);
  for (let i = 0; i <= array.length; i++) {
    console.log(array[code * i - 1]);
    answer.push(array[code * i - 1]);
  }
  return answer.join("");
}
