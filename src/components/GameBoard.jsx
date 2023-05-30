import { cats } from "../services/CatData.js"
import Card from "../components/Card.jsx"
import { useContext, useState } from "react"
import { GameStateContext } from "../context/GameStateProvider.jsx"

export default function GameBoard(props) {
    const [cards, setCards] = useState([])
    const [counter, setCounter] = useContext(GameStateContext);
    
    function saveId(card) {
        if (cards.length < 2) {
          cards.push(card)
          setCards(cards)
          console.log(cards)
        }

        if (cards.length === 2) {
          compareCards()
        }
    }

    function compareCards() {
      if (cards[0].pair === cards[1].pair){
        setCounter(counter+1)
        cards.splice(0, cards.length)

      } else {
        setTimeout(() => {
            cards[0].setIsUpward(false)
            cards[1].setIsUpward(false)
            cards.splice(0, cards.length)
        },"750") 
      }
    }

    
    return (
      cats.map(card => <Card isUpward={card.isUpward} key={card.id} pair={card.pair} id={card.id} image={card.image} saveId={saveId} />)
    )
}
