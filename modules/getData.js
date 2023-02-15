async function getData(country) {
    const data = await axios.get(`https://restcountries.com/v3.1/name/${country}`).then((response) => response).catch((error) => console.log(error));
    return data.data[0];
}

export default getData