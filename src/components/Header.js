import React from 'react';

const Header = ({moves}) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
    	<h1>You won</h1>
		<h2> the expected number of moves needed for a game with n cards converges to ~ 0.8 * n </h2>
	    </div>
  </div>
);

export default Header;