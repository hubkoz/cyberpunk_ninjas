import { ninjas } from "./objects/ninjas.js";
import { enemies } from "./objects/enemies.js";
/* DOM */
const dialogBtn = document.getElementById("next-dialog");
const ninjaImg = document.getElementById("ninja-img");
const ninjaCaption = document.getElementById("ninja-name");
const dialogSpan = document.getElementById("dialog");
const inputName = document.getElementById("name");
const nameBtn = document.getElementById("name-btn");
const inputComponent = document.querySelector(".input-container");
const nameSpan = document.getElementById("name-span");
const city = document.querySelector(".city-container");
const gym = document.querySelector(".gym-container");
const enemyFigure = document.getElementById("enemy");
const enemyImg = document.getElementById("enemy-img");
const enemyName = document.getElementById("enemy-name");
const enemyNrgSpan = document.getElementById("enemy-energy");
const perHitSpan = document.getElementById("per-hit");
const skillsSpan = document.getElementById("skills");
const bag = document.getElementById("bag");
const bagImg = document.getElementById("bag-img");
const enemyPrizeSpan = document.getElementById("prize");
const ninjasContainer = document.getElementById("ninjas-container");
const shop = document.getElementById("shop-container");
const cityBtn = document.getElementById("city-btn");
const gymBtn = document.getElementById("gym-btn");
const ninjasBtn = document.getElementById("ninjas-btn");
const shopBtn = document.getElementById("shop-btn");
const footer = document.getElementById("buttons-container");
const playerStats = document.getElementById("player-stats");
const skillsStatsSpan = document.getElementById("skills-stats-span");
const moneyStatsSpan = document.getElementById("money-stats-span");
const nameStats = document.getElementById("name-stats");
/* player */
let playerName = "";
let perHit = 100;
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
        }
        else {
            inputComponent.style.display = "none";
            dialogBtn.style.display = "flex";
            if (dialogNum > 2) {
                nameSpan.innerText = "";
            }
        }
        dialog = dialoguesAll[dialogNum];
        dialogSpan.textContent = dialog;
        if (dialogNum === 8 && ninjaNum === 0)
            showCity();
        if (dialogNum === 9 && ninjaNum === 0)
            enemyFigure.style.visibility = "visible";
        if (dialogNum === 10 && ninjaNum === 0)
            showGym();
        if (dialogNum === 11 && ninjaNum === 0) {
            bag.style.visibility = "visible";
            dialogBtn.style.visibility = "hidden";
        }
        else {
            dialogBtn.style.visibility = "visible";
        }
        if (dialogNum === 13 && ninjaNum === 0) {
            addCard();
            showNinjas();
        }
        if (dialogNum === 14 && ninjaNum === 0)
            showShop();
        if (dialogNum === dialoguesAll.length - 1 && ninjaNum === 0) {
            footer.style.visibility = "visible";
            playerStats.style.display = "flex";
        }
        /* hide next dialog button */
        if (dialogNum === dialoguesAll.length - 1)
            dialogBtn.style.display = "none";
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
    if (dialogNum === 11 && ninjaNum === 0)
        nextDialog();
});
function displayNameInput() {
    inputComponent.style.display = "flex";
    if (inputName.value !== "") {
        nameBtn.style.visibility = "visible";
    }
    else {
        nameBtn.style.visibility = "hidden";
    }
}
/* DOM manipulate */
dialogSpan.innerText = dialog;
ninjaCaption.innerText = ninja.name;
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
        if (enemyNum % 3 === 0) {
            console.log("next ninja!");
        }
    }
});
//# sourceMappingURL=index.js.map