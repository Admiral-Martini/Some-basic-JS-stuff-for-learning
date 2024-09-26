// people = {
//     newGuy : function()
//     {   
//         claim = prompt('What property do you want to add?');
//         info = prompt('Enter definition for the desired property');
//         return this[claim] = info;
//     }
// }

// console.log(people);

jackObject = {
    firstName: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.7,
    calcBMI: function()
    {
        return this.BMI = this.weight/(this.height*this.height)
    }
};

mikeObject = {
    firstName: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93,
    calcBMI: function()
    {
        return this.BMI = this.weight/(this.height*this.height)
    }
};

console.log(`${jackObject.firstName} ${jackObject.lastName} BMI (${jackObject.calcBMI()} is ${jackObject.BMI > mikeObject.calcBMI() ? 'higher' : 'lower'} than ${mikeObject.firstName} ${mikeObject.lastName} BMI (${mikeObject.BMI}))`)