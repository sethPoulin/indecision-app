const obj = {
  name: 'Vikram',
  getName(){
    return this.name
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
    //the 'this' keyword, when used in a function, refers to the function itself, NOT the parent object, so in the below example this will be undefined.  To fix this, we add the bind() method to the onClick, which forces the context of 'this' to be the object CONTAINING the function ('this', as defined by the onClick, is the parent object ).  Since the parent object is where the props lie, we now have access to this.props.
    
    console.log(this.props.options);
  }
  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button>
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