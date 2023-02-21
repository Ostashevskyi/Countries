import { counter } from "./gameRules.js";
import { player1, player2 } from "../data/playerInfo.js";
import turnAlerter from "./turnAlerter.js";


function getActivePlayer() {
    const switcher = counter % 2 === 0;

    switch (switcher) {
        case switcher: 
            player1.activePlayer = switcher;
            player2.activePlayer = !switcher;
            break;
    }

    turnAlerter();
}

export default getActivePlayer