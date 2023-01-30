function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }

  return answer;
}

function solution(my_string, n) {
  let answer = "";
  let count = 0;
  while (count < my_string.length) {
    let recount = 0;
    while (recount < n) {
      answer += my_string[count];
      recount++;
    }

    count++;
  }
  return answer;
}
