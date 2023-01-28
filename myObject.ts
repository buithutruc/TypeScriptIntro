type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetail?: number;
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetail = cardNumber &
  cardDate & {
    cvv: number;
  };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

export {};
