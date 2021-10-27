
import quests from '../quest-data.js';
import { getUser, questsCompleted } from '../utils.js';
import completedQuest from './completedQuest.js';
import createQuestLink from './createQuest.js';


const mapLinks = document.getElementById('map-links');
const user = getUser();

if (user.love <= -100 || questsCompleted(user)) {
    window.location.replace('../gameover');
}

for (let quest of quests) {
    let questDisplay = null;

    const completedQuester = user.completed[quest.id];

    if (completedQuester) {
        questDisplay = completedQuest(quest);
    }
    else {
        questDisplay = createQuestLink(quest);
    }
    mapLinks.appendChild(questDisplay);
}