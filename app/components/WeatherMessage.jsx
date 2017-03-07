const React = require('react');

const WeatherMessage = ({ location, temp }) => (
  <h3 className="text-center">It&apos;s {temp}ºC in {location}</h3>
);

module.exports = WeatherMessage;
