// https://programmers.co.kr/learn/courses/30/lessons/12921
// https://ko.wikipedia.org/wiki/에라토스테네스의_체

function solution(n) {
  let answer = 0;
  let arr = [];

  // 0과 1은 소수가 아니므로 0 (false)
  arr[0] = 0;
  arr[1] = 0;

  // 2부터 시작해서 소수 찾기
  for (let i = 2; i * i <= n; i++) {
    // 제곱근까지 반복(Math.sqrt 사용가능)첫 번째 예시로 하면 (n=10) i값은 2와 3이 된다. 즉, 2와 3의 배수는 소수가 아님을 표현하면 된다.
    if (arr[i] != 0) {
      // =arr[i]가 소수라면
      for (let j = i + i; j <= n; j += i) {
        // 소수의 배수를 구하는 식: i=2를 넣었을 때 j는 4, 6, 8, 10이 되고 그 값은 모두 0이 된다.
        arr[j] = 0; // 소수가 아니므로 0 (false)
      }
    }
  }
  // 소수의 갯수
  for (let i = 0; i <= n; i++) {
    if (arr[i] != 0)
      //0이 아닌 것이 소수
      answer++;
  }
  return answer;
}
