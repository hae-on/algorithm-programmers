// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let zeroCnt = 0;
  let matchCnt = 0;

  // 0의 개수 세기
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) zeroCnt++;
    // 일치하는 숫자 개수 세기
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        matchCnt++;
        break;
      }
    }
  }

  //   로또는 6위 이상 넘을 수 없으므로 최소값 6으로 설정
  let best = Math.min(7 - (matchCnt + zeroCnt), 6);
  let worst = Math.min(7 - matchCnt, 6);

  return [best, worst];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
