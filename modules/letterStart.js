import countryList from "../data/countries.js";

function letterStart(inputData, usedCountries) {
    const startsOnLetter = [];

    countryList.forEach(country => {
        if (country.startsWith(inputData.at(-1).toUpperCase()) && !(usedCountries.includes(country))) {
            startsOnLetter.push(country);
        }
    })

    return startsOnLetter;
}

export default letterStart