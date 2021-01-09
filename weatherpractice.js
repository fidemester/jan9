
let number=window.prompt("Add meg hány fok van Fahrenheitben és én átszámolom!");

let celsiusnumber=Number.parseInt(number);
//math

let celsius= (number - 32) / 1.6;




document.getElementById("celsius").innerHTML="C:" + celsius;