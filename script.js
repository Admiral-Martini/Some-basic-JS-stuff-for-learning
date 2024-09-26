console.log('Hello console');
let result = "i don't want to play \"Heartstone\""
let Last = result.charAt(result.length - 1);
console.log(Last);
console.log(result);
const H = "Oh, hello there. "
result = H.concat(result);
console.log(result);
result = H.indexOf('l');
console.log(result);

result = H.substring(0,2); 

console.log(result);

result = H.slice(-7);
console.log(result);


result = H.split(' ');
console.log(result);


const colors = 'red, green, blue';

result = colors.split(", ");
console.log(result);

result = colors.includes('blue');
console.log(result);

// let favoriteColor;
// favoriteColor = prompt('What\'s your favorite color?');

// console.log('your favorite color is ' + favoriteColor);

// let yourName;
// yourName = prompt('What is your name?');
// let age = prompt('What is your age?');

// console.log('Your name is ' + yourName + ' and you are ' + age + ' years old');


// let x = true;
// let y = 0;

// console.log('Is x bigger than y? Ok, here\'s the answer: it is ' + (x > y));

// console.log(x == 1);

// let x, y ;
// console.log(x === y);


// async function getData() {
//   return Promise.resolve('data');
// }

// async function getMoreData(data) {
//   return Promise.resolve(data + 'more data');
// }

// async function getAll() {
//   const data = await getData();
//   const moreData = await getMoreData(data);
//   return `All the data: ${data}, ${moreData}`;
// }

// getAll().then((all) => {
//   console.log('all the data')
// })

x=0

y=3

x+=10;

y = x++;
console.log(x, y);