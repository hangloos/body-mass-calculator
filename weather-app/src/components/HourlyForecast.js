import React from 'react'
import moment from 'moment'
// presentation component so just display Data
// so dont need to construct state

const HourlyForecast = ({forecastData}) =>{
  const renderForecasts = forecastData.map(({temperature, apparentTemperature, precipProbability, humidity,time},index) =>
    <div key={index} style={{border: 'solid 1px black', padding: '16px', margin: '16px'}}>
    <p>Current Time: {moment.unix(time).format('LT')}</p>
    <p>Temperature: {Math.round(temperature)}</p>
    <p>Feels Like: {Math.round(apparentTemperature)}</p>
    <p>Chance of Rain: {precipProbability}%</p>
    <p>Humidity: {humidity}</p>
    </div>
  )
  return (
      <div>
      <h2>Hourly Forecast</h2>
      {renderForecasts}
      </div>
  )
}


export default HourlyForecast
