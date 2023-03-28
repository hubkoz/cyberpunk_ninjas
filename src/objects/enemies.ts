
interface Enemy {
  name: string;
  imgSrc: string;
  energy: number;
}

/* ENEMIES */

const hulk = {
    name: "Hulk",
    imgSrc: "../assets/img/enemy1.png",
    energy: 10,
  };
  
  const chicken = {
    name: "Chicken",
    imgSrc: "../assets/img/chicken.png",
    energy: 50,
  };
  
  
  /* export */
  export const enemies = {
    hulk,
    chicken,
  };
  