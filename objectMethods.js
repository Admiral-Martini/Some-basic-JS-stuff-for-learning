youraObject = {
    name: 'YouRa', 
    lastname: 'Alefosaros', 
    birthYear: 1965, 
    job: 'Grave Digger', 
    relatives:['Irina','Nasralla'],
    hasDriverLicense: true,
    // calcAge: function(birthYear){return 2021 - birthYear;}

    // calcAge: function(){return 2021 - this.birthYear;}

    
    calcAge: function(){
        return this.age = 2021 - this.birthYear;
    },
    getSummary: function() {
        return `${this.name} is ${this.calcAge()}-years old ${this.job} and he ${this.hasDriverLicense ? 'have' : 'have not'} driver license `
    }
};

// console.log(youraObject.calcAge());

// console.log(youraObject.calcAge());
// console.log(youraObject.calcAge());
// console.log(youraObject.calcAge());
console.log(youraObject.calcAge())
console.log(youraObject.age)

console.log(youraObject.getSummary());

// console.log(`${youraObject.name} is ${youraObject.age} ${youraObject.job} and he ${youraObject.hasDriverLicense ? 'have' : 'have not'} driver license `)