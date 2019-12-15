const argv = require('yargs')
    .options({
        address : {
            alias: 'a',
            demand: true,
            desc: 'Address of the city to get the climate'
        }
    })
    .argv;

module.exports = {
    argv
}