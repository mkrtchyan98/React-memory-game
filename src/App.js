import React, {useState} from 'react'
import LevelFirst from './components/Levels/LevelFirst';
import LevelSecond from './components/Levels/LevelSecond';
import LevelThird from './components/Levels/LevelThird';
import './App.css';
import LevelSet from './components/Levels/LevelSet';


function App() {
const [level,setLevel] = useState("easy");
 if(level === "easy"){
  return (
    <div className="App-header">
    <h1>START GAME</h1>
    <LevelSet changeLevel={setLevel} />
 <LevelFirst />
       </div>
 )
}

 if(level === "medium"){
 return (
  <div className="App-header">
    <h1>START GAME</h1>
    <LevelSet changeLevel={setLevel} />
  <LevelSecond />
         </div>

  )
}
 if(level === "hard"){
  return (
   <div className="App-header">
    <h1>START GAME</h1>
    <LevelSet changeLevel={setLevel} />
  <LevelThird />
         </div>

  )

}
}
export default App;