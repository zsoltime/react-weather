const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    };
  },
  handleSearch: function(location) {
    const that = this;
    this.setState({
      isLoading: true,
    });
    openWeatherMap.getTemp(location)
      .then(temp => {
        that.setState({
          isLoading: false,
          location,
          temp,
        });
      }, errorMessage => {
        that.setState({
          isLoading: false,
        });
        console.error(errorMessage)
      });
  },
  render: function () {
    const { location, temp, isLoading } = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <p>Loading</p>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  },
});

module.exports = Weather;
