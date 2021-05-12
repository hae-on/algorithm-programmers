//https://programmers.co.kr/learn/courses/30/lessons/70128

//1
function solution(a, b) {
  let answer = 0;
  for (let i in a) {
    //for(let i=0; i<a.length; i++)도 가능
    answer += a[i] * b[i];
  }
  return answer;
}

//2
function solution(a, b) {
  let i = 0;
  let sum = 0;

  while (i < a.length) {
    sum += a[i] * b[i];
    i++;
  }

  return sum;
}
