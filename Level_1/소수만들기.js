// https://programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        //   1+2+3=6  1+2+4=7  1+3+4=8  2+3+4=9  number = 6, 7, 8, 9
        let number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) answer++;
      }
    }
  }

  function isPrime(number) {
    if (number < 2) return true;
    // 6 % 2   6 % 3   6 % 4   6 % 5
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }
  return answer;
}
