'use strict';

console.log('app.js is running!');

//JSX - JavaScript XML


var app = {
  title: 'Indecision App',
  subtitle: 'This is the subtitle',
  options: []
};

var user = {
  userName: 'Andrew',
  userAge: '26',
  location: 'New York'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.userName ? user.userName : 'Anonymous'
  ),
  user.userAge && user.userAge >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.userAge
  ),
  getLocation(user.location)
);

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
