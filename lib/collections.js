/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('./common.js'),
  sizes = Common.values('Sizes');

// === Field ===

var Field = React.createClass({

  propTypes: {
    label: React.PropTypes.string
  },

  render: function () {
    /* jshint ignore:start */
    return (
      <div>
        {this.props.label ? <label>{this.props.label}</label> : false }
        {this.props.children}
      </div>
      );
    /* jshint ignore:end */
  }
});


module.exports = {
  Field: Field
};