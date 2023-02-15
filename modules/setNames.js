import { playersName, gameMode } from "../script.js";
import turnAlerter from "./turnAlerter.js";
import { getAIName } from "./AI.js";
import getName from "./getName.js";


function setNames() {
    if (gameMode === 'Local') {
        for (let i = 0; i < 2; i++) {
            playersName.push(getName(`Player ${i+1}`));
        }
    } else {
        for (let i = 0; i < 2; i++) {
            if (i % 2 == 0) {
                playersName.push(getName(`Player ${i+1}`));
            } else {
                playersName.push(getAIName());
            }
        }
    }

    activeGameSection();
    turnAlerter();
}


function activeGameSection() {
    document.querySelector('.main__gameMode').style.display = 'none';
    document.querySelector('main').classList.add('active');

    const gameSection =  document.querySelector('.main__gameSection');
    gameSection.classList.add('active');

    document.querySelector('.main__countriesDetails').classList.add('active');
}

export default setNames
