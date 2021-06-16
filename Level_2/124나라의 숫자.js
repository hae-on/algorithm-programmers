https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
    var answer = '';
    let restNum = '';

     while(n > 0){
        //  n을 3으로 나누었을 때의 나머지
        restNum = n % 3;
        // n을 3으로 나누었을 때의 몫
        n = Math.floor(n / 3) ;

        // 규칙을 보면 몫+ 나머지를 하면 답이 나옴. 그런데 나누어 떨어지는 수 경우 몫에서 1을 빼줘야 함.
        if(restNum === 0){
            n -= 1;
            restNum = 4;
        }
        answer = restNum + answer;
        }
    return answer;
}

console.log(solution(4))