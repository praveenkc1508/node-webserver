const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    //const url = 'http://api.weatherstack.com/current?access_key=6635533f2f4f3f25a2e4fd3990b45d59&query' + latitude + ',' + longitude+'&units=f'

    const url ='http://api.weatherstack.com/current?access_key=6635533f2f4f3f25a2e4fd3990b45d59&query=12.983,77.583';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location in forecast', undefined)
        } else {
            callback(undefined, response.body.current.feelslike + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.weather_descriptions[0] + '% chance of rain.')
        }
    })
}

module.exports = forecast