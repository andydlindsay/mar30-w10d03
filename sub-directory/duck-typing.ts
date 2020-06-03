interface IBase {
  id: number;
}

interface ILoginUser extends IBase {
  username: string;
  password: string;
}

const logIn = (user: ILoginUser): boolean => {
  return true;
}

const testUser = {
  username: 'Jerry',
  password: '1234',
  id: 7
};

const first_name: string = 'Alice';

logIn(testUser);
