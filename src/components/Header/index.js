import React from 'react';
import logo from '../../assets/logo.png';

function Header (props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Portfolio</h1>
      <img src={logo} alt="logo"></img>
      {props.children}
    </header>
  )
}
export default Header;