//aray methods:
//include method
var str2 = ['cy', 'bo', 'zu'];
console.log(str2.includes('zu'))
//
const cars = [];
cars[0]= "Lambo";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars)
console.log(cars.length)
console.log(cars[0])
//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "" + fruits[i] + "</li>";
}
console.log(text += "</ul>");
