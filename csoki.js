let age=27;
let maxAge=120;
let month=30;


let age1=Number.parseInt(age)
let maxAge1=Number.parseInt(maxAge)
let month1=Number.parseInt(month)

let agediff= maxAge1 - age1;

console.log(agediff);

let days= agediff*12*30;

console.log(days + " " + "tábla csokira van szükségem" + " " + agediff + " " + "éves koromig");
