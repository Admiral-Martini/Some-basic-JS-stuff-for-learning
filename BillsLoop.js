bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
tips = [];
totals = [];

const calculateTips = bill => bill < 20 ? bill*0.2 : bill*0.15;
// let oneTip = calculateTips(bills[1]);
// console.log(oneTip);
// console.log(bills.length);
// tips.push(oneTip + 25);
for(let i=0; i < bills.length; i++)
{
    const tip = calculateTips(bills[i])
    tips.push(tip)
    totals.push(tip+bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

function calculateAverage(arr)
{
    let average = 0;
    for(let i = 0; i < arr.length; i++)
        {average+=arr[i];
        }
    return (average/arr.length);      
}

console.log(calculateAverage(totals));