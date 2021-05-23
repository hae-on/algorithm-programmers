// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// 먼저 split을 사용하기 위해 n을 문자열로 바꾸어준다.
// split을 이용해 나누어준다. "1" "1" "8" "3" "7" "2"
// sort를 통해 오름차순 정렬한다. "1" "1" "2" "3" "7" "8"
// reverse를 통해 내림차순 정렬한다. "8" "7" "3" "2" "1" "1"
// join을 통해 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// parseInt를 통해 정수 형태로 변환한다.

// 다른풀이
function solution(n) {
  return parseInt(
    String(n)
      .split("")
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );
}
