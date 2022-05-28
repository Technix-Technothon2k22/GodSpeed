import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { DiOpensource } from 'react-icons/di';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDevices } from 'react-icons/md';

function Features() {
  const iconStyles = {
    width: '50px',
    height: '50px',
  };

  return (
    <Center
      marginY={{ base: '100px', md: '0px', lg: '0px' }}
      style={{
        height: '100vh',
      }}
    >
      <VStack spacing={'30px'}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
          marginX={'auto'}
          textAlign={'center'}
        >
          Features ⚡
        </Heading>

        <Stack
          direction={{ base: 'column', md: 'column', lg: 'row' }}
          justify={{ base: null, md: 'space-evenly', lg: 'space-evenly' }}
          width="100%"
        >
          <VStack
            bg="whiteAlpha.400"
            textAlign="center"
            width={{ lg: '40%' }}
            _hover={{
              transition: 'all 0.2s ease-in-out',
              bg: 'blue.100',
            }}
            padding="40px 20px"
            rounded={'lg'}
          >
            <DiOpensource style={iconStyles} />
            <Text fontSize={'1.5rem'} fontWeight={'medium'}>
              Open-Source
            </Text>
            <Text>We are open-source on GitHub</Text>
          </VStack>
          <VStack
            bg="whiteAlpha.400"
            textAlign="center"
            width={{ lg: '40%' }}
            _hover={{
              transition: 'all 0.2s ease-in-out',
              bg: 'blue.100',
            }}
            padding="40px 20px"
            rounded={'lg'}
          >
            <IoMdSpeedometer style={iconStyles} />
            <Text fontSize={'1.5rem'} fontWeight={'medium'}>
              Blazing Fast
            </Text>
            <Text>Set up a new hackathon entry in minutes</Text>
          </VStack>
          <VStack
            bg="whiteAlpha.400"
            textAlign="center"
            width={{ lg: '40%' }}
            _hover={{
              transition: 'all 0.2s ease-in-out',
              bg: 'blue.100',
            }}
            padding="40px 20px"
            rounded={'lg'}
          >
            <MdDevices style={iconStyles} />
            <Text fontSize={'1.5rem'} fontWeight={'medium'}>
              Cross-Platform
            </Text>
            <Text>We are available across all know platforms</Text>
          </VStack>
        </Stack>
      </VStack>
    </Center>
  );
}

export default Features;
