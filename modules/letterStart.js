import countryList from "../data/countries.js";

function letterStart(inputData, usedCountries) {
    let startsOnLetter = [];

    countryList.map(country => {
        if (country.startsWith(inputData.at(-1).toUpperCase()) && !(usedCountries.includes(country))) {
            startsOnLetter.push(country);
        }
    })

    return startsOnLetter;
}

export default letterStart