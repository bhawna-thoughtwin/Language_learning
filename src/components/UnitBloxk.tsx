// import React, { useEffect } from "react";
// import { Box, Stack, Text } from "@mantine/core";
// import { useInView } from "react-intersection-observer";
// import { useLanguageStore } from "../store/useLanguageStore";
// import GreenAnimationStar from "../animatedlogo/GreenAnimatioStar";
// import AnimatedImage from "../animatedlogo/ AnimatedImage";

// interface Unit {
//     id: string;
//     name: string;

//     whiteStarImage: string;
//     whiteStar1Image: string;
//     characterImage: string;
//     BoxImage: string;
//     ReviewImage: string;
//     showBird?: boolean; // Optional property to control bird visibility

// }

// interface Props {
//     unit: Unit;
//     index: number;
// }

// // const getImage = (filename: string) => {
// //     try {
// //         return require(`../assets/unitsimages/${filename}`);
// //     } catch {
// //         return null;
// //     }
// // };
// const getImageByFileName = (fileName: string) => {
//     return images[`../assets/unitsimages/${fileName}`] || ""; // return "" if not found
//   };

// const images = import.meta.glob("../assets/unitsimages/*.{svg,png,jpg,jpeg,webp}", {
//     eager: true,
//     as: "url",
//   });

// const UnitBlock: React.FC<Props> = ({ unit, index }) => {
//     const { ref, inView } = useInView({ threshold: 0.5 });
//     const setActiveUnitIndex = useLanguageStore((s) => s.setActiveUnitIndex);

//     useEffect(() => {
//         if (inView) {
//             setActiveUnitIndex(index);
//         }
//     }, [inView, index, setActiveUnitIndex]);

//     // const whiteStar = getImage(unit.whiteStarImage);
//     // const bird = getImage(unit.characterImage);
//     // const box = getImage(unit.BoxImage);
//     // const review = getImage(unit.ReviewImage);

//     return (
//         <Box ref={ref}>
//             <Stack spacing="md" mt={20} direction="row">
//                 <GreenAnimationStar />
//                 <Box>
//                     <AnimatedImage />
//                 </Box>
//                 <Box style={{ position: "relative", marginLeft:"120px"}}>


//                     <Box
//                         style={{
//                             width: 70,
//                             height: 70,
//                             borderRadius: "50%",
//                             backgroundColor: "#f0f0f0",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             position: "relative",
//                         }}
//                     >
//                         {/* Render AnimatedImage (star animation) */}
//                         <img
//                        src={getImageByFileName(unit.whiteStarImage)}
//                         alt="star"
//                         style={{
//                             width: "50%",
//                             height: "50%",
//                             objectFit: "cover",
//                             borderRadius: "50%",
//                         }}
//                 />
//                         {/* Render Bird if applicable */}
//                         {unit?.showBird && (
//                             <img
//                             src={getImageByFileName(unit.characterImage)}
//                             alt="Bird"
//                             style={{
//                               position: "absolute",
//                               top: "50%",
//                               left: "calc(100% + 220px)",
//                               transform: "translateY(-50%)",
//                               width: "520px",     // 👈 set your custom width
//                               height: "500px",    // 👈 set your custom height
//                               objectFit: "contain",
//                             }}
//                           />

//                         )}
//                     </Box>
//                 </Box>


//                 <Box
//                     style={{
//                         width: 80,
//                         height: 80,
//                         borderRadius: "50%",
//                         backgroundColor: "#f0f0f0",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         marginLeft: "140px",
//                     }}
//                 >
//                     <img
//                          src={getImageByFileName(unit.BoxImage)}
//                         alt="Gift Box"
//                         style={{
//                             width: "50%",
//                             height: "50%",
//                             objectFit: "cover",
//                             borderRadius: "50%",
//                         }}
//                     />
//                 </Box>
//                 <Box
//                     style={{
//                         width: 80,
//                         height: 80,
//                         borderRadius: "50%",
//                         backgroundColor: "#f0f0f0",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         marginLeft: "170px",
//                     }}
//                 >
//                     <img
//                            src={getImageByFileName(unit.ReviewImage)}
//                         alt="Trophy"
//                         style={{
//                             width: "50%",
//                             height: "50%",
//                             objectFit: "cover",
//                             borderRadius: "50%",
//                         }}
//                     />
//                 </Box>
//             </Stack>

