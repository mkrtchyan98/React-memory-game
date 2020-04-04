import React  from 'react'
import Board from '../board'
import buildCards from '../../buildcards'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
 root: {
 	'& div.Board':{
 		width:'100%',
 		height:'100%'
 	}
 }
	})

function LevelFirst() {
	 let  cards = buildCards(4)
	 const classes= styles();
  return (
    <div className={classes.root}>
    <div className="App-header">
 <Board cards={cards}/>
      </div>
    </div>
  )
}
  

export default LevelFirst;