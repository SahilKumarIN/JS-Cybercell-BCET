// script which generate a any no. of characters random id
function gnrtRndmId(n = 6) {
  let generatedId = "";
  let symbols = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < n; i++) {
    let symbolIdx = Math.floor(Math.random() * symbols.length);
    generatedId += symbols[symbolIdx];
  }
  return generatedId;
}
let idLen = 10 || prompt("Enter the length of the id::");
console.log(gnrtRndmId(idLen));

// script which generates a random hexadecimal number.
let symbols = "0123456789abcdef";
let generatedHex = "#";
for (let i = 0; i < 6; i++) {
  let symbIdx = Math.floor(Math.random() * symbols.length);
  generatedHex += symbols[symbIdx];
}
console.log(generatedHex);

// script which generates a random rgb color number.
let generatedRGB = "rgb(";
for (let i = 0; i < 3; i++) {
  let colId = Math.floor(Math.random() * 255);
  generatedRGB = generatedRGB + colId + (i == 2 ? "" : ",");
}
generatedRGB += ")";
console.log(generatedRGB);

// Using the above countries array, create the following new array.
const newCountries = countries.map((country) => {
  return country.toUpperCase();
});

console.log(newCountries);

const countryLenArr = newCountries.map((country) => {
  return country.length;
});
console.log(countryLenArr);

const countryInitialLen = countries.map((country) => {
  let arr = [];
  arr.push(country);
  arr.push(country.slice(0, 3).toUpperCase());
  arr.push(country.length);
  return arr;
});

console.log(countryInitialLen);
let countryWithLand = [];
newCountries.forEach((country) => {
  country.includes("LAND") ? countryWithLand.push(country) : "";
});
if (countryWithLand.length > 0) {
  console.log(countryWithLand);
} else {
  console.log("All these countries are without land");
}

let countryEndsWithia = [];
newCountries.forEach((country) => {
  country.endsWith("IA") ? countryEndsWithia.push(country) : "";
});
if (countryEndsWithia.length > 0) {
  console.log(countryEndsWithia);
} else {
  console.log("These are countries ends without ia");
}

let countryMaxlen = "";
newCountries.forEach((country) => {
  if (country.length > countryMaxlen.length) {
    countryMaxlen = country;
  }
});
console.log(countryMaxlen);

let countryWithLen5 = [];
newCountries.forEach((country) => {
  if (country.length == 5) countryWithLen5.push(country);
});
console.log(countryWithLen5);

let longestWebTech = "";
webTechs.map((webTech) => {
  if (webTech.length > longestWebTech.length) {
    longestWebTech = webTech;
  }
});
console.log(longestWebTech);
let webTechsWithLen = webTechs.map((webTech) => {
  let webTechArr = [];
  webTechArr.push(webTech);
  webTechArr.push(webTech.length);
  return webTechArr;
});
console.log(webTechsWithLen);

const mern = ["MongoDB", "Express", "React", "Node"];
let acronym = "";
mern.forEach((tech) => {
  acronym += tech.charAt(0);
});
console.log(acronym);

webTechs.map((webTech) => {
  console.log(webTech);
});

let fruitArr = ["banana", "orange", "mango", "lemon"];
let start = 0;
let end = fruitArr.length - 1;
while (start < end) {
  let temp = fruitArr[start];
  fruitArr[start] = fruitArr[end];
  fruitArr[end] = temp;
  start += 1;
  end -= 1;
}
console.log(fruitArr);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  fullStack[i].forEach((item) => {
    console.log(item);
  });
}
