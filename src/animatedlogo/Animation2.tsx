import { motion } from "framer-motion";
import hellobird from "../assets/unitsimages/hellobird.webp";

const Animation2 = () => {
    return (
        <motion.img
            src={hellobird}
            style={{ width: 180 }}
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
