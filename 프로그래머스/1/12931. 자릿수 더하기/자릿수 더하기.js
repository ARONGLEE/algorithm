function solution(n)
{
    var answer = 0;
    const str = String(n);
    const new_arr = Array.from(str);
    const num_arr = new_arr.map(Number);
    
    answer = num_arr.reduce((acc, cur) => {
        return acc + cur
    }, 0);
    
    console.log(answer);
    
    return answer;
}