import React, { useState } from 'react';
import _ from 'lodash';
import Card from './Card';

function Container() {
  const [numMarked, setNumMarked] = useState(0);
  const [cards, setCards] = useState([
    {
      url: './img/harry.jpg',
      name: 'Harry Potter',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/hermione.jpg',
      name: 'Hermione Granger',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/ron.jpg',
      name: 'Ron Weasley',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/dumbledore.png',
      name: 'Albus Dumbledore',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/snape.jpg',
      name: 'Severus Snape',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/mcgonagall.jpg',
      name: 'Minerva McGonagall',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/longbottom.jpg',
      name: 'Neville Longbottom',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/lovegood.jpg',
      name: 'Luna Lovegood',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/voldemort.jpg',
      name: 'Lord Voldemort',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/hagrid.jpg',
      name: 'Rubeus Hagrid',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/malfoy.jpg',
      name: 'Draco Malfoy',
      marked: false,
      id: _.uniqueId('card-')
    },
    {
      url: './img/black.jpg',
      name: 'Sirius Black',
      marked: false,
      id: _.uniqueId('card-')
    }
  ]);

  function handleClick(id) {
    const cardsCopy = JSON.parse(JSON.stringify(cards));
    //let isGameOver = false;
    for (let card of cardsCopy) {
      if (card.id == id) {
        if (card.marked) {
          gameOver("You lost");
          break;
        } else {
          card.marked = true;
          if (numMarked == 11) {
            gameOver("You won");
            break;
          }
          setNumMarked(numMarked + 1);
        }
      }
    }
    shuffle(cardsCopy);
  }

  function gameOver(result) {
    window.alert(result);
  }

  function shuffle(cardsCopy) {
    for (let i = cardsCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cardsCopy[i];
        cardsCopy[i] = cardsCopy[j];
        cardsCopy[j] = temp;
    }
    setCards(cardsCopy);
  }

  return (
    <div className="container">
      {cards.map(card => 
        <Card name={card.name} url={card.url} id={card.id} onClick={handleClick} key={card.id}/>
      )}
    </div>
  );
}

export default Container;
