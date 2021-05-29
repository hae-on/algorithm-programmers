// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    let even = s.length / 2;
    answer = s[even - 1] + s[even];
  }
  if (s.length % 2 === 1) {
    let odd = Math.floor(s.length / 2);
    answer = s[odd];
  }
  return answer;
}
