function solution(num, k) {
  let str = String(num);
  if (str.indexOf(k) !== -1) {
    return str.indexOf(k) + 1;
  } else {
    return str.indexOf(k);
  }
}
