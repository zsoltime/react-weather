const React = require('react');

const WeatherMessage = ({ location, temp }) => {
  return (
    <div>
      <p>It's {temp}ºC in {location}</p>
    </div>
  );
};

module.exports = WeatherMessage;
