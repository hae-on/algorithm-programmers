// https://programmers.co.kr/learn/courses/30/lessons/12912

// 가우스의 등차수열 합 (y-x)+1)(x+y)/2
function solution(a, b) {
  return (Math.abs(b - a) + 1)(a + b) / 2;
}
