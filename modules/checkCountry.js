import checkLetter from "./checkLetter.js";
import startOnLetter from "./letterStart.js";

import { mainInput, usedCountries, playersName, ntfcParagraph,  } from "../script.js";
import listMap from "./listMap.js";


function checkCountry() {
    const inputData = mainInput.value;
    const flag = checkLetter();
    let startsOnLetter = startOnLetter(inputData, usedCountries);

    listMap(inputData, flag, startsOnLetter);

}

export default checkCountry