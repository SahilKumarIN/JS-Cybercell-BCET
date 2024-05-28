const allCountries = require("./countries");
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

const totalPrice = products
  .map((product) => product.price)
  .filter((price) => typeof price === "number" && !isNaN(price))
  .reduce((acc, price) => acc + price, 0);

const totalPriceusingReduce = products.reduce((acc, product) => {
  const price = parseFloat(product.price);
  if (!isNaN(price)) {
    return acc + price;
  }
  return acc;
}, 0);

function categorizeCountries(pattern) {
  return allCountries.filter((country) =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
}

const landCountries = categorizeCountries("land");
console.log(landCountries);

const iaCountries = categorizeCountries("ia");
console.log(iaCountries);
