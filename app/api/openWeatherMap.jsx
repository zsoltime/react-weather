const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=90304f68a674375d3f1a825bffe6ac05&units=metric';

module.exports = {
  getTemp: function(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(function(res) {
        if (res.cod && res.message) {
          throw new Error(res.message);
        } else {
          return res.data.main.temp;
        }
      }, function(res) {
        throw new Error(res.message);
      });
  },
};
