import { getUser } from '../utils.js';

function userProfile() {
    const name = document.getElementById('name');
    const character = document.getElementById('character');
    const love = document.getElementById('love');
    const confidence = document.getElementById('confidence');
    
    const user = getUser();
    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
    character.src = '../assets/' + user.character + '.jpg';
    love.textContent = user.love;
    confidence.textContent = user.confidence;
}
export default userProfile;