import backImg from './images/back.png'
import angular from './images/angular.png'
import css from './images/css.png'
import java from './images/java.png'
import html from './images/html.png'
import rail from './images/rail.png'
import react from './images/react.png'
import scala from './images/scala.png'
import vue from './images/vue.png'


 function buildCards(amount) {
  let id = 0
  if(amount === 8) { 
        const images = {angular, css, java, html, rail, react, scala, vue}
    const cards = Object.keys(images).reduce((result, type) => {
      const getCard = () => ({
        id: id++,
        type,
          backImg,
      frontImg: images[type],
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return shuffle(cards)
  }

  else if (amount === 6) {
      const images = {angular,  java, html, rail, react, vue}
     const cards = Object.keys(images).reduce((result, type) => {
      const getCard = () => ({
        id: id++,
        type,
          backImg,
      frontImg: images[type],
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return shuffle(cards)
  }
  else if (amount === 4) {
    const images = {angular,  java, react, scala}
     const cards = Object.keys(images).reduce((result, type) => {
      const getCard = () => ({
        id: id++,
        type,
        backImg,
      frontImg: images[type],
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return shuffle(cards)

  }
}

export function shuffle(cards) {
  let len = cards.length
  for (let i = 0; i < len; i++) {
    let randomId = Math.floor(Math.random() * len)
    let current = {...cards[i]}
    let random = {...cards[randomId]}
    cards[i] = random
    cards[randomId] = current
  }
  return cards
}


export default buildCards;