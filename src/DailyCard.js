import {useState} from 'react';
import "./tarot-cards.json";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const DailyCard = () => {
    // Set state for daily card
    const [dailyCard, setDailyCard] = useState(undefined);
    const [dailyCardDate, setDailyCardDate] = useState(undefined);

    const readOne = async () => {
        // Load tarotData from JSON
        const tarotData = await require(`./tarot-cards.json`);

        // Generate random number from 0-77
        const number = await Math.floor(Math.random() * 78);
    
        // Set daily card with random number
        const card = await tarotData.cards[number];     

        await setDailyCard(card);
        localStorage.setItem('dailyCard', dailyCard)

        return dailyCard;
    };

    const currentDate = new Date().toLocaleDateString();
    if (localStorage.getItem('dailyCardDate') !== currentDate || localStorage.getItem('dailyCard') === undefined) {
        setDailyCardDate(currentDate);
        localStorage.setItem('dailyCardDate', currentDate);
        readOne();
    } else if (localStorage.getItem('dailyCardDate') === currentDate && localStorage.getItem('dailyCard') !== undefined) {
        setDailyCard(localStorage.getItem('dailyCard'))
    }
    
    return (
        <Container className="dailyReading">
            <Row className="m-auto my-5 justify-content-center">

        {dailyCard === undefined
                ? (
                    <Col xs={2}><button onClick={readOne()}>Get daily reading</button></Col>
                ) : (
                <>
                    <Col xs={2}>
                    <Card>
                        <Card.Img className="readcard" src={dailyCard.arcana === "Minor" ? require(`./assets/${dailyCard.suit}${dailyCard.rank}.jpg`) : require(`./assets/${dailyCard.rank}-${dailyCard.name.replace(/ /g,"")}.jpg`)}></Card.Img>
                    </Card>
                    </Col>
                    <Col xs={4}>
                        <Card className="bg-transparent border-0">
                            <Card.Body>
                                <Card.Title>{dailyCard.name}</Card.Title>
                                <Card.Text>{dailyCard.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </>

                )
            }
            </Row>
        </Container>
    )
}

export default DailyCard