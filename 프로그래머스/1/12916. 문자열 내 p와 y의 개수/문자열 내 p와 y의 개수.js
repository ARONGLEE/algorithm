function solution(s){
    var answer = true;
    let p_count = 0;
    let y_count = 0;
    
    const arr = [...s]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'p' || arr[i] === 'P') {
            p_count++;
        } else if(arr[i] === 'y' || arr[i] === 'Y') {
            y_count++;
        }
    }
    if(p_count === y_count) {
        answer = true;
    } else {
        answer = false;
    }
    
    console.log(answer);

    return answer;
}