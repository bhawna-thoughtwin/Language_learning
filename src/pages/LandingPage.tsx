// src// src/pages/LandingPage.tsx
import * as React from 'react';
import { Box, Button, Group, Title, Text } from '@mantine/core';
import Header from '../components/Header';
import AnimatedLogo from '../animatedlogo/AnimatedLogo';

const LandingPage = () => {
    return (
        <>
            <Header />

            {/* main content */}
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 80px)',
                    padding: '10rem',
                }}
            >
                {/* Left side:  For animation picture */}
                <Box
                    style={{
                        width: '50%',
                        height: '400px',
                        backgroundColor: '#f1f3f5',
                        borderRadius: '8px',
                        marginLeft: '180px'
                    }}
                >
                    <AnimatedLogo />
                    <AnimatedLogo />
                    <AnimatedLogo />
                </Box>

                {/* Right side: Heading + Buttons */}
                <Box style={{ width: '45%', height: '50%' }}>
                    <Title order={2} mb="xs" style={{ lineHeight: 1.1, color: "#4B4B4B" }}>
                        The free, fun, and effective way to
                        <br />
                        <span style={{ display: 'inline-block', marginTop: '-10px', marginLeft: '100px' }}>
                            learn a language!
                        </span>
                    </Title>




                    <Group direction="column" spacing="md">
                        <Button
                            size="lg"
                            ml={60}
                            w={330}
                            radius="md"
                            variant="gradient"
                            gradient={{ from: 'green', to: 'lime', deg: 90 }}
                        >
                            Get Started
                        </Button>
                        <Button
                            size="lg"
                            w={330}
                            ml={60}
                            radius="md"
                            variant="filled"  
                            color="white"   
                            styles={{
                                root: {
                                    backgroundColor: 'white',  
                                    color: '#64b5f6',            
                                    border: '1px solid grey',  
                                },
                            }}
                        >
                            I Already Have An Account
                        </Button>

                    </Group>
                </Box>
            </Box>
        </>
    );
};

export default LandingPage;
