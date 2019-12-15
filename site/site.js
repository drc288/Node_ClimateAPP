/* Axiox create a REST service */
const axios = require('axios');

/* Create the default headers */
axios.defaults.headers.common['x-rapidapi-host'] = 'devru-latitude-longitude-find-v1.p.rapidapi.com';
axios.defaults.headers.common['x-rapidapi-key'] = '5cc6630c1bmsh422295df787e34dp1ba5d9jsnb540f4b941a0';

/**
 * getSite - get the site of address
 * @address: the addres to search
 *
 * Return: a obj to contain the name, lat and lon
 */

const getSite = async(address) => {

    /* Encode the URI format */
    const enc = encodeURI(address);

    /* Create a instance to connect a api of google */
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${enc}`,
    });

    /* Using the method GET and print the first object */
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No find the address: ${address}`)
    }

    const data = resp.data.Results[0];
    /* To return */
    const addr = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        addr,
        lat,
        lon
    }
};

module.exports = {
    getSite
}