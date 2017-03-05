const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = (props) => {
  return (
    <nav>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/examples" activeClassName="active">Examples</Link>
    </nav>
  );
};

module.exports = Nav;
