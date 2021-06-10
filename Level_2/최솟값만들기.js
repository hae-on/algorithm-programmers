// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  console.log(A);
  console.log(B);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
console.log(solution([1, 4, 2], [5, 4, 4]));
