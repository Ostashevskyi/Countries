import setNames from "./modules/setNames.js";
import setTurnes from "./modules/setTurnes.js";
import toogleBurger from "./modules/toogleBurger.js";

export let playersName = [];
export const usedCountries = [];
export const mainInput = document.querySelector('.mainInput');
export const ntfcParagraph = document.querySelector('.notifications');
export const ul = document.querySelector('ul');
export const textarea = document.querySelector('textarea');
export let gameMode;

const gameModeBtns = document.querySelectorAll('.gameModeBtn');

for (let i = 0; i < gameModeBtns.length; i++) {
    gameModeBtns[i].addEventListener('click', function() {
        gameMode = this.value;
        setNames();
    })
}

toogleBurger();

 
mainInput.addEventListener('keypress', setTurnes);

