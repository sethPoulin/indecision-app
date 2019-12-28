const obj = {
  name: 'Vikram',
  getName(){
    console.log(this);
    return this.name;
  }
};

const getName = obj.getName.bind(obj);
console.log(getName());


class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }
  
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {

  return( 
    <div>
      <h1>{props.title}</h1>
      {props.subtitle} && <h2>{props.subtitle}</h2>
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  // handleRemoveAll(){
    //This is pretty complicated, but the gist is this: 'This' refers to the object that contains as a method the function which contains the 'this.' When the function is called as a callback function, or is an event handler (I think just another type of callback function), or is first assigned to a variable and THEN called, in all 3 cases the original object that provided the execution context for the function is lost, and so the thing 'this' refers to is lost.  WHEN THE FUNCTION IS ACTUALLY CALLED, that is when we assess what 'this' refers to.  If at that point it is not being called within the execution context of an object, then 'this' is undefined (in strict mode) or the Global object.  All functions by default execute in the global context unless they are methods on an object.  So 'this' in functions will by default be undefined.

    // console.log(this.props.options);
  // }
  
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
      {
        props.options.map((option) => {
          return <Option key={option} optionText={option} />
        })
      }
      <Option />
    </div>
  );
}

const Option = (props) => {

  return (
    <div>
      {props.optionText}
    </div>
  );

}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    //we do this because running this.props.handleAddOption, which is the function in the parent component above will only RETURN something if something went wrong.  Otherwise it will change state and not return anything.
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      }
    })
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form action="" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//      <p>Name: {props.name}</p>
//      <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

