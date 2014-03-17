var tape = require('tape');
var ReactTestUtls = require('react/lib/ReactTestUtils');

var Button = require('../index.js').Elements.Button;
var Icon = require('../index.js').Elements.Icon;


tape('Button accepts Icon component as icon', function (test) {

  test.plan(1);

  var icon = Icon({ icon: "home" });
  var button = Button({ icon: icon  });

  ReactTestUtls.renderIntoDocument(button);

  test.ok(button);

});
