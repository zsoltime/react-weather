const React = require('react');

const About = props => (
  <div>
    <h2 className="text-center">About</h2>
    <p>This is a simple weather application you can build if you follow Andrew
      Mead's <em>The Complete React Web App Developer Course</em> on <a
      href="https://www.udemy.com/the-complete-react-web-app-developer-course/"
      target="_blank" rel="noreferrer noopener">Udemy</a>.</p>
      <p>Here are some of the tools we used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/" target="_blank" rel="noreferrer noopener">React</a> <br />
          The JavaScript framework
        </li>
        <li>
          <a href="http://openweathermap.org/" target="_blank" rel="noreferrer noopener">OpenWeatherMap</a> <br />
          The weather API to search for data by city name
        </li>
        <li>
          <a href="http://foundation.zurb.com/" target="_blank" rel="noreferrer noopener">Foundation</a> <br />
          The front-end framework
        </li>
      </ul>
  </div>
)

module.exports = About;
