function solution(box, n) {
  let answer = 1;
  let num = 0;
  for (let i = 0; i < box.length; i++) {
    let num = box[i] / n;
    answer *= Math.floor(num);
  }
  return answer;
}

///코드를 좀더 줄여봄
function solution(box, n) {
  let answer = 1;

  for (let i = 0; i < box.length; i++) {
    answer *= Math.floor(box[i] / n);
  }
  return answer;
}
