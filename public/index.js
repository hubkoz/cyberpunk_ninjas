import { ninjas } from "./objects/ninjas.js";
import { enemies } from "./objects/enemies.js";
import { weapons } from "./objects/weapons.js";
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
const shopContainer = document.getElementById("shop-container");
let buyWeaponBtns = document.querySelectorAll(".buy");
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
/* weapons */
const weaponsList = Object.values(weapons);
let weaponNum = 0;
let weapon = weaponsList[weaponNum];
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
            unlockWeaponShop();
            buyWeaponBtns = document.querySelectorAll(".buy");
            footer.style.visibility = "visible";
            playerStats.style.display = "flex";
        }
        /* hide next dialog button */
        if (dialogNum === dialoguesAll.length - 1)
            dialogBtn.style.display = "none";
    }
}
/* shop logic */
function unlockWeaponShop() {
    shopContainer.innerHTML += `<figure>
    <img src=${weapon.imgSrc} alt=${weapon.name} />
    <figcaption class="nowrap">${weapon.name}<br/>Price: ${weapon.price} <br/> Per hit: +${weapon.perHit}</figcaption>
    <button id="weapon-${weapon.name}" class="buy">Buy</button>
  </figure>`;
    buyWeaponBtns = document.querySelectorAll(".buy");
    buyWeaponBtns.forEach((button) => {
        button.addEventListener("click", () => {
            buyWeapon();
        });
    });
}
function buyWeapon() {
    if (money >= weapon.price) {
        money -= weapon.price;
        moneyStatsSpan.innerText = `${money.toString()}`;
        perHit += weapon.perHit;
        perHitSpan.innerText = perHit.toString();
        let weaponJustBoughtCss = document.getElementById(`weapon-${weapon.name}`);
        weaponJustBoughtCss.style.display = "none";
        weaponNum++;
        weapon = weaponsList[weaponNum];
        unlockWeaponShop();
    }
}
/* ninjas logic */
function addCard() {
    ninjasContainer.innerHTML += `<figure>
    <img src=${ninja.imgSrc} alt=${ninja.name} />
    <figcaption class="nowrap">${ninja.name}<br/>${ninja.skill} skills / ${ninja.interval / 1000}s</figcaption>
  </figure>`;
    setInterval(setNinjaSkillsInterval(ninja.skill), ninja.interval);
}
function setNinjaSkillsInterval(skill) {
    return function () {
        let skillsAdd = skill;
        skills += skillsAdd;
        skillsSpan.innerText = skills.toString();
        skillsStatsSpan.innerText = skills.toString();
        //console.log(`add skills ${skillsAdd}`);
    };
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
function ninjaUpdate() {
    ninja = ninjasList[ninjaNum];
    dialogNum = 0;
    dialoguesAll = ninja.dialog;
    dialog = dialoguesAll[dialogNum];
    dialogSpan.innerText = dialog;
    ninjaCaption.innerText = ninja.name;
    ninjaImg.src = ninja.imgSrc;
    ninjaImg.alt = ninja.name;
}
ninjaUpdate();
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
    nameSpan.innerText = `${playerName}!`;
    nameStats.innerText = `${playerName}`;
    nextDialog();
});
/* enemy fight */
enemyImg.addEventListener("click", () => {
    if (skills > enemy.energy) {
        if (enemyNum === enemiesList.length - 1)
            win();
        money += enemy.prize;
        moneyStatsSpan.innerText = `${money.toString()}`;
        enemyNum++;
        enemy = enemiesList[enemyNum];
        enemyImg.src = enemy.imgSrc;
        enemyImg.alt = enemy.name;
        enemyNrgSpan.innerText = enemy.energy.toString();
        enemyName.innerText = enemy.name;
        enemyPrizeSpan.innerText = enemy.prize.toString();
        if (enemyNum % 3 === 0)
            nextNinja();
    }
});
function win() {
    enemyFigure.style.display = "none";
    alert("you won");
}
function nextNinja() {
    ninjaNum++;
    ninjaUpdate();
    addCard();
    dialogBtn.style.display = "flex";
}
//# sourceMappingURL=index.js.map