//variables
let greetings: string = "Hello Truc"; //there's no error as in the video instruction, maybe the new version fixed that issue

greetings.toLowerCase();
console.log(greetings);

//functions
const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

//objects
const User = {
  name: "truc",
  email: "truc@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "truc", isPaid: false, email: "truc@gmail.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

export {};
