import { mainInput } from "../script.js";
import getData from "./getData.js";

async function handleData() {
    return await getData(mainInput.value);
}

async function getCountryData() {
    const countryData = {
        capital: '',
        flag: '',
    }

    const data = await handleData();
    console.log(data);
    const {capital} = data;
    countryData.capital = capital;

    const {flags} = data;
    countryData.flag = flags.png;
    
    return countryData;
}

export {getCountryData}