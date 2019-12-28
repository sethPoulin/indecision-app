class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visiblity: false
    };
  }
  
  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  
  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button  onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Click to hide' : 'Click to see more'}
        </button>
          {this.state.visibility && (
            <div>
              <p>Hey.  This is some more content.</p>
            </div>
          )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));




// let visibility = false;

// const toggleVisible = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button  onClick={toggleVisible}>
//         {visibility ? 'Click to hide' : 'Click to see more'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey.  This is some more content.</p>
//         </div>
//       )}
//     </div>
//   );
  
//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();




