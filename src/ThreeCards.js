import "bootstrap/dist/css/bootstrap.min.css";
import "./tarot-cards.json"
import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TarotCard from "./TarotCard";


const ThreeCards = () => {
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
    <div>
      <Container className="app-body m-auto container-md px-md-3 align-content-center d-flex flex-row flex-wrap">
        <Row className="justify-content-center m-auto">
          <Col xs={5} lg={2} className="p-2 bg-transparent border-white">
            <img onClick={readThree} className="deck rounded img-fluid" src={require("./assets/CardBacks.jpg")} alt=""/><br/>
          </Col>
              {reading?.length > 0
                ? (<>
                  {reading.map((reading) => {
                    return (
                    <Col xs={5} lg={2} className="p-2 border-0 bg-transparent">
                      <TarotCard card={reading}/>
                    </Col>
                    )
                  })}
                    </>
                  ) : (
                  <Col xs="auto" lg={4} className="p-3 border-0">
                    <p className="display-6 displayfont">Click to draw three cards.</p>
                  </Col>
                )
              }
        </Row>
      </Container>

    </div>
  )
}


export default ThreeCards