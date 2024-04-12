const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let new_str = [...str]
    for (let i = 0; i < new_str.length; i++) {
        if(new_str[i] === new_str[i].toUpperCase()) {
            new_str[i] = new_str[i].toLowerCase()
        } else if (new_str[i] === new_str[i].toLowerCase()) {
             new_str[i] = new_str[i].toUpperCase();
        }
    }
 
    const answer = new_str.join('');
    console.log(answer);
       
});