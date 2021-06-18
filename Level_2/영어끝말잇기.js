// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  var answer = [0, 0];
  // 사용한 단어를 담아주는 배엹
  let usedWord = [];

  usedWord.push(words[0]);

  for (let i = 1; i < words.length; i++) {
    let beforeWord = words[i - 1];
    let currentWord = words[i];
    // 만약 이전 글자의 맨 끝자리 알파벳과 다음 글자의 알파벳 첫 글자가 같다면
    // && 한 번도 나오지 않은 단어라면 (indexOf는 같은 단어 없으면 -1을 뱉음)
    if (
      beforeWord[beforeWord.length - 1] == currentWord[0] &&
      usedWord.indexOf(currentWord) == -1
    ) {
      // 그대로 진행
      usedWord.push(currentWord);
    } else {
      // 배열은 0부터 시작하니까 일반 숫자처럼 맞추려면 1씩 더해주어야 함
      let turn = parseInt(i / n) + 1;
      let player = (i % n) + 1;
      return (answer = [turn, player]);
    }
  }
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
