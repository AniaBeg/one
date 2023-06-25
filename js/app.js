console.log('działa!');

let a = 15;
let b = 10;

if (a > b) {
    console.log('a jest większe od b');
}

let weather = "wind";

switch (weather) {
    case "sun":
        console.log('It’s sunny! 🌞')
        break;
    case "rain":
        console.log('It’s raining! 🌧️')
        break
case "wind":
    console.log('It’s windy! 🌬️')
    break      
}

for (let i = 1; i <= 10; i += 1) { 
    console.log("id-" + i);
}

let counter = 0;
while(counter < 10) {
    console.log("JavaScript jest super!");  
    counter += 1;
}

let group  = ["Anastazja", "Magda", "Asia", "Ania"]
console.log(group.length);
console.log(group[0]);
console.log(group[3]);

group.push('Kasia');

console.log(group);

group[4] = "Tomek";

console.log(group);

let praca = ["Ola", "Ala", "Ula" ];
let imprezy = ["Aga", "Iga","Ula" ];

let all_friends = praca.concat(imprezy);
console.log(all_friends)

let part = group.slice(0,2);
console.log(part);

let grupa = ["Anastazja", "Magda", "Asia", "Ania"];

if (grupa.indexOf('Ania') !== -1) {
    console.log('Ania znajduje się w tej tablicy!');
} else {
    console.log('Ani nie ma w tej tablicy');
}

for (let i = 0; i < grupa.length; i += 1) {
    console.log("Cześć" + " " + grupa[i] + " "+  "Miło nam Cię powitać na girls.js!");
}

let wierszyk = "Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki."
samogłoski = "aoeiu"

for (let i=0; i< wierszyk.length; i ++ ) {

    if (samogłoski.indexOf(wierszyk[i])>-1) {
        console.log(wierszyk[i])
    }
}

function HelloGirlsJS(imię) {
console.log("Cześć!" + " " + imię+ " " + "Witaj na girls.js!")
}
HelloGirlsJS("Ania")

let header = document.querySelector("h1");


function getRandomColor() {       
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];

        color += randomLetter;
    }

    return color;
}

getRandomColor();

var title = document.getElementById("magic");
console.log(title)


function changeColor(text) {
    text.style.color = getRandomColor();

}

setInterval(function() { 
    changeColor(title); 
}, 2000);


changeColor(title);

