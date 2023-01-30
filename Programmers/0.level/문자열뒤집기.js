function solution(my_string) {
  let answer = "";
  return (answer = my_string.split("").reverse("").join(""));
}

function solution(my_string) {
  let answer = "";

  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

function solution(my_string) {
  let answer = "";

  let count = my_string.length - 1;
  while (count >= 0) {
    answer = answer + my_string[count];

    count--;
  }
  return answer;
}
