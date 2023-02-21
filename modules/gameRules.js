import { mainInput, gameMode} from "../script.js";
import {createCountryDetailUI} from "./createCountriesDetailsUI.js";
import getActivePlayer from "./getActivePlayer.js";
import checkLetter from "./checkLetter.js";
import { getAllCountries } from "./getCountriesDetails.js";
import { countriesData } from "../data/countriesData.js";
import { player1, player2 } from "../data/playerInfo.js";
import { GAME_MOD } from "../constants/gameMode.js";
import { botCore } from "./AI.js";
import {createParagraphNotification, createWinNotification} from "./createNotify.js";

export let counter = 0

async function gameRules() {
    createCountryDetailUI();

    const textarea = document.querySelector('textarea');
    const inputData = mainInput.value;
    const flag = checkLetter();
    const ntfcParagraph = document.querySelector('.notifications');

    const activePlayer = player1.activePlayer ? player1.name : player2.name;

    const data = await getAllCountries();

    const countriesName = data.map(country => country.name);

    const realCountry = countriesName.filter(country => country === inputData);
    
    countriesData.letterFilteredCountries = countriesName.filter(country => 
        inputData[inputData.length - 1] === country[0].toLowerCase() && country !== inputData && !(countriesData.usedCountries.includes(country)));

    !countriesData.letterFilteredCountries?.length ? createWinNotification(activePlayer) : "";

    ntfcParagraph.innerHTML = createParagraphNotification(realCountry, flag, inputData);

    if (realCountry?.length && !countriesData.usedCountries.includes(realCountry) && flag) {
        textarea.value += realCountry[0] + '\r\n';
        counter++;
        countriesName.forEach(country => 
            country === inputData && !countriesData.usedCountries.includes(country) ? countriesData.usedCountries.push(country) : []);
    } 

    mainInput.value = '';

    gameMode === GAME_MOD.bot ? botCore() : "";

    getActivePlayer();
}

export default gameRules