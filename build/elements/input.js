/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('../common.js'),
  sizes = Common.values('Sizes'),
  Icon = require('./icon.js'),
  Button = require('./button.js');

var Input = React.createClass({displayName: 'Input',

  propTypes: {
    placeholder: React.PropTypes.string,
    loading: React.PropTypes.bool,
    focus: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    error: React.PropTypes.bool,
    size: React.PropTypes.oneOf(sizes),
    icon: React.PropTypes.component,
    action: React.PropTypes.component
  },

  render: function () {
    var p = this.props,
      classes = cx({
        "ui input": true,
        "focus": p.focus,
        "fluid": p.fluidm,
        "error": p.error,
        "action": !!p.action,
        "loading": p.loading,
        "icon": p.loading || p.icon
      });

    classes += " " + [p.size].join(" ");

    /* jshint ignore:start */
    return this.transferPropsTo(
      React.DOM.div( {className:classes}, 
        React.DOM.input( {type:"text", placeholder:p.placeholder} ),
        p.loading ? Icon(null  ) : false,
        !p.loading && p.icon ? p.icon : false,
        p.action ? p.action : false
      )
    );
    /* jshint ignore:end */
  }
});

Input.Sizes = Input.Sizes;

module.exports = Input;