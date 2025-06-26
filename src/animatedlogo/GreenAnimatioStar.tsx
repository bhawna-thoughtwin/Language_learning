// import { Popover, Box, Button } from "@mantine/core";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import whitestar from "../assets/unitsimages/whitestar.svg"; 
// import { useNavigate } from "react-router-dom";
// import { useLanguageStore } from "../store/useLanguageStore";

// const MotionBox = motion(Box);

// export default function GreenAnimationStar() {
//   const [opened, setOpened] = useState(false);
//    const setLesson = useLanguageStore((state) => state.setLesson);
//    const Navigate = useNavigate();

//   const handleStart = () => {
//     setLesson("lesson-1"); 
//     Navigate('/lesson');
//   };

//   return (
//     <Popover
//       opened={opened}
//       onChange={setOpened}
//       position="bottom"
//       withArrow
//       shadow="md"
//     >
//       <Popover.Target>
//         <MotionBox
//           whileTap={{
//             rotateX: 8,
//             rotateY: -8,
//             scale: 0.95,
//           }}
//           style={{
//             width: 70,
//             height: 70,
//             borderRadius: "50%",
//             backgroundColor: "#58cc02",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginLeft: "170px",
//             cursor: "pointer",
//             boxShadow: "0 8px 10px -4px rgb(14, 99, 3)", // bottom shadow only
//             transformStyle: "preserve-3d",
//           }}
//           onClick={() => setOpened((o) => !o)}
//         >
//           <img
//             src={whitestar}
//             alt="star"
//             style={{
//               width: "50%",
//               height: "50%",
//               objectFit: "cover",
//               borderRadius: "50%",
//             }}
//           />
//         </MotionBox>
//       </Popover.Target>

//       <Popover.Dropdown>
//         <Button color="#52c002" fullWidth onClick={handleStart}>
//           Start
//         </Button>
//       </Popover.Dropdown>
//     </Popover>
//   );
// }
import { Popover, Box, Button } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import whitestar from "../assets/unitsimages/whitestar.svg";
import { useNavigate } from "react-router-dom";
import { useLanguageStore } from "../store/useLanguageStore";

const MotionBox = motion(Box);
const MotionDiv = motion.div;

export default function GreenAnimationStar() {
  const [opened, setOpened] = useState(false);
  const setLesson = useLanguageStore((state) => state.setLesson);
  const navigate = useNavigate();

  const handleStart = () => {
    setLesson("lesson-1");
    navigate("/lesson");
  };

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="bottom"
      withArrow
      shadow="md"
    >
      <Popover.Target>
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
            backgroundColor: "#58cc02",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "170px",
            cursor: "pointer",
            boxShadow: "0 8px 10px -4px rgb(14, 99, 3)",
            transformStyle: "preserve-3d",
          }}
          onClick={() => setOpened((o) => !o)}
        >
          <img
            src={whitestar}
            alt="star"
            style={{
              width: "50%",
              height: "50%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </MotionBox>
      </Popover.Target>

      <Popover.Dropdown>
        <AnimatePresence mode="wait">
          {opened && (
            <MotionDiv
              key="start-button"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ width: "100%" }}
            >
              <Button
                color="#52c002"
                fullWidth
                onClick={handleStart}
                radius="md"
              >
                Start
              </Button>
            </MotionDiv>
          )}
        </AnimatePresence>
      </Popover.Dropdown>
    </Popover>
  );
}
