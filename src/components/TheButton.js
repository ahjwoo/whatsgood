import React from 'react';
import './TheButton.css'

const TheButton = (props) => {
  return (
    <div onClick={props.whatsGood} className="thebutton">Push Me</div>
  )
}

export default TheButton;