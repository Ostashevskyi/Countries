import { GAME_MOD } from "../constants/gameMode.js";
import { player1, player2 } from "../data/playerInfo.js";
import { gameMode } from "../script.js";
import { getAIName } from "./AI.js";

function getName() {
    const player1Name = document.querySelector('.player1-name').value;

    if (gameMode === GAME_MOD.local) {
        const player2Name = document.querySelector('.player2-name').value;
        player1.name = player1Name;
        player2.name = player2Name;
    } else {
        player1.name = player1Name;
        player2.name = getAIName();
    }

}

export default getName