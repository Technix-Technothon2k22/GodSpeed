import { Box, Stack, Text } from '@chakra-ui/react';

function Announcements({ data }) {
  return (
    <Stack padding="30px">
      <Text fontWeight={'bold'} fontSize="lg">
        Announcements 📩
      </Text>

      {data.data.map((post, index) => {
        return (
          <Box
            key={index}
            rounded="lg"
            padding="10px"
            _hover={{
              bg: 'gray.100',
            }}
            style={{
              marginTop: '10px',
            }}
          >
            <Text fontWeight="light" fontSize="sm">
              Posted on{' '}
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>

            <Text fontWeight="semibold" fontSize="lg">
              {post.title}
            </Text>

            <Text>{post.description}</Text>
          </Box>
        );
      })}
    </Stack>
  );
}

export default Announcements;
