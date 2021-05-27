// https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s) {
  s = s.toLowerCase();
  var answer = true;
  //   [ '', '', 'oooyy' ] 3 / [ 'ppooo', '', '' ] 3
  if (s.split("p").length === s.split("y").length) {
    return (answer = true);
  } else return (answer = false);
}

// 다른풀이
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
