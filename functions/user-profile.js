import { getUser } from '../utils.js';

function userProfile() {
    const name = document.getElementById('name');
    const character = document.getElementById('character');
    const love = document.getElementById('love');
    const confidence = document.getElementById('confidence');
    
    const user = getUser();
console.log(user);
    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
    love.textContent = user.love;
    confidence.textContent = user.confidence;
}
export default userProfile;