/** @jsx React.DOM */
/*global module,require*/

var
  React = require('react'),
  cx = require('react/lib/cx'),
  Common = require('./common.js'),
  sizes = Common.values('Sizes'),
  colors = Common.values('Colors'),
  pointing = Common.values('Pointing'),
  social = Common.values('Social');

// === ICON ===

var Icon = React.createClass({displayName: 'Icon',

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
    }
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

// === LABEL ===

var Label = React.createClass({displayName: 'Label',

  propTypes: {
    text: React.PropTypes.string,
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
        this.props.text,
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
}
Label.Pointing = Common.Pointing;

// === Button ===

var Button = React.createClass({displayName: 'Button',

  propTypes: {
    text: React.PropTypes.string,
    icon: React.PropTypes.string,
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
    var classes = cx({
      "ui button": true,
      "labeled": !!this.props.text,
      "icon": !!this.props.icon && !this.props.social,
      "disabled": this.props.disabled,
      "toggle": this.props.toggle,
      "fluid": this.props.fluid,
      "loading": this.props.loading,
      "circular": this.props.circular,
      "active": this.props.active
    });

    var iconName = (this.props.social || this.props.icon);

    classes += ([this.props.color, this.props.size, this.props.social].join(" "));

    /* jshint ignore:start */
    return this.transferPropsTo(
      React.DOM.div( {className:classes}, 
        iconName ? Icon( {icon:iconName} ) : false,
        this.props.text
      )
    );
    /* jshint ignore:end */
  }
});

Button.Sizes = Common.Sizes;
Button.Colors = Common.Colors;
Button.Social = Common.Social;

module.exports = {
  Button: Button,
  Label: Label,
  Icon: Icon
};