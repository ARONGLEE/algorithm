function solution(n) {
    var answer = 0;
    let num = [];
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) {
            num.push(i);
        }
    }
 
    answer = num.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    
    return answer;
}