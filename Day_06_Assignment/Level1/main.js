// Iterate from 0 to 10 using for , while and do-while loops.
console.log("For - Loop");
for(let i = 0 ; i <= 10 ; i++){
    console.log(i);
}

console.log("While Loop");
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

console.log("Do-While Loop");
let j = 0;
do{
    console.log(j);
    j++;
}while(j <= 10);

// Iterate from 10 to 0 using for , while and do-while loops.
console.log("For - Loop");
for(let i = 10 ; i >= 0 ; i--){
    console.log(i);
}

console.log("While Loop");
let k = 10;
while(k >= 0){
    console.log(k);
    k--;
}

console.log("Do-While Loop");
let l = 10;
do{
    console.log(l);
    l--;
}while(l >= 0);

// iterate from 0 to n using for loop
let n = prompt("Enter n:");
for(let i = 0 ; i <= n ; i++){
    console.log(i);
}

// Pattern 1:
console.log("Pattern 1:");
for(let i = 0 ; i < 7 ; i++ ) {
    let pattern = "";
    for(let j = 0 ; j <= i ; j++ ) {
        pattern += "#";        
    }
    console.log(pattern);
}

// Pattern 2:
console.log("Pattern 2:");
for(let  i = 0 ; i <= 10 ; i++){
    console.log(`${i} x ${i} = ${i}`);
}

// Pattern 3:
console.log("Pattern 3:");
console.log("i  i^2  i^3");
for(let i = 0 ; i < 10 ; i++){
    console.log(`${i}  ${i*i}  ${i*i*i}`);
}

// iterate from 0 to 100 and print only even numbers  using for loop
let sumEven = 0
console.log("Even numbers between 0 to 100");
for(let i = 0 ; i <= 100 ; i++){
    if(i%2 == 0) {console.log(i); sumEven += i}
}

// iterate from 0 to 100 and print only odd numbers  using for loop
let sumOdd = 0;
console.log("Odd numbers between 0 to 100");
for(let i = 0 ; i <= 100 ; i++){
    if(i%2 != 0) {console.log(i); sumOdd += i}
}

// use for-loop to iterate from 0 to 100 and print only prime numbers
console.log("Prime numbers :: ");
for(let i = 0 ; i <= 100 ; i++){
    if(isPrime(i)) console.log(i);
}

function isPrime(n){
    for(let i = 2 ; i < n ; i++){
        if( n % i == 0) return false;
    }
    return true;
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers
let sum = 0;
for(let i = 0 ; i <= 100 ; i++){
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to
100 is ${sumOdd}.`);
let arr = [sumEven , sumOdd]
console.log(arr);

// script that generates five random numbers.
function generateRandom(n = 5){
    let arr = new Array(n);
    for(let i = 0 ; i < n ; i++){
        arr[i] = Number(Math.floor(Math.random() * 1000))
    }
    return arr;
}

console.log(generateRandom());

// script that generates unique five random numbers
function gnrtUnqRandom(n = 5) {
    let arr = [];
    while(arr.length < n){
        let randval = Math.floor(Math.random() * 10000)
        if(arr.indexOf(randval) == -1){
            arr.push(randval)
        }
    }
    return arr;
}

console.log(gnrtUnqRandom());

// script which generate a six characters random id
function gnrtRndmId(n = 6){
    let generatedId = "";
    let symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0 ; i < n ; i++){
        let symbolIdx = Math.floor(Math.random() * symbols.length);
        generatedId += symbols[symbolIdx];
    }
    return generatedId;
}

console.log(gnrtRndmId());