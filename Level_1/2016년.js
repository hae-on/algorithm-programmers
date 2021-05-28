// https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  let answer = "";
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // 실제 날짜를 구하는 함수
  let date = new Date(`2016, ${a}, ${b}`);
  //   getDay() 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환합니다. 따라서 예시의 date.getDay() 값은 2, day에서 2 값은 TUE.
  answer = day[date.getDay()];
  return answer;
}
