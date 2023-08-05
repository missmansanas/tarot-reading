// import Card from "react-bootstrap/Card";
import { useState } from "react";
// import Collapse from "react-bootstrap/Collapse";

const TarotCard = ({ card, allowHover }) => {
    const [open, setOpen] = useState(false);
    const cardArt = card.arcana === "Minor"
    ? (require(`./assets/${card.suit}${card.rank}.jpg`)) 
    : (require(`./assets/${card.rank}-${card.name.replace(/ /g,"")}.jpg`));

    const handleMouseEnter = async () => {
        if (allowHover === true) {
            setOpen(true);
        }
    }

    const handleMouseLeave = async () => {
        if (allowHover === true) {
            setOpen(false);
        }
    }
    
    return (
        <div className='mx-auto'>
            {!open ? 
            (
                <img 
                    onMouseEnter={handleMouseEnter}
                    src={cardArt}
                    className="read-card mx-auto rounded rounded-lg"
                    alt={card.name}
                />
            ) : (
                <div 
                    onMouseLeave={handleMouseLeave}
                    className="rounded rounded-lg mx-auto"
                    style={{
                        backgroundImage: `url(${cardArt})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `100%`,
                        backgroundPosition: `50%`,
                        height: `100%`
                    }}
                    alt={card.name}>
                    <div className="rounded rounded-3xl backdrop-blur-sm bg-white/50 h-full flex flex-col justify-center text-center px-1 gap-4">
                        <p className='displayfont tracking-widest font-bold'>{card.name}</p>
                        <p className='block md:hidden'>{card.symbols}</p>
                        <p className='hidden md:block'>{card.description}</p>
                    </div>
                </div>
            )
            }
        </div>
    )
    
}

export default TarotCard;