//             <Box mt="lg" mb="xl" style={{ paddingInline: "16px" }}>
//                 <Box
//                     style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         width: "100%",
//                     }}
//                 >
//                     <Box style={{ flex: 1, borderTop: "1px solid #ccc" }} />
//                     <Text
//                         size="lg"
//                         weight={600}
//                         style={{
//                             marginInline: "12px",
//                             whiteSpace: "nowrap",
//                             color: "#555",
//                         }}
//                     >
//                         Unit {index + 1}: {unit.name}
//                     </Text>
//                     <Box style={{ flex: 1, borderTop: "1px solid #ccc" }} />
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default UnitBlock;


import React, { useEffect } from "react";
import { Box, Text } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useLanguageStore } from "../store/useLanguageStore";
import GreenAnimationStar from "../animatedlogo/GreenAnimatioStar";
import AnimatedImage from "../animatedlogo/ AnimatedImage";

interface Unit {
    id: string;
    name: string;
    whiteStarImage: string;
    whiteStar1Image: string;
    characterImage: string;
    BoxImage: string;
    ReviewImage: string;
    showBird?: boolean;
    themeColor: string;
}

interface Props {
    unit: Unit;
    index: number;
}

const images = import.meta.glob("../assets/unitsimages/*.{svg,png,jpg,jpeg,webp}", {
    eager: true,
    as: "url",
});

const getImageByFileName = (fileName: string) => {
    return images[`../assets/unitsimages/${fileName}`] || "";
};

const UnitBlock: React.FC<Props> = ({ unit, index }) => {
    const { ref, inView } = useInView({ threshold: 0.5 });
    const setActiveUnitIndex = useLanguageStore((s) => s.setActiveUnitIndex);

    useEffect(() => {
        if (inView) {
            setActiveUnitIndex(index);
        }
    }, [inView, index, setActiveUnitIndex]);

    return (
        <Box ref={ref}>
            {/* Main row layout using Box (flex) instead of Stack */}
            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    position: "relative", //needed for absolute positioning
                }}
            >
                {/* Vertical stacked icons */}
                <Box style={{ marginLeft: "40px", width: "170px", marginTop: "20px" }}>
                    <GreenAnimationStar />
                </Box>

                <Box style={{ marginLeft: "40px" }}>
                    <AnimatedImage />
                </Box>

                <Box style={{ marginLeft: "10px" }}>
                    <AnimatedImage />
                </Box>

                <Box style={{ marginLeft: "160px" }}>
                    <img
                        src={getImageByFileName(unit.BoxImage)}
                        alt="Gift Box"
                        style={{ width: 70, height: 70, objectFit: "contain" }}
                    />
                </Box>

                <Box style={{ marginLeft: "240px" }}>
                    <img
                        src={getImageByFileName(unit.ReviewImage)}
                        alt="Trophy"
                        style={{ width: 70, height: 70, objectFit: "contain" }}
                    />
                </Box>

                {/* Absolutely Positioned Bird on Right */}
                {unit.showBird && (
                    <img
                        src={getImageByFileName(unit.characterImage)}
                        alt="Bird"
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "-4px", 
                            transform: "translateY(-50%)",
                            width: 220,
                            height: 200,
                            objectFit: "contain",
                        }}
                    />
                )}
            </Box>

            {/* Bottom label with divider */}
            <Box mt="lg" mb="xl" style={{ paddingInline: "16px" }}>
                <Box
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <Box style={{ flex: 1, borderTop: "1px solid #ccc" }} />
                    <Text
                        size="lg"
                        weight={600}
                        style={{
                            marginInline: "12px",
                            whiteSpace: "nowrap",
                            color: "#555",
                        }}
                    >
                        Unit {index + 1}: {unit.name}
                    </Text>
                    <Box style={{ flex: 1, borderTop: "1px solid #ccc" }} />
                </Box>
            </Box>
        </Box>
    );
};

export default UnitBlock;


