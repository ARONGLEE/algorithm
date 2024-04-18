function solution(id_pw, db) {
    var answer = '';
    let id = id_pw[0];
    let pw = id_pw[1];
    
    if (db.some(inner => JSON.stringify(inner) === JSON.stringify(id_pw))) {
        answer = "login";
    } else if (db.some(inner => inner[0] === id && inner[1] !== pw)) {
        answer = "wrong pw";
    } else if (db.some(inner => inner[0] !== id)) {
        answer = "fail"
    }
   
    return answer;
}