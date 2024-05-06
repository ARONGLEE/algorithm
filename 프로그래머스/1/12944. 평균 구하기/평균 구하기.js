function solution(arr) {
    var answer = 0;
    const total = arr.reduce((acc, cur) => 
       (acc+cur), 0
    );
    answer = total / arr.length;
    console.log(answer);
    return answer;
}