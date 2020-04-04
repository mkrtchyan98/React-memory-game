   import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LevelFirst from './components/Levels/LevelFirst';
import LevelSecond from './components/Levels/LevelSecond';
import LevelThird from './components/Levels/LevelThird';
import React, {useState} from 'react'
import App from './App'

    const SetLevel = () => {
    const [level,setLevel] = useState("");
  if(level === ""){
  return (
    <div className="app">
    <div className="App-header">
    <h1>START GAME</h1>
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
 return ( 
  <div>
    <Router>
      
      <Switch>
      <Route to="/" component={App} />
      <Route to="/first" component={LevelFirst} />
      <Route to ="second" component={LevelSecond} />
      </Switch>
      </Router>
</div> )
    }

    export default SetLevel;