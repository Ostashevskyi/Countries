import getRandomInt from "./getRandomInt.js";
import { AINames } from "../data/botNames.js";
import { countriesData } from "../data/countriesData.js";
import { counter } from "./gameRules.js";
import { mainInput } from "../script.js";
import gameRules from "./gameRules.js";

function getAIName() {
    return AINames[getRandomInt(AINames.length)];
}

function botCore() {
    let botWord = countriesData.letterFilteredCountries[getRandomInt(countriesData.letterFilteredCountries.length - 1)];
    if (!countriesData.usedCountries.includes(botWord) && !(counter % 2 === 0)) {
        let printWordInterval = setInterval(() => {
            mainInput.value += botWord[0];
            botWord = botWord.slice(1);
            if(!botWord.length) {
                clearInterval(printWordInterval);
                gameRules();
            }
        }, 500);    
    }
}

export {getAIName, botCore}