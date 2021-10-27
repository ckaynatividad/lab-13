const tsundere = {
    id: 'tsundere',
    title: 'tsundere',
    map: {
        top: '80%',
        left: '50%'
    },
    image: './assets/tsundere-2.gif',
    description: 
    `You bump into tsundere girl. She looks at you in disgust, and snaps "Watch where you're going, dummy." What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap back',
        result: 
        `In retaliation, you snap back "You first". You go to leave and bump her shoulder with yours on the way out. Tsundere girl is stunned you would even talk back to her -- no one talks back to her. She watches you walk away in shock, but you have left a memorable impression in her mind.`,
        love: 10,
        confidence: 20
    }, {
        id: 'apologize',
        description: 'Apologize immediately',
        result: 
        `You immediately apologize for bumping into her. She hisses, "Ugh, pathetic." and rolls her eyes at you before leaving. You leave no memorable impression to her.`,
        love: 0,
        confidence: -10
    }, {
        id: 'ignore',
        description: 'Ignore her',
        result: 
        `After she finishes talking, you stare at her for a moment before walking away. She gets upset you did not acknowledge her, and decides to kick you.`,
        love: -20,
        confidence: 0
    }]
};

const yandere = {
    id: 'yandere',
    title: 'yandere',
    map: {
        bottom: '50%',
        right: '80%'
    },
    image: './assets/yandere-2.gif',
    description:
    `You bump into yandere girl, knocking her books over. She giggles, and says "Oh no! My books!" in an oddly cheerful way. She looks at you with a sweet smile, but her eyes seem almost empty. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap at her',
        result: 
        `In response, you snap at her to watch where she is going next time. She giggles again as if you've handed her a compliment. "Okay!" She says, but you do not feel any sense of satisfaction. You walk away, confused and a little disturbed.`,
        love: 1,
        confidence: -10
    }, {
        id: 'apologize',
        description: 'Apologize immediately',
        result: 
        `You immediately apologize while picking up her books. She seems grateful, and thanks you before quietly giggling and leaving. You feel a little confused, but strangely memorized by her.`,
        love: 20,
        confidence: 10
    }, {
        id: 'ignore',
        description: 'Say nothing',
        result:
        `You say nothing and stare at her. She stares at you back with an empty stare and hollow smile. You get self-conscious and leave.`,
        love: 0,
        confidence: -30
    }]

};

const kuudere = {
    id: 'kuudere',
    title: 'kuudere',
    map : {
        top: '20%',
        left: '30%'
    },
    image: './assets/kuudere.gif',
    description:
    `While not paying attention, you accidentally lightly bump shoulders with kuudere girl while she is walking the opposite direction. One of her books drop, she stops quietly and stares at her book. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap at her for bumping into you',
        result: 
        `You snap at her for bumping into you, even though it was technically your fault. She says "Sorry" quietly after a pause, picks up her book, and continues walking.`,
        love: -10,
        confidence: 0
    }, {
        id: 'apologize',
        description: 'Apologize',
        result:
        `You apologize and immediately bend down to pick up her book. She stops you, and says "It's fine." She picks it up herself and walks away without looking at you. You feel embarrassed. But there's just something about her..`,
        love: 0,
        confidence: -10

    }, {
        id: 'ignore',
        description: 'Do nothing',
        result: 
        `You watch her book fall, as does she. You both stare at it for a moment before she quietly picks it up and walks away as if nothing happened.`,
        love: 0,
        confidence: 0
    }]
};

const dandere = {
    id: 'dandere',
    title: 'dandere',
    map: {
        bottom: '10%',
        right: '10%'
    },
    image: './assets/dandere.gif',
    description:
    `You're walking when dandere girl accidentally bumps into you. She does not look at you, but apologizes profusely while bowing. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap at her',
        result: 
        `You snap, "Watch where you're going." She is taken aback by your words, before you realize tears are starting to well up in her eyes. She says sorry again before quickly leaving as a tear reluctantly falls down her face. You can feel her anxiety and embarrassment as she leaves, and you feel bad.`,
        love: -30,
        confidence: -10
    }, {
        id: 'apologize',
        description: 'Apologize',
        result: 
        `You apologize and reassure her that it was your fault for bumping into her. She looks embarrassed, but slightly soothed by your words. Upon realizing this, she tenses up again and apologizes before running away.`,
        love: 20,
        confidence: 10
    }, {
        id: 'ignore',
        description: 'Say nothing',
        result:
        `You say nothing as she apologizes, unsure what to say. The longer the silence, the more embarrassed she is, as apparent in her face. She apologizes again and leaves quickly without looking your direction. You feel confused.`,
        love: 0,
        confidence: 10
    }]
};

const quests = [
    tsundere,
    yandere,
    kuudere,
    dandere
];

export default quests;