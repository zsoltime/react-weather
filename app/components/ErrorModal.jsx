const React = require('react');

const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error',
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
  },
  componentDidMount: function () {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    const { title, message } = this.props;
    return (
      <div id="error-modal" className="tiny reveal text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" type="button" data-close="">
            Got it
          </button>
        </p>
      </div>
    );
  },
});

module.exports = ErrorModal;
