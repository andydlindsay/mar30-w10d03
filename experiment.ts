interface IUser {
  username: string;
  password: string;
  birthDate?: Date;
  id?: number;
  logIn: (username: string) => boolean;
}

const user: IUser = {
  username: 'alice',
  password: '1234',
  logIn: (username) => {
    return false;
  }
};

const higherOrder = (cb: (num: number) => number) => {
  cb(2);
};

higherOrder((num) => { return 3 });

const sayHello = (name: string): void | string => {
  return `hello ${name}`;
  // return true;
  console.log(`hello ${name}`);
};

const returningPromise = (): Promise<string> => {
  return new Promise((res, rej) => {
    res('hello');
  });
};








//
