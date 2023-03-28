import Card from "react-bootstrap/Card"

const CardApp = ({ card }) => {
    return (
    <Card>
    <Card.Img src={require(`./assets/${card.suit}${card.rank}.jpg`)}></Card.Img>
    <Card.Body>
        <Card.Title className="display-6">{card.name}</Card.Title>
        <Card.Text className="lead">{card.description}</Card.Text>
    </Card.Body>
    </Card>
    )
    
}

export default CardApp;