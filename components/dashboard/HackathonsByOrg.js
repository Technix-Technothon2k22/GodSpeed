import { Stack, Text } from '@chakra-ui/react';
import Hackathon from '../ui/Hackathon';

function HackathonsByOrg({ data, ic }) {
  return (
    <Stack
      style={{
        marginTop: '30px',
      }}
    >
      {data.length !== 0 ? (
        data.map((hackathon, index) => {
          return (
            <Hackathon
              shouldDelete={true}
              key={index}
              hackathonData={hackathon}
              ic={ic}
            />
          );
        })
      ) : (
        <Text textAlign="center">No hackathons organised yet!</Text>
      )}
    </Stack>
  );
}

export default HackathonsByOrg;
