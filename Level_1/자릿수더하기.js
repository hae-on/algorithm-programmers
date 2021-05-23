// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let sum = 0;
  let m = String(n);
  for (i = 0; i < m.length; i++) {
    // 더할 수 있도록 정수로 바꿔주어야 한다.
    sum += parseInt(m[i]);
  }
  return sum;
}
