import {activeGameSection} from "./modules/setNames.js";
import setTurnes from "./modules/setTurnes.js";
import toogleBurger from "./modules/toogleBurger.js";
import setGameMode from "./modules/setGameMode.js";

export const mainInput = document.querySelector('.mainInput');
export let gameMode;

const gameModeBtns = document.querySelectorAll('.gameModeBtn');
  
setGameMode();

for (let i = 0; i < gameModeBtns.length; i++) {
    gameModeBtns[i].addEventListener('click', function() {
        gameMode = this.gameMode;
        activeGameSection();
    })
}

toogleBurger();
 
mainInput.addEventListener('keypress', setTurnes)

