// import Card from "react-bootstrap/Card";
import { useState } from "react";
// import Collapse from "react-bootstrap/Collapse";

const TarotCard = ({ card, allowHover }) => {
    const [open, setOpen] = useState(false);
    const cardArt = card.arcana === "Minor"
    ? (require(`./assets/${card.suit}${card.rank}.jpg`)) 
    : (require(`./assets/${card.rank}-${card.name.replace(/ /g,"")}.jpg`));

    const handleMouseEvent = () => {
        if (allowHover) {
            setOpen(!open);
        }
    }
    
    return (
        <div className='mx-auto w-full h-full col-span-1'>
            {!open ? 
            (
                <img 
                    onMouseEnter={handleMouseEvent}
                    src={cardArt}
                    className="read-card mx-auto rounded rounded-lg"
                    alt={card.name}
                />
            ) : (
                <div 
                    onMouseLeave={handleMouseEvent}
                    className="rounded rounded-lg mx-auto w-full"
                    style={{
                        backgroundImage: `url(${cardArt})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        backgroundPosition: `50%`,
                        height: `100%`,
                        width: `100%`
                    }}
                    alt={card.name}>
                    <div className="rounded rounded-lg
                        w-full h-full
                        backdrop-blur-sm bg-white/50
                        flex flex-col justify-center gap-4
                        text-center
                        p-5 md:px-15 mx-auto">
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