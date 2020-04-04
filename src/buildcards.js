    let  images = ['angular', 'css','go', 'html', 'rail', 'react','scala', 'vue']

 function buildCards(amount) {
  let id = 0
  if(amount === 8) { 
    const cards = images.reduce((result, type) => {
      const getCard = () => ({
        id: id++,
        type,
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return suffle(cards)
  }

  else if (amount === 6) {
     const cards = images.slice(2).reduce((result, type) => {
      const getCard = () => ({
        id: id++,
        type,
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return suffle(cards)
  }
  else if (amount === 4) {
     const cards = images.slice(4).reduce((result, type) => {
      const getCard = () => ({
        id: id++,
        type,
        flipped: false,
      })
      return [...result, getCard(), getCard()]
    }, [])
    return suffle(cards)

  }
}

function suffle(cards) {
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