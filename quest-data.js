const tsundere = {
    id: 'tsundere',
    title: 'Tsundere-chan',
    map: {
        top: '80%',
        left: '75%'
    },
    image: './assets/tsundere-2.gif',
    description: 
    `You bump into Tsundere-chan. She looks at you in disgust, and snaps "Watch where you're going, dummy." What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap back',
        result: 
        `In retaliation, you snap back "You first". You go to leave and bump her shoulder with yours on the way out. Tsundere-chan is stunned you would even talk back to her -- no one talks back to her. She watches you walk away in shock, but you have left a memorable impression in her mind. 
        Love +10, Confidence +20`,
        love: 10,
        confidence: 20
    }, {
        id: 'apologize',
        description: 'Apologize immediately',
        result: 
        `You immediately apologize for bumping into her. She hisses, "Ugh, pathetic." and rolls her eyes at you before leaving. You leave no memorable impression to her. Love +0, Confidence -10`,
        love: 0,
        confidence: -10
    }, {
        id: 'ignore',
        description: 'Ignore her',
        result: 
        `After she finishes talking, you stare at her for a moment before walking away. She gets upset you did not acknowledge her, and decides to kick you. It hurts. Love -20, Confidence +0`,
        love: -20,
        confidence: 0
    }]
};

const yandere = {
    id: 'yandere',
    title: 'Yandere-chan',
    map: {
        top: '80%',
        left: '15%'
    },
    image: './assets/yandere-2.gif',
    description:
    `You bump into Yandere-chan, knocking her books over. She giggles, and says "Oh no! My books!" in an oddly cheerful way. She looks at you with a sweet smile, but her eyes seem almost empty. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap at her',
        result: 
        `In response, you snap at her to watch where she is going. She chuckles again as if you've handed her a compliment. "Okay!" She says, but you do not feel any sense of satisfaction. You walk away, confused and a little disturbed. Love +1, Confidence -10`,
        love: 1,
        confidence: -10
    }, {
        id: 'apologize',
        description: 'Apologize immediately',
        result: 
        `You immediately apologize as you bend down to pick up her books. She seems grateful, and thanks you before quietly giggling and leaving. You feel a little confused, but strangely memorized by her. Love +20, Confidence +10`,
        love: 20,
        confidence: 10
    }, {
        id: 'ignore',
        description: 'Say nothing',
        result:
        `You say nothing and stare at her. She stares at you back with an empty stare and hollow smile. You get self-conscious and leave. Love +0, Confidence -30`,
        love: 0,
        confidence: -30
    }]

};

const kuudere = {
    id: 'kuudere',
    title: 'Kuudere-chan',
    map : {
        top: '69%',
        left: '45%'
    },
    image: './assets/kuudere-2.gif',
    description:
    `While not paying attention, you accidentally lightly bump shoulders with Kuudere-chan while she is walking the opposite direction. One of her books drop to the ground as she stops quietly and stares at her book. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap at her for bumping into you',
        result: 
        `You snap at her for bumping into you, even though it was technically your fault. She says "Sorry" quietly after a pause, picks up her book, and continues walking. Love -10, Confidence +0`,
        love: -10,
        confidence: 0
    }, {
        id: 'apologize',
        description: 'Apologize',
        result:
        `You apologize and immediately bend down to pick up her book. She stops you, and says "It's fine." She picks it up herself and walks away without looking at you. You feel embarrassed. But there's just something about her.. Love +10, Confidence -10`,
        love: 10,
        confidence: -10

    }, {
        id: 'ignore',
        description: 'Do nothing',
        result: 
        `You watch her book fall, as does she. You both stare at it for a moment before she quietly picks it up and walks away as if nothing happened. Love +0, Confidence +0`,
        love: 0,
        confidence: 0
    }]
};

const dandere = {
    id: 'dandere',
    title: 'Dandere-chan',
    map: {
        top: '75%',
        left: '90%'
    },
    image: './assets/dandere-2.gif',
    description:
    `You're walking when Dandere-chan accidentally bumps into you. She does not look at you, but apologizes profusely while bowing. What do you do?`,
    choices: [{
        id: 'fight',
        description: 'Snap at her',
        result: 
        `You snap, "Watch where you're going." She is taken aback by your words, before you realize tears are starting to well up in her eyes. She says sorry again before quickly leaving as a tear falls down her face. You can feel her anxiety and embarrassment as she leaves, and you feel bad. Love -30, Confidence -10`,
        love: -30,
        confidence: -10
    }, {
        id: 'apologize',
        description: 'Apologize',
        result: 
        `You apologize and reassure her that it was your fault for bumping into her. She looks embarrassed, but slightly soothed by your words. Upon realizing this, she tenses up again and apologizes before running away. That was weird. Love +20, Confidence +10`,
        love: 20,
        confidence: 10
    }, {
        id: 'ignore',
        description: 'Say nothing',
        result:
        `You say nothing as she apologizes, unsure what to say. The longer the silence, the more embarrassed she is, as apparent in her face. She apologizes again and leaves quickly without looking your direction. You feel confused. Love +0, Confidence +10`,
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