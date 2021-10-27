// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, getUser, setUser } from '../utils.js';

const test = QUnit.test;

test('generateUser should return userObject', (expect) => {

    const expected = { 
        completed: {},
        love: 0,
        confidence: 0,
        name: 'Meow',
        character: 'brunette',
    };

    const formData = new FormData();
    formData.set('name', 'Meow');
    formData.set('character', 'brunette');
    
    const actual = generateUser(formData);

    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect)=>{
    localStorage.removeItem('USER');
    const userObject = { 
        completed: {},
        love: 0,
        confidence: 0,
        name: 'Meow',
        character: 'brunette',
    };

    
    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, userObject);

});

test('getUser should return user object from localStorage', (expect)=>{
    const userObject = { 
        completed: {},
        love: 0,
        confidence: 0,
        name: 'Meow',
        character: 'brunette',
    };

    setUser(userObject);

    const actual = getUser();

    expect.deepEqual(actual, userObject);

});


