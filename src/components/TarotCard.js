import { useState } from "react";
import { motion } from "framer-motion";

const TarotCard = ({ card, custom, variants, isDailyCard }) => {
    const [open, setOpen] = useState(false);
    const cardArt = card.arcana === "Minor"
    ? (require(`./../assets/${card.suit}${card.rank}.jpg`)) 
    : (require(`./../assets/${card.rank}-${card.name.replace(/ /g,"")}.jpg`));

    const handleMouseEvent = () => {
        setOpen(!open);
    }
    
    return (
        <motion.div
            layout
            className='h-auto aspect-[300/527] w-[300px]'
            custom={custom}  // Pass the index as a custom prop
            variants={variants}
            animate="visible"
            initial="hidden"
            whileHover="hover"
        >
            {!open ? 
            (
                <img 
                    onClick={handleMouseEvent}
                    src={cardArt}
                    className="rounded rounded-lg"
                    alt={card.name}
                />
            ) : (
                <div 
                    onClick={handleMouseEvent}
                    className="rounded rounded-lg aspect-[300/527] max-w-[300px]"
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
                        w-full h-full overflow-none
                        backdrop-blur-sm bg-neutral-200/70 text-zinc
                        flex flex-col justify-center gap-4
                        text-center
                        p-5 md:px-15">
                        <p className='displayfont tracking-widest text-2xl font-bold'>{isDailyCard && <span>Card of the Day: </span>}{card.name}</p>
                        <p className='text-md block'>{card.symbols} <span className='hidden md:block'>{card.description}</span></p>
                    </div>
                </div>
            )
            }
        </motion.div>
    )
    
}

export default TarotCard;