const getAverage = (sale1, sale2, sale3) => (sale1 + sale2 + sale3)/3;
   


 let sale1 = Number(prompt('How much Department 1 sold in first month?'));
 console.log(sale1);
 let sale2 = Number(prompt('How much Department 1 sold in second month?'));
 let sale3 = Number(prompt('How much Department 1 sold in third month?'));

const Average1 = getAverage(sale1, sale2, sale3);

console.log(Average1);

sale1 = Number(prompt('How much Department 2 sold in first month?'));
sale2 = Number(prompt('How much Department 2 sold in second month?'));
sale3 = Number(prompt('How much Department 2 sold in third month?'));

const Average2 = getAverage(sale1, sale2, sale3);

console.log(Average1);

console.log(Average2);
 
if (Average1 > Average2){
    const bonus = ((Average1-Average2)/Average2)*100
    console.log(bonus);
    console.log(`Department 1 sold more, than Department 2. It recieves ${bonus >= 30 ? `${bonus}%` : 'no'} bonus`)
}
else {
    const bonus = ((Average2-Average1)/Average1)*100
    console.log(bonus);
    console.log(`Department 2 sold more, than Department 1. It recieves ${bonus >= 30 ? `${bonus}%` : 'no'} bonus`)
}