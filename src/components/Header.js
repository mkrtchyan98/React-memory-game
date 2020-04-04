import React from 'react';

const Header = ({moves}) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
    	<h1>You won</h1>
    	<h2>Your moves amount:{moves}</h2>
    </div>
  </div>
);

export default Header;