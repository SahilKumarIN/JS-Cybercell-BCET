// Question 1:
const monthDay = {
    "january": 31,
    "february": 28,
    "march": 31,
    "april": 30,
    "may": 31,
    "june": 30,
    "july": 31,
    "august": 31,
    "september": 30,
    "october": 31,
    "november": 30,
    "december": 31
};

let month = prompt("Enter month:").toLowerCase().trim();
console.log(monthDay[month]);

// Question 2:

let month1 = prompt("Enter month:").toLowerCase().trim();
console.log(month == 'february' ? monthDay[month]+1 :monthDay[month] );