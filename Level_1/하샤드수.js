// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  return !(
    x %
    String(x)
      .split("")
      .reduce((a, b) => +a + +b)
  );
}

// 숫자 x의 자릿수의 합으로 x가 나누어지는지 확인하기 위해서는 먼저 각 자릿수를 하나씩 얻어와야 한다.
// split 함수를 사용하기 위해 숫자 형식인 x를 String(x)로 문자열로 바꾼다.
// split 함수를 사용해 한 글자씩 배열에 나눈다.
// reduce 함수를 사용해 모든 자릿수를 더한다.
// 아직 문자열이기에 더해지지 않는다. 따라서 reduce 안에 변수 a와 b의 바로 앞에 "+" 를 붙여 숫자 형식으로 만들어 준 뒤 더한다.
// 숫자 x에 "%"를 사용하여 각 자릿수를 더한 값으로 나눈 나머지를 구한다.
// 그리고 만약 나머지가 없는 0이라면 true를, 0이 아니라면 false를 return 할 수 있도록 결과의 앞에 "!"를 붙여 boolean 값으로 만든다.

