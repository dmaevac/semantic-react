/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('../common.js'),
  sizes = Common.values('Sizes'),
  colors = Common.values('Colors');

var Icon = React.createClass({

  displayName: 'Icon',

  propTypes: {
    icon: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    link: React.PropTypes.bool,
    size: React.PropTypes.oneOf(sizes),
    color: React.PropTypes.oneOf(colors)
  },

  getDefaultProps: function () {
    return {
      icon: "",
      disabled: false,
      link: false
    };
  },

  render: function () {
    var classes = cx({
      "icon": true,
      "disabled": this.props.disabled,
      "link": this.props.link
    });

    classes += " " + [this.props.icon, this.props.size, this.props.color].join(' ');

    /* jshint ignore:start */
    return (
      React.DOM.i( {className:classes})
      );
    /* jshint ignore:end */
  }
});

module.exports = Icon;