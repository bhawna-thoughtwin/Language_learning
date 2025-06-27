import { motion } from "framer-motion";

import giphy from "../assets/giphy.gif";
import bird from "../assets/bird.svg";
import giphy1 from "../assets/giphy1.gif";

export default function AnimatedBirds() {
    return (
        <div style={wrapper}>
            {/* Bird 2 animation box */}
            <motion.div
                whileHover={{
                    rotate: -12,
                    scale: 1.05,
                }}
                animate={{
                    rotate: -10,
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
                style={box}
            >
                <img src={giphy} alt="bird1" style={imageStyle} />
                <img src={bird} alt="bird2" style={imageStyle} /> {/* This is the one in the middle */}
                <img src={giphy} alt="bird3" style={imageStyle} />
            </motion.div>




          
        </div>
    );
}



const wrapper: React.CSSProperties = {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    marginTop: 40,
};

const box = {
    width: 200,
    height: 320,
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    // Tilt like \
    transform: "rotate(-40deg)",

    // Solid green border
    border: "3px solid #58cc02",

    // Left-only green shadow
    boxShadow: "-8px 0 16px -4px rgba(88, 204, 2, 5)",
};




const imageStyle = {
    width: "60%",
    height: "100%",
    objectFit: "contain",
};



