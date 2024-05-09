function solution(x) {
    var answer = true;
    const sum = String(x).split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    if(x % sum === 0) {
        answer = true
    } else {
        answer = false
    }
    
    console.log(answer);
    return answer;
}