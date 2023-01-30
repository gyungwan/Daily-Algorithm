function solution(num_list) {
  let arr = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    arr.push(num_list[i]);
  }
  return arr;
}

function solution(num_list) {
  return num_list.reverse();
}

function solution(num_list) {
  let answer = [];
  let count = num_list.length - 1;
  while (count >= 0) {
    answer.push(num_list[count]);
    count--;
  }
  return answer;
}
