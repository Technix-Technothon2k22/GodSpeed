import { Center, HStack, Stack, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Hackathon from '../ui/Hackathon';

function Entry({ data, ic }) {
  return (
    <Center>
      <VStack width="70%">
        <Stack width="20%">
          <Image
            alt="logo"
            src="/logo/hackarena-logo-light.png"
            width="150"
            height="150"
          />
        </Stack>
        <Stack
          style={{
            width: '60%',
            margin: '40px auto',
          }}
        >
          {data.map((hackathon, index) => {
            return (
              <Hackathon
                ic={ic}
                key={index}
                shouldDelete={false}
                hackathonData={hackathon}
              />
            );
          })}
        </Stack>
      </VStack>
    </Center>
  );
}

export default Entry;
