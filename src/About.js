import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <div className='about'>
      <Container className="m-auto container px-3 d-flex flex-column">
        <h2 className='displayfont display-2'>About</h2>
          <p>This web app was developed by me (@missmansanas) to combine my interests in coding and tarot. This site is free to interact with an unlimited number of times, for now. ☕ Consider <a href="https://ko-fi.com/missmansanas">buying me a coffee</a> if you enjoyed the service. Please do not scrape, remix, reproduce or resell the contents of this site in any way :)</p>
          <p>I am currently not offering personal tarot readings, but this may change in the near future.</p>
        <h3 className="displayfont display-6"> How to use this app</h3>
            <p>The homepage will generate a single card of the day each day. The three-card spread page will generate three random cards each time you click the deck (violet card). Click on any card to show/hide its meaning.</p>
            <p>The card meanings are pulled directly from a list and printed as is. It doesn't change to account for the context of your query or the other cards that were drawn. If you're seeking something with more depth, empathy and personalization, you will need to call on your own intuition or seek a human reader.</p>
            <p>Some simple ways to interpret three cards together:</p>
            <ul>
              <li>past, present, future</li>
              <li>situation, action, outcome</li>
              <li>check-in for mind, body, spirit</li>
              <li>you, another person, your relationship</li>
            </ul>

        <h3 className="displayfont display-6">Credits</h3>
          <p>Thanks to <a href="https://github.com/geraldfingburke/plateau-tarot-api">geraldfingburke</a> for the base tarot data JSON, and <a href="https://luciellaes.itch.io/rider-waite-smith-tarot-cards-cc0">luciellaes</a> for the scanned tarot images.</p>


      </Container>
    </div>
  );
}

export default About;