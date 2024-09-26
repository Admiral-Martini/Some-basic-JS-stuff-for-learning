   let login;
    function printText() {
        console.log('Hello to everyone');
    }

    printText(login, 14, [1,2,3,4], 5);
    printText(login, 1, ['look','kolor','kotlin','ln10x2']);
    printText(login, 10, ['data','date']);

// function colorizer(item, color, colorCode) {
//     console.log(item, color);
// const colorizeditem = `The ${item} is ${color}. The code of the color is ${colorCode}.`
// // console.log(colorizeditem)
// return colorizeditem
// }
// const messageFromColorizer = colorizer('desk', 'red', 99);
// console.log(`We have the following message: ${messageFromColorizer}`)

// const messageFromColorizer2 = colorizer('hand', 'green', 10);
// console.log(`We have the following message: ${messageFromColorizer2}`)

const x = 7;
const y = 3;

let isXMore = x !== y;

console.log(isXMore);

function getAge(birthYear, yearNow){
    // const age = yearNow - birthYear;
    // return age;
    return yearNow - birthYear;
}

const myAge = getAge(1974, 2021);
console.log(myAge);


const getAge2 = function (birthYear, yearNow) {
    return yearNow - birthYear;
}

const myAge2 = getAge2(1974, 2021);
console.log(myAge2);



// const getAge2 = function (birthYear, yearNow) {
//     return yearNow - birthYear;
// }

// const myAge2 = getAge2(1974, 2021);
// console.log(myAge2);

const getAge3 = (birthYear, yearNow) => yearNow - birthYear;

const myAge3 = getAge3(1974, 2021);
console.log(myAge3);

// const canBuyAlcohol = (birthYear, yearNow) => {
//     const age = yearNow - birthYear;
// const isPersonOlderThan21 = age >= 21 ? true : false;
// return isPersonOlderThan21;
// }
// console.log(canBuyAlcohol(2006, 2021));

let today; 
today = new Date().getFullYear();
console.log(today);

const canBuyAlcohol = (birthYear, today) => {     // Optimized version
    return (today - birthYear) >= 21 ? true : false;
}
console.log(canBuyAlcohol(1995, 2021));

const getAge4 = (birthYear, today) => today - birthYear;
let myAge4 = getAge(1974 , today);
console.log(myAge4)