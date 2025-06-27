import { Popover, Box, Button } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import whitestar from "../assets/unitsimages/whitestar.svg";
import { useNavigate } from "react-router-dom";
import { useLanguageStore } from "../store/useLanguageStore";

const MotionBox = motion(Box);
const MotionDiv = motion.div;

export default function GreenAnimationStar() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
 
 
  const units = useLanguageStore((state) => state.units);
  const activeUnitIndex = useLanguageStore((state) => state.activeUnitIndex);
  const completedLessons = useLanguageStore((state) => state.completedLessons);
  const setLesson = useLanguageStore.getState().setLesson; 
  const markLessonComplete = useLanguageStore(state => state.markLessonComplete);
  useEffect(() => {
    console.log("Completed Lessons:", completedLessons);
  }, [completedLessons]);

 
  if (!units || units.length === 0) return null;

  const currentUnit = units?.[activeUnitIndex];

  console.log("Current Unit Lessons:", currentUnit?.lessons);

  
  const totalLessons = currentUnit?.lessons?.length || 1;

  
  const completedInUnit = currentUnit?.lessons?.filter((lessonId) =>
    completedLessons.includes(lessonId)
  ).length || 0;
  
  
  console.log("Completed in this Unit:", completedInUnit);
  const progress = (completedInUnit / totalLessons) * 100;
  
  // console.log("Final Progress:", progress);
  
  const radius = 50;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

// console.log("Completed lessons:", completedLessons);


  const handleStart = () => {
    markLessonComplete("lesson-1"); 
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
      withinPortal
    >
      <Popover.Target>
        <Box
          style={{
            position: "relative",
            width: 120,
            height: 120,
            marginLeft: "130px",
          }}
        >
          {/* Progress Ring */}
          <svg
            width={120}
            height={120}
            style={{
              position: "absolute",
              top: 0,
              left: 30,
              zIndex: 0,
            }}
          >
            <circle
              stroke="#e0e0e0"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx="60"
              cy="60"
            />
            <circle
              stroke="#58cc02"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              r={normalizedRadius}
              cx="60"
              cy="60"
              style={{
                transition: "stroke-dashoffset 0.35s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>

          {/* Green Star Button */}
          <MotionBox
            whileTap={{
              rotateX: 8,
              rotateY: -8,
              scale: 0.95,
            }}
            style={{
              width: 74,
              height: 74,
              borderRadius: "50%",
              backgroundColor: "#58cc02",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transformStyle: "preserve-3d",
              position: "absolute",
              top: 22,
              left: 54,
              zIndex: 1,
            }}
            onClick={() => setOpened((o) => !o)}
          >
            <img
              src={whitestar}
              alt="star"
              style={{
                width: "55%",
                height: "55%",
                objectFit: "contain",
              }}
            />
          </MotionBox>
        </Box>
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
              style={{
                width: 200,
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <Button
                color="#52c002"
                onClick={handleStart}
                radius="md"
                size="md"
                style={{
                  width: "100%",
                  height: "50px",
                  fontSize: "16px",
                }}
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
