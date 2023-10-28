const messageBoxes = [
    {
        textId: 'storyText',
        messages: [          "We were at a new house and finished moving boxes.",
        "I got tired from moving in furniture and wet upstairs to rest.",
       "I saw a bag with all your underwear and took one out.",
       "After looking at it and thinking about you.",
       "i got hard and couldn't get it to go down.",
       " U came up looking for me I threw ur underwear down,..",
       " and pretended like nth happened",
       "U saw ur underwear on the floor.",
       " Reached down for it. then as u were getting up..",
        "u lose ur balance and fell on my lap.",
        " My dick didn't go into ur pussy but it went straight between ur thighs",
       " U realized then got up and closed all the windows and blinds,",
       "You looked at me disappointed the sat back down in the same position.",
       " U started to play with it and it got sensitive.",
       " U removed your shorts and rubbed ur pussy against my veins until you got wet.",
       "I got impatient held onto you while u sat on my lap and pushed it inside you.",
       "You let out a crying moan. I began to thrust my hips up and down as u bounced on my dick.",
        "I slid my hands under your shirt and started to play with your nipples. ",
        "I pulled out and came all over ur back as we laid there.",
       " We then took a bath and went back to moving boxes and furniture.",
       "end.",
       "Love in The new House -new-",

            // Add more messages here
        ],
        currentMessageIndex: 0

        
    },
    
{
        textId: 'storyText2',
        messages: [
            "Só you were in the kitchen",
            "Making lunch for us.",
            "U only had an apron on.",
            "While in the apron the side of your boobs ,",
            "slowty slipped out making you very sexy",
            "I walked out to find a pen and I saw you. ", 
            "U bent over and your pussy was directly in my view.",
            "I slowly walked up on you and slapped your ass",
            "You got shocked and asked what I was doing,",
            " but before you could finish u kissed you",
            "Our tongues twirled with each other.",
            "U became very silent afterwards",
            "I pulled my pants down and reached for between your legs",
            "U began to stroke my dick and I slowly be an rubbing your pussy",
            "We went faster and faster until we came.",
            "We became exhausted but still continued.",
            "I lift you up brought you to the bathroom and,",
            " ripped your apron off showing your grand breasts. ",
            "I slowly pushed your down and made you suck on my dick.",
            "I came and u wanted to get pull off but....",
            "I held down and came down ur throat.",
            "U came off and u had a wanting and loving look on your face.",
            " I picked u up hled your arms back and ,",
            "shoved my dick deep inside your body.",
            "U began to moan in a soft voice and I held ,",
            "your mouth while I continued to pound you.",
            "I turned you towards the wall and continued to pound you.",
            "You begged for more and I slapped your ass.",
            "As I came inside u nd pulled out your legs be an shivering. ",
            "U fell on your knees and asked for more respectfully.",
            "I sat down and you sat on my dick with our chests facing each other.",
            "U began to ride me u bit into my shoulder softly, ",
            "I hugged and gripped onto me and u continued to ride me. ",
            "Your tongue slowly rubbed over my body ,",
            "as I bit and sucked onto the side of your boobs. ",
            "You released another soft moan,...",
            "as my tongue made it's way to your nipples.",
            "As I continued sucking and your kept riding with your shaking legs",
            "we both came at once and took a breather as your breast was ",
            "still in my mouth and my dick was still inside you. ",
            " stood up with u still grippe do to me and my dick ,....",
            "still inside you and walked to bed.",
            " We agreed to changing the sheets after we get back up ",
            " and covered ourselves with blankets.",
            "We coddles each other my dick slowly throbbing",
            "deep inside your warm body.",
            "The sun set and your breasts enveloped my face. ",
            "Your nipples got hard and my dick got harder. ",
            "I sucked on your tits gently ",
            "and u slowly moved around to ride my dick thoroughly.",
            " We continued until we both fell asleep.",
            "My dick slipped out while we slept ",
            " and you grabbed it and pushed it back in.",
            "end.",
            "Kitchen Madness -new-",
            "",
            "",
            "",
            
            // Add more messages here
        ],
        currentMessageIndex: 0
    },

    {
        textId: 'storyText3',
        messages: [
            
            // Add more messages here
        ],
        currentMessageIndex: 0
    },


    {
        textId: 'storyText4',
        messages: [
            
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

