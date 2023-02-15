import countryList from "../data/countries.js";
import notifications from "../data/notifications.js";
import getRandomInt from "./getRandomInt.js";
import turnAlerter from "./turnAlerter.js";
import { usedCountries, ntfcParagraph, textarea, mainInput, playersName } from "../script.js";
import {createCountryDetailUI} from "./createCountriesDetailsUI.js";

export let counter = 0

async function listMap(inputData, flag, startsOnLetter) {
    countryList.map(country => {
        if (inputData === country && !usedCountries.includes(country) && flag) {
            usedCountries.push(country);
            usedCountries.reverse();
            ntfcParagraph.innerHTML = notifications[getRandomInt(notifications.length - 1)];
            
            textarea.value += usedCountries[0] + '\r\n';
            
            if (startsOnLetter.length === 0) {
                ntfcParagraph.innerHTML = `Not any countries on letter ${inputData.at(-1)}`;
                mainInput.disabled = 'true';
                if (counter % 2 == 0){
                    alert(`${playersName[0]} WIN`);
                } else {
                    alert(`${playersName[1]} WIN`);
                }
            }    
            
            createCountryDetailUI();
            
            counter++;
            turnAlerter();
            
            
        } else if (inputData === country && usedCountries.includes(country)) {
            ntfcParagraph.innerHTML = 'This country was assign earlier';
        } else if (!countryList.includes(inputData) && inputData != '' && flag) { 
            ntfcParagraph.innerHTML = 'Invalid country';
        } else if (!flag) {
            ntfcParagraph.innerHTML = 'Country name must started on last letter previous country';
        } if (startsOnLetter.length === 0) {
            ntfcParagraph.innerHTML = `Not any countries on letter ${inputData.at(-1)}`;
        }
    })

    mainInput.value = '';
}

export default listMap