/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('../common.js'),
  colors = Common.values('Colors'),
  pointing = Common.values('Pointing'),
  Icon = require('./button.js');

var Label = React.createClass({displayName: 'Label',

  propTypes: {
    detail: React.PropTypes.string,
    link: React.PropTypes.string,
    removable: React.PropTypes.bool,
    circular: React.PropTypes.bool,
    pointing: React.PropTypes.oneOf(pointing),
    image: React.PropTypes.string,
    size: React.PropTypes.oneOf([Common.Sizes.Small,Common.Sizes.Large]),
    color: React.PropTypes.oneOf(colors)
  },

  render: function () {
    var classes = cx({
      "ui label": true,
      "circular": this.props.circular,
      "pointing": this.props.pointing
    });

    classes += " " + this.props.pointing;

    /* jshint ignore:start */
    return (
      React.DOM.div( {className:classes}, 
        this.props.children,
        this.props.detail && !this.props.link ? React.DOM.div( {className:"detail"}, this.props.detail) : false, 
        this.props.removable ? Icon( {icon:"delete"} ) : false, 
        this.props.link ? React.DOM.a( {href:this.props.link, className:"detail"}, this.props.detail) : false 
      )
      );
    /* jshint ignore:end */
  }
});

Label.Sizes = {
  Small: Common.Sizes.Small,
  Large: Common.Sizes.Large
};

Label.Pointing = Common.Pointing;

module.exports = Label;