import getRandomInt from "./getRandomInt.js";
import { mainInput } from "../script.js";
import listMapAI from "./listMapAI.js";

const AINames = ['Bot James', 'Bot Robert', 'Bot Mary', 'Bot Patricia'];

function getAIName() {
    return AINames[getRandomInt(AINames.length)];
}

function AI() {
    listMapAI();
    
    mainInput.value = '';
}

export {getAIName, AI}