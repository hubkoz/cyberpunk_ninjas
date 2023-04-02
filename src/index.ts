import { ninjas } from "./objects/ninjas.js";
import { enemies } from "./objects/enemies.js";

/* DOM */

const dialogBtn = document.getElementById("next-dialog") as HTMLButtonElement;
const ninjaImg = document.getElementById("ninja-img") as HTMLImageElement;
const ninjaCaption = document.getElementById("ninja-name");
const dialogSpan = document.getElementById("dialog") as HTMLSpanElement;
const inputName = document.getElementById("name") as HTMLInputElement;
const nameBtn = document.getElementById("name-btn") as HTMLButtonElement;
const inputComponent = document.querySelector(
  ".input-container"
) as HTMLDivElement;
const nameSpan = document.getElementById("name-span") as HTMLSpanElement;
const city = document.querySelector(".city-container") as HTMLDivElement;
const gym = document.querySelector(".gym-container") as HTMLDivElement;
const enemyFigure = document.getElementById("enemy");
const enemyImg = document.getElementById("enemy-img") as HTMLImageElement;
const enemyName = document.getElementById("enemy-name") as HTMLSpanElement;
const enemyNrgSpan = document.getElementById("enemy-energy") as HTMLSpanElement;
const perHitSpan = document.getElementById("per-hit") as HTMLSpanElement;
const skillsSpan = document.getElementById("skills") as HTMLSpanElement;
const bag = document.getElementById("bag");
const bagImg = document.getElementById("bag-img") as HTMLImageElement;
const enemyPrizeSpan = document.getElementById("prize") as HTMLSpanElement;
const ninjasContainer = document.getElementById(
  "ninjas-container"
) as HTMLDivElement;
const shop = document.getElementById("shop-container") as HTMLDivElement;
const cityBtn = document.getElementById("city-btn") as HTMLButtonElement;
const gymBtn = document.getElementById("gym-btn") as HTMLButtonElement;
const ninjasBtn = document.getElementById("ninjas-btn") as HTMLButtonElement;
const shopBtn = document.getElementById("shop-btn") as HTMLButtonElement;
const footer = document.getElementById("buttons-container");
const playerStats = document.getElementById("player-stats") as HTMLDivElement;
const skillsStatsSpan = document.getElementById(
  "skills-stats-span"
) as HTMLSpanElement;
const moneyStatsSpan = document.getElementById(
  "money-stats-span"
) as HTMLSpanElement;
const nameStats = document.getElementById("name-stats") as HTMLParagraphElement;

/* player */
let playerName = "";
let perHit = 1;
let skills = 0;
let money = 0;

/* ninjas */
const ninjasList = Object.values(ninjas);
let ninjaNum = 0;
let ninja = ninjasList[ninjaNum];
let dialogNum = 0;
let dialoguesAll = ninja.dialog;
let dialog = dialoguesAll[dialogNum];

/* enemies */
const enemiesList = Object.values(enemies);
let enemyNum = 0;
let enemy = enemiesList[enemyNum];

function nextDialog() {
  if (dialogNum < dialoguesAll.length - 1) {
    dialogNum++;

    /* Daria Bomber - tutorial */
    if (dialogNum === 1 && ninjaNum === 0) {
      displayNameInput();
      inputName.addEventListener("input", displayNameInput);
      dialogBtn.style.display = "none";
    } else {
      inputComponent.style.display = "none";
      dialogBtn.style.display = "flex";
      if (dialogNum > 2) {
        nameSpan.innerText = "";
      }
    }
    dialog = dialoguesAll[dialogNum];
    dialogSpan.textContent = dialog;
    if (dialogNum === 8 && ninjaNum === 0) showCity();
    if (dialogNum === 9 && ninjaNum === 0)
      enemyFigure!.style.visibility = "visible";
    if (dialogNum === 10 && ninjaNum === 0) showGym();
    if (dialogNum === 11 && ninjaNum === 0) {
      bag!.style.visibility = "visible";
      dialogBtn.style.visibility = "hidden";
    } else {
      dialogBtn.style.visibility = "visible";
    }
    if (dialogNum === 13 && ninjaNum === 0) {
      addCard();
      showNinjas();
    }
    if (dialogNum === 14 && ninjaNum === 0) showShop();
    if (dialogNum === dialoguesAll.length - 1 && ninjaNum === 0) {
      footer!.style.visibility = "visible";
      playerStats.style.display = "flex";
    }

    /* hide next dialog button */
    if (dialogNum === dialoguesAll.length - 1) dialogBtn.style.display = "none";
  }
}

