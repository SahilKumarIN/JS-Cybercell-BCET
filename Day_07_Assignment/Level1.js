function fullName(){
    console.log("Sahil Kumar");
}

function fullName(fName , lName){
    return (fName+" "+lName);
}

function addNumbers(num1 , num2){
    return num1+num2;
}

function areaOfRectangle(length , width){
    return length*width;
}

function perimeterOfRectangle(length , width){
    return 2*(length + width);
}

function volumeOfRectPrism(length , width , height){
    return length * width * height;
}

function areaOfCircle(radius){
    return 3.14 * radius * radius;
}

function circumOfCircle(radius){
    return 2 * 3.14 * radius;
}

function density(mass , vol){
    return mass/vol ;
}

function speed(totDist , totTime){
    return totDist/totTime;
}

function weight(mass , gravity = 9.8){
    return mass * gravity;
}

function convertCelsiusToFahrenheit(degC){
    return (degC * 9/5)+32;
}

function bodyMassIndex(weight , heightinM){
    let bmi = weight / (heightinM * heightinM);
    if(bmi < 18.5){
        console.log("Underweight");
    }else if(bmi >= 18.5 && bmi < 24.9){
        console.log("Normal Weight");
    }else if(bmi >= 25 && bmi <= 29.9){
        console.log("Over Weight");
    }else{
        console.log("Obese");
    }
}

function checkSeason(month){
    month = String.toString(month).trim().toLowerCase();
    if(month == "september" || month == "october" || month == "november"){
        console.log("autumn");
    }else if(month == "december" || month == "january" || month == "february"){
        console.log("winter");
    }else if(month == "march" || month == "april" || month == "may"){
        console.log("spring");
    }else{
        console.log("summer");
    }
}

function findMax(num1 , num2 , num3){
    return (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 && num2 > num1) ? num2 : num3 ;
}