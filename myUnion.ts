let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let truc: User | Admin = { name: "truc", id: 133 };
truc = { username: "tb", id: 133 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");

//array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | true)[] = ["1", 4, true];

let pi: 3.14 = 3.14;
