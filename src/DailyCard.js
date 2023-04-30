import {useState, useEffect} from 'react';
import "./tarot-cards.json";
import Card from 'react-bootstrap/Card';
import TarotCard from './TarotCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const DailyCard = () => {
    const [dailyCard, setDailyCard] = useState(undefined);

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString();
        if (localStorage.getItem('dailyCardDate') === currentDate) {
          // Use the stored daily card
          setDailyCard(JSON.parse(localStorage.getItem('dailyCard')));
        } else {
          // Draw a new random card and store it along with the current date
          const newDailyCard = drawRandomCard();
          localStorage.setItem('dailyCard', JSON.stringify(newDailyCard));
          localStorage.setItem('dailyCardDate', currentDate);
          setDailyCard(newDailyCard);
        }
      }, []);

      function drawRandomCard() {
        // Load tarot card data from the JSON file
        const tarotData = require(`./tarot-cards.json`);
      
        // Select a random unique card from the tarot data
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

  return (
    <Container className="daily-reading">
        {dailyCard !== undefined
        ? (
          <Row className="justify-content-center m-auto">
            <Col xs={5} lg={2} className="p-2 border-0 bg-transparent">
              <TarotCard card={dailyCard}/>
            </Col>
          </Row>
            /* <Row className="m-auto my-5 justify-content-center">
                <Col xs={2}>
                    <Card>
                        <Card.Img className="readcard" src={dailyCard.arcana === "Minor" ? require(`./assets/${dailyCard.suit}${dailyCard.rank}.jpg`) : require(`./assets/${dailyCard.rank}-${dailyCard.name.replace(/ /g,"")}.jpg`)} />
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card>
                    <Card.Body>
                        <Card.Title>{dailyCard.name}</Card.Title>
                        <Card.Text>{dailyCard.description}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row> */
        ) : (
            <Row className="m-auto my-5 justify-content-center">
                <Col xs={3}><p className="lead">Checking on the stars...</p></Col>
            </Row>
        )
        }

    </Container>
  )
}

export default DailyCard