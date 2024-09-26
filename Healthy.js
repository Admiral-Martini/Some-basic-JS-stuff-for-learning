let height = prompt('What is your height in meters?');
let mass = prompt('what is your weight in kilograms?');

let BMI = mass/(height*height);

if((BMI < 25)&&(BMI > 18)) 
{
    console.log('You are having a normal Body Mass Index');
    alert('You are having a normal Body Mass Index');
}
else if(BMI > 25)
{
    console.log(`your Body Mass Index is bigger than normal by ${BMI - 25}`);
    alert(`your Body Mass Index is bigger than normal by ${BMI - 25}`);
}
else
{
    console.log(`your Body Mass Index is lower than normal by ${18-BMI}`)
    alert(`your Body Mass Index is lower than normal by ${18-BMI}`);
} 