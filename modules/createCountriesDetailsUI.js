import { mainInput } from "../script.js";
import { getAllCountries } from "./getCountriesDetails.js";

async function createCountryDetailUI() {
    const countryData = await getAllCountries();
    const countryDetails = countryData.filter(country => country.name === mainInput.value);
    const fullCountryInfo = getFirstValue(countryDetails);

    const {name} = fullCountryInfo;
    const {continent} = fullCountryInfo; 
    const {currencyCode} = fullCountryInfo;
    const {currencySymbol} = fullCountryInfo;

    const countryDiv = document.createElement('div');
    countryDiv.classList.add('countryDetails__info');

    const capitalP = document.createElement('p');
    capitalP.innerHTML = `Country: ${name}, <br> 
        Continent: ${continent}, <br>
        Currency code: ${currencyCode}, <br>
        Currency symbol: ${currencySymbol}`; 

    countryDiv.appendChild(capitalP);

    document.querySelector('.countries__info').appendChild(countryDiv);
}

function getFirstValue(data) {
    if (data?.length) return data[0];
}

export {createCountryDetailUI}