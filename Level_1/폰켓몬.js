//https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  var answer = 0;
  let numlength = nums.length / 2; //2 3 3
  let removeOverlap = [...new Set(nums)].length; //3 3 2
  if (numlength < removeOverlap) {
    answer = numlength;
  } else {
    answer = removeOverlap;
  }
  return answer;
}
