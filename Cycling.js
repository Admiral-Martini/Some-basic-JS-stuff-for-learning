// ФОРЫ //
// ФОРЫ //

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`push ups repetition ${rep}`);
// }

// const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer',['Irina','Michael']];

// const types = [];

// for(let i=0; i < user123.length; i++)
// {
//     console.log(user123[i], types[i] = typeof user123[i])
// };

// console.log(types);

// const birthYears = [1974, 1994, 2000, 2003];

// const ages = [];

// for(i=0; i < birthYears.length; i++)
// {
//     ages[i] = (new Date.getFullYear - birthYears[i])
// }

// console.log(ages);

// const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer',['Irina','Michael'], false];

// for(let i=0; i < user123.length; i++)
// {
//     if(typeof user123[i] === 'number') break;

//     console.log(user123[i], typeof user123[i])

// };

// const birthYears = [1974, 1994, 2000, 2003];

// const ages = [];

// for(i=0; i < birthYears.length; i++)
// {
//     ages[i] = (new Date().getFullYear() - birthYears[i])
// }

// console.log(ages);

// console.log('BACKWARDS ITERATION');

// const user123 = ['YouRa', 'Allakhverdov', 1974, 'developer',['Irina','Michael'], false];

// for(let i = user123.length - 1; i >= 0; i--)
// {
//     console.log(i, user123[i]);
// }

// console.log('Лупа в лупе');

// for(let exercise = 1; exercise <= 3; exercise++)
// {
//     console.log(`Exercise ${exercise}`)
//     for(let rep = 1; rep <= 5; rep++)
//     {
//         console.log(`Ex ${exercise} Rep ${rep}`);
//     }
// }

// ВАЙЛЫ
// ВАЙЛЫ

// let rep = 1;

// while(rep <= 10)
// {
//     console.log(`Push ups repetition ${rep}`);
//     rep++;
// }

let diceNumber;
while (diceNumber !== 6) {
  diceNumber = Math.round(Math.random() * 5) + 1;
  console.log(diceNumber);
}
