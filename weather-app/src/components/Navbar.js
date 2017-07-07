import React from 'react'


const Navbar = ({changeRoute}) =>
<div>
  <button className="uibutton" onClick={() => changeRoute('currently')}>Currrent</button>
  <button className="uibutton" onClick={() => changeRoute('minutely')}>Minutely</button>
  <button className="uibutton" onClick={() => changeRoute('hourly')}>Hourly</button>
  <button className="uibutton" onClick={() => changeRoute('daily')}>Daily</button>

</div>

export default Navbar
