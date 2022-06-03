import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import Modal from './components/Modal';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import './style.css';

function App() {
  const [curScore, setCurScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [result, setResult] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const startingCards = [
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
  ];

  useEffect(() => {
    if (result) {
      setIsModalVisible(true);
    }
  }, [result]);

  useEffect(() => {
    if (!isModalVisible) {
      setResult("");
    }
  }, [isModalVisible]);

  return (
    <div className="app"> 
      <Header curScore={curScore} bestScore={bestScore}/>
      <Container curScore={curScore} bestScore={bestScore} setCurScore={setCurScore} setBestScore={setBestScore} startingCards={startingCards} setResult={setResult}/>
      <Footer />
      {isModalVisible ? <Modal toggleModal={setIsModalVisible} message={result} /> : null}
    </div>
  );
}

export default App;
