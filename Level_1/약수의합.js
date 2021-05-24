// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// n을 i로 나누었을 때 딱 떨어지면 (0) i는 n의 약수라고 할 수 있다.
