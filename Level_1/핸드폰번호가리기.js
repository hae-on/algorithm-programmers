// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  // repeat를 통해 전체 길이의 4개 전까지 *로 반복
  // slice를 통해 문자열의 일부를 추출하면서 새로운 문자열을 반환 => 뒤에서 4글자 반환
  let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}
