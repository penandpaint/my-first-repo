/*console.log("hello");
let myAge = 39;
myAge = 10;
console.log(myAge);
let yourAge = 10;
console.log(myAge == yourAge);*/

// an array to store my things
let myArray = ["hello", 10, true];
//console.log(myArray[1])

for (let i = 0; i < myArray.length; i++) {
	console.log("the index", i);
    console.log(myArray[i]);
}
let sum = function(x,y) {
    return x+y;
    console.log("This is the sum", x+y);
}
let mySum = sum(1,2)
console.log(mySum);
console.log(sum(3,4));