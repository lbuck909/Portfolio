import React from 'react';
import mobilePic from '../../assets/Ai Cell phone pic.png';

function Header (props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Portfolio</h1>
      <img src={mobilePic} alt="cellphone pic"></img>
      {props.children}
    </header>
  )
}
export default Header;