const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

countries.forEach((country) => {
  console.log(country);
});
names.forEach((name) => {
  console.log(name);
});
numbers.forEach((number) => {
  console.log(number);
});
const countriesUpperCase = countries.map((country) => {
  return country.toUpperCase();
});
const countriesLength = countries.map((country) => {
  return country.length;
});
const sqNumbers = numbers.map((num) => {
  return num * num;
});
const namesUpperCase = names.map((name) => {
  return name.toUpperCase();
});
const prices = products.map((product) => product.price);
const countriesContainLand = countries.filter((country) => {
  return country.toLowerCase().includes("land");
});
const countryLen6 = countries.filter((country) => {
  return country.length == 6;
});
const countryLenEqGreater6 = countries.filter((country) => {
  return country.length >= 6;
});
const countryStartWith_E = countries.filter((country) => {
  return country.startsWith("e") || country.startsWith("E");
});
const validPrices = prices.filter(
  (price) =>
    price !== "" && price !== " " && price !== undefined && price !== null
);
const getStringLists = (strArray) => {
  return strArray.filter((str) => {
    return typeof str === "string";
  });
};
const sumNumbers = numbers.reduce((num, acc) => {
  return acc + num;
});
const extendedCountries = ["Estonia", ...countries];

const sentence = extendedCountries.reduce((acc, country, index, array) => {
  if (index === 0) {
    return country;
  } else if (index === array.length - 1) {
    return `${acc}, and ${country}`;
  } else {
    return `${acc}, ${country}`;
  }
}, "");

const finalSentence = `${sentence} are north European countries`;
console.log(
  names.some((name) => {
    return name.length == 7;
  })
);
console.log(
  countries.every((country) => {
    return country.toLowerCase().includes("land");
  })
);

const sixLetterCountry = countries.find((country) => country.length === 6);

const sixLetterCountryIndex = countries.findIndex(
  (country) => country.length === 6
);

const norwayIndex = countries.findIndex((country) => country === "Norway");

const russiaIndex = countries.findIndex((country) => country === "Russia");
