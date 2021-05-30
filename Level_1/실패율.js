// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let failRates = [];

  //N이 5라면 플레이어들은 1부터 6까지의 수를 가짐.
  //i=1은 stage 1을 말함.
  for (let i = 1; i < N + 1; i++) {
    const unclearUser = stages.filter((el) => el == i).length;
    const reachUser = stages.filter((el) => el >= i).length;
    const failRate = unclearUser / reachUser;

    // failRates라는 빈 배열에 만들어준다.
    failRates.push({ stage: i, rate: failRate });
  }

  //정렬하기
  failRates.sort((a, b) => {
    if (a.rate < b.rate) return 1;
    if ((a, rate > b.rate)) return -1;
  });
  // 그대로 반환하면 ({stage: xx, rate: xx})형태로 반환하기에 배열형태로 만들어준다.
  return failRates.map((entry) => entry.stage);
}
