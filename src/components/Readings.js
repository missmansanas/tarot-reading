import React from 'react'
import { useState, useEffect } from 'react';
import TarotCard from './TarotCard';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Readings = () => {

  // State for three-card reading
  const [reading, setReading] = useState(undefined);
  
  // State for daily card reading
  const [dailyCard, setDailyCard] = useState(undefined);

  // Load tarot card data from the JSON file
  const tarotData = require(`../tarot-cards.json`);

  // Function for three-card reading
  const readThree = async () => {
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

  // Function for daily card reading
  function readOne() {
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

  // Automatically draws new card each day
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    if (localStorage.getItem('dailyCardDate') === currentDate) {
      // Use the stored daily card
      setDailyCard(JSON.parse(localStorage.getItem('dailyCard')));
    } else {
      // Draw a new random card and store it along with the current date
      const newDailyCard = readOne();
      localStorage.setItem('dailyCard', JSON.stringify(newDailyCard));
      localStorage.setItem('dailyCardDate', currentDate);
      setDailyCard(newDailyCard);
    }
  }, []);

  // Framer motion settings
  const variants = {
    hover: { 
      rotate: 1,
      y: -5
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: (i + 1) * 0.1,
        duration: 0.7,
      },
    }),
    hidden: (i) => ({
      x: (i + 1) * -300,
      opacity: 0
    }),
  };

  const cardBacks = {
    hover: { 
      rotate: 1,
      y: -15,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: (i + 1) * 0.1,
        duration: 0.7
      }
    }),
    hidden: (i) => ({
      opacity: 1,
      x: (i + 1) * -300
    }),

  }



  return (
      <div className="shrink flex flex-row flex-wrap lg:grid lg:grid-cols-2 xl:grid-cols-4 w-full p-8 gap-8 justify-center place-items-center">

        <button
          onClick={() => setReading(undefined)}
          className={reading
            ? 'fixed bottom-6 right-6 displayfont tracking-wider text-3xl bg-white/50 p-2 rounded rounded-full'
            : 'hidden'
          }>
            ⏪
          </button>

        {/* First card is the card of the day */}
        {dailyCard !== undefined
          ? (
              <TarotCard
                card={dailyCard}
                variants={variants}
                key={dailyCard.name}
                custom={0}
                animate="visible"
                initial="hidden"
                whileHover="hover"
                isDailyCard={true}
              />
          ) : (
              <div className='rounded rounded-lg aspect-[300/527] h-full backdrop-blur-sm bg-neutral-200/70 text-zinc flex place-content-center text-center displayfont text-3xl tracking-widest'>
                <p>Mapping the stars...</p>
              </div>
          )
        }

        {/* Three cards for card reading */}
        {reading?.length === 3
        ? (<>
          {reading.map((reading, i) => {
            return (
              <TarotCard
                card={reading}
                key={reading.name}
                custom={i}  // Pass the index as a custom prop
                variants={variants}
                animate="visible"
                initial="hidden"
                whileHover="hover"
                isDailyCard={false}
              />
            );
          })}
        </>)
        : (<>
          {Array(3).fill(true).map((_, i) =>
            <motion.img
              onClick={readThree}
              src={require('../assets/CardBacks.jpg')}
              alt='Card Back. Click to draw three cards'
              className='rounded rounded-lg aspect-[300/537] max-w-[300px]'
              key={i}
              custom={i}
              whileHover="hover"
              animate="visible"
              initial="hidden"
              variants={cardBacks}
            />
          )}
        </>)
      }

      </div>

  )
}

export default Readings