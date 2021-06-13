// https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
function solution(citations) {
  // H-Index 구하는 법: 내림차순 정렬을 한다. 인덱스 번호[배열 인덱스 + 1] <= 배열 요소(배열[인덱스])
  let index = 0;
  citations = citations.sort((a, b) => b - a);
  while (index + 1 <= citations[index]) index += 1;
  return index;
}

console.log(solution([3, 0, 6, 1, 5]));
