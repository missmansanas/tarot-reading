// import "bootstrap/dist/css/bootstrap.min.css";
// import "./tarot-cards.json"
import { useState } from 'react';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import TarotCard from "./TarotCard";


const ThreeCards = () => {
  const [reading, setReading] = useState()

  const readThree = async () => {
    const tarotData = require(`./tarot-cards.json`);

    const numbers = [];
    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 78);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    const threeCards = [];
    numbers.forEach((randomNumber)=>{
      const card = tarotData.cards[randomNumber];
      threeCards.push(card);

      setReading(threeCards);

    });

    return reading;
  }


  return (
      <div className="container grid grid-cols-2 lg:grid-cols-4 auto-rows-min mx-auto p-5 lg:px-15 gap-4">
        <img src={require('./assets/CardBacks.jpg')} alt="Card Back" className="rounded rounded-leg mx-auto hover:-rotate-3 transition transition-all duration-300 ease-in-out" onClick={readThree}/>

      {reading?.length === 3
        ? (<>
          {reading.map((reading) => {
            return (
              <TarotCard card={reading} allowHover={true} />
            )
          })}
        </>)
        : (<>
          <img
            onClick={readThree}
            src={require('./assets/CardBacks.jpg')} alt='Click to draw three cards'
            className='rounded rounded-lg mx-auto hover:-rotate-3 transition transition-all duration-300 ease-in-out'
          />
          <img
            onClick={readThree}
            src={require('./assets/CardBacks.jpg')} alt='Click to draw three cards'
            className='rounded rounded-lg mx-auto hover:-rotate-3 transition transition-all duration-300 ease-in-out'
          />
          <img
            onClick={readThree}
            src={require('./assets/CardBacks.jpg')} alt='Click to draw three cards' 
            className='rounded rounded-lg mx-auto hover:-rotate-3 transition transition-all duration-300 ease-in-out'
          />
          </>)
      }
      </div>
  )
}


export default ThreeCards