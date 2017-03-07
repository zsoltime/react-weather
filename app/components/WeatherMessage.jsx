const React = require('react');

const WeatherMessage = ({ location, temp }) => (
  <h3 className="text-center">It&apos;s {temp}ºC in {location}</h3>
);

WeatherMessage.propTypes = {
  location: React.PropTypes.string.isRequired,
  temp: React.PropTypes.string.isRequired,
};

module.exports = WeatherMessage;
