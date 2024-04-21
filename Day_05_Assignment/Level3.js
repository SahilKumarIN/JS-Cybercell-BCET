const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages[0] , ages[ages.length - 1]);
const median = ages.length % 2 == 0 ? (ages[ages.length/2] + ages[ages.length/2 + 1])/2 : ages[(ages.length + 1)/2];
console.log(median);
let sum = 0;
ages.forEach((age)=>(sum += age));
let avg = sum / ages.length ;
console.log((avg));
console.log((ages[ages.length - 1] - ages[0]));

let minAvg = Math.abs(ages[0] - avg) ;
let maxAvg = Math.abs(ages[ages.length - 1] - avg);
console.log(maxAvg > minAvg);

const first10Countries = countries.slice(0 , 10);
console.log(first10Countries);
let midIdx = countries.length%2 == 0 ? countries.length / 2 : (countries.length + 1) / 2;
console.log(countries[midIdx]);

console.log(countries.slice(0 , midIdx) , countries.slice(midIdx));