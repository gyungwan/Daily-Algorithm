const getFactorial = (i) => {
  let answer = 1;
  for (let v = 1; v <= i; v++) {
    answer *= v;
  }
  return answer;
};

function solution(n) {
  for (let i = 1; ; i++) {
    const answer = getFactorial(i);

    if (n < answer) {
      return i - 1;
    }
  }
}
