// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  var sum = brown + yellow;

  // 최소 길이는 3, 최대 길이는 sum/i
  for (var i = 3; i <= sum / i; i++) {
    //   js의 경우 '/' 사용 시 소숫점이 발생할 수 있음. 따라서 Math.floor 사용.
    var x = Math.floor(sum / i);
    // brown과 yellow의 차이가 2씩 남. 전체 가로길이에서 -2, 전체 세로길이에서 -2하면 yellow의 길이가 나옴.
    if ((x - 2) * (i - 2) === yellow) {
      break;
    }
  }
  return [x, i];
}

console.log(solution(10, 2));
