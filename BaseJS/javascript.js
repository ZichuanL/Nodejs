const person = {
  name: "Liu",
  age: 23,
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

const printData = ({ name, age }) => {
  console.log(name, age);
};

const { name, age } = person;
console.log(name, age);

printData(person);

const hobbies = ["Sports", "Cooking", "Programming"];
const [h1, h2] = hobbies;
console.log(h1, h2);

console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);

const copiedArray1 = hobbies.slice();
const copiedArray2 = [...hobbies];
console.log(copiedArray1);
console.log(copiedArray2);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

var numbers = [1, 2, 3];
var val = numbers.entries();
console.log(val);

let abc = "123";
console.log(5 + +abc);
