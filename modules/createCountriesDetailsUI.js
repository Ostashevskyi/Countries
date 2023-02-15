import { getCountryData } from "./getCountriesDetails.js";
import { usedCountries } from "../script.js";

async function createCountryDetailUI() {

    const countryData = await getCountryData();
    const {flag} = countryData;
    const {capital} = countryData; 

    const countryDiv = document.createElement('div');
    countryDiv.classList.add('countryDetails__info');

    const capitalP = document.createElement('p');
    capitalP.innerHTML = `Country: ${usedCountries[0]}, Capital: ${capital ? capital : 'This country don\'t have capital'}`; 

    const flagImg = document.createElement('img');
    flagImg.classList.add('flagPic')
    flagImg.src = flag;

    countryDiv.appendChild(flagImg);
    countryDiv.appendChild(capitalP);

    if (usedCountries.length % 6 === 0) {
        document.querySelector('.countries__info').replaceChildren();
    }

    document.querySelector('.countries__info').appendChild(countryDiv);
}


export {createCountryDetailUI}