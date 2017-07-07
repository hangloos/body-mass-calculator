import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import './App.css';
import CurrentForecast from './components/CurrentForecast'
import MinutelyForecast from './components/MinutelyForecast'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import {connect} from 'react-redux'

import {changeRoute} from './actions/routeActions';


import Navbar from './components/Navbar'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}/`

class App extends Component {
  constructor(){
    super()

    this.state = {
      weatherData: {},
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
        routeName: 'currently'}))
      });
  }

  handleRouteChange = routeName => this.props.changeRoute({ routeName: routeName})

  render() {
    const {fetchingData, weatherData,} = this.state
    const { routeName } = this.props
    console.log(weatherData)

    const forecast = weatherData[routeName]

    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather App</h2>
        </div>
        <div className="App-intro">
        {
          fetchingData ?
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
          :
          <div>
          <Navbar changeRoute={this.handleRouteChange}/>
          {routeName === 'currently' && <CurrentForecast forecast={forecast} />}
          {routeName === 'minutely' && <MinutelyForecast forecastData={forecast.data} forecast={forecast} />}
          {routeName === 'hourly' && <HourlyForecast forecastData={forecast.data} />}
          {routeName === 'daily' && <DailyForecast forecastData={forecast.data} />}

          </div>
        }
        </div>
      </div>
    );
  }
}

export default connect(
state => ({
  routeName: state.route.routeName
}),{
  changeRoute
}
)(App);
