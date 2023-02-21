import { countriesData } from "../data/countriesData.js";
import notifications from "../data/notifications.js";
import { mainInput } from "../script.js";
import getRandomInt from "./getRandomInt.js";

function createParagraphNotification(realCountry, flag, inputData) {
    if (countriesData.usedCountries.includes(inputData))  return 'This country was assign earlier'
    else if (!countriesData.letterFilteredCountries?.length) return `Not any country on letter ${inputData[inputData.length - 1]}`
    else if (!realCountry.includes(inputData)) return 'Invalid country'
    else if (!inputData) return 'Please enter a country'
    else if (!flag) return 'Country name must started on last letter previous country'
    else return notifications[getRandomInt(notifications.length - 1)];
}   

function createWinNotification(activePlayer) {
    mainInput.disabled = true;
    alert(`${activePlayer} WIN!!!`);
}

export {createParagraphNotification, createWinNotification}