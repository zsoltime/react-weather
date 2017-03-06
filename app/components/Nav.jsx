const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    console.log('Not yet wired up');
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" />
              </li>
              <li>
                <button type="submit" className="button">Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
