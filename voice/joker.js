function Joker() {}
Joker.init = function () {
    // read all jokes 
    this.jokes = [{
            "id": 1,
            "type": "general",
            "setup": "What did the fish say when it hit the wall?",
            "punchline": "Damn."
        },

        {
            "id": 3,
            "type": "general",
            "setup": "What's Forrest Gump's password?",
            "punchline": "1Forrest1"
        },
        {
            "id": 4,
            "type": "general",
            "setup": "What do you call a belt made out of watches?",
            "punchline": "A waist of time."
        },
        {
            "id": 5,
            "type": "general",
            "setup": "Why can't bicycles stand on their own?",
            "punchline": "They are two tired"
        },
        {
            "id": 6,
            "type": "general",
            "setup": "How does a train eat?",
            "punchline": "It goes chew, chew"
        },
        {
            "id": 7,
            "type": "general",
            "setup": "What do you call a singling Laptop",
            "punchline": "A Dell"
        },
        {
            "id": 8,
            "type": "general",
            "setup": "How many lips does a flower have?",
            "punchline": "Tulips"
        },
        {
            "id": 8,
            "type": "general",
            "setup": "How do you organize an outer space party?",
            "punchline": "You planet"
        },
        {
            "id": 9,
            "type": "general",
            "setup": "What kind of shoes does a thief wear?",
            "punchline": "Sneakers"
        },
        {
            "id": 10,
            "type": "general",
            "setup": "What's the best time to go to the dentist?",
            "punchline": "Tooth hurty."
        },
        {
            "id": 11,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
            "punchline": "Never mind. It's pointless."
        },
        {
            "id": 12,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
            "punchline": "No, cows go moo."
        },
        {
            "id": 13,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
            "punchline": "I didn't know you could yodel!"
        },
        {
            "id": 14,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Cereal \n Cereal who?",
            "punchline": "Cereal pleasure to meet you"
        },
        {
            "id": 15,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Harry! \n Harry who?",
            "punchline": "Harry up and answer the door!"
        },
        {
            "id": 16,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Bless! \n Bless who?",
            "punchline": "I didn't sneeze, but thank you."
        },
        {
            "id": 17,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Tank \n Tank who?",
            "punchline": "You're welcome!"
        },
        {
            "id": 18,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Opportunity",
            "punchline": "  Opportunity doesn't knock twice."
        },
        {
            "id": 19,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Alex. \n Alex who?",
            "punchline": "ALex the questions around here!"
        },
        {
            "id": 20,
            "type": "knock-knock",
            "setup": "Knock knock. \n Who's there? \n Hawaii. \n Hawaii who?",
            "punchline": "I'm fine, Hawaii you?"
        },
        {
            "id": 21,
            "type": "programming",
            "setup": "What's the best thing about a Boolean?",
            "punchline": "Even if you're wrong, you're only off by a bit."
        },
        {
            "id": 22,
            "type": "programming",
            "setup": "What's the object-oriented way to become wealthy?",
            "punchline": "Inheritance"
        },

        {
            "id": 24,
            "type": "programming",
            "setup": "Why did the programmer quit his job?",
            "punchline": "Because he didn't get arrays."
        },
        {
            "id": 26,
            "type": "programming",
            "setup": "A SQL query goes into a bar, walks up to two tables and ask ",
            "punchline": "Can I join you?"
        },
        {
            "id": 27,
            "type": "programming",
            "setup": "How many programmers does it take to change a light bulb?",
            "punchline": "None, that's a hardware problem."
        },
        {
            "id": 28,
            "type": "programming",
            "setup": "To understand what recursion is",
            "punchline": "you must first understand recursion."
        }, {
            "id": 28,
            "type": "programming",
            "setup": "What is an astronaut's favorite place on a computer?",
            "punchline": "The space bar!"
        },
        {
            "id": 28,
            "type": "programming",
            "setup": "What did the cat say when the mouse got away?",
            "punchline": " You’ve got to be kitten me!"
        },

        {
            "id": 28,
            "type": "general",
            "setup": "What did the ocean say to the sailboat?",
            "punchline": " Nothing, it just waved."
        },
        {
            "id": 28,
            "type": "general",
            "setup": " What does a dolphin say when he’s confused? ",
            "punchline": "Can you please be more Pacific?"
        },
        {
            "id": 28,
            "type": "general",
            "setup": "What kind of music are balloons afraid of?",
            "punchline": "Pop Music"
        }
    ];
}

Joker.tellAJoke = function (numberOfJokes) {

    var joke = Joker.jokes[Math.floor(Math.random() * Joker.jokes.length)]
    Tts.speak(joke.setup, function () {
        setTimeout(function () {
            Tts.speak(joke.punchline, function () {
                // if (--numberOfJokes) {
                //     setTimeout(Joker.tellAJoke, 1000, numberOfJokes)
                // }
            } /*, 'Google UK English Male'*/ )
        }, 1000)
    })

}
Joker.joke = function (numberOfJokes) {
    numberOfJokes = numberOfJokes || 1;
    Joker.tellAJoke(numberOfJokes)
}