//variables
let greetings: string = "Hello Truc"; //there's no error as in the video instruction, maybe the new version fixed that issue

greetings.toLowerCase();
console.log(greetings);

export {};

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
