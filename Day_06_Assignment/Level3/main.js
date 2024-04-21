const newCountries = countries;
let sortedCountries = newCountries.sort();
console.log(sortedCountries);
const sortedWebTechs = webTechs.sort();
const sortedMernStack = mernStack.sort();


let countryWithLand = [];
newCountries.forEach((country) => {
  country.includes("land") ? countryWithLand.push(country) : "";
});
if (countryWithLand.length > 0) {
  console.log(countryWithLand);
} else {
  console.log("All these countries are without land");
}


let countryMaxlen = "";
newCountries.forEach((country) => {
  if (country.length > countryMaxlen.length) {
    countryMaxlen = country;
  }
});
console.log(countryMaxlen);

let countryWithLen4 =  []
newCountries.map((country)=>{
    if(country.length == 4)  countryWithLen4.push(country);
})
console.log(countryWithLen4);

let start = 0 , end = newCountries.length - 1;
while(start < end) {
    let temp = newCountries[start];
    newCountries[start] = newCountries[end].substring(0,1).toUpperCase()+newCountries[end].substring(1);
    newCountries[end] = temp.substring(0,1).toUpperCase() + temp.substring(1);
    start+=1;
    end-=1;
}
console.log(newCountries);