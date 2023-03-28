import { ninjas } from "./objects/ninjas.js";
import { enemies } from "./objects/enemies.js";

/* DOM */

const dialogBtn = document.getElementById("next-dialog");
const ninjaImg = document.getElementById("ninja-img");
const ninjaCaption = document.getElementById("ninja-name");
const dialogElement = document.getElementById("dialog");
const inputName = document.getElementById("name") as HTMLInputElement;
const nameBtn = document.getElementById("name-btn");
const inputComponent = document.querySelector(
  ".input-container"
) as HTMLDivElement;
const nameSpan = document.getElementById("name-span");

/* ninjas */

const ninjasList = Object.values(ninjas);
let ninjaNum = 0;
let ninja = ninjasList[ninjaNum];
let dialogNum = 0;
let dialoguesAll = ninja.dialog;
let dialog = dialoguesAll[dialogNum];
let playerName = "";

/* functions */

function nextDialog() {
  if (dialogNum < dialoguesAll.length - 1) {
    dialogNum++;
    if (dialogNum === 1 && ninjaNum === 0) {
      displayNameInput();
      inputName.addEventListener("input", displayNameInput);
    } else {
      inputComponent!.style.display = "none";
      if (dialogNum > 2) {
        nameSpan!.innerText = "";
      }
    }
    dialog = dialoguesAll[dialogNum];
    dialogElement!.textContent = dialog;
  }
}

function displayNameInput() {
  inputComponent!.style.display = "flex";
  if (inputName.value !== "") {
    nameBtn!.style.visibility = "visible";
  } else {
    nameBtn!.style.visibility = "hidden";
  }
}

dialogElement!.innerText = dialog;
dialogBtn!.addEventListener("click", nextDialog);

nameBtn!.addEventListener("click", () => {
  playerName = inputName.value;
  nameSpan!.innerText = playerName;
  nextDialog();
});
