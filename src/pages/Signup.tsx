import React from 'react';
import {
    Container,
    TextInput,
    PasswordInput,
    Button,
    Stack,
    Title,
    Flex,
    ActionIcon,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconX } from '@tabler/icons-react';


const SignupPage = () => {
    const navigate = useNavigate();

    return (
        <>


            <Container
                size="lg"
                px="md"
                style={{
                    minHeight: 'calc(100vh - 80px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    px="md" // or px={20}
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 10,
                        right: 20,
                    }}
                >

                    <ActionIcon
                        variant="subtle"
                        color="gray"
                        size="lg"
                        onClick={() => navigate('/')}
                    >
                        <IconX size={50} />
                    </ActionIcon>

                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </Button>
                </Flex>
                <Flex justify="center" align="center" style={{ width: '60%' }}>
                    <Stack spacing="md" w={{ base: '100%', sm: '60%' }}>
                        <Title order={2} align="center">
                            Sign Up
                        </Title>

                        <TextInput
                            placeholder="Full Name"
                            radius="md"
                            required
                              w="100%"
                            styles={{
                                input: {
                                    padding: '25px 16px',
                                    backgroundColor: "#f5f5f5",
                                    '::placeholder': {
                                        fontSize: '22px',
                                        color: '#9e9e9e',
                                    },
                                },
                            }}

                        />


                        <TextInput
                            placeholder="Email"
                            radius="md"
                            required
                            styles={{
                                input: {
                                    padding: '25px 16px',
                                    backgroundColor: "#f5f5f5",
                                    '::placeholder': {
                                        fontSize: '22px',
                                        color: '#9e9e9e',
                                    },
                                },
                            }}
                        />
                        <PasswordInput
                            placeholder="Password"
                            radius="md"
                            required
                            styles={{
                                input: {
                                    padding: '25px 16px',
                                    backgroundColor: "#f5f5f5",
                                    '::placeholder': {
                                        fontSize: '22px',
                                        color: '#9e9e9e',
                                    },
                                },
                            }}

                        />



                        <Button fullWidth size="md" radius="md">
                            Create Account
                        </Button>


                    </Stack>
                </Flex>
            </Container>
        </>
    );
};

export default SignupPage;
