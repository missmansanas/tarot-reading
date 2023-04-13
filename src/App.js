import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./tarot-cards.json"
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardApp from "./CardApp";
import About from "./About";
import FAQ from "./FAQ";


function App() {
  const [reading, setReading] = useState()

  const readThree = async () => {
    // Load tarotData from JSON
    const tarotData = require(`./tarot-cards.json`);

    // Generate three random numbers from 0-77
    const numbers = [];
    while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 78);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    // Retrieve three tarot cards from JSON data
    const threeCards = [];
    numbers.forEach((randomNumber)=>{
      const card = tarotData.cards[randomNumber];
      threeCards.push(card);

      setReading(threeCards);

    });

    return reading;

  }

  return (
    <div className="App">
      <h1 className="display-4 displayfont text-center mt-4 mb-0"><a href="/">Tarot Reading</a></h1>
      <Container className="mt-0 pt-0 mb-4 m-auto nav justify-content-center">
        <FAQ/><About/>
      </Container>

      <Container className="m-auto container-md px-md-3">
        <Row className="justify-content-center m-auto">
          <Col xs={5} lg={2} className="p-2 bg-transparent border-white">
            <img onClick={readThree} className="deck rounded img-fluid" src={require("./assets/CardBacks.jpg")} alt=""/><br/>
          </Col>
              {reading?.length > 0
                ? (<>
                  {reading.map((reading) => {
                    return (
                    <Col xs={5} lg={2} className="p-2 border-0 bg-transparent">
                      <CardApp card={reading}/>
                    </Col>
                    )
                  })}
                    </>
                  ) : (
                  <Col xs="auto" lg={3} className="p-3 border-0">
                    <p className="display-6 displayfont">New here?</p>
                    <p className="lead">Click on the deck to immediately draw three cards. Click on each drawn card to reveal its meaning.</p></Col>
                )
              }
        </Row>
      </Container>

    </div>
  );
}

export default App;