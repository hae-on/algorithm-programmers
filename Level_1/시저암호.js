// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = "";
  for (i = 0; i < s.length; i++) {
    //   알파벳 사이의 띄어쓰기가 있는 경우
    if (s[i] == " ") answer += " ";
    else
    // String.fromCharCode을 통해 숫자를 아스키코드 문자열로 바꾸어준다.
    // 90은 대문자 Z로 90보다 크다는 것은 영어가 소문자임을 말한다.
      answer += String.fromCharCode(s.charCodeAt(i) > 90)
    //   소문자의 경우 97을 빼고 더해준다. 97은 아스키코드로 a를 말한다.
        ? ((s.charCodeAt(i) + n - 97) % 26) + 97
        // 대문자의 경우 65를 빼고 더해준다. 65는 아스키코드로 A를 말한다.
        : ((s.charCodeAt(i) + n - 65) % 26) + 65;

    return answer;
  }
}
