// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let answer = 0;
  let checked = true;
  let str = n.toString(2).split(1).length;

  while (checked) {
    n++;
    if (str === n.toString(2).split(1).length) {
      answer = n;
      checked = false;
      //   처음에 while을 true로 적어주고 break를 하니 시간초과가 뜸. vscode에서는 정상 작동.
      // break;
    }
  }

  return answer;
}

console.log(solution(78));
