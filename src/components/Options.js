import React from 'react';
import Option from './Option';

const Options = (props) => {
  // handleRemoveAll(){
    //This is pretty complicated, but the gist is this: 'This' refers to the object that contains as a method the function which contains the 'this.' When the function is called as a callback function, or is an event handler (I think just another type of callback function), or is first assigned to a variable and THEN called, in all 3 cases the original object that provided the execution context for the function is lost, and so the thing 'this' refers to is lost.  WHEN THE FUNCTION IS ACTUALLY CALLED, that is when we assess what 'this' refers to.  If at that point it is not being called within the execution context of an object, then 'this' is undefined (in strict mode) or the Global object.  All functions by default execute in the global context unless they are methods on an object.  So 'this' in functions will by default be undefined.

    // console.log(this.props.options);
  // }
  
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => {
          return <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        })
      }
    </div>
  );
}

export default Options;