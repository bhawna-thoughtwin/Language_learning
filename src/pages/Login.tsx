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
import Header from '../layouts/Header';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container
                size="xs"
                px="md"
                style={{
                    minHeight: 'calc(100vh - 80px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Top bar: Cross on left, Sign Up on right */}
                <Flex
                    justify="space-between"
                    align="center"
                    px={40}
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
                   
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </Button>
                </Flex>

                {/* Login Form */}
                <Stack spacing="md" w="80%">
                    <Title order={2} align="center">
                        Login
                    </Title>

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

                    <Button fullWidth size="lg" radius="md">
                        Login
                    </Button>
                </Stack>

            </Container>
        </>
    );
};

export default LoginPage;
