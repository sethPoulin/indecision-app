
let visibility = false;

const toggleVisible = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button  onClick={toggleVisible}>
        {visibility ? 'Click to hide' : 'Click to see more'}
      </button>
      {visibility && (
        <div>
          <p>Hey.  This is some more content.</p>
        </div>
      )}
    </div>
  );
  
  ReactDOM.render(jsx, document.getElementById('app'));
};

render();




