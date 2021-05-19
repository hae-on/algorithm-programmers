function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    // 첫번째 2*1
    // 두번째 2*2 ... n번째까지 곱해서 배열에 들어감
    answer.push(x * i);
  }
  return answer;
}
