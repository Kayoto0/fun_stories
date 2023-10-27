const messageBoxes = [
    {
        textId: 'storyText',
        messages: [
            "We were at a new house and finished moving boxes. I got tired from moving in furniture and wet upstairs to rest.",
            "I saw a bag with all your underwear and took one out. After looking at it and thinking about ui got hard and couldn't get it to go down. U came up looking for me I there ur underwear down and pretended like nth happened",
            "U saw ur underwear on the floor. Reached down for it then as u were getting up u lose ur balance and fell on my lap. My dick didn't go into ur pussy but it went straight between ur thighs",
            " U realized then got up and closed all the windows and blinds looked at me disappointed the sat back down in the same position. U started to play with it and it got sensitive. U removed your shorts and rubbed ur pussy against my veins until you got wet.",
            "I got impatient held onto you while u sat on my lap and pushed it inside you. You let out a crying moan. I began to thrust my hips up and down as u bounced on my dick. I slid my hands under your shirt and started to play with your nipples. I pulled out and came all over ur back as we laid there.",
            " We then took a bath and went back to moving boxes and furniture.",
            "end.",
            "Love in The new House",
            // Add more messages here
        ],
        currentMessageIndex: 0
    },
    {
        textId: 'storyText-2',
        messages: [
            "In a different tale, there was a courageous adventurer...",
            "Far, far away, a curious explorer embarked on a journey...",
            "On a tropical island, a group of friends discovered a secret...",
            // Add more messages here
        ],
        currentMessageIndex: 0
    },
    {
        textId: 'storyText-3',
        messages: [
            "In a different tale, there was a courageous adventurer...",
            "Far, far away, a curious explorer embarked on a journey...",
            "On a tropical island, a group of friends discovered a secret...",
            // Add more messages here
        ],
        currentMessageIndex: 0
    },
    {
        textId: 'storyText-4',
        messages: [
            "In a different tale, there was a courageous adventurer...",
            "Far, far away, a curious explorer embarked on a journey...",
            "On a tropical island, a group of friends discovered a secret...",
            // Add more messages here
        ],
        currentMessageIndex: 0
    },
    {
        textId: 'storyText-5',
        messages: [
            "In a different tale, there was a courageous adventurer...",
            "Far, far away, a curious explorer embarked on a journey...",
            "On a tropical island, a group of friends discovered a secret...",
            // Add more messages here
        ],
        currentMessageIndex: 0
    },

];

function changeMessage(box) {
    const message = box.messages[box.currentMessageIndex];
    const storyText = document.getElementById(box.textId);
    
    storyText.style.opacity = 0;
    setTimeout(() => {
        if (box.currentMessageIndex < box.messages.length - 1) {
            box.currentMessageIndex++;
        } else {
            box.currentMessageIndex = 0;
        }
        storyText.textContent = message;
        storyText.style.opacity = 1;
    }, 500); // Adjust the duration of the transition (in milliseconds) as needed
}

messageBoxes.forEach((box) => {
    const messageBox = document.getElementById(box.textId);
    messageBox.addEventListener('click', () => changeMessage(box));
    
});
