import React, {useState, useEffect} from 'react'
import Card from './Card'
import './board.css'
import Header from './Header'


const Board = props => {
  const [cards, setCards] = useState(props.cards)
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([]) 

  const [moves,setMoves] = useState(0)
  const onCardClick = card => () => {

    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return//if you chose 2 cards return,if a card already is checked return 
    const newCheckers = [...checkers, card]; //chosen cards
    setCheckers(newCheckers)//set chosen cards//
    const cardsInCheckersMatched = validateCheckers(newCheckers)//check if cards the same or not 
    if (cardsInCheckersMatched) { //if the same change state
      setCompleted([...completed, newCheckers[0].type])//or newCheckers[0]
         
          }
    if (checkersFull(newCheckers)) { //if two cards not same  reset 
      resetCheckersAfter(1000)
      setMoves(moves+1)
          console.log(moves)
    }

    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id //or checkers[1]
    }
    function checkersFull(checkers){
      return checkers.length === 2
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }
  function reset(moves) {
    setMoves(0)
    setCompleted([])
  }





 let wonGameText =  completed.length === cards.length/2 ? (
                    <Header moves={moves}/>
                ) : null ;


  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }))
    setCards(newCards)
  }, [checkers, completed])

  return ( 
    <div>
    <div> 
    {wonGameText}
    </div>

    <div className="Board">
      <h1>Your moves amount:{moves}</h1>
      <button onClick={() => reset(moves)} className="moves-btn">restart</button>
        <ul className="cards-list">
      {cards.map(card => (
       <li> <Card {...card} onClick={onCardClick(card)} key={card.id} /></li>
      ))}
     
      </ul>
    </div>
    </div>
  )
}

export default Board