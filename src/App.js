import React from "react";
import Input from "./Input";

class App extends React.Component{
  
  state = {
    Num1 : 0,
    Num2 : 0,
    count : 0,
    currInp : "",
    operator : "",
    output : 0,
  };

  updateValue1 = () => {
    this.setState({ 
      Num1 : this.state.currInp,
      currInp : "",
      count : 1,
    });
  };

  updateValue2 = () => {
    this.setState({ 
      Num2 : this.state.currInp,
      currInp : "",
      count : 0,
    });
  };

  handleCurrInput = (value) => {
    this.setState({currInp : value});
  };
  
  render = () => {
    return(
      <div>
        <h1 className = "output">
          Output : {this.state.output}
        </h1>

        <div className = "operator">
          <button
            className = "addition"
            onClick={() => {
              this.setState({operator : "+"});
            }}
          > 
          +</button>
          <button
            className = "subtraction"
            onClick={() => {
              this.setState({operator : "-"});
            }}
          > 
          -</button>
          <button
            className = "divide"
            onClick={() => {
              this.setState({operator : "/"});
            }}
          > 
          /</button>
          <button
            className = "multiplication"
            onClick={() => {
              this.setState({operator : "*"});
            }}
          > 
          *</button>
          
        </div>
        <Input
          className = "input"
          handleCurrInput = {this.handleCurrInput} 
          updateValue1 = {this.updateValue1}
          updateValue2 = {this.updateValue2}
          count = {this.state.count}
          currInp = {this.state.currInp}
        />
        <div className="function">
        <button
            className = "equals"
            onClick={() => {
              if(this.state.operator == "+")
                this.setState({output:Number(this.state.Num1) + Number(this.state.Num2)});
              else if(this.state.operator == "-")
                this.setState({output:Number(this.state.Num1) - Number(this.state.Num2)});
              else if(this.state.operator == "/")
                this.setState({output:Number(this.state.Num1) / Number(this.state.Num2)});
              else if(this.state.operator == "*")
                this.setState({output:Number(this.state.Num1) * Number(this.state.Num2)});
            }}
          > 
        =</button>
        <button 
          className = "reset"
          onClick={() => {
            this.setState({
              Num1 : 0,
              Num2 : 0,
              count : 0,
              currInp : "",
              operator : "",
              output : 0,
            })
          }}
        >
        AC</button>
        </div>
      </div>
    );
  };

};

export default App;