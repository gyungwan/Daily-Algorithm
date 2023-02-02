function solution(numbers, k) {
  let answer = 1;
  for (let i = 0; ; i += 2) {
    i %= numbers.length; // i = i % numbers.length
    let result = numbers[i];
    if (answer === k) {
      return result;
    }
    answer++;
  }
}
