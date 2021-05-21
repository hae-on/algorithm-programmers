// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? (answer += "수") : (answer += "박");
  }
  return answer;
}

// 다른 풀이
function solution(n) {
  // substring()메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
  // return "수박".repeat(n)="수박수박수박" 여기서 substring을 이용해 0번째부터 n번째까지의 문자열을 출력한다.
  return "수박".repeat(n).substring(0, n);
}
