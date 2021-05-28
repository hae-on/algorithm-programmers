// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  answer.sort((a, b) => a - b);
  //   나누어떨어지지 않는다면 값이 []으로 나옴. answer = [] 일 때를 넣고 싶었지만 앞에 선언했던 것(let answer = []) 떄문에 lenght가 0인 것으로 적음.
  if (answer.length === 0) answer.push(-1);
  return answer;
}
