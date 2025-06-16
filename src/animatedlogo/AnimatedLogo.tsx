import { motion } from "framer-motion";
import bird from "../assets/bird.svg";

const AnimatedLogo = () => {
    return (
        <motion.img
            src={bird}
            style={{ width: 120 }}
            animate={{
                y: [0, -20, 0], // up & down
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
            }}

        />

    );
};

export default AnimatedLogo;
