import { mainInput } from "../script.js";
import { player1, player2 } from "../data/playerInfo.js";

function turnAlerter() {
    const turnChecker = document.querySelector('.turnChecker');

    const getPlayerNameString = (player, secondPlayer) => {
        return player.activePlayer ? `${player.name}'s turn` : `${secondPlayer.name}'s turn`
    }
    turnChecker.innerHTML = getPlayerNameString(player1, player2)

    mainInput.value = '';
}

export default turnAlerter