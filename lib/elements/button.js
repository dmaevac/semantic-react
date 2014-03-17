/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('../common.js'),
  sizes = Common.values('Sizes'),
  colors = Common.values('Colors'),
  social = Common.values('Social'),
  Icon = require('./icon.js');

var Button = React.createClass({

  displayName: 'Button',

  propTypes: {
    icon: React.PropTypes.component,
    disabled: React.PropTypes.bool,
    active: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    toggle: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    circular: React.PropTypes.bool,
    size: React.PropTypes.oneOf(sizes),
    social: React.PropTypes.oneOf(social),
    color: React.PropTypes.oneOf(colors)
  },

  render: function () {
    var p = this.props,
      classes = cx({
        "ui button": true,
        "labeled": !!p.text,
        "icon": !!p.icon && !p.social,
        "disabled": p.disabled,
        "toggle": p.toggle,
        "fluid": p.fluid,
        "loading": p.loading,
        "circular": p.circular,
        "active": p.active
      });

    var buttonIcon = (p.social ? <Icon icon={p.social} /> : p.icon);

    classes += ([p.color, p.size, p.social].join(" "));

    /* jshint ignore:start */
    return this.transferPropsTo(
      <div className={classes}>
        {buttonIcon ? buttonIcon : false}
        {p.children}
      </div>
    );
    /* jshint ignore:end */
  }
});

Button.Sizes = Common.Sizes;
Button.Colors = Common.Colors;
Button.Social = Common.Social;

module.exports = Button;