import { useState } from "react";
import { motion } from "framer-motion";

const TarotCard = ({ card, allowHover, custom, variants }) => {
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
        <motion.div
        className='mx-auto w-full h-full col-span-1' 
        custom={custom}  // Pass the index as a custom prop
        variants={variants}
        animate="visible"
        initial="hidden"
        >
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
                        backdrop-blur-lg bg-black/80 text-white
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
        </motion.div>
    )
    
}

export default TarotCard;