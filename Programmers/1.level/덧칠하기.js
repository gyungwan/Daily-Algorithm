function solution(n, m, section) {
  let answer = 0;
  let painted = 0;
  for (let i of section) {
    if (i > painted) {
      answer++;
      painted = i + m - 1;
      console.log(painted);
    }
  }
  return answer;
}
