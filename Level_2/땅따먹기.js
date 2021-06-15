// https://programmers.co.kr/learn/courses/30/lessons/12913?language=javascript
function solution(land) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    //  앞서 밟았던 칸의 열은 다음 차례에 밟으면 안 됌. 따라서 그 열 없이 적어주는 것.
    // 이전 행의 최댓값 + 현재 발판
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  let back = land.length - 1;
  //  마지막 값으로서 16, 15, 13, 13이 나옴. (= land[i][0], land[i][1], land[i][2], land[i][3] 값)
  answer = Math.max(land[back][0], land[back][1], land[back][2], land[back][3]);

  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
