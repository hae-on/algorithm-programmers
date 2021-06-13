// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); //최대공약수
  return arr.reduce((a, b) => (a * b) / gcd(a, b)); //최소공배수 구하는 식
}

console.log(solution([2, 6, 8, 14]));
