"use strict";


//alert('Hello');
// const res = confirm('Are you here?');
// console.log(res);
// const answer = prompt('Are you 18?', '18');
// console.log(typeof(answer));    

const answers = [];
answers[0] = prompt('Какое ваше имя?', '');
answers[1] = prompt('Какая фамилия?', '');
answers[2] = prompt('Сколько вам лет', '');

document.write(answers);

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

if(4==9){
    console.log('Ok!');
} else{
    console.log('Error');
}

let num = 50;

 while (num <= 55) {
     console.log(num);
     num++;
 }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++){
    console.log(i);
}



(num == 50) ? console.log('Ok!') : console.log('Error');

switch(num){
    case 49:
        console.log('Not right');
        break;
    case 100:
        console.log('Not right');
        break;
    case 50:
        console.log('Right');
        break;
    default:
        console.log('Not this time');
        break;
}

console.log(1 && 2);

for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);        
    }
}

let result = '';
    length = 7;

for (let i = 1; i < 7; i++){
    for (let j = 0; j < i; j++){
        result += '*'
    }
    result += '\n';
}
console.log(result);

first: for (let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);      
        }        
    }
}


for (let i = 5; i < 11; i++){
    console.log(i);
}// Пишем решение вот тут

for (let i = 20; i > 10; i--){
    if (i === 13) break;
    console.log(i);
}

for (let i = 2; i < 11; i++){
    console.log(i);
    i += 1;
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 3;
while (i <= 16) {
    if (i % 2 === 0) {
        i+=1;
        continue;
    } else {
        console.log(i);
        i+=1;
    }
}

const arrayOfNumbers = [];
for (i=5; i<=10; i++){
    arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
}
console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++){
    if (typeof(data[i]) === 'number'){
        data[i] = 2*data[i];        
    } else {
        data[i] = data[i] + ' - done';
    }    
}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i=0; i<data.length; i++){
    result[i] = data[data.length-i-1];
}
console.log(result);
