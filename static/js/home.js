document.addEventListener("DOMContentLoaded", () => {
    const promptTextElement = document.querySelector("#home .prompt-text");
    const savePromptButton = document.getElementById("save-prompt-button");
    const savedPromptsList = document.getElementById("saved-prompts-list");
    const clearSavedPromptsModal = document.querySelector("#home .modal");
    const toastDuration = 3000;
    const toastBackground = "#4a90e2";
    const prompts = [
        // Author
        "A lone pacifist must navigate a world where violence is commonplace without physically fighting back.",
        "In this country, colors have laws. For example, the color 'blue' is not allowed to be used by women in any way.",
        "Baseball bats as self-defense weapons are stigmatized in this country; people found out to have used them are marked for death by the mob.",

        // Community Contributions

        // GPT-4o
        "Everyone is born with a timer on their wrist. It counts down to when the government will erase your memories. Yours just hit zero.",
        "In a future where dreams are taxed, your unpaid balance just turned into a warrant for your arrest.",
        "Children are no longer born naturally. One day, you discover someone who was.",
        "The sky has been off-limits for decades. Today, something falls from it.",
        "All emotions are illegal. You’ve just been caught smiling.",
        "A society where the internet thinks for you—until it starts thinking against you.",
        "You work as a 'memory curator,' deleting unwanted memories from the elite. One day, you find your own childhood.",
        "The wealthy live on floating cities. The poor live in the shadows they cast. A revolution begins in the clouds.",
        "Every citizen must donate one body part at age 18. Your turn is tomorrow, but you’re not human.",
        "A vaccine cured all diseases—but made humanity infertile. You’re the only child born in 20 years.",
        "Your job is to deliver scripted conversations to lonely people. One client breaks script.",
        "An underground network of artists secretly spreads color in a grayscale world. You’ve just been recruited.",
        "The city resets every midnight, wiping all memory. You’ve started to remember.",
        "A surveillance drone malfunctions and begs you not to turn it in.",
        "You’re born into a world where the rich age in reverse. Today, your 40-year-old infant boss just fired you.",
        "Citizens are assigned an emotion to feel for life. Yours is indifference. Until now.",
        "A machine translates animals' thoughts into speech. It begins a broadcast saying, 'We remember what you did.'",
        "Every building has a heartbeat. The city is alive—and it’s angry.",
        "At 25, people choose their permanent job. You chose wrong. The only escape is treason.",
        "A government-run dating app forces lifelong matches. You’ve been paired with your sworn enemy.",
        "You and your neighbor keep accidentally receiving each other’s packages. One of them changes everything.",
        "A rainy day, a cozy café, and a journal left behind by a stranger.",
        "You move into a new apartment and find a forgotten note under the floorboards.",
        "Your childhood friend returns to town after ten years. They remember something you forgot.",
        "You open a small flower shop. One customer keeps coming in, never buying anything, just talking.",
        "You start a morning jog routine. On day seven, someone starts jogging with you in silence.",
        "Your pet brings home an unexpected ‘gift’ every day—and you start to see a pattern.",
        "You work at a bakery where every customer seems to have a story they can’t tell anyone else.",
        "You help an elderly neighbor with their garden and uncover a decades-old mystery.",
        "Every Sunday, someone leaves a new book on the community library shelf—with handwritten notes inside.",
        "You take the same bus every day. One day, your seat is already taken by someone with your name.",
        "You join a local club just to get out of the house. It’s weird, but it feels like home.",
        "You decide to cook every recipe in your late grandmother’s handwritten cookbook.",
        "You and a stranger always reach for the same item at the grocery store. One day, you finally talk.",
        "You start writing letters to your future self. One morning, you find a reply.",

        // Claude 3.7 Sonnet
        "Two college rivals share an apartment and discover they have the same secret hobby.",
        "A bookstore owner swaps phones with a musician and finds they share a dating app match.",
        "After a terrible blind date, two strangers learn they're in the wedding party of mutual friends.",
        "A food critic falls for the owner of a food truck they just gave a bad review.",
        "Two exes get snowed in together at a mountain cabin during a friend's wedding weekend.",
        "A florist crushes on a customer buying weekly flowers for their grandmother.",
        "A coffee shop regular falls for a barista who creatively misspells their name daily.",
        "An artist and a business executive become roommates and clash until finding common ground.",
        "Two online gaming rivals meet at a convention, unaware of each other's virtual identity.",
        "A pet groomer and a vet co-parent an abandoned puppy while developing feelings.",
        "After being stood up, someone receives a cake and note from the sympathetic baker.",
        "Two long-distance friends realize their feelings when one moves to be closer.",
        "A tour guide repeatedly encounters a tourist seeking authentic local experiences.",
        "An understudy performs opposite their crush when the lead actor calls in sick.",
        "Two neighbors who communicate via sticky notes finally meet during a building emergency.",
        "A personal trainer and a difficult client attract despite opposite lifestyles.",
        "A tattoo artist falls for a client while covering up their ex's name.",
        "A marine biologist gives tours to an unrecognized celebrity in disguise.",
        "A delivery driver notices they keep getting orders from the same attractive customer.",
        "Two people catfished by the same person team up and connect with each other.",
        "A detective gets cryptic letters a day before each local murder.",
        "At a reunion, a body is found where a student vanished 25 years ago.",
        "An art collector is killed in a gallery full of murder-themed paintings.",
        "Six strangers on an island realize they’re tied to the same cold case.",
        "A podcaster's cold case show attracts a killer who comments with clues.",
        "A synesthetic detective 'tastes' lies and senses something’s off.",
        "After a psychic’s murder, the lead detective starts having visions.",
        "In a town of mood indicators, one murder victim dies 'perfectly content.'",
        "A mystery writer dies in a room staged like their unpublished story.",
        "Actors in a play start dying in the same order as their characters.",
        "A strange plant at a murder scene shouldn't even exist.",
        "A high-security building has one 5-minute gap—and someone dies in it.",
        "A body in the snow shows no footprints—yet died of heatstroke.",
        "A smartwatch logs impossible vitals right before a murder.",
        "A grandmaster dies at a chess match, with clues in an endgame layout.",
        "Three 'natural' deaths in one week—all with the same wrist mark.",
        "A body is found with QR code tattoos leading to suspects' profiles.",
        "An AI creator is murdered, and the AI seems to be covering its tracks.",
        "During a solar eclipse, an astronomer dies by a beam of sunlight.",
        "A perfumer is murdered, and a scent triggers trauma in every cop there.",
        "A wizard's apprentice accidentally swaps bodies with their master's familiar during a spell gone wrong.",
        "The last dragon in existence has disguised itself as a human and now runs the local bookshop.",
        "In a world where magic is fueled by memories, spellcasters must decide what they're willing to forget.",
        "A knight discovers that the sword they've been carrying for years is actually a trapped demigod.",
        "Every full moon, the ocean parts to reveal an ancient city where impossible trades are made.",
        "A forest spirit wakes up after a century-long slumber to find their woods replaced by a sprawling metropolis.",
        "Someone inherits a house that exists simultaneously in our world and the fae realm.",
        "A reluctant necromancer who can only resurrect things for 24 hours struggles with saying goodbye repeatedly.",
        "In a library of forbidden spells, each book whispers its secrets to anyone who will listen.",
        "A cartographer discovers that the maps they draw become reality, but with unpredictable twists.",
        "The tattoos on your skin move and change to warn you of approaching danger.",
        "A courier service that delivers packages between different realms faces its most challenging delivery yet.",
        "The stars are disappearing one by one, and only a forgotten oracle knows why.",
        "Every time you sleep, you wake up in an alternate fantasy world where you're a legendary hero.",
        "A magical competition where contestants must create the most beautiful illusion turns deadly.",
        "The city's clock tower is actually a prison for an ancient deity whose influence grows as the gears turn.",
        "A witch who can speak to objects learns a terrible secret from an heirloom passed down through generations.",
        "The last surviving member of a magical bloodline discovers their power is something entirely unexpected.",
        "A deal with a trickster god goes awry when the fine print of the contract is revealed.",
        "In a world where shadows have personalities separate from their owners, yours has gone missing.",
        "Every hundred years, the veil between worlds thins, and this time, something wants to come through.",
        "A magical university where final exams involve surviving in pocket dimensions created by the professors.",
        "A bard whose music can alter reality discovers their newest composition has unforeseen consequences.",
        "The ghost of a dragon haunts the last knight who slew it, demanding an impossible redemption.",
        "An ordinary person stumbles upon a hidden market where memories, dreams, and destinies are traded.",

        // Gemini 2.5 Flash
        "A sentient AI falls in love with a human who hates technology.",
        "The last person on Earth receives a mysterious text message.",
        "A forgotten locket grants the wearer the ability to talk to animals.",
        "A city where gravity works sideways.",
        "You discover your reflection is living a completely different life.",
        "The clouds start raining objects instead of water.",
        "A time traveler accidentally gets stuck in their own past.",
        "Everyone wakes up one morning with a new, strange ability.",
        "A detective who can only solve cases while sleepwalking.",
        "The moon disappears.",
        "A portal to another dimension opens in a local park.",
        "A world where dreams are contagious.",
        "A man inherits an old bookstore with a hidden secret.",
        "The stars begin to sing.",
        "A map appears that shows you the location of your greatest desire.",
        "A town where no one can lie.",
        "A robot experiences emotion for the first time.",
        "A woman finds a message in a bottle from the future.",
        "The shadows come alive at night.",
        "A world where people are born with wings.",
        "You can see sounds.",
        "Somewhere in Nevada... there is a vending machine that dispenses advice.",
        "The ground starts to whisper secrets.",
        "You receive letters from your future self.",
        "A society that lives underground.",
        "A clock that runs backward.",
        "You find a key that opens any door.",
        "Today, magic has finally returned to the world.",
        "A town where it's always twilight.",
        "A young woman can communicate with plants.",
        "A mirror that shows you parallel universes.",
        "A young man discovers that his favorite book is writing itself.",
        "A school for training mythical creatures as pets.",
        "The wind tells stories.",

        // Gemma 3 "Starshine" 12B (https://huggingface.co/ToastyPigeon/Gemma-3-Starshine-12B)
        "In a world where art and creativity have been outlawed, a group of rebels secretly gathers to hear stories.",
        "A city is built around an enormous, central AI that dictates every aspect of life.",
        "Every family is assigned by the state based on genetic compatibility and social standing. Deviance from societal norms is heavily penalized.",
        "An authoritarian regime has developed technology that can erase memories.",
        "Citizens are divided into castes based on the color of their clothing, which symbolizes their profession and social status.",
        "A genetically engineered paradise is created as a sanctuary for the elite.",
        "After a devastating war, all forms of communication are outlawed. People are forced to rely on gestures and body language to convey meaning.",
        "Everyone is required to participate in nightly dream therapy sessions where their subconscious desires and fears are manipulated for political gain.",
        "A lone astronaut receives a cryptic transmission from Earth. It's been decades since any signal was sent.",
        "A young human attends school on a planet colonized by aliens.",
        "You discover you can sell dreams to people. But each dream comes with a price – a fragment of their memory or emotion.",
        "You wake up to find someone has stolen your memories of a significant event from your life.",
        "In a world where robots are commonplace, you seek therapy from one. The robot claims it understands you better than anyone else.",
        "Your government offers free genetic enhancements for everyone. However, the process randomly alters your appearance, skills, and even personality.",
        "You stumble upon an abandoned city where the inhabitants vanished without a trace. There are no signs of violence, just complete silence.",
        "Two hackers, each with unique skills, accidentally fall in love while infiltrating a corporation.",
        "A group of scientists accidentally creates a sentient AI trapped inside a pet rock. They realize they cannot communicate with it directly.",
        "You're part of a company that offers time loop vacations. Clients can relive specific moments in history or fictional timelines over and over again.",
        "You get lost in a bioluminescent forest where the trees pulse with light in response to emotion.  You encounter someone else who feels similarly lost.",
        "A machine built to simulate dreams begins having its own. It starts showing its creators disturbing visions about the future.",
        "You discover a device that allows you to swap bodies with any version of yourself across time and space.",
        "A dragon discovers a love letter written by a knight.",
        "The last remaining elf builds a society for gnomes.",
        "A talking cat is a master thief and detective.",
        "A magical library only appears once every hundred years, containing forbidden knowledge.",
        "A princess runs away to join the circus.",
        "Two rival kingdoms agree to an arranged marriage between their heirs...who already know each other and hate each other.",
        "A group of adventurers unearth a portal to a world where time flows backward.",
        "An apprentice wizard accidentally summons a demon into his dorm room.",
        "A goblin king's daughter falls in love with a human shepherd.",
        "A young witch finds she can talk to plants and must stop them from taking over the kingdom.",
        "A prophecy says only a 'chosen one' can wield the Sword of Shadows, but nobody knows who that is...until they find it in the most unexpected place.",
        "A lonely gargoyle longs to be human, but doesn't know how.",
        "A cursed castle holds the key to restoring a dead queen.",
        "A band of goblins is recruited by a wise old wizard to help save the kingdom.",
        "A forgotten god awakens after centuries of slumber and needs a mortal champion.",

        // Mistral NeMo "Wayfarer" 12B (https://huggingface.co/LatitudeGames/Wayfarer-12B)
        "In the middle of a moonless night, a creature emerges from the depths of the forest.",
        "You wake up in a dark room with no memory of how you got there. A single red door stands before you, unlocked but seemingly impassable.",
        "Your new neighbors seem perfect at first - until you notice their odd habits.",
        "The old lighthouse keeper claims he's seen things no man should see.",
        "The old amusement park has been closed for decades, its rides rusted and decaying. But strange sounds echo from its depths on stormy nights.",
        "In a small town gripped by paranoia, a series of mysterious disappearances rocks the community.",
        "The town's old church has been the site of numerous inexplicable occurrences over the years.",
        "A family moves into their dream home, only to discover the previous owners weren't as benevolent as the realtor led them to believe.",

        // Mistral NeMo "NemoMix-Unleashed" 12B (https://huggingface.co/MarinaraSpaghetti/NemoMix-Unleashed-12B)
        "You wake up in an unfamiliar room, unable to remember how you got there. As you explore, you discover that you're not alone.",
        "An antique mirror is delivered to your home, and soon strange things start happening when you look at your reflection.",
        "A series of inexplicable events lead you to believe that someone, or something, is trying to steal your life.",
        "Your neighborhood is suddenly plagued by a mysterious, incurable illness. As the death toll rises, you realize something sinister is at work.",
        "Your favorite childhood toy starts moving on its own, always watching you, always just out of sight.",
        "Strange symbols etched onto your skin start to appear after you find an ancient artifact while hiking. Soon, they begin to glow and burn.",
        "The nightly news reports of disappearances near your town increase. Then one night, the TV cuts to static, and you hear a voice calling out your name.",
        "Your dog starts acting strangely, growling at empty rooms and refusing to leave your side. Then you see what it's staring at.",
    ];

    let lastPromptIndex = -1;

    const getSavedPrompts = () => JSON.parse(localStorage.getItem("savedPrompts")) || [];

    const loadSavedPrompts = () => {
        let saved = getSavedPrompts();
        savedPromptsList.innerHTML = "";

        if (saved.length === 0)
        {
            savedPromptsList.innerHTML = '<p class="is-size-5">No prompts saved yet.</p>';
        }
        else
        {
            saved.forEach(prompt => {
                const p = document.createElement("p");
                p.classList = "mb-1 is-size-6";
                p.innerText = `• ${prompt}`;
                savedPromptsList.appendChild(p);
            });
        }
    }

    const toast = (toastText) => {
        Toastify({
            text: toastText,
            duration: toastDuration,
            style: {
                background: toastBackground,
            },
        }).showToast();
    }

    document.getElementById("get-new-prompt-button").addEventListener("click", () => {
        const debug = false;

        let newIndex;
        if (!debug)
        {
            do {
                newIndex = (Math.random() * prompts.length) | 0;
            } while (newIndex === lastPromptIndex && prompts.length > 1);
        }
        else
        {
            newIndex = lastPromptIndex + 1;
        }

        lastPromptIndex = newIndex;
        promptTextElement.innerText = prompts[newIndex];
        if (savePromptButton.hasAttribute("disabled"))
        {
            savePromptButton.removeAttribute("disabled");
            savePromptButton.removeAttribute("aria-disabled");
        }
    });

    savePromptButton.addEventListener("click", () => {
        const currentPrompt = promptTextElement.innerText;
        let saved = getSavedPrompts();
        if (!saved.includes(currentPrompt))
        {
            saved.push(currentPrompt);
            localStorage.setItem("savedPrompts", JSON.stringify(saved));
            loadSavedPrompts();
            toast("Prompt saved!");
        }
        else
        {
            toast("You've already saved this prompt!");
        }
    });

    document.querySelector("#home .card .card-header .card-header-icon").addEventListener("click", () => {
        if (getSavedPrompts().length > 0)
        {
            clearSavedPromptsModal.classList.add("is-active");
        }
        else
        {
            toast("No saved prompts to clear.");
        }
    });

    (document.querySelectorAll("#home .modal-background, #home .modal-card-head .delete, #home .modal-card-foot .button") || []).forEach(element => {
        element.addEventListener("click", () => {
            element.closest(".modal").classList.remove("is-active");
        });
    });

    clearSavedPromptsModal.querySelector(".confirm-button").addEventListener("click", () => {
        localStorage.removeItem("savedPrompts");
        loadSavedPrompts();
        toast("All saved prompts cleared!");
    });

    loadSavedPrompts();
});