// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;
  let box = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // moves[i]-1는 열을 말하고 board[j]와 합쳐져 인형을 선택한다.
      if (board[j][moves[i] - 1] !== 0) {
        // 옮겨진 박스에서 위와 아래의 인형이 같으면 없어진다.
        if (box[box.length - 1] === board[j][moves[i] - 1]) {
          box.pop();
          // 두 인형이 사라짐.
          answer += 2;
          //   인형이 있던 자리는 없어졌으므로 0이 됨.
          board[j][moves[i] - 1] = 0;
          break;
        } else {
          // 인형이 같지 않으면 박스에 그대로 쌓임.
          box.push(board[j][moves[i] - 1]);
          board[j][moves[i] - 1] = 0;
          break;
        }
      }
    }
  }

  return answer;
}
