const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    const regex = /\s/gi;
    const text = str1 + str2; 
    text.replace(regex, '');
    text.trim();
    console.log(text);
});