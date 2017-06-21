import React, { Component } from 'react';
import logo from './logo.svg';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import CurrentForecast from './components/CurrentForecast'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}/`

class App extends Component {
  constructor(){
    super()

    this.state = {
      fetchingData: true,
      weatherData: {}
    }
  }

  // GET THE LOCATION

  componentDidMount(){
      navigator.geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords
        fetchJsonp(`${APIURL}${latitude},${longitude}`)
        .then(response => response.json())
        .then(weatherData => this.setState({
          fetchingData: false,
          weatherData}))
      });
  }

  render() {
    const {fetchingData, weatherData} = this.state
    console.log(fetchingData)
    console.log(weatherData)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather App</h2>
        </div>
        <div className="App-intro">
        {
          fetchingData ?
          <h1>Fetching Data</h1>
          :
          <CurrentForecast forecast={weatherData.currently} />
        }
        </div>
      </div>
    );
  }
}

export default App;
