import gameRules from "./gameRules.js";

function setTurnes(e) {
    if (e.key === 'Enter') {
      gameRules();
    }
}

export default setTurnes