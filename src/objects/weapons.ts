interface Weapon {
  name: string;
  imgSrc: string;
  price: number;
  perHit: number;
}

/* WEAPONS */

const balisong: Weapon = {
  name: "Balisong",
  imgSrc: "./src/img/weapons/balisong2.webp",
  price: 50,
  perHit: 4,
};

const shuriken: Weapon = {
  name: "Shuriken",
  imgSrc: "./src/img/weapons/shuriken.png",
  price: 300,
  perHit: 25,
};

const nokia: Weapon = {
  name: "Nokia 3310",
  imgSrc: "./src/img/weapons/nokia.png",
  price: 1000,
  perHit: 100,
};

const katana: Weapon = {
  name: "Katana",
  imgSrc: "./src/img/weapons/katana.png",
  price: 2999,
  perHit: 299,
};

const wobbler: Weapon = {
  name: "Wobbler",
  imgSrc: "./src/img/weapons/wobbler.png",
  price: 20000,
  perHit: 1500,
};

const tank: Weapon = {
  name: "Tank",
  imgSrc: "./src/img/weapons/tank.png",
  price: 100000,
  perHit: 5000,
};

const spaceship: Weapon = {
  name: "Spaceship",
  imgSrc: "./src/img/weapons/spaceship.png",
  price: 500000,
  perHit: 50000,
};

const banana: Weapon = {
  name: "Banana",
  imgSrc: "./src/img/weapons/banana.png",
  price: 2579333,
  perHit: 123456,
};

/* export */
export const weapons = {
  balisong,
  shuriken,
  nokia,
  katana,
  wobbler,
  tank,
  spaceship,
  banana,
};
