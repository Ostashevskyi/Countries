import { countriesData } from "../data/countriesData.js";
import { mainInput } from "../script.js";
import { counter } from "./gameRules.js";

function checkLetter() {
    let word = countriesData.usedCountries.at(-1)?.toLowerCase();

    const inputData = mainInput.value.toLowerCase();
    
    if (counter === 1 && countriesData.usedCountries.length === 0) counter = 0;
    
    let flag = true;
    
    if (counter >= 1 && !(inputData.at(0) === word.at(-1))) {
       flag = false;
    }

    return flag
} 

export default checkLetter