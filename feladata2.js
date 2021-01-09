//popup

let number=window.prompt("Kérlek üss be egy számot!");
let number2=window.prompt("Kérlek üss be még egy számot!");

//string to number

let first=Number.parseInt(number)
let second=Number.parseInt(number2)

// math
let summ=first+second;
let multi=first*second;
let expo=first * first + "," + second * second;
let pit= first * first+ second*second;
let pitagoras=Math.sqrt(pit);
let circle= (first + first) * Math.PI + "," + first * first * Math.PI;

//log
console.log(summ);
console.log(multi);
console.log(expo);
console.log(pitagoras);
console.log(circle)