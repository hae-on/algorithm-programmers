// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  var answer = [s.length]; //압축이 안 되었을 때 문자열 넣어줘야 한대서 적었는데 이거 빼고 해보니까 answer.push가 함수가 아니라는 오류가 뜸

  // 문자열은 1개부터 s.length/2개만큼 쪼갤 수 있음 (해도 되지만 굳이 안 할 필요는 없는?)  예시에서 i는 1,2,3,4
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let cnt = 1; // 중복 문자열의 갯수
    let addstr = ""; // 압축한 문자열
    // j = 0, 1, 2, 3, 4, 5, 6, 7, 0, 2, 4, 6, 0, 3, 6  자세히 보면 하나씩, 두개씩, 세개씩 끊을 수 있다는 느낌이 옴
    for (let j = 0; j < s.length; j += i) {
      // substring(x, y) x번째부터 y번째 전까지 문자 뱉어냄
      // first = a, a, b, b, a, b, c, c, c   aa, bb, ac, cc   aab, bac, cc
      // second = a, b, b, a, c, c   bb, ac, cc   bba, cc
      let first = s.substring(j, j + i);
      let second = s.substring(j + i, j + i * 2);
      // 그래서 첫번째 문자와 두번째 문자가 같다면 중복, 따라서 cnt에 1을 더해줌
      if (first === second) {
        cnt += 1;
      } else {
        // cnt의 초기값이 1이므로 cnt가 1이라는 것은 중복이 없었다는 뜻 따라서 처음 문자 그대로 투입
        if (cnt == 1) {
          addstr = addstr + first;
        } else {
          // cnt가 1이 아니라는 것 즉, 중복이 있다는 뜻 cnt + 중복문자열의 형태이므로 형식대로 맞춰준다
          addstr = addstr + cnt + first;
          // for문을 벗어나기 전 cnt를 초기화해준다 (1로 잘랐으면 2로도 잘라야하고, 3으로도 잘라야하고... 하니까 그 전에 그릇을 비워주는 것)
          cnt = 1;
        }
      }
    }
    // addstr = 2a2ba3c, aabbaccc, aabbaccc, aabbaccc  여기서 길이가 제일 짧은 게 압축이 잘 된 것
    answer.push(addstr.length);
  }
  return Math.min(...answer);
}
console.log(solution("aabbaccc"));
