var challenge = "30 Days of JavaScript";

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(0 , challenge.indexOf(" ")));

console.log(challenge.slice(challenge.indexOf(' ') + 1));

console.log(challenge.includes("Script"));

console.log(challenge.split(''));

console.log(challenge.split(" "));

console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

console.log(challenge.replace("JavaScript","Python"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.indexOf('J')));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

var sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

console.log(sentence.lastIndexOf('because'));

console.log(sentence.search('because'));

console.log(' 30 Days Of JavaScript '.trim());

console.log(challenge.startsWith('30'));

console.log(challenge.endsWith('ipt'));

console.log(...challenge.matchAll('a'));

var newChallenge = '30 Days of'.concat('JavaScript');
console.log(newChallenge);

console.log(challenge.repeat(2));