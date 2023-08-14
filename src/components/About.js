import React from 'react';
import { motion, useScroll } from "framer-motion";
import { Link } from 'react-router-dom';

function About() {
  const text = [
    {"type": "h2", "content": "Hello, seeker 🌚"},
    {"type": "p", "content": `I'm Apple, a junior developer from Manila, Philippines. I developed this simple web app to combine my interests in coding and tarot. This site is free to use. Consider buying me a coffee ☕ if you enjoyed the service.`},
    {"type": "p", "content": `I am currently not offering personal tarot readings, but may do so in the future.`},
    {"type": "h2", "content": "How to use this app 🔮"},
    {"type": "p", "content": `The readings page generates 4 cards - the first one is a card of the day that only changes once per day. The other three can be re-generated an unlimited number of times. Tap on any card to show/hide its meaning. Simply find the ↺ button on the lower right to clear your reading.`},
    {"type": "p", "content": `Credit to geraldfingburke on GitHub for the base tarot data JSON, and luciellaes on itch.io for the scanned tarot images.`},

  ]

  const textAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    visible: (i) => ({
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: i * 0.05,
        staggerChildren: 0.01,
      }
    })
  }
  const letterAnimation = {
    hidden : {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  return (
      <div className="shrink w-full place-content-center h-full p-8 lg:px-28">
      <motion.div layout
        className="flex flex-col-reverse justify-center items-center fixed bottom-5 right-5 z-999 gap-2"
        animate={{
          opacity: [0, 1]
        }}
      >
        <Link to='/'><button className={'rounded rounded-full py-3 px-6 border border-black displayfont font-extrabold text-xl tracking-widest bg-white/50 backdrop-blur-sm'}>🏠</button></Link>
      </motion.div>
      <motion.div layout
        variants={textAnimation}
        initial='hidden'
        animate='visible'
      >
        {text.map((section, index) => {
          if (section.type === "h2") {
            return (
              <motion.h2 layout
                className='displayfont text-5xl md:text-7xl mt-8'
                custom={index}
                variants={textAnimation}
                initial='hidden'
                animate='visible'
                key={`${section} = ${index}`}
              >
                {section.content.split("").map((char, index) => {
                  return (
                    <motion.span key={`${char} - ${index}`} variants={letterAnimation}>
                      {char}
                    </motion.span>
                  )
                })}
              </motion.h2>
            )
          } else {
            return(
              <motion.p layout
                  className='text-lg py-2'
                  custom={index}
                  variants={textAnimation}
                  initial='hidden'
                  animate='visible'
                  key={`${section} = ${index}`}
                >
                  {section.content.split("").map((char, index) => {
                    return (
                      <motion.span key={`${char} - ${index}`} variants={letterAnimation}>
                        {char}
                      </motion.span>
                    )
                  })}
                </motion.p>
            )}
        })}
      </motion.div>


      </div>
  );
}

export default About;