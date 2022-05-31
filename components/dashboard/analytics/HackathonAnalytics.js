import { Stack, Text } from '@chakra-ui/react';

function HackathonAnalytics({ ic, eventId }) {
  const filteredIc = ic.filter((ic) => {
    return ic.eventId === eventId;
  });

  console.log(filteredIc);

  return (
    <Stack padding="20px" rounded="lg" width="60%">
      <Text fontWeight={'semibold'}>
        Expected audience +{filteredIc.length} people
      </Text>
    </Stack>
  );
}

export default HackathonAnalytics;
