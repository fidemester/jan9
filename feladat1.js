let name=window.prompt("Hogy hivnak?");
let num=window.prompt("Mi a kedvenc számod?");

console.log(name);
console.log(num);

window.alert("Név: "+name+ " " +"," + "Kedvenc szám:" + num);
document
    .getElementById("feladat1")
    .innerHTML = "Név: "+ name + "<br>" + "Kedvenc szám: "+ num ;
