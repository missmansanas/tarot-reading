import { useState } from 'react';
import { motion } from "framer-motion";
import TarotCard from "./TarotCard";


const ThreeCards = () => {
  const [reading, setReading] = useState()

  const variants = {
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
      opacity: 1
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
      <div className="container grid grid-cols-2 lg:grid-cols-4 auto-rows-min mx-auto px-5 lg:px-15 gap-4">
        <motion.img
          onClick={readThree}
          src={require('./assets/CardBacks.jpg')} 
          alt="Card Back. Click to draw three cards."
          className="rounded rounded-lg mx-auto"
          custom={0.5}
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
          {Array(3).fill(true).map((_, i) =>
            <motion.img
              onClick={readThree}
              src={require('./assets/CardBacks.jpg')}
              alt='Card Back. Click to draw three cards'
              className='rounded rounded-lg mx-auto'
              key={i}
              custom={i}
              whileHover="hover"
              animate="visible"
              initial="hidden"
              variants={cardBacks}
              exit="hidden"
            />
          )}
        </>)
      }
      </div>
  )
}


export default ThreeCards