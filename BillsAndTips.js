const calculateTips = bill => bill < 20 ? bill*0.2 : bill*0.15;

const billsList = [11, 20, 47];
const tipList = [calculateTips(billsList[0]), calculateTips(billsList[1]),calculateTips(billsList[2])];
const totals = [billsList[0]+tipList[0], billsList[1]+tipList[1], billsList[2]+tipList[2]];

console.log(billsList);
console.log(tipList);
console.log(totals);