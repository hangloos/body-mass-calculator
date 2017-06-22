import React from 'react'
import moment from 'moment'
// presentation component so just display Data
// so dont need to construct state

const DailyForecast = ({forecastData}) =>{
  const renderForecasts = forecastData.map(({temperatureMin, temperatureMax, precipProbability, humidity,time},index) =>
    <div key={index} style={{border: 'solid 1px black', padding: '16px', margin: '16px'}}>
    <p>Current Time: {moment.unix(time).format('LL')}</p>
    <p>Temperature Minimum: {Math.round(temperatureMin)}</p>
    <p>Temperature Maximum: {Math.round(temperatureMax)}</p>
    <p>Chance of Rain: {precipProbability}%</p>
    <p>Humidity: {humidity}</p>
    </div>
  )
  return (
      <div>
      <h2>Daily Forecast</h2>
      {renderForecasts}
      </div>
  )
}


export default DailyForecast
