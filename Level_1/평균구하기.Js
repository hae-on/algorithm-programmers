// https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// 다른풀이
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
