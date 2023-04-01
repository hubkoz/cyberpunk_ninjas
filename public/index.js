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
/* player */
let playerName = "";
let perHit = 1;
let skills = 0;
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
let enemyNrg = enemy.energy;
/* functions */
function nextDialog() {
    if (dialogNum < dialoguesAll.length - 1) {
        dialogNum++;
        console.log(dialogNum);
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
    }
}
function showGym() {
    city.style.display = "none";
    gym.style.display = "flex";
}
function showCity() {
    gym.style.display = "none";
    city.style.display = "flex";
}
bagImg.addEventListener("click", () => {
    skills += perHit;
    perHitSpan.innerText = perHit.toString();
    skillsSpan.innerText = skills.toString();
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
perHitSpan.innerText = perHit.toString();
skillsSpan.innerText = skills.toString();
dialogBtn.addEventListener("click", nextDialog);
/* store player name */
nameBtn.addEventListener("click", () => {
    playerName = inputName.value;
    nameSpan.innerText = `${playerName}!`;
    nextDialog();
});
//# sourceMappingURL=index.js.map