interface Enemy {
  name: string;
  imgSrc: string;
  energy: number;
  prize: number;
}

/* ENEMIES */

const hulk: Enemy = {
  name: "Hulk",
  imgSrc: "../src/img/enemies/enemy1.png",
  energy: 10,
  prize: 50,
};

const chicken: Enemy = {
  name: "Chicken",
  imgSrc: "../src/img/enemies/chicken.png",
  energy: 50,
  prize: 200,
};

const hologram: Enemy = {
  name: "Hologram",
  imgSrc: "../src/img/enemies/hologram.png",
  energy: 200,
  prize: 300,
};

const robot: Enemy = {
  name: "Robot",
  imgSrc: "../src/img/enemies/robot.png",
  energy: 500,
  prize: 500,
};

const eagle: Enemy = {
  name: "Eagle",
  imgSrc: "../src/img/enemies/eagle.png",
  energy: 1000,
  prize: 800,
};

const bear: Enemy = {
  name: "Teddy Bear",
  imgSrc: "../src/img/enemies/teddybear.png",
  energy: 3000,
  prize: 1500,
};

const puma: Enemy = {
  name: "Puma",
  imgSrc: "../src/img/enemies/puma.png",
  energy: 8000,
  prize: 3800,
};

const snake: Enemy = {
  name: "Snake",
  imgSrc: "../src/img/enemies/snake.png",
  energy: 15000,
  prize: 8000,
};

const nomad: Enemy = {
  name: "Digital Nomad",
  imgSrc: "../src/img/enemies/nomad.png",
  energy: 30000,
  prize: 16000,
};

const octopus: Enemy = {
  name: "Octopus",
  imgSrc: "../src/img/enemies/octopus.png",
  energy: 50000,
  prize: 25000,
};

const cyborg: Enemy = {
  name: "Cyborg 100%",
  imgSrc: "../src/img/enemies/cyborg.png",
  energy: 150000,
  prize: 50000,
};

const emoji: Enemy = {
  name: "Angry Emoji",
  imgSrc: "../src/img/enemies/emoji.png",
  energy: 250000,
  prize: 100420,
};

const cop: Enemy = {
  name: "Corrupt Cop",
  imgSrc: "../src/img/enemies/cop.png",
  energy: 500000,
  prize: 997112,
};

const samurai: Enemy = {
  name: "Samurai",
  imgSrc: "../src/img/enemies/samurai.png",
  energy: 850000,
  prize: 2000000,
};

const terminator: Enemy = {
  name: "Terminator",
  imgSrc: "../src/img/enemies/terminator.png",
  energy: 9200006,
  prize: 7777777,
};

const duck: Enemy = {
  name: "Devil Duck",
  imgSrc: "../src/img/enemies/duck.png",
  energy: 5000000,
  prize: 5000000,
};

/* export */
export const enemies = {
  hulk,
  chicken,
  hologram,
  robot,
  eagle,
  bear,
  puma,
  snake,
  nomad,
  octopus,
  cyborg,
  emoji,
  cop,
  samurai,
  terminator,
  duck,
};
