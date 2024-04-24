function solution(ineq, eq, n, m) {
    var answer = 0;
    if(ineq === "<" && eq === "=" && n <= m) {
        answer = 1;
    } else if(ineq === ">" && eq === "=" && n >= m) {
        answer = 1;
    } else if(ineq === "<" && eq === "!" && n < m) {
        answer = 1;
    } else if(ineq === ">" && eq === "!" && n > m) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    console.log(answer);
    return answer;
}