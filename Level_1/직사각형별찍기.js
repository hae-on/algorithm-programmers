process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = "";
  for (let i = 0; i < b; i++) {
    for (let k = 0; k < a; k++) {
      answer += "*"; //한 줄의 별
    }
    answer += "\n"; //전체의 별
  }
  console.log(answer);
});
