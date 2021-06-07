// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let total = 0;
  let answer = 0;

  // 오름차순으로 정렬
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (total + d[i] <= budget) {
      total += d[i];
      // d[i]의 값을 돌려보면 첫번째 예시의 경우 1, 2, 3 / 두번째 예시의 경우 2, 2, 3, 3이 나온다.
      //   total의 값을 돌려보면 첫번째 예시의 경우 1, 3, 6 / 두번째 예시의 경우 2, 4, 7, 10이 나온다.
      answer++;
    }
  }
  return answer;
}
