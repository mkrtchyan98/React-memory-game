import React from 'react'

const   LevelSet = (props) => {
  return ( 
    <div>
     <button onClick={() => props.changeLevel("easy")} className="level-btn">Easy</button>
    <button onClick={() => props.changeLevel("medium")} className="level-btn">Medium</button>
    <button onClick={() => props.changeLevel("hard")} className="level-btn">Hard</button>
    </div>
    )
}

export default LevelSet;
