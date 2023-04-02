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
const chicken2: Enemy = {
  name: "Chicken2",
  imgSrc: "../src/img/chicken.png",
  energy: 50,
  prize: 200,
};
const chicken3: Enemy = {
  name: "Chicken3",
  imgSrc: "../src/img/chicken.png",
  energy: 50,
  prize: 200,
};
const chicken4: Enemy = {
  name: "Chicken4",
  imgSrc: "../src/img/chicken.png",
  energy: 50,
  prize: 200,
};
const chicken5: Enemy = {
  name: "Chicken5",
  imgSrc: "../src/img/chicken.png",
  energy: 50,
  prize: 200,
};

/* export */
export const enemies = {
  hulk,
  chicken,
  chicken2,
  chicken3,
  chicken4,
  chicken5,
};
