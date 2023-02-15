import { playersName, gameMode } from "../script.js";
import { counter } from "./listMap.js";
import { counterAI } from "./listMapAI.js";
import { mainInput } from "../script.js";

function turnAlerter() {
    const turnChecker = document.querySelector('.turnChecker');
    if (gameMode === 'Local') {
        if (counter % 2 === 0) {
            turnChecker.innerHTML = `${playersName[0]}'s turn`;
        } else {
            turnChecker.innerHTML = `${playersName[1]}'s turn`;
        }
    } else {
        if (counterAI % 2 === 0) {
            turnChecker.innerHTML = `${playersName[0]}'s turn`;
        } else {
            turnChecker.innerHTML = `${playersName[1]}'s turn`;
        }
    }
    
    mainInput.value = '';
}

export default turnAlerter