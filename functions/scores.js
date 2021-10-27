function score(choice, questId, user) {
    console.log(choice, questId, user);
    user.love += choice.love;

    user.confidence += choice.confidence;

    user.completed[questId] = true;
}
export default score;