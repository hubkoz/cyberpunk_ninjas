interface Enemy {
  name: string;
  imgSrc: string;
  energy: number;
}

/* ENEMIES */

const hulk: Enemy = {
  name: "Hulk",
  imgSrc: "../src/img/enemy1.png",
  energy: 10,
};

const chicken: Enemy = {
  name: "Chicken",
  imgSrc: "../src/img/chicken.png",
  energy: 50,
};

/* export */
export const enemies = {
  hulk,
  chicken,
};
