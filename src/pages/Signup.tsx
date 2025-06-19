import React, { useState } from 'react';
import {
  Container,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Title,
  Flex,
  ActionIcon,
  Notification,
} from '@mantine/core';
import { useNavigate ,useLocation} from 'react-router-dom';
import { IconX } from '@tabler/icons-react';
import { useAuth } from '../context/userAuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../assets/firebaseConfig';



const SignupPage = () => {
  const navigate = useNavigate();


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const from = location.state?.from || "/";


  const handleSignup = async () => {
    try {
      setError('');

    
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Created:", userCredential.user);
      
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });
      
      navigate("/login");
      
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
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
      {/* Top bar */}
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
          onClick={() => navigate(from)}
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

          {error && (
            <Notification color="red" title="Error">
              {error}
            </Notification>
          )}

          <TextInput
            placeholder="Full Name"
            radius="md"
            required
            value={fullName}
            onChange={(e) => setFullName(e.currentTarget.value)}
            styles={{
              input: {
                padding: '25px 16px',
                backgroundColor: '#f5f5f5',
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
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            styles={{
              input: {
                padding: '25px 16px',
                backgroundColor: '#f5f5f5',
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
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            styles={{
              input: {
                padding: '25px 16px',
                backgroundColor: '#f5f5f5',
                '::placeholder': {
                  fontSize: '22px',
                  color: '#9e9e9e',
                },
              },
            }}
          />

          <Button
            fullWidth
            size="md"
            radius="md"
            onClick={handleSignup}
          >
            Create Account
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default SignupPage;
