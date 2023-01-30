function solution(emergency) {
  let arr = [];
  let count = 0;
  while (count < emergency.length) {
    arr.push({ value: emergency[count], idx: count });

    count++;
  }
  arr.sort((a, b) => b.value - a.value);

  let answer = new Array(emergency.length);

  count = 0;
  while (count < arr.length) {
    let arr1 = arr[count];
    answer[arr1.idx] = count + 1;
    console.log(answer[arr1.idx]);
    count++;
  }
  return answer;
}
