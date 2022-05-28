import { Box, Stack, Text } from '@chakra-ui/react';

function FetchAnnouncement({ data }) {
  console.log(data);
  return (
    <Stack
      style={{
        margin: '40px auto',
      }}
      width="57%"
    >
      <Text fontWeight="semibold" fontSize="xl">
        Recent announcements 📣
      </Text>
      {data.data.length !== 0 ? (
        data.data.map((announcement, index) => {
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
                {new Date(announcement.createdAt).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>

              <Text fontWeight="semibold" fontSize="lg">
                {announcement.title}
              </Text>

              <Text>{announcement.description}</Text>
            </Box>
          );
        })
      ) : (
        <Text color={'gray.600'}>No announcements made yet</Text>
      )}
    </Stack>
  );
}

export default FetchAnnouncement;
