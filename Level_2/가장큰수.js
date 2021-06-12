// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  // map을 통해 배열 안의 숫자들을 문자형으로 바꾸어줌. 꼭 c가 아니여도 상관없음.
  //   sort를 통해 숫자가 더 큰 것이 앞으로 정렬된다. ex) [ '6', '2', '10' ]
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  // 테스트케이스11번으로 인해 추가. [0,0,0,0]이 있다고 함.
  return answer[0] == "0" ? "0" : answer;
}
console.log(solution([6, 10, 2]));
