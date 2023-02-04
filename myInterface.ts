interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const truc: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "truc", off: 10) => {
    return 10;
  },
};

truc.email = "h@hc.com";
