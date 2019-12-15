const { argv } = require('./config/yargs');
const { getSite } = require('./site/site');
const { getClimate } = require('./climate/climate')

let addr = argv.address;

const getInfo = async (addr) => {

    try {
        const coords = await getSite(addr)
        const temp = await getClimate(coords.lat, coords.lon)

        return `The climate of: ${coords.addr} and the temperature are: ${temp} `
    } catch (e) {
        return `The place was not found: ${addr}`
    }

}

getInfo(addr)
    .then(console.log)
    .catch(console.log)




