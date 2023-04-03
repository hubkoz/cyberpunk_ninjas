interface Weapon {
  name: string;
  imgSrc: string;
  price: number;
  perHit: number;
}

/* WEAPONS */

const balisong: Weapon = {
  name: "Balisong",
  imgSrc: "../src/img/weapons/balisong2.webp",
  price: 50,
  perHit: 4,
};

const nokia: Weapon = {
  name: "Nokia 3310",
  imgSrc: "../src/img/weapons/nokia.png",
  price: 300,
  perHit: 25,
};

const spaceship: Weapon = {
  name: "Spaceship",
  imgSrc: "../src/img/weapons/spaceship.png",
  price: 1000,
  perHit: 100,
};

/* export */
export const weapons = {
  balisong,
  nokia,
  spaceship,
};
