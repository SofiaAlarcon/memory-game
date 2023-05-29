import { cats } from "../services/CatData.js"
import Card from "../components/Card.jsx"
import { useState } from "react"
/*import Counter from "./Counter.jsx"*/



export default function GameBoard(props) {
    const [cards, setCards] = useState([])

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
        console.log("yay")
        /*props.increaseCounter()*/
        /* borrar los elementos del array*/
        cards.splice(0, cards.length)
        console.log(cards)
      } else {
        setTimeout(() => {
            cards[0].setIsUpward(false)
            cards[1].setIsUpward(false)
            /* borrar los elementos del array*/
            cards.splice(0, cards.length)
            console.log(cards)
        },"750") 
      }

  
    }

    return (
      cats.map(card => <Card isUpward={card.isUpward} key={card.id} pair={card.pair} id={card.id} image={card.image} saveId={saveId} />)
    )
}
