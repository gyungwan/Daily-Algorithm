//최빈값 구하기
function solution(array) {
  let arr = array.sort((a, b) => a - b);

  let count = 0;

  let choi = -1; //등장할수없는 값 최빈값이 뭔지

  let choiRepeatnum = 0; // 몇번 반복해서 된 최빈 값인지
  let repeatNum = 0; //몇번 반복해서 들어오는 최빈값인지 현재 똑같은 숫자가 몇번 등장했는지
  let beforeNum = -1; //지금 숫자의 이전 숫자
  let isDupChoi = false;
  while (count < array.length) {
    if (beforeNum !== array[count]) {
      // 현재 숫자와 이전 숫자를 비교해서 같지 않으면 repeatNum을 1로 만들어주고 다음 반복에서 이전 숫자를 비교하면 같으면 repeatNum을 1씩 더해줘서 최빈값을 구할수 있다
      console.log("array[count]", array[count]);
      repeatNum = 1;
    } else {
      console.log("array", array[count]);
      repeatNum++;
    }

    if (repeatNum === choiRepeatnum) {
      if (choi !== array[count]) {
        isDupChoi = true;
      }
    }
    if (repeatNum > choiRepeatnum) {
      choi = array[count];
      choiRepeatnum = repeatNum;
      isDupChoi = false;
    }
    beforeNum = array[count];

    count++;
  }
  console.log("", beforeNum);
  if (isDupChoi) return -1;
  return choi;
}

//1. 앞에서부터 차례대로 원소를 확인하며 갯수를 샌다
//2. 최빈 값을 그때그때 기록한다
solution([1, 2, 3, 3, 3, 4]);
solution([1, 1, 2, 2]);
solution([1]);
