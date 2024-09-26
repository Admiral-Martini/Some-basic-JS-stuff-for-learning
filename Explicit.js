const age = prompt('enter your age');
if (age >= 18) {
  console.log('You can watch this video');
} else {
  const yearsLeft = 18 - age;
  console.log(`You can't watch this video. Wait another ${yearsLeft} years`);
}
