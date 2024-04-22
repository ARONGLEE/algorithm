function solution(sides) {
    var answer = 0;
    const max_value = Math.max(...sides)
    for (let i = 0; i < sides.length; i++) {
        if(sides[i] === max_value) {
            sides.splice(i, 1);
        }
    }

    const sum = sides[0] + sides[1];
    if(max_value < sum) {
        answer = 1;
    } else if(sides.length === 1) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}