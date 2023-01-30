function solution(n) {
  let answer = 0;
  let count = 1;
  while (true) {
    if ((count * 6) % n === 0) {
      answer = count;
      break;
    }
    count++;
  }
  return answer;
}
