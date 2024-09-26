const personData = ['YouRa','Alefosaros',1965,'Grave Digger',['Irina','Nasralla']];
console.log(personData[1]);

youraObject = {
    name: 'YouRa', 
    lastname: 'Alefosaros', 
    birthYear: 1965, 
    job: 'Grave Digger', 
    relatives:['Irina','Nasralla']
};

console.log(youraObject);

console.log(youraObject.name);

console.log(youraObject['name']);

const baseName = 'name';

console.log(youraObject['last'+baseName]);









// const claim = prompt('What do you want to know? Choose between name, lastname, birthyear, job, relatives');

// if(youraObject[claim]){
// console.log(youraObject[claim]);
// }
// else {
//     console.log('this property does not exist!')
// }

youraObject.location = 'Ukraine';
youraObject['telegram'] = '@YouRaAll';
console.log(youraObject);

console.log(`${youraObject.name} has ${youraObject['relatives'].length} family members and the first one is ${youraObject.relatives[0]}`);

