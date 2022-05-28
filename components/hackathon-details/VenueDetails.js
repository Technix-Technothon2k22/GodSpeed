import { Kbd, Stack, Text } from '@chakra-ui/react';

function VenueDetails({ data }) {
  return (
    <Stack padding={'30px'}>
      <Text fontSize={'xl'}>
        <Kbd>Dates:</Kbd>
        <Kbd> {data.startDate}</Kbd> to <Kbd>{data.endDate}</Kbd>
      </Text>
      <Text fontSize={'xl'}>
        <Kbd>Venue:</Kbd>
        {data.city}, {data.state}
      </Text>
      <Text fontSize={'xl'}>
        <Kbd>Official Page:</Kbd>
        {data.organiserPage}
      </Text>
      <Text fontSize={'xl'}>
        <Kbd>Entry fee:</Kbd>₹ {data.fee}
      </Text>
    </Stack>
  );
}

export default VenueDetails;
