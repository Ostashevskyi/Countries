import countryList from "../data/countries.js";
import notifications from "../data/notifications.js";
import getRandomInt from "./getRandomInt.js";
import turnAlerter from "./turnAlerter.js";
import { usedCountries, ntfcParagraph, mainInput, playersName, textarea } from "../script.js";
import { AI } from "./AI.js";
import letterStart from "./letterStart.js";
import checkLetter from "./checkLetter.js";
import {createCountryDetailUI} from "./createCountriesDetailsUI.js";

export let counterAI = 0

async function listMapAI() {

    const inputData = mainInput.value;
    const flag = checkLetter();
    let startsOnLetter = [];

    countryList.map(country => {
        if (inputData === country && !usedCountries.includes(country) && flag) {
            usedCountries.push(country);

            startsOnLetter = letterStart(inputData, usedCountries);
            let botWord;

            if (startsOnLetter.length !== 0 && !(usedCountries.includes(botWord))) {
                botWord = startsOnLetter[getRandomInt(startsOnLetter.length)].split("");
            } 

            usedCountries.reverse();
            ntfcParagraph.innerHTML = notifications[getRandomInt(notifications.length - 1)];
            textarea.value += usedCountries[0] + '\r\n';
            

            if (startsOnLetter.length === 0) {
                ntfcParagraph.innerHTML = `Not any countries on letter ${inputData.at(-1)}`;
                mainInput.disabled = 'true';
                if (counterAI % 2 == 0){
                    alert(`${playersName[0]} WIN`);
                } else {
                    alert(`${playersName[1]} WIN`);
                }
            }    
            
            if (!usedCountries.includes(botWord) && counterAI % 2 === 0) {
                let printWordInterval = setInterval(() => {
                    mainInput.value += botWord[0];
                    botWord = botWord.slice(1);
                    
                    if(!botWord.length) {
                        clearInterval(printWordInterval);
                        AI();
                    }
                    
                }, 500);    
            }
            
            createCountryDetailUI();

            counterAI++;
            turnAlerter();
        } else if (inputData === country && usedCountries.includes(country)) {
            ntfcParagraph.innerHTML = 'This country was assign earlier';
        } else if (!countryList.includes(inputData) && inputData != '' && flag) { 
            ntfcParagraph.innerHTML = 'Invalid country';
        } else if (!flag) {
            ntfcParagraph.innerHTML = 'Country name must started on last letter previous country';
        } 
        
    })
    
}

export default listMapAI