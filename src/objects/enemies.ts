interface Enemy {
  name: string;
  imgSrc: string;
  energy: number;
  prize: number;
}

/* ENEMIES */

const hulk: Enemy = {
  name: "Hulk",
  imgSrc: "../src/img/enemy1.png",
  energy: 10,
  prize: 50,
};

const chicken: Enemy = {
  name: "Chicken",
  imgSrc: "../src/img/chicken.png",
  energy: 50,
  prize: 200,
};

const hologram: Enemy = {
  name: "Hologram",
  imgSrc: "../src/img/hologram.png",
  energy: 100,
  prize: 300,
};

const robot: Enemy = {
  name: "Robot",
  imgSrc: "../src/img/robot.png",
  energy: 200,
  prize: 500,
};

/* export */
export const enemies = {
  hulk,
  chicken,
  hologram,
  robot,
};
