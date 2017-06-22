import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import CurrentForecast from './components/CurrentForecast'
import MinutelyForecast from './components/MinutelyForecast'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'


import Navbar from './components/Navbar'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}/`

class App extends Component {
  constructor(){
    super()

    this.state = {
      fetchingData: true,
      weatherData: {},
      forecastKey: null
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
          weatherData,
        forecastKey: 'currently'}))
      });
  }

  handleForecastChange = forecastKey => this.setState({forecastKey: forecastKey})

  render() {
    const {fetchingData, weatherData, forecastKey} = this.state
    console.log(weatherData)

    const forecast = weatherData[forecastKey]

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
          <div>
          <Navbar changeForecast={this.handleForecastChange}/>
          {forecastKey === 'currently' && <CurrentForecast forecast={forecast} />}
          {forecastKey === 'minutely' && <MinutelyForecast forecastData={forecast.data} />}
          {forecastKey === 'hourly' && <HourlyForecast forecastData={forecast.data} />}
          {forecastKey === 'daily' && <DailyForecast forecastData={forecast.data} />}

          </div>
        }
        </div>
      </div>
    );
  }
}

export default App;
