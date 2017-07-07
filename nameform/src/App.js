import React, { Component } from 'react';
import './App.css';
var uuid = require('uuid');
var firebase = require('firebase');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid.vi(),
      name: '',
      answers: {
        q1: '',
        q2: ''
      },
      submitted: false
    }

    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleNameSubmit(event){
    var name = this.refs.name.value;
    this.setState({
      name: name
    }, function(){
      console.log(this.state)
    })
    event.preventDefault();
  }

  handleQuestionSubmit(event){

    debugger
  }

  handleQuestionChange(event){
    var answers = this.state.answers;
    if(event.target.name === 'q1'){
      answers.q1 = event.target.value
    } else if(event.target.name === 'q2'){
      answers.q2 = event.target.value
    }

    this.setState({
      answers: answers
    }, function(){
      console.log(this.state)
    })
  }
  render() {
    var user;
    var questions;

    if(this.state.name && this.state.submitted === false){
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey Questions</h3>
          <form onSubmit={this.handleQuestionSubmit.bind(this)}>
            <label>What is your favorite star wars character?</label><br />
            <input type="radio" name="q1" value="R2D2" onChange={this.handleQuestionChange}/>R2D2<br/>
            <input type="radio" name="q1" value="Chewbacca" onChange={this.handleQuestionChange}/>Chewbacca<br/>
            <input type="radio" name="q1" value="Luke" onChange={this.handleQuestionChange}/>Luke<br/>
            <input type="radio" name="q1" value="Leia" onChange={this.handleQuestionChange}/>Leia<br/>
            <br/>
            <label>What is your other favorite star wars character?</label><br />
            <input type="radio" name="q2" value="Han" onChange={this.handleQuestionChange}/>Han<br/>
            <input type="radio" name="q2" value="C3P0" onChange={this.handleQuestionChange}/>C3PO<br/>
            <input type="radio" name="q2" value="Vader" onChange={this.handleQuestionChange}/>Vader<br/>
            <input type="radio" name="q2" value="Lando" onChange={this.handleQuestionChange}/>Lando<br/>
          </form>
      </span>
    } else if(!this.state.name && this.state.submitted === false) {
      user = <span>
      <h2>Please enter your name to begin the survey</h2>
      <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder="Enter Name.." ref="name"/>
          </form>
      </span>
      questions = ''
    } else if (this.state.submitted === true) {

    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Survey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
