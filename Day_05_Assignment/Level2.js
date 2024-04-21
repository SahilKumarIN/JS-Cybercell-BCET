
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g,"").split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey') , 1)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

if(countries.includes('Ethiopia')){
    console.log("ETHIOPIA");
}else{
    countries.push("Ethiopia")
}

if(webTechs.includes('Saas')){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass');
}
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [...frontEnd , ...backEnd];
console.log(fullStack);