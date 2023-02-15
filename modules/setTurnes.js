import { gameMode } from "../script.js";
import checkCountry from "./checkCountry.js";
import { AI } from "./AI.js";

function setTurnes(e) {
    if (e.key === 'Enter') {
        console.log(gameMode)
        if(gameMode === 'Local') {
            checkCountry();                
        } else {
            AI();
        }
    }
}

export default setTurnes