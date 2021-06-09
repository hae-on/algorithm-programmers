// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  var answer = 1;
  var obj = {}; //중복되는 의상을 처리하기 위해 json 객체 사용
  clothes.forEach(function (element) {
    if (obj[element[1]] >= 1)
      //중복되는 키 값이 존재할 때 +1
      obj[element[1]] += 1;
    //처음 등장하는 의상일 때 1로 초기화
    else obj[element[1]] = 1;
  });

  for (var x in obj) //json 객체에 담긴 값으로 계산
    answer *= obj[x] + 1;
  // 모든 옷을 입지 않은 경우 제외
  return answer - 1;
}
var clothes = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];
console.log(solution(clothes));

// 다른풀이
function solution(clothes) {
  // 해당 종류의 옷을 입지 않은 경우도 계산해야하기에 기본값 1 설정
  var answer = 1;
  var obj = {};
  for (var i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    //{헤드기어 3, 안경 2}
  }

  for (var key in obj) {
    answer *= obj[key]; // 3 * 2
  }

  return answer - 1;
}
