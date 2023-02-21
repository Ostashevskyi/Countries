async function getData() {
    const data = await axios.get(`https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/countries?f=pjson`);
    
    return data.data;
}

export default getData