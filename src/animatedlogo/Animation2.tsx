import { motion } from "framer-motion";
import bird3 from "../assets/bird3.svg";

const Animation2 = () => {
    return (
        <motion.img
            src={bird3}
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

export default Animation2;
