import { generateUser, setUser } from './utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(userForm);

    const userObject = generateUser(formData);

    setUser(userObject);
    console.log(userObject);
    window.location.replace('./map');
});