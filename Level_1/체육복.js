// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  let answer = 0;

  // 모두 다 체육복을 가지고 있는 것(1)으로 배열 설정
  let clothes = new Array(n).fill(1);

  // 체육복을 잃어버린 경우 설정
  for (let i = 0; i < lost.length; i++) {
    clothes[lost[i] - 1]--;
  }

  // 체육복 여벌이 있는 경우 설정
  for (let i = 0; i < reserve.length; i++) {
    clothes[reserve[i] - 1]++;
  }

  // 체육복이 없는 경우 앞이나 뒤 친구에게 빌린다.
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i] === 0) {
      if (clothes[i - 1] === 2) {
        clothes[i]++;
        clothes[i - 1]--;
      } else if (clothes[i + 1] === 2) {
        clothes[i]++;
        clothes[i + 1]--;
      }
    }
    if (clothes[i] >= 1) answer++;
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
