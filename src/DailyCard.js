import {useState, useEffect} from 'react';
import "./tarot-cards.json";
import TarotCard from './TarotCard';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

const DailyCard = () => {
    const [dailyCard, setDailyCard] = useState(undefined);

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString();
        if (localStorage.getItem('dailyCardDate') === currentDate) {
          // Use the stored daily card
          setDailyCard(JSON.parse(localStorage.getItem('dailyCard')));
        } else {
          // Draw a new random card and store it along with the current date
          const newDailyCard = drawRandomCard();
          localStorage.setItem('dailyCard', JSON.stringify(newDailyCard));
          localStorage.setItem('dailyCardDate', currentDate);
          setDailyCard(newDailyCard);
        }
      }, []);

      function drawRandomCard() {
        // Load tarot card data from the JSON file
        const tarotData = require(`./tarot-cards.json`);
      
        // Select a random unique card from the tarot data
        let selectedCard;
        let lastCard = JSON.parse(localStorage.getItem('lastCard'));
        while (!selectedCard) {
          const randomNumber = Math.floor(Math.random() * 78);
          const card = tarotData.cards[randomNumber];
          if (lastCard !== card) {
            lastCard = card;
            localStorage.setItem('lastCard', JSON.stringify(lastCard));
            selectedCard = card;
          }
        }
      
        return selectedCard;
      }

  return (
    <div className="container mx-auto justify-center items-center">
        {dailyCard !== undefined
        ? (<div className='grid grid-cols-1 md:grid-cols-2 mx-auto lg:w-2/3 justify-center text-center items-center gap-4 px-5'>
            <TarotCard card={dailyCard} allowHover={false} />
            <div>
            <p className='displayfont tracking-widest font-bold'>{dailyCard.name}</p>
            <p className='block md:hidden'>{dailyCard.symbols}</p>
            <p className='hidden md:block'>{dailyCard.description}</p>
            </div>
        </div>
        ) : (
              <p className="lead">Checking on the stars...</p>
        )
        }

    </div>
  )
}

export default DailyCard