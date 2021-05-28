// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    //   ex) [2, 1, 3, 4, 1]일 때 2+1 , 2+3, 2+4, 2+1 / 1+3 1+4 1+1 / 3+4 3+1 / 4+1
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  //   중복 제거
  let answer = [...new Set(arr)];
  //   오름차순 정렬
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}
