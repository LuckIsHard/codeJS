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