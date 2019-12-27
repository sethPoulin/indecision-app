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
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];
    
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return( 
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    alert('HandlePick');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  };
}

class Options extends React.Component {
  handleRemoveAll(){
    //This is pretty complicated, but the gist is this: 'This' refers to the object that contains as a method the function which contains the 'this.' When the function is called as a callback function, or is an event handler (I think just another type of callback function), or is first assigned to a variable and THEN called, in all 3 cases the original object that provided the execution context for the function is lost, and so the thing 'this' refers to is lost.  WHEN THE FUNCTION IS ACTUALLY CALLED, that is when we assess what 'this' refers to.  If at that point it is not being called within the execution context of an object, then 'this' is undefined (in strict mode) or the Global object.  All functions by default execute in the global context unless they are methods on an object.  So 'this' in functions will by default be undefined.

    console.log(this.props.options);
  }
  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          this.props.options.map((option) => {
            return <Option key={option} optionText={option} />
          })
        }
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
    }
  }

  render(){
    return (
      <div>
        <form action="" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))