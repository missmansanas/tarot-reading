import React from 'react';

function About() {
  return (
    <div className='flex flex-col h-full justify-center w-2/3 leading-8 ml-8 gap-4 pb-12'>
      <p>
        Hey there! Welcome to my web app, built with love and coding wizardry! 😄✨ I'm Apple, a junior web developer from Manila.
      </p>
      <p>
        I'm building my portfolio, and each simple web app I create is both a lesson and a labor of love! I deeply enjoy experimenting with new technologies and frameworks to bring fun and meaningful online experiences. As a multi-passionate creator, I pour my heart and soul into crafting each web app, infusing it with creativity and problem-solving skills that I've honed along the way. 🌟
      </p>
      <p>
        Join me on this exciting journey as I grow and learn. Your support means the world to me, and I'm excited to always create something new and meaningful. 🌈🙌 
      </p>
      <a
        href='http://missmansanas.com/' rel='noreferrer' target='_blank'
        className='text-sky-500 underline underline-offset-2'
        >
        Let's connect!
      </a>
      <h2 className='text-2xl'>How to use this app 🔮</h2>
      <p>
        The readings page generates 4 cards. Tap on any card to show/hide its meaning. The first is a card of the day that only changes once per day. The other three can be re-generated an unlimited number of times. Simply find the ⏪ button on the lower right to clear your reading.
      </p>
      <p>
        Credit to geraldfingburke on GitHub for the base tarot data JSON, and luciellaes on itch.io for the scanned tarot images.
      </p>
    </div>
  );
}

export default About;