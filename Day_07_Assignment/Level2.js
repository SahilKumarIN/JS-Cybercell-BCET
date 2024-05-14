function solveLinEquation(a, by, c) {
  return (-by + -c) / a;
}

function solveQuadEquation(a, b, c) {
  det = Math.sqrt(b * b - 4 * a * c);
  root1 = (-b + det) / (2 * a);
  root2 = (-b - det) / (2 * a);
  return [root1, root2];
}

function printArray(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

function showDateTime() {
  const date = new Date();
  let DateInFormat =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  console.log(DateInFormat);
}

function swapValues(a, b) {
  b = b + a;
  a = b - a;
  b = b - a;
  return [a, b];
}

function reverseArray(arr) {
  let newArr = [];
  let k = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[k++] = arr[i];
  }
  return newArr;
}

function capitalizedArray(arr) {
  let newArr = [];
  arr.forEach((elem) => {
    newArr.push(elem.toUpperCase());
  });

  return newArr;
}

function addItem(arr, item) {
  arr.push(item);

  return arr;
}

function removeItem(arr, idx) {
  let newArr = Array.from(arr).filter((item, index) => index !== idx);
  return newArr;
}

function sumOfNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

function sumOfOdds(start, end) {
  let sumOdds = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) sumOdds += i;
  }
  return sumOdds;
}

function sumOfEven(start, end) {
  let sumEven = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) sumEven += i;
  }
  return sumEven;
}

function evensAndOdds(num) {
  let oddCount = 0,
    evenCount = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) evenCount++;
    else oddCount++;
  }
  console.log(`The number of odds are ${oddCount}.\n
    The number of evens are ${evenCount}.`);
}

function sum() {
  let n = arguments.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arguments[i];
  }
  return sum;
}

function randomUserIp() {
  let randomIp = "";
  for (let i = 0; i < 4; i++) {
    randomIp = randomIp + Math.floor(Math.random() * 255) + ".";
  }
  return randomIp;
}

function randomMacAddress() {
  let randomMacId = "";
  var hexCode = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 2; j++) {
      randomMacId =
        randomMacId + hexCode[Math.floor(Math.random() * hexCode.length)];
    }
    i != 5 ? (randomMacId += ":") : "";
  }
  return randomMacId;
}

function randomHexaNumberGenerator() {
  let hexCode = "0123456789abcdef";
  let randomHexCode = "#";
  for (let i = 0; i < 6; i++) {
    randomHexCode =
      randomHexCode + hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  return randomHexCode;
}

function userIdGenerator() {
  const symbols =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let userId = "";
  for (let i = 0; i < 7; i++) {
    userId = userId + symbols[Math.floor(Math.random() * symbols.length)];
  }
  return userId;
}
