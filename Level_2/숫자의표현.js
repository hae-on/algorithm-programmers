// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    //   홀수의 약수를 구하면 됨.
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  return answer;
}

// 다른 풀이
function solution(n) {
  let answer = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum == n) {
        answer++;
        sum = 0;
        break;
      }
      if (sum > n) {
        sum = 0;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(15));
