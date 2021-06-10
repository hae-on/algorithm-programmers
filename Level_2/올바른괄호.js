// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    }
    if (s[i] === ")") {
      right++;
    }

    // '(' 로 시작하지 않는 것 판별하기 위한 식
    if (right > left) {
      return false;
    }
  }

  if (right != left) {
    return false;
  }
  return true;
}

console.log(solution(`()()`));
