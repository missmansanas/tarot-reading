import { useState } from 'react';
import { motion } from "framer-motion";
import TarotCard from "./TarotCard";


const ThreeCards = () => {
  const [reading, setReading] = useState()

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
    hidden: { y: -500, opacity: 0 },
  };

  const cardBacks = {
    hover: { 
      rotate: 1,
      y: -15
    },
    hidden: {
      opacity: 0,
      x: -1000
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }

  }

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
        <motion.img
          src={require('./assets/CardBacks.jpg')} 
          alt="Card Back"
          className="rounded rounded-lg mx-auto"
          onClick={readThree}
          whileHover="hover"
          animate="visible"
          initial="hidden"
          variants={cardBacks}
          />

      {reading?.length === 3
        ? (<>
          {reading.map((reading, i) => {
            return (
              <TarotCard
                card={reading}
                allowHover={true}
                key={reading.name}
                custom={i}  // Pass the index as a custom prop
                variants={variants}
                animate="visible"
                initial="hidden"
              />
            );
          })}
        </>)
        : (<>
          <motion.img
            onClick={readThree}
            src={require('./assets/CardBacks.jpg')} alt='Click to draw three cards'
            className='rounded rounded-lg mx-auto'
            whileHover="hover"
            animate="visible"
            initial="hidden"
            variants={cardBacks}
            exit="hidden"
          />
          <motion.img
            onClick={readThree}
            src={require('./assets/CardBacks.jpg')} alt='Click to draw three cards'
            className='rounded rounded-lg mx-auto'
            whileHover="hover"
            animate="visible"
            initial="hidden"
            variants={cardBacks}
            exit="hidden"
          />
          <motion.img
            onClick={readThree}
            src={require('./assets/CardBacks.jpg')} alt='Click to draw three cards'
            className='rounded rounded-lg mx-auto'
            whileHover="hover"
            animate="visible"
            initial="hidden"
            variants={cardBacks}
            exit="hidden"
          />

          </>)
      }
      </div>
  )
}


export default ThreeCards