import { GAME_MOD } from "../constants/gameMode.js";

function setGameMode() {
    document.querySelector('#local').gameMode = GAME_MOD.local;
    document.querySelector('#bot').gameMode = GAME_MOD.bot;
}

export default setGameMode