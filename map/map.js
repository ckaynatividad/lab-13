import quests from '../quest-data.js';
console.log(quests);

const mapLinks = document.getElementById('map-links');

for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}