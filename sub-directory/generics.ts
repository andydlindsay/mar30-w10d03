interface Container<Whatever, AnotherOne> {
  keyOne: string;
  keyTwo: Whatever;
  fn?: () => AnotherOne;
}

interface NumContainer extends Container<number, string> {
  newKey: number;
}

const numContainer: NumContainer = {
  keyOne: 'hello',
  keyTwo: 9,
  fn: () => 'hwllo',
  newKey: 9
};

const strContainer: Container<string, string> = {
  keyOne: 'hello',
  keyTwo: 'world'
}
