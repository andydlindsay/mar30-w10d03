"use strict";
const user = {
    username: 'alice',
    password: '1234',
    logIn: (username) => {
        return false;
    }
};
const myHigherOrder = (cb) => {
    cb(2);
};
myHigherOrder((num) => { return 3; });
const sayHello = (name) => {
    return `hello ${name}`;
    // return true;
    console.log(`hello ${name}`);
};
const returningPromise = () => {
    return new Promise((res, rej) => {
        res('hello');
    });
};
const bool = true;
console.log('can you see this?');
