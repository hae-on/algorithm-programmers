// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) answer -= i;
    else answer += i;
  }
  return answer;
}

// 다른 풀이
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let div = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        div++;
        // div에는 약수의 개수가 담긴다.
      }
    }

    if (div % 2 === 0) {
      answer += i;
    } else if (div % 2 === 1) {
      answer -= i;
    }
  }

  return answer;
}
