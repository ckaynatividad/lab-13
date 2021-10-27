import createChoice from '../functions/createchoice.js';
import score from '../functions/scores.js';
import userProfile from '../functions/user-profile.js';
import findById, { getUser, setUser } from '../utils.js';
import quests from '../quest-data.js';

userProfile();

const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const quest = findById(quests, questId);

if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const resultDesc = document.getElementById('result-description');
const chooseButton = document.getElementById('buttonChoose');

title.textContent = quest.title;
image.src = quest.image;
description.textContent = quest.description;

for (let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];

    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}
// console.log(choiceForm);
choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    description.classList.add('hide');
    chooseButton.classList.add('hide');
    choices.classList.add('hide');

    const formData = new FormData(choiceForm);
    
    const choiceId = formData.get('choices');
    // console.log(choiceId);
    const choice = findById(quest.choices, choiceId);
    // console.log(choice);
    const user = getUser();
    
    score(choice, quest.id, user);

    setUser(user);

    resultDesc.textContent = choice.result;

    userProfile();

});