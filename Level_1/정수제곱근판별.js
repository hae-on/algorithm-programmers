// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  // n의 제곱근을 반환한다.
  let num = Math.sqrt(n);
  return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}

// 예시를 보았을 때 121은 정수의 제곱이다. 반면, 3은 정수의 제곱이 아니다. '제곱근이 정수라면/정수가 아니라면' 으로 식을 세우면 된다.
// 정수임을 확인하는 함수는 Number.isInteger이다.
// Math.pow는 n의 제곱근 값을 계산해준다. 여기서는 num+1한 값을 제곱한 값을 구한다.
