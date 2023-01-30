function solution(numbers, num1, num2) {
  let answer = numbers.slice(num1, num2 + 1);

  return answer;
}

function solution(numbers, num1, num2) {
  let answer = [];

  let count = 0;
  while (count < numbers.length) {
    if (count >= num1 && count <= num2) {
      answer.push(numbers[count]);
    }
    count++;
  }

  return answer;
}

function solution(numbers, num1, num2) {
  let answer = [];

  let count = num1;
  while (count <= num2) {
    answer.push(numbers[count]);

    count++;
  }

  return answer;
}
