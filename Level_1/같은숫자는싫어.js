// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let answer = [];
  //  중복 제거 함수를 쓰면 원하는 값이 나오지 않음. arr의 값을 비교해주어 빈 배열인 answer에 넣어주어야 함.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
