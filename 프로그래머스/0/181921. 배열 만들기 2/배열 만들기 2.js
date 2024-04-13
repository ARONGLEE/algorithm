function solution(l, r) {
    var answer = [];
    for (i = l; i <= r; i++) {
        const strNum = String(i);
        if((/^[05]+$/).test(strNum)) {
             answer.push(i);
        }  
    } 
    console.log(answer);
    return answer.length === 0 ? [-1] : answer;
}