function addCard() {
  ninjasContainer.innerHTML += `<figure>
    <img src=${ninja.imgSrc} alt=${ninja.name} />
    <figcaption class="nowrap">${ninja.name}<br/>${ninja.skill} skills / 10s</figcaption>
  </figure>`;
  setInterval(setNinjaSkillsInterval, ninja.interval);
}

function setNinjaSkillsInterval() {
  skills += ninja.skill;
  skillsSpan.innerText = skills.toString();
  skillsStatsSpan.innerText = skills.toString();
  console.log(`skills added from card ${ninja.name}`);
}

function showGym() {
  city.style.display = "none";
  ninjasContainer.style.display = "none";
  shop.style.display = "none";
  gym.style.display = "flex";
}
function showCity() {
  gym.style.display = "none";
  ninjasContainer.style.display = "none";
  shop.style.display = "none";
  city.style.display = "flex";
}
function showNinjas() {
  city.style.display = "none";
  gym.style.display = "none";
  shop.style.display = "none";
  ninjasContainer.style.display = "flex";
}
function showShop() {
  city.style.display = "none";
  gym.style.display = "none";
  ninjasContainer.style.display = "none";
  shop.style.display = "flex";
}

cityBtn.addEventListener("click", () => {
  showCity();
});
gymBtn.addEventListener("click", () => {
  showGym();
});
ninjasBtn.addEventListener("click", () => {
  showNinjas();
});
shopBtn.addEventListener("click", () => {
  showShop();
});

bagImg.addEventListener("click", () => {
  skills += perHit;
  perHitSpan.innerText = perHit.toString();
  skillsSpan.innerText = skills.toString();
  skillsStatsSpan.innerText = skills.toString();
  if (dialogNum === 11 && ninjaNum === 0) nextDialog();
});

function displayNameInput() {
  inputComponent!.style.display = "flex";
  if (inputName.value !== "") {
    nameBtn!.style.visibility = "visible";
  } else {
    nameBtn!.style.visibility = "hidden";
  }
}

/* DOM manipulate */
dialogSpan.innerText = dialog;

ninjaCaption!.innerText = ninja.name;
ninjaImg.src = ninja.imgSrc;
ninjaImg.alt = ninja.name;

enemyImg.src = enemy.imgSrc;
enemyImg.alt = enemy.name;
enemyNrgSpan.innerText = enemy.energy.toString();
enemyName.innerText = enemy.name;
enemyPrizeSpan.innerText = enemy.prize.toString();

perHitSpan.innerText = perHit.toString();
skillsSpan.innerText = skills.toString();

dialogBtn.addEventListener("click", () => nextDialog());

/* store player name */
nameBtn.addEventListener("click", () => {
  playerName = inputName.value;
  console.log(playerName);
  nameSpan.innerText = `${playerName}!`;
  nameStats.innerText = `${playerName}`;
  nextDialog();
});

/* enemy fight */
enemyImg.addEventListener("click", () => {
  if (skills > enemy.energy) {
    money += enemy.prize;
    moneyStatsSpan.innerText = `${money.toString()}`;
    enemyNum++;
    enemy = enemiesList[enemyNum];
    enemyImg.src = enemy.imgSrc;
    enemyImg.alt = enemy.name;
    enemyNrgSpan.innerText = enemy.energy.toString();
    enemyName.innerText = enemy.name;
    enemyPrizeSpan.innerText = enemy.prize.toString();
    if (enemyNum % 5 === 0) {
      console.log("next ninja!");
    }
  }
});
