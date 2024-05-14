let dog = {};
console.log(dog);
dog.name = "Dog Name";
dog.legs = 4;
dog.color = "black";
dog.age = "5";
dog.bark = function () {
  return "woof woof";
};
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
dog.breed = "Labrador";
dog.getDogInfo = () =>
  `Dog Name: ${dog.name}\nDog Breed: ${dog.breed}\nDog Color: ${dog.color}\nDog Bark: ${dog.bark}`;
console.log(dog);
