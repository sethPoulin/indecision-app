console.log('app.js is running!');

//JSX - JavaScript XML



const app = {
  title: 'Indecision App',
  subtitle: 'This is the subtitle',
  options: []
}

const user = {
  userName: 'Andrew',
  userAge: '26',
  location: 'New York'
}

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  }
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let count = 0;
const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button id="my-id" className="button">+1</button>
  </div> 
);
console.log(template2);


const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);