function solution(n) {
    var answer = 0;
    const arr = String(n).split('').map(Number).sort((a,b) => b-a);
    answer = parseInt(arr.join(""));

    return answer;
}