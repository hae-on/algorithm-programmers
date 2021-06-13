// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  // 유클리드 호제법: a를 b로 나눈 나머지를 r이라 하면 a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); //최대공약수
  const lcm = (a, b) => (a * b) / gcd(a, b); //최소공배수
  return [gcd(n, m), lcm(n, m)]; //배열값으로 반환
}

console.log(solution(2, 5));
