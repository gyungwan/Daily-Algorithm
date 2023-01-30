function solution(my_string, letter) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    console.log(my_string[i]);
    if (my_string[i] !== letter) {
      answer += my_string[i];
    }
  }
  return answer;
}

function solution(my_string, letter) {
  var answer = "";
  let count = 0;
  while (count < my_string.length) {
    if (my_string[count] !== letter) {
      answer += my_string[count];
    }
    count++;
  }
  return answer;
}
