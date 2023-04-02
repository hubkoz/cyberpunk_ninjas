interface Ninja {
  name: string;
  imgSrc: string;
  dialog: string[];
  skill: number;
}

/* NINJAS */
const daria: Ninja = {
  name: "Daria Bomber",
  imgSrc: "../src/img/daria.png",
  dialog: [
    "Hello and welcome in Wyszkow!",
    "They told me to babysit you, rookie so now you're my student. What's your name?",
    "Oh, wow! Very nice to meet you, ",
    "I'm Daria Bomber. I may not have the hacking skills of some of my fellow ninjas, but I've got a few tricks up my sleeeves. Boom goes the dynamite!",
    "Wyszkow is a bustling cyberpunk city known for its skilled ninjas who prowl the neon-lit streets. Located in the heart of the metropolis, Wyszkow is a hub of technology and innovation, with towering skyscrapers and holographic advertisements illuminating the night sky.",
    "The city is home to a diverse population of humans, cyborgs, and artificial intelligences, all coexisting in a complex and interconnected society. The ninjas of Wyszkow are revered for their abilities in stealth, combat, and hacking, and they are often hired by the city's wealthy and powerful to protect their interests.",
    "Despite the advanced technology and prosperity of Wyszkow, there is a dark underbelly to the city. Crime and corruption are rampant, and the ninjas often find themselves caught in the crosshairs of powerful criminal organizations and rival factions.",
    "Despite the dangers, the ninjas of Wyszkow are fiercely loyal to their city and will stop at nothing to defend it from threats both external and internal. They are the guardians of the city, always watching and ready to strike at a moment's notice.",
    "Here's our beautiful city! Come and look around.",
    "Oh no! There's an enemy! This one is quite weak but still stronger than you. You have to gain skills to beat him up.",
    "Here's our Training Room. You have to be stronger to face the villains!",
    "Punch the bag as hard as you can to gain skills.",
    "Wow, your muscles got very big! When your skill level will be greater than enemy level you will be able to defeat it.",
    "I'll be training you here so you'll be getting 5 skills every 10 seconds.",
    "This is our shop. You can buy weapon here which will help you fight enemies.",
    "Now gain some skills and kill the Hulk!",
  ],
  skill: 5,
};

const mikus: Ninja = {
  name: "MikuZ",
  imgSrc: "../src/img/mikus2.png",
  dialog: [
    "Yooo, I be MikuZ HAHA! Sup bro",
    "lorem ipsum bfskjhsfldjasflj fljfldlsaf lasfj ls fjlas lfj slaf slfjlsf",
    "I just playin. My dialogues are programmed correctly.",
  ],
  skill: 20,
};

/* EXPORT */
export const ninjas = { daria, mikus };
