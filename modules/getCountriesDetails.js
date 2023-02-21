import getData from "./getData.js";

async function handleData() {
    return await getData();
}

async function getAllCountries() {
    const data = await handleData();
    const {countries} = data;
    
    return countries;
}

export {getAllCountries}