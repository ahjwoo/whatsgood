import React from 'react';
import './TheButton.css'

const TheButton = (props) => {
  return (
    <div onClick={props.whatsGood} className={props.isLoading ? "thebutton loading" : "thebutton"}>{props.isLoading ? 'Loading...' : 'Push Me'}</div>
  )
}

export default TheButton;