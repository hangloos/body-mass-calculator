import React, { Component } from 'react';

class Output extends Component {
  render() {
    let height = this.props.data.height
    let inches = parseInt((height * 0.393700787).toFixed(0));
    let feet = Math.floor(inches / 12);
    let extraInches = inches - (feet * 12)
    let weight = (parseInt(this.props.data.weight) * 2.20462262185).toFixed(0);
    let bmi = this.props.data.bmi
    let bmiClass = this.props.data.bmiClass
    return (
      <div className="output">
        <div className="sections">
        <h1>{feet}' {extraInches}''</h1>
        </div>
        <div className="sections">
        <h1>{weight}lbs</h1>
        </div>
        <div className="sections">
        <h1>{bmi}</h1>
        </div>
        <div className="sections">
        <h1>{bmiClass}</h1>
        </div>
      </div>
    );
  }
}

export default Output;
