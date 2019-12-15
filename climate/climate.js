/* Axiox create a REST service */
const axios = require('axios');

const getClimate = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=312b1305e5be49e5da1d68577787c21f&lat=${lat}&lon=${lon}`);
    /* Get the temp */
    const temp = resp.main.temp;
    return temp
}

module.exports = {
    getClimate
}