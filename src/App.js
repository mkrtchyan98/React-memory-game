import React, {useState,Suspense} from 'react'
import './App.css';
import LevelSet from './components/Levels/LevelSet';
const LevelFirst = React.lazy(() => import('./components/Levels/LevelFirst'));
const LevelSecond = React.lazy(() => import('./components/Levels/LevelSecond'));
const LevelThird = React.lazy(() => import('./components/Levels/LevelThird'));

function App() {
const [level,setLevel] = useState("easy");
 if(level === "easy"){
  return (
    <div className="App-header">
    <h1>START GAME</h1>
    <LevelSet changeLevel={setLevel} />
          <Suspense fallback={<div>Загрузка...</div>}>
 <LevelFirst />
 </Suspense>
       </div>
 )
}

 if(level === "medium"){
 return (
  <div className="App-header">
    <h1>START GAME</h1>
    <LevelSet changeLevel={setLevel} />
          <Suspense fallback={<div>Загрузка...</div>}>
  <LevelSecond />
  </Suspense>
         </div>

  )
}
 if(level === "hard"){
  return (
   <div className="App-header">
    <h1>START GAME</h1>
    <LevelSet changeLevel={setLevel} />
          <Suspense fallback={<div>Загрузка...</div>}>
  <LevelThird />
  </Suspense>
         </div>

  )

}
}
export default App;