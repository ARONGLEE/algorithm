function solution(my_string, overwrite_string, s) {
    const new_my_string = [...my_string];
    const cut_string = new_my_string.splice(s, overwrite_string.length, overwrite_string);
    const answer = new_my_string.join('');
    console.log(new_my_string);
    console.log(answer);
    
    return answer;
}