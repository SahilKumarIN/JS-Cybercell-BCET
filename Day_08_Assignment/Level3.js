const personAccount = {
  firstName: "Sahil",
  lastName: "Kumar",
  incomes: {},
  expenses: {},

  get totalIncome() {
    return Object.values(this.incomes).reduce(
      (total, income) => total + income,
      0
    );
  },

  get totalExpense() {
    return Object.values(this.expenses).reduce(
      (total, expense) => total + expense,
      0
    );
  },

  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome}\nTotal Expense: $${this.totalExpense}`;
  },

  addIncome(description, amount) {
    if (typeof amount === "number" && amount > 0) {
      this.incomes[description] = amount;
    } else {
      console.log("Amount should be a positive number.");
    }
  },

  addExpense(description, amount) {
    if (typeof amount === "number" && amount > 0) {
      this.expenses[description] = amount;
    } else {
      console.log("Amount should be a positive number.");
    }
  },

  accountBalance() {
    return this.totalIncome - this.totalExpense;
  },
};
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",

    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",

    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(newUser) {
  const existingUser = users.find((user) => user.email === newUser.email);
  if (existingUser) {
    console.log("User already exists. Please log in.");
  } else {
    users.push(newUser);
    console.log("User signed up successfully!");
  }
}
const newUser = {
  _id: "krsahil",
  username: "Sahil",
  email: "rudrasahil3@gmail.com",
  password: "password@1234",
  createdAt: "05/14/2024 12:11 PM",
  isLoggedIn: false,
};

signUp(newUser);

function signIn(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    user.isLoggedIn = true;
    console.log("You have successfully signed in!");
    console.log(user);
  } else {
    console.log("Invalid email or password. Please try again.");
  }
}

signIn("rudrasahil3@gmail.com", "password@1234");

function rateProduct(productId, userId, rating) {
  const product = products.find((product) => product._id === productId);
  if (product) {
    product.ratings.push({ userId, rate: rating });
    console.log("Product rated successfully!");
  } else {
    console.log("Product not found!");
  }
}
rateProduct("hedfcg", "sahil", 4);

function averageRating(productId) {
  const product = products.find((product) => product._id === productId);
  if (product) {
    const totalRating = product.ratings.reduce(
      (acc, rating) => acc + rating.rate,
      0
    );
    const average = totalRating / product.ratings.length;
    console.log(`Average rating for ${product.name}: ${average}`);
  } else {
    console.log("Product not found!");
  }
}

averageRating("hedfcg");

function likeProduct(productId, userId) {
  const product = products.find((product) => product._id === productId);
  if (product) {
    const index = product.likes.indexOf(userId);
    if (index === -1) {
      product.likes.push(userId);
      console.log("Product liked successfully!");
    } else {
      product.likes.splice(index, 1);
      console.log("Product unliked successfully!");
    }
  } else {
    console.log("Product not found!");
  }
}
