import {
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

import { AiOutlineArrowRight } from 'react-icons/ai';

function Hero() {
  return (
    <Center
      style={{
        height: '100vh',
      }}
    >
      <VStack>
        <HStack spacing={2}>
          <Heading fontSize="6xl" fontWeight="extrabold">
            Hack
          </Heading>
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            arena
          </Heading>
        </HStack>

        {/* Tagline */}
        <Text fontSize="lg">One step solution for all your hackathons</Text>

        {/* Product description */}
        <Text
          fontSize="lg"
          fontWeight="light"
          textAlign={'center'}
          style={{
            width: '80%',
          }}
        >
          HackArena is a one step solution for all your hackathons. We help you
          to organize, manage and run your hackathons.
        </Text>

        {/* SignUp prompt */}
        <Link href="/auth/sign-in">
          <Button
            rightIcon={<AiOutlineArrowRight />}
            as={motion.button}
            whileHover={{
              // transition
              scale: 1.05,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            }}
            color="white"
            bgGradient="linear(to-l, #86E3CE , #49BCF6)"
            _hover={{
              bgGradient: 'linear(to-l, #49BCF6 , #86E3CE)',
            }}
          >
            Get Started
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}

export default Hero;
