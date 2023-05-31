import { cats } from "../services/CatData.js"
import Card from "../components/Card.jsx"
import { useContext, useState, useEffect } from "react"
import { GameStateContext } from "../context/GameStateProvider.jsx"

export default function GameBoard(props) {
    const [cards, setCards] = useState([])
    const [counter, setCounter] = useContext(GameStateContext);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      shuffle(cats);
    }, [])

    function shuffle(array) {
      // Algoritmo de Fisher-Yates
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i]; array[i] = array[j]; array[j] = t;
      }
      setLoading(false);
    }  


    function saveId(card) {
      if (cards.length < 2) {
        cards.push(card);
        setCards(cards);
      }

      if (cards.length === 2) {
        compareCards();
      }
    }

    function compareCards() {
      if (cards[0].pair === cards[1].pair){
        setCounter(counter+1);
        cards.splice(0, cards.length);

      } else {
        setTimeout(() => {
          cards[0].setIsUpward(false);
          cards[1].setIsUpward(false);
          cards.splice(0, cards.length);
        },"750");
      }
    }

    
    return (
      <>
        { loading
          ? <p>Cargando...</p>
          : cats.map(card => <Card 
                              isUpward={card.isUpward} 
                              key={card.id} 
                              pair={card.pair} 
                              id={card.id} 
                              image={card.image} 
                              saveId={saveId} 
                            />)
        }
      </>
      
    )
}
