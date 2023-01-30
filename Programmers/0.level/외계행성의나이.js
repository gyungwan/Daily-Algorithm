function solution(age) {
  let answer = "";
  let strAge = "abcdefghij";
  const str = String(age);
  for (let i = 0; i < str.length; i++) {
    answer += strAge[str[i]];
  }
  return answer;
}

function solution(age) {
  let answer = "";

  const str = String(age);
  for (let i = 0; i < str.length; i++) {
    answer += String.fromCharCode(str[i].charCodeAt(0) + 49);
  }
  return answer;
}
