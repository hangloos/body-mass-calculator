import React from 'react'


const Navbar = ({changeForecast}) =>
<div>
  <button className="uibutton" onClick={() => changeForecast('currently')}>Currrent</button>
  <button className="uibutton" onClick={() => changeForecast('minutely')}>Minutely</button>
  <button className="uibutton" onClick={() => changeForecast('hourly')}>Hourly</button>
  <button className="uibutton" onClick={() => changeForecast('daily')}>Daily</button>

</div>

export default Navbar
