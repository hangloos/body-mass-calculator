import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      data: 'json',
      cache: false,
      success: function(data){
        this.setState({
          resumeData: data
        })
      }.bind(this),
      error: function(xhr, status, error){
        console.log(error);
        alert(error);
      }
    })
  }


  componentDidMount(){
    this.getResumeData();
  }
  render() {
    console.log(this.state.resumeData)
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
