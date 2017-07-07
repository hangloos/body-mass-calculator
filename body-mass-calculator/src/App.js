import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Range from './Components/Range'
import Output from './Components/Output'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height){
    this.setState({
      height: height
    }, function(){
      console.log(this.state)
    })
  }

  weightChange(weight){
    this.setState({
      weight: weight
    }, function(){
      console.log(this.state)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Body Mass Calculator</h2>
          </div>
          <form>
            <div>
              <label>Height</label>
              <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
            </div>
            <div>
              <label>Weight</label>
              <Range value={this.state.weight} onChange={this.weightChange.bind(this)}/>
            </div>
          </form><br/><br/><br/>
          <Output/>
      </div>
    );
  }
}

export default App;
