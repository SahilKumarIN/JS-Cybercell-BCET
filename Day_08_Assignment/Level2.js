const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let maxSkillsUser = "",
  maxSkillLen = 0,
  loggedInUsers = [],
  usersWith50Point = [],
  mernDev = [];
Object.keys(users).forEach((user) => {
  let skillLen = users[user].skills.length;
  if (skillLen > maxSkillLen) {
    maxSkillLen = skillLen;
    maxSkillsUser = user;
  }
  if (users[user].isLoggedIn) {
    loggedInUsers.push(user);
  }
  if (users[user].points >= 50) {
    usersWith50Point.push(user);
  }
  if (users[user].skills.includes("MongoDB", "React", "Express", "Node")) {
    mernDev.push(user);
  }
});
console.log(maxSkillsUser, maxSkillLen);
console.log(loggedInUsers.length, usersWith50Point.length);
console.log(mernDev);

const newUsers = {
  ...users,
  Sahil: {
    email: "rudrasahil3@gmail.com",
    skills: ["HTML", "CSS", "JS", "React"],
    age: 20,
    isLoggedIn: false,
    points: 50,
  },
};

const userKeys = Object.keys(users);
console.log(userKeys);
const userValues = Object.values(users);
console.log(userValues);

const countries = {
  France: {
    capital: "Paris",
    population: 67076000,
    languages: ["French"],
  },
  Germany: {
    capital: "Berlin",
    population: 83122889,
    languages: ["German"],
  },
  Italy: {
    capital: "Rome",
    population: 60550075,
    languages: ["Italian"],
  },
  Spain: {
    capital: "Madrid",
    population: 46733038,
    languages: ["Spanish"],
  },
};

for (const country in countries) {
  console.log("Country Name: " + country);
  console.log("Country Capital: " + countries[country].capital);
  console.log("Country Population: " + countries[country].population);
  console.log("Country Languages: " + countries[country].languages);
}
