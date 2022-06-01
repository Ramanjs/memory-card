import React, { useEffect, useState } from 'react';
import Card from './Card';

function Container(props) {
  const [numMarked, setNumMarked] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [cards, setCards] = useState(JSON.parse(JSON.stringify(props.startingCards)));

  function handleClick(id) {
    const cardsCopy = JSON.parse(JSON.stringify(cards));
    for (let card of cardsCopy) {
      if (card.id == id) {
        if (card.marked) {
          setIsGameOver(true);
          break;
        } else {
          card.marked = true;
          setNumMarked(numMarked + 1);
          props.setCurScore(props.curScore + 1);
        }
      }
    }
    setCards(cardsCopy);
  }

  function gameOver(result) {
    setCards(JSON.parse(JSON.stringify(props.startingCards)));
    setIsGameOver(false);
    setNumMarked(0);
    props.setCurScore(0);
    props.setResult(result);
 }

  useEffect(() => {
    if (isGameOver) {
      if (props.curScore > props.bestScore) {
        props.setBestScore(props.curScore);
      }
      gameOver("You lost :(");
    } else if (numMarked == 12) {
      if (props.curScore > props.bestScore) {
        props.setBestScore(props.curScore);
      }
      gameOver("You won!");
    } else {
      shuffle();
    }
  }, [isGameOver, numMarked]);

  function shuffle() {
    const cardsCopy = JSON.parse(JSON.stringify(cards));
    for (let i = cardsCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cardsCopy[i];
        cardsCopy[i] = cardsCopy[j];
        cardsCopy[j] = temp;
    }
    setCards(cardsCopy);
  }

  return (
    <div className="cards-container">
      {cards.map(card => 
        <Card name={card.name} url={card.url} id={card.id} onClick={handleClick} key={card.id}/>
      )}
    </div>
  );
}

export default Container;
