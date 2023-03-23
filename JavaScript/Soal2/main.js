var {tambah} = require('./aritmatika.js')
var {kurang} = require('./aritmatika.js')
var {bagi} = require('./aritmatika.js')
var {kali} = require('./aritmatika.js')

const string = "4000 / 2 + 25 - 2";
const regex = /[+\-*/]/g;

const operators = string.match(regex);
const numbers = string.split(regex).map(Number)

for(var i=0; i<operators.length; i++){
    if(operators[i]== '/'){
        numbers[i+1] = bagi(numbers[i], numbers[i+1]);
        numbers[i] = NaN ;
        operators[i] = '+';
    }
    else if(operators[i] == '*'){
        numbers[i+1] = kali(numbers[i], numbers[i+1]);
        numbers[i] = NaN;
        operators[i] = '+';
    }
}

for(var i=0; i<operators.length; i++){
    if(isNaN(numbers[i])){
        continue;
    } 
    else if(isNaN(numbers[i+1])){
        numbers[i+1] = numbers[i];
        numbers[i] = NaN;
        operators[i+1] = operators[i];
        continue;
    } 

    if(operators[i]== '+'){
        numbers[i+1] = tambah(numbers[i], numbers[i+1]);
        numbers[i] = NaN;
    }
    else if(operators[i] == '-'){
        numbers[i+1] = kurang(numbers[i], numbers[i+1]);
        numbers[i] = NaN;
    }
}

console.log(numbers[operators.length]);