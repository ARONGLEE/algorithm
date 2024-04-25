function solution(num) {
    var answer = 0;
    let count = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
        num = num / 2;
        count += 1;
    } else if (num % 2 !== 0) {
        num = (num * 3) + 1;
        count += 1;
    } 
    }
    
    if(count >= 500) {
        answer = -1;
    } else if (num === 1 && count === 0) {
        answer = 0;
    } else {
        answer = count;
    }
    
    return answer;
}