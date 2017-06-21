import React from 'react'
import moment from 'moment'
// presentation component so just display Data
// so dont need to construct state

const CurrentForecast = ({forecast: {apparentTemperature, time, precipProbability, humidity,summary, temperature}}) =>
<div>
  <h2>Current Forecast</h2>
    <div style={{border: 'solid 1px black', padding: '16px', margin: '16px'}}>
      <h3>{summary}</h3>
      <p>Current Time: {moment(time).toString()}</p>
      <p>Temperature: {Math.round(temperature)}</p>
      <p>Feels Like: {Math.round(apparentTemperature)}</p>
      <p>Chance of Rain: {precipProbability}%</p>
      <p>Humidity: {humidity}</p>


    </div>
</div>

export default CurrentForecast
