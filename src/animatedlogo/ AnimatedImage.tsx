import { Box } from "@mantine/core";
import { motion } from "framer-motion";
import star from "../assets/star.svg"; // adjust your path

const MotionBox = motion(Box);

export default function AnimatedImage() {
  return (
    <div style={{ perspective: 600 }}>
    <MotionBox
      whileTap={{
        rotateX: 8,
        rotateY: -8,
        scale: 0.95,
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
        // ✅ Bottom-only shadow:
        boxShadow: "0 8px 10px -4px rgba(0, 0, 0, 1)",
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
