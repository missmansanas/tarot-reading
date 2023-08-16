import React from 'react';
import { motion, useScroll } from "framer-motion";

function About() {
  const text = [
    {"type": "h2", "content": "Hello, seeker 🌚"},
    {"type": "p", "content": `I'm Apple, a junior developer from Manila, Philippines. I developed this simple web app to combine my interests in coding and tarot. This site is free to use. Consider buying me a coffee ☕ if you enjoyed the service.`},
    {"type": "p", "content": `I am currently not offering personal tarot readings, but may do so in the future.`},
    {"type": "h2", "content": "How to use this app 🔮"},
    {"type": "p", "content": `The readings page generates 4 cards. Tap on any card to show/hide its meaning. The first is a card of the day that only changes once per day. The other three can be re-generated an unlimited number of times. Simply find the ⏪ button on the lower right to clear your reading.`},
    {"type": "p", "content": `Credit to geraldfingburke on GitHub for the base tarot data JSON, and luciellaes on itch.io for the scanned tarot images.`},

  ]

  const textAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: 0,
        staggerChildren: 2,
      }
    }
  }
  const letterAnimation = {
    hidden : {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  return (
      <div className="shrink w-full place-content-center h-full p-8 lg:px-28">
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
                variants={letterAnimation}
                key={`${section} = ${index}`}
              >
                {section.content}
              </motion.h2>
            )
          } else {
            return(
              <motion.p layout
                  className='text-lg py-2'
                  custom={index}
                  variants={letterAnimation}
                  key={`${section} = ${index}`}
                >
                  {section.content}
                </motion.p>
            )}
        })}
      </motion.div>


      </div>
  );
}

export default About;