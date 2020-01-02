import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    //we do this because running this.props.handleAddOption, which is the function in the parent component above will only RETURN something if something went wrong.  Otherwise it will change state and not return anything.
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error: error}))

    if(!error){
      e.target.elements.option.value = '';
    }
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