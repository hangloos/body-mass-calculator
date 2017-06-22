import React from 'react'
import moment from 'moment'
// presentation component so just display Data
// so dont need to construct state

const MinutelyForecast = ({forecastData}) =>{
  const renderForecasts = forecastData.map(({precipIntensity, precipProbability, time},index) =>
    <div key={index} className="tempData" style={{ padding: '16px', margin: '16px'}}>
    <p>Current Time: {moment.unix(time).format('LT')}</p>
    <p>Intensity of Precipipitation: {precipIntensity}%</p>
    <p>Chance of Precipipitation: {precipProbability}%</p>
    </div>
  )
  return (
      <div>
      <h2>Minutely Forecast</h2>
      {renderForecasts}
      </div>
  )
}


export default MinutelyForecast
