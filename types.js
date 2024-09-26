// let x = String(1112);
// x = String(2+2);
// x = String(true);
// x = String(new Date());
// x = String(['one','two','three']);

//x = (25).toString();

// console.log(x);
// console.log(typeof x);
// console.log(x.length);

// let y = parseFloat('123.25');

// console.log(y);
// console.log(typeof y);
// console.log(y.toPrecision(7));


const x = 5;
const y = true;
const z = x+y;

console.log(z);
console.log(typeof z);

// Math object

let result = Math.PI
result = Math.round(3.5);
result = Math.ceil(3.3);
result = Math.floor(3.7);
result = Math.sqrt(9);
result = Math.abs(-10);
result = Math.pow(3,4);
result = Math.trunc(100*(Math.random()));

// result = parseFloat('how many? 2');

console.log(result);

const H = 'Hello there';

console.log(H.charAt(H.length - 1));


let colors = 'red, green, blue';

result = colors.split(", ");
console.log(result);

result = colors.includes('blue');
console.log(result);

 colors.replace('blue','yellow');
console.log(colors);

x+=2;
const number = 10;

if (number > 0)
    {const text = 'the number is positive';

    }
    else{}