import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { BsBuilding } from 'react-icons/bs';

function CallToHackathons() {
  return (
    <Center
      marginY={{ base: '100px', md: '0px', lg: '0px' }}
      style={{
        height: '100vh',
      }}
    >
      <VStack>
        <BsBuilding
          style={{
            width: '50px',
            height: '50px',
            color: '#7928CA',
          }}
        />
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Visit hackathons nearby
        </Heading>

        <Text>
          Checkout the list of hackathons we recieved, as a response to
          Hackarenas Beta release
        </Text>

        <Link href="/hackathons">
          <Button rightIcon={<HiOutlineArrowRight />}>
            Checkout the list of hackathons
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}

export default CallToHackathons;
