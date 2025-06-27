import { Box } from "@mantine/core";
import { motion } from "framer-motion";
import star from "../assets/star.svg"; // adjust your path

const MotionBox = motion(Box);

export default function AnimatedImage() {
  return (
    <div style={{ perspective: 600 }}>
      <MotionBox
        whileTap={{
          y: 3,            // Moves down like a real button press
          scale: 0.96,     // Slight shrink adds realism
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "140px",
          cursor: "pointer",
          boxShadow: "0 8px 10px -4px rgba(0, 0, 0, 0.3)",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={star}
          alt="Giftbox"
          style={{
            width: "50%",
            height: "50%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </MotionBox>

    </div>
  );
}
