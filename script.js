console.log("Hello World");

/**
 * Functii nedeterministe
 */
// setInterval(() => {
//   console.log(Date.now())
// }, 1000) // milisecunde

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

 
const whatsMyAge = (birthyear) => {
  const date = new Date();
  const year = date.getFullYear();

  return year - birthyear;
};

console.log(whatsMyAge(1995));
const sum = (a, b) => a + b;

console.log(sum(4, 5));
console.log(sum(4, 5));
console.log(sum(4, 5));
console.log(sum(4, 5));

/**
 * Functii de ordin superior
 *  sunt functii care accepta alte functii ca si parametrii si/sau returneaza alte functii
 *
 * sort, map, filter, reduce
 * forEach, some, every, reverse
 */

/**
 * Sort
 */
const numere = [1, 2, 4, -3, 12, 6, 8, 21];

const sortNumbers = (a, b) => {
  console.log("a:", a);
  console.log("b:", b);
  if (a === b) return 0;

  return a > b ? 1 : -1;
};

console.log("1:", numere.sort(sortNumbers));
console.log("2:", numere.sort());

const processNumbers = (a, b, fn) => fn(a, b);
console.log(processNumbers(10, 20, sum));

/**
 * Array.map
 */
const users = [
  { name: "Mike", age: 19, gender: "male" },
  { name: "John", age: 6, gender: "male" },
  { name: "Sara", age: 23, gender: "female" },
  { name: "George", age: 34, gender: "male" },
  { name: "George2", age: 23, gender: "male" },
  { name: "George3", age: 6, gender: "male" },
  { name: "George4", age: 8, gender: "male" }
];

const userNames = [];

for (const user of users) {
  const { name } = user;
  userNames.push(name);
}

console.log({ userNames });

const userAges = [];

for (const { age } of users) {
  userAges.push(age);
}

console.log({ userAges });

/**
 * Mapping -> mapare a datelor
 */

const myFn = (number) => (number += 1);
const myNumbers = [10, 4, 2];
const newNumbers = myNumbers.map(myFn);

console.log({
  old: myNumbers,
  new: newNumbers
});

// myFn
const myMap = (array, callback) => {
  const newArray = [];

  // for (let i = 0; i <= array.length - 1; i++) {
  //   newArray.push(callback(array[i]));
  // }

  for (const item of array) {
    const newItem = callback(item);
    newArray.push(newItem);
  }

  return newArray;
};

const myNumbers2 = myMap(myNumbers, myFn);
console.log({ myNumbers2 });

const getUserName = (user) => {
  const { gender, name } = user;

  return (gender === "female" ? "Miss" : "Sir") + ` ${name}`;
};

const callback = (user) => {
  return {
    name: getUserName(user),
    age: user.age,
    gender: user.gender
  };
};

const result = myMap(users, callback);

console.log({ result });
console.log("Array.map", users.map(callback));

/**
 * Array.filter
 */
const filteredUsers = [];

for (const user of users) {
  if (user.age > 10) {
    filteredUsers.push(user);
  }
}

console.log({ users, filteredUsers });

const filteredUsers2 = users.filter((user) => user.age > 10);

console.log({ filteredUsers2 });

/**
 * My filter
 */
const myFilter = (array, callback) => {
  const newArray = [];
  console.log("array:", array);
  console.log("callback:", callback);

  for (const item of array) {
    console.log("Item:", item);

    if (callback(item)) {
      newArray.push(item);
      console.log("newArray:", newArray);
    }
  }

  return newArray;
};

const functiaMea = (user) => user.age > 10;

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
myFilter(users, functiaMea);

/**
 * Array.reduce
 */
const players = [
  { name: "Mike", amount: 120 },
  { name: "John", amount: 320 },
  { name: "Sara", amount: 760 },
  { name: "George", amount: 4320 }
];

let totalAmount = 0;

for (const player of players) {
  //  totalAmount += player.amount;
  totalAmount = totalAmount + player.amount;
}

console.log({ totalAmount });

console.log(
  "Array.reduce:",
  players.reduce((accumulator, user) => {
    console.log({ accumulator, amount: user.amount })
    return accumulator + user.amount;
  }, 50)
);

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
/**
 * Aggregate data
 */
const usersByAge = {};

for (const user of users) {
  const { age, name } = user;

  // Brad
  if (!usersByAge[age]) usersByAge[age] = [];
  usersByAge[age].push(name);
}

console.log({ usersByAge });

const groupByUserAge = (accumulator, user) => {
  const { age, name } = user;
 
  if(!accumulator[age]){
    accumulator[age] = [];
  }
 
  accumulator[age].push(name);
 
  return accumulator; // Obligatoriu
}

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");
console.log("REDUCE:", users.reduce(groupByUserAge, {}))
