// https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript

function solution(s) {
  let answer = true;
  let num = Number(s);
  // 정수형태를 똑같은 것으로 하면 안 됨. number와 parseint 따로 설정.
  if ((s.length === 4 || s.length === 6) && num === parseInt(s)) {
    return (answer = true);
  } else return (answer = false);
}
