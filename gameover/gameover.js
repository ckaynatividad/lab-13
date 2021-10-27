import userProfile from '../functions/user-profile.js';
import { getUser } from '../utils.js';
import scoringHighLove from './highLove.js';
import { highLoveMessage, noLoveMessage, okayLoveMessage } from './messages.js';
import scoringNoLove from './noLove.js';
import scoringOkayLove from './okayLove.js';

userProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');
const messageP = document.getElementById('message');

const noLoveResult = scoringNoLove(user.love, user.confidence);
const medLoveResult = scoringOkayLove(user.love, user.confidence);
const highLoveResult = scoringHighLove(user.love, user.confidence);
const noLoveFinal = noLoveMessage[noLoveResult];
const medLoveFinal = okayLoveMessage[medLoveResult];
const highLoveFinal = highLoveMessage[highLoveResult];

let story = `The final results of ${user.name}'s first year:`;
let message = `${noLoveFinal} ${medLoveFinal} ${highLoveFinal}`;

storyDisplay.textContent = story;
messageP.textContent = message;

const button = document.getElementById('play-again');

button.addEventListener('click', ()=>{
    localStorage.removeItem('USER');
    window.location = '../';
});