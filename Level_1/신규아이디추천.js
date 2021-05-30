// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    //  ^ : 문장의 시작  $ : 문장의 끝  \w : word 문자  .{2,} : .이 최소 2개 이상  | : 또는
    .replace(/[^a-z0-9\.\-\_]/gi, "")
    .replace(/\.+/g, ".")
    .replace(/^\.+|\.+$/g, "");
  if (new_id === "") new_id = "a";
  if (new_id.length >= 16) {
    // 여기의 replace는 마지막의 마침표를 제거해준다.
    new_id = new_id.slice(0, 15).replace(/\.$/, "");
  }
  if (new_id.length <= 2) {
    //   padEnd() 메서드는 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 끝(우측)부터 적용됩니다.
    // 즉, 3은 전체 길이가 3이라는 것.
    // new_id[new_id.length - 1]는 new_id의 마지막 문자를 구하는 식이다.
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }
  return new_id;
}
