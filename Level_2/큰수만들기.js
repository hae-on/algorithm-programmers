// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  var answer = "";
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i]; // 1, 9, 2, 4
    // 제거해야 할 숫자들이 모두 제거 && stack의 마지막 숫자가 현재 숫자보다 작을 경우 stack 마지막 숫자 제거
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
  //   k만큼 모두 제거하지 못한 경우도 있어 뒤에서 k개 만큼 제거해야 함 (예시를 알고 싶다...)
  stack.splice(stack.length - k, k);
  answer = stack.join("");
  return answer;
}

console.log(solution("1924", 2));
