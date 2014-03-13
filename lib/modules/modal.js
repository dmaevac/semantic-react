/** @jsx React.DOM */

var
  React = require('react'),
  Button = require('../elements.js').Button,
  Icon = require('../elements.js').Icon;

var Modal = React.createClass({

  componentWillUnmount: function () {
    if (this.modalInstance) {
      this.modalInstance.modal('destroy');
    }
  },

  close: function () {
    this.modalInstance.modal('hide');
  },

  open: function () {
    if (!this.modalInstance) {
      this.modalInstance = $(this.getDOMNode())
        .modal('setting', {
          transition: 'fade up',
          debug: false,
          performance: false
        });
    }
    this.modalInstance.modal('show');
  },

  handleCancel: function () {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },

  handleConfirm: function () {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  },

  render: function () {
    /* jshint ignore:start */
    return (
      <div className="ui modal">
        <Icon icon={"close"} />
        <div className="header">
        {this.props.title}
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <div className="actions">
          { this.props.cancel ? <Button onClick={this.handleCancel} text={this.props.cancel} /> : false }
          { this.props.confirm ? <Button onClick={this.handleConfirm} text={this.props.confirm} /> : false }
        </div>
      </div>
      );
    /* jshint ignore:end */
  }

});

module.exports = Modal;