const React = require('react');
const { Link } = require('react-router');
const Examples = props => (
  <div>
    <h1 className="page-title text-center">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ul>
      <li>
        <Link to="/?location=Szolnok">Szolnok, HU</Link>
      </li>
      <li>
        <Link to="/?location=London">London, UK</Link>
      </li>
    </ul>
  </div>
);

module.exports = Examples;
