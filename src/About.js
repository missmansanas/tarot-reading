import React from 'react';

function About() {

  return (
    <div className='about'>
      <div className="container mx-auto lg:w-5/6 flex flex-col gap-3">
        <h2 className='displayfont text-3xl mt-5'>Hello 🌚</h2>
          <p>I'm Apple, a junior developer from Manila, Philippines. I developed this simple web app to combine my interests in coding and tarot. This site is free to interact with an unlimited number of times (for now). Consider <a href="https://ko-fi.com/missmansanas">buying me a coffee ☕</a> if you enjoyed the service.</p>
          <p>I am currently not offering personal tarot readings, but may do so in the near future.</p>
        <h3 className="displayfont text-3xl mt-5"> How to use this app 🔮</h3>
            <p>The homepage will generate a single card of the day each day. The three-card spread page will generate three random cards each time you click the deck (violet card). Hover over a card to show its meaning.</p>
            <p>The card meanings are pulled directly from a list and printed as is. It doesn't change to account for the context of your query or the other cards that were drawn. If you're seeking something with more depth, empathy and personalization, you will need to call on your own intuition or seek a human reader.</p>

        <h3 className="displayfont text-3xl">Credits 🙏</h3>
          <p>Thanks to <a href="https://github.com/geraldfingburke/plateau-tarot-api">geraldfingburke</a> for the base tarot data JSON, and <a href="https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0">luciellaes</a> for the scanned tarot images.</p>


      </div>
    </div>
  );
}

export default About;