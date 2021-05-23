// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  arr.length > 1 ? arr.splice(arr.indexOf(Math.min(...arr)), 1) : (arr = [-1]);
  return arr;
}

// Math.min 은 배열에서 최소값을 찾아준다.
// arr.splice를 통해 배열의 기존 요소를 바꿔줄 수 있다.
// 우리는 [4,3,2,1]에서 1을 삭제해주고 싶다. 하지만 arr.splice(Math.min(...arr),1) 이렇게 작성한다면 arr.splice(1,1) 즉, 3을 제거한다.
// 최소값 1을 정확히 제거해주기 위해 indexOf를 통해 찾아준다. Math.min(...arr)에 index를 사용한다.
// 그러면 [4,3,2]가 출력된다. 여기서 arr의 길이가 1일 경우에는 -1을 리턴하라고 했다.
// 1 이상일 경우 참값으로 위의 식을 넣어주고 거짓일 경우 -1을 리턴하도록 한다.
