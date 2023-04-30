import Card from "react-bootstrap/Card";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

const TarotCard = ({ card }) => {
    const [open, setOpen] = useState(false);

    return (
    <Card className="bg-transparent border-0 text-dark">
    <Card.Img className="readcard" src={card.arcana === "Minor" ? require(`./assets/${card.suit}${card.rank}.jpg`) : require(`./assets/${card.rank}-${card.name.replace(/ /g,"")}.jpg`)} onClick={()=>setOpen(!open)}></Card.Img>
    <Collapse in={open}>
        <Card.Body>
            <Card.Text>{card.description}</Card.Text>
            <Card.Subtitle>Symbols: {card.symbols}</Card.Subtitle>
        </Card.Body>
    </Collapse>
    </Card>
    )
    
}

export default TarotCard;