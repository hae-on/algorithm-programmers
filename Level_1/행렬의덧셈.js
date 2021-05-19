// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  var answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    // 빈 배열을 받는다.
    // answer[0]=[]
    // answer[1]=[]
    answer[i] = [];
    // 이제 배열 안의 배열 보기
    // arr1[0]의 length는 2
    for (let k = 0; k < arr1[i].length; k++) {
      answer[i][k] = arr1[i][k] + arr2[i][k];
    }
  }
  return answer;
}
