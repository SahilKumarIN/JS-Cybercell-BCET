// Question 1:
let score = Number(prompt("Enter score : "));
if(score >= 100 && score <=80) console.log("A");
else if(score >= 70 && score <= 79) console.log("B");
else if(score >= 60 && score <= 69) console.log("C");
else if(score >= 50 && score <= 59) console.log("D");
else console.log("F");

// Question 2:
let seasonMonth = prompt("enter season:").toLowerCase().trim();
if(seasonMonth == "september" || seasonMonth == "october" || seasonMonth == "november" ){
    console.log("Autumn");
}else if(seasonMonth == "december" || seasonMonth == "january" || seasonMonth == "february"){
    console.log("Winter");
}else if(seasonMonth == "march" || seasonMonth == "april" || seasonMonth == "may"){
    console.log("Spring");
}else if(seasonMonth == "june" || seasonMonth == "july" || seasonMonth == "august"){
    console.log("Summer");
}

// Question 3:
let day = prompt("enter day : ").toLowerCase().trim();
if(day == 'saturday' || day == 'sunday'){
    console.log(`${day} is a weekend.`);
}else{
    console.log(`${day} is a Working day`);
}