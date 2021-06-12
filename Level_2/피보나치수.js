// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let answer = [0, 1];

  //   피보나치수는 0, 1, 1, 2, 3, 5... 순으로 이루어짐. 따라서 배열로 이 형태를 만들어준다.
  for (let i = 2; i <= n; i++) {
    //  피보나치 수 = f(n) = f(n-2) + f(n-1)
    answer.push((answer[i - 2] + answer[i - 1]) % 1234567);
  }

  return answer[n];
}

console.log(solution(3));
