// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = [];

  // arr1과 arr2를 이진수로 바꾼다. 하지만 맨 앞의 0을 출력하지 않는다. 따라서 앞의 식을 통해 0을 더해준다.
  for (let i = 0; i < n; i++) {
    let first = "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString;
    let second = "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString;

    let temp = "";

    for (let j = 0; j < n; j++) {
      if (first[j] === "0" || second[j] === "0") {
        temp += " ";
      } else if (first[j] === "1" || second[j] === "1") {
        temp += "#";
      }
    }
    answer.push(temp);
  }

  return answer;
}
