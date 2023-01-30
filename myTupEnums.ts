//Tuples
// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean];
tUser = ["truc", 123, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [111, "truc@gmail.com"];
newUser[1] = "truc.com";
