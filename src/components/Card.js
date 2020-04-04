import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './Card.css'

const Card = props => {
  const { type, flipped, onClick} = props
  return (
  	      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
    <div className="Card" onClick={onClick}>
      <img src="/images/back.webp"    className="img" alt ="img"/>
    </div>
    <div className="Card">
    <img src={`/images/${type}.webp`} className="img" alt ="img"/>
    </div>
    </ReactCardFlip>
  )
}

export default Card