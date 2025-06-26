import * as React from 'react';
import { Box, Button, Flex, Title, Stack, Container } from '@mantine/core';
import Header from '../components/Header';
import AnimatedLogo from '../animatedlogo/AnimatedLogo';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Animation2 from '../animatedlogo/Animation2';
import AnimatedBirds from '../animatedlogo/AnimatedBirds';

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <Container
        size="lg"
        px="md"
        style={{ minHeight: 'calc(80vh - 80px)', marginTop: '250px' }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap="xl"
          style={{ minHeight: '100%' }}
        >
          {/* Left Box */}
          <Box
            w={{ base: '100%', md: '40%' }}
            p="md"
            style={{
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <AnimatedBirds/>
            {/* <AnimatedLogo />
            <Animation2/> */}
          </Box>

          {/* Right Box */}
          <Stack w={{ base: '100%', md: '50%' }} spacing="xl" align="center">
            <Title
              order={2}
              align="center"
              style={{ lineHeight: 1.1, color: '#4B4B4B' }}
            >
              {t('landing.title.line1')}
              <br />
              <span style={{ display: 'inline-block', marginTop: '0.5rem' }}>
                {t('landing.title.line2')}
              </span>
            </Title>

            <Stack spacing="md" align="center" w="100%">
              <Button
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: 'green', to: 'lime', deg: 90 }}
                w={{ base: '100%', sm: 300 }}
                onClick={() => navigate("/language-selection", { replace: true })} 
              >
                {t('landing.getStarted')}
              </Button>
              <Button
                size="lg"
                radius="md"
                variant="filled"
                w={{ base: '100%', sm: 300 }}
                onClick={() => navigate('/login')}
                styles={{
                  root: {
                    backgroundColor: 'white',
                    color: '#64b5f6',
                    border: '1px solid grey',
                  },
                }}
              >
                {t('landing.alreadyHaveAccount')}
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default LandingPage;
