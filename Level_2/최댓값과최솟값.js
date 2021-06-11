function solution(s) {
  let answer = "";
  let result = [];
  let arr = s.split(" ");

  result.push(Math.min(...arr));
  result.push(Math.max(...arr));

  answer = result.join(" ");

  return answer;
}

// 다른 풀이
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

console.log(solution("-1 -2 -3 -4"));
