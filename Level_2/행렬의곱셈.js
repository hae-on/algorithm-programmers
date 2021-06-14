// https://programmers.co.kr/learn/courses/30/lessons/12949
// 참고 https://www.youtube.com/watch?v=xgzS32zXTY4

function solution(arr1, arr2) {
  let answer = [];
  let temp = [];
  let sum = 0;

  //0, 1, 2
  for (let i = 0; i < arr1.length; i++) {
    //0, 0, 1, 1
    for (let j = 0; j < arr2[0].length; j++) {
      // 0, 1
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
      sum = 0;
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
