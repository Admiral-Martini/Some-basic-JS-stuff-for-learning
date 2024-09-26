function colorMixer(color1, color2){
    const newColor = `${color1}+${color2}`
    return newColor;
}

function colorizer(item, color1, color2) {
    const color = colorMixer(color1, color2);
    const colorizeditem = `The ${item} is ${color}`
// console.log(colorizeditem)
return colorizeditem
}
const colorizedCar = colorizer('car', 'red', 'orange');
console.log(colorizedCar);

console.log(colorizer('house','white', 'black'));