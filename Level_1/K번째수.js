//https://programmers.co.kr/learn/courses/30/lessons/42748

// array	                commands	                        return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    // begin부터 end까지 배열 자르기 slice(begin, end)
    // 여기서는 [i, j, k] i가 begin, j가 end임
    // 처음 돌렸을 때 commands[i][0]은 commands[0][0]이고 값은 2, but array가 0부터 시작하기에 i의 값은 1이여야 함 그래서 -1 해 줌
    // slice한 값은 [5, 2, 6, 3]
    // sort를 통해 오름차순 정렬
    // sort한 값은 [2, 3, 5, 6]
    let num = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => {
      return a - b;
      // sort한 값에서 k번째 수 뱉기
      // 근데 여기도 num 값에서 -1 해줘야 0으로 시작하는 num값에서 맞게 찾음
    });
    answer.push(num[commans[i][2] - 1]);
  }
  return answer;
}
