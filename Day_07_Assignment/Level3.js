function userIdGeneratedByUser() {
  const lengthOfId = Number(prompt("Enter the length of Id :: ", 6));
  const noOfIds = Number(prompt("Enter number of IDs to be generated :: ", 1));
  const symbols =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let userId = "";
  let userIDs = [];
  for (let i = 0; i < noOfIds; i++) {
    for (let j = 0; j < lengthOfId; j++) {
      userId = userId + symbols[Math.floor(Math.random() * symbols.length)];
    }
    userIDs.push(userId);
    userId = "";
  }
  return userIDs;
}

function rgbColorGenerator() {
  let rgb = "rgb(";
  for (let i = 0; i < 3; i++) {
    rgb = rgb + Math.floor(Math.random() * 255) + (i != 2 ? "," : ")");
  }
  return rgb;
}

function arrayOfHexaColors(noOfHex) {
  let hexCode = "0123456789abcdef";
  let randomHexCode = "",
    rndHexCodeArr = [];
  for (let j = 0; j < noOfHex; j++) {
    randomHexCode = "#";
    for (let i = 0; i < 6; i++) {
      randomHexCode =
        randomHexCode + hexCode[Math.floor(Math.random() * hexCode.length)];
    }
    rndHexCodeArr.push(randomHexCode);
  }
  return rndHexCodeArr;
}

function arrayOfRgbColors(noOfRGBs) {
  let rgbArr = [];
  for (let i = 0; i < noOfRGBs; i++) {
    rgbArr.push(rgbColorGenerator());
  }
  return rgbArr;
}

function convertHexaToRgb(hexCode) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);
  return result
    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )})`
    : null;
}

function generateColors(colorType, colorCount) {
  return colorType == "hexa"
    ? arrayOfHexaColors(colorCount)
    : colorType == "rgb"
    ? arrayOfRgbColors(colorCount)
    : null;
}

function factorial(num) {
  let f = 1;
  for (let i = 1; i <= num; i++) {
    f = f * i;
  }
  return f;
}

function isEmpty(arg) {
  return arg == "" || arg == [] || arg == null || arg == undefined || !arg
    ? false
    : true;
}

function sum() {
  let n = arguments.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sumOfArrayItems(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    } else {
      return "Array not containing all item of number types.";
    }
  }
  return sum;
}

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      sum += arr[i];
    } else {
      return "Array not containing all item of number types.";
    }
  }
  let avg = sum / (arr.length - 1);
  return avg;
}

function modifyArray(arr) {
  const updateArr = [];
  if (arr.length < 5) {
    return "Item not found";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i == 4) updateArr.push(arr[i].toUpperCase());
      else updateArr.push(arr[i]);
    }
    return updateArr;
  }
}

function isPrime(n) {
  var flag = true;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

function isUnique(arr) {
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      console.log("Not Unique Array!");
      return;
    }
  }
  console.log("Unique Array!");
}

function isSameDateType(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (typeof arr[i] !== typeof arr[i + 1]) {
      console.log("Not Same Data Type Array!");
      return;
    }
  }
  console.log("Same Data Type Array!");
}

function sevenRandomNumbers() {
  let randNums = [];
  let count = 0;
  while (count < 7) {
    let rndNum = Math.floor(Math.random() * 9);
    if (randNums.indexOf(rndNum) == -1) {
      randNums.push(rndNum);
      count++;
    }
  }
  return randNums;
}

function reverseCountries(countriesArr) {
  let countryArrCopy = countriesArr;
  let revArr = [],
    k = 0;
  for (let i = countriesArr.length - 1; i >= 0; i--) {
    revArr[k++] = countryArrCopy[i];
  }
  return revArr;
}

console.log(reverseCountries(["india", "russia"]));
