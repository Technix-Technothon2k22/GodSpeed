import { Stack, Text } from '@chakra-ui/react';

function DetailedDescription({ data }) {
  return (
    <Stack padding="30px">
      <Text fontWeight={'bold'} fontSize="lg">
        About the Hackathon
      </Text>
      <Text as="p" fontSize={'lg'}>
        {data.description}
      </Text>
    </Stack>
  );
}

export default DetailedDescription;
