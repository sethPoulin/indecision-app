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

var count = 0;
var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { id: 'my-id', className: 'button' },
    '+1'
  )
);
console.log(template2);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
