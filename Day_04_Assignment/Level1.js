// Question 1:
let year = Number(prompt("Enter your age:"));
if(year >= 18){
    console.log("You are old enough to drive.");
}else{
    console.log(`You are left with ${18 - year} years to drive.`);
}

// Question 2:
let myAge = 20 ;
let yourAge = Number(prompt("Enter your age:"));
if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me.`);
}else if(yourAge < myAge){
    console.log(`You are ${myAge - yourAge} years elder than me.`);
}else{
    console.log(`We both have the same age.`);
}

// Question 3:
let a = 4;
let b = 3;
// If-else method
if(a > b){
    console.log('a is greater than b');
}else{
    console.log('b is greater than a');
}
// Ternary method
console.log(a > b ? "a is greater than b" : "b is greater than a");

// Question 4:
let num = Number(prompt("Enter a number:"));
console.log(num % 2 == 0 ? `${num} is an even number` : `${num} is an odd number`);
