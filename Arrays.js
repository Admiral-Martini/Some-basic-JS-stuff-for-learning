const color1 = 'red';
const color2 = 'orange';
const color3 = 'yellow';
const color4 = 'green';
const color5 = 'blue';
const color6 = 'indigo';
const color7 = 'violet';

console.log(color2);

const rainbowColors = ['red','orange','yellow','green','blue','indigo','violet'];

console.log(rainbowColors[0]);

console.log('The sky is ' + rainbowColors[4]);

rainbowColors[5] = 'dark blue';
rainbowColors[rainbowColors.length] = 'indigo';

console.log(rainbowColors);

// const stringNumbers = [];

// stringNumbers[0] = 'one';
// stringNumbers[1] = 'two';
// stringNumbers[2] = 'three';

const stringNumbers = new Array('one', 'two', 'three');

console.log(stringNumbers);

const anyItems = [4, true, new Date(), 'something'];
console.log(anyItems);


const numbers = [23,54,4,31,11];
console.log(numbers);
let result;

result = numbers.length;

result = Array.isArray(numbers);

result = numbers.indexOf(4);

result = numbers.push(7);

result = numbers.pop();
result = numbers.pop();


result = numbers.unshift(3);

result = numbers.shift();

result = numbers.push(1,22,33);
result = numbers.unshift(1,22,33);

result = numbers.splice(1, 3);

result = numbers.reverse();

result = numbers.slice(1 , 4);

result = numbers.concat(result);




console.log(result);