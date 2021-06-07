// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  var answer = [];
  var temp = 0;
  var result = 0;

  //  점수가 0~10까지의 정수
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 한글자씩 인식하기에 두자리인 10의 경우 이렇게 작성
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      answer.push(temp);
    } else if (dartResult[i] === "D") {
      answer.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      answer.push(Math.pow(temp, 3));
    } else if (dartResult[i] === "#") {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    result += Number(answer[i]);
  }
  return result;
}
