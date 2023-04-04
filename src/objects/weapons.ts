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

const shuriken: Weapon = {
  name: "Shuriken",
  imgSrc: "../src/img/weapons/shuriken.png",
  price: 300,
  perHit: 25,
};

const nokia: Weapon = {
  name: "Nokia 3310",
  imgSrc: "../src/img/weapons/nokia.png",
  price: 1000,
  perHit: 100,
};

const katana: Weapon = {
  name: "Katana",
  imgSrc: "../src/img/weapons/katana.png",
  price: 2999,
  perHit: 299,
};

const wobbler: Weapon = {
  name: "Wobbler",
  imgSrc: "../src/img/weapons/wobbler.png",
  price: 5000,
  perHit: 791,
};

const spaceship: Weapon = {
  name: "Spaceship",
  imgSrc: "../src/img/weapons/spaceship.png",
  price: 15000,
  perHit: 1200,
};

/* export */
export const weapons = {
  balisong,
  shuriken,
  nokia,
  katana,
  wobbler,
  spaceship,
};
