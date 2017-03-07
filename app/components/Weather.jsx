const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  propTypes: {
    // eslint-disable-next-line
    location: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: false,
      errorMessage: undefined,
    };
  },
  componentDidMount() {
    const location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  handleSearch(location) {
    const that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });
    openWeatherMap.getTemp(location)
      .then((temp) => {
        that.setState({
          isLoading: false,
          location,
          temp,
        });
      }, (e) => {
        that.setState({
          isLoading: false,
          errorMessage: e.message,
        });
      });
  },
  render() {
    const { location, temp, isLoading, errorMessage } = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return (
          <h3 className="text-center">
            Let me check the weather in your city...
          </h3>
        );
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
      return false;
    };
    const renderError = () => {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
      return false;
    };
    return (
      <div>
        <h1 className="page-title text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  },
});

module.exports = Weather;
