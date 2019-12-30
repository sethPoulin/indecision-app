// let count = 0;
// const template2 = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button id="my-id" className="button">+1</button>
//   </div> 
// );
// console.log(template2);




// ReactDOM.render(template2, appRoot);
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount(){
    try {
      const count = parseInt(localStorage.getItem('count'),10)

      if(!isNaN(count)) {
        this.setState(() => ({count: count}))
      }

    } catch(e) {
      //Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count){
      const count = this.state.count;
      localStorage.setItem('count',count)
    }
  }


  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      }
    });
  }

  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      }
    });
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));