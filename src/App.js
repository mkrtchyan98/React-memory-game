import React, {useState} from 'react'
import LevelFirst from './components/Levels/LevelFirst';
import LevelSecond from './components/Levels/LevelSecond';
import LevelThird from './components/Levels/LevelThird';
import './App.css';




function App() {
const [level,setLevel] = useState("");
  if(level === ""){
  return (
    <div className="app">
    <div className="App-header">
    <h1>START GAME</h1>
    <button onClick={() => setLevel("easy")} className="level-btn">Easy</button>
    <button onClick={() => setLevel("medium")} className="level-btn">Medium</button>
    <button onClick={() => setLevel("hard")} className="level-btn">Hard</button>

      </div>
    </div>
  )
}
 if(level === "easy"){
  return (
 <LevelFirst />
 )
}

 if(level === "medium"){
 return (
  <LevelSecond />
  )
}
 if(level === "hard"){
  return (
  <LevelThird />
  )

}
}
export default App;

