import { usedCountries, mainInput } from "../script.js";
import { counter } from "./listMap.js";
import { counterAI } from "./listMapAI.js";

function checkLetter() {
    const word = usedCountries.at(0);
    const inputData = mainInput.value.toLowerCase();
    
    let flag = true;
    if (counter === 1 && usedCountries.length === 0 || counterAI === 1 && usedCountries.length === 0) counter = 0;
    
    if (counter >= 1 && !(inputData.at(0) === word.at(-1)) || counterAI >= 1 && !(inputData.at(0) === word.at(-1))) {
       flag = false;
    }

    return flag
} 

export default checkLetter