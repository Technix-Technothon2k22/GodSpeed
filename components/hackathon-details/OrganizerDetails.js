import { Box, HStack, Stack, Text, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { BsWhatsapp, BsInstagram, BsTwitter, BsGlobe } from 'react-icons/bs';

function OrganizerDetails({ data }) {
  return (
    <HStack
      bg="red.50"
      alignItems={'center'}
      rounded={'lg'}
      padding="10px"
      justify={'space-between'}
    >
      {/* Avatar */}
      <Stack direction={'row'} alignItems={'center'}>
        <Box rounded="full" border={'5px'} borderColor="red">
          <Image
            style={{
              borderRadius: '100%',
            }}
            alt="badge"
            src={data.authorImage}
            width="60px"
            height="60px"
          />
        </Box>

        {/* Details */}
        <Stack direction={'column'} spacing="0">
          <Text fontSize="lg">Organised by {data.author}</Text>
          <Text fontWeight="light">
            Posted on{' '}
            {new Date(data.createdAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </Text>
        </Stack>
      </Stack>

      {/* Socials */}
      <Stack direction={'row'} alignItems={'center'}>
        {data.twitter && (
          <a
            target="_blank"
            href={`https://twitter.com/${data.twitter}`}
            rel="noreferrer"
          >
            <IconButton
              bg="twitter.100"
              _hover={{
                bg: 'twitter.400',
              }}
              icon={<BsTwitter />}
            />
          </a>
        )}

        {data.instagram && (
          <a
            target="_blank"
            href={`https://www.instagram.com/${data.instagram}`}
            rel="noreferrer"
          >
            <IconButton
              bg="twitter.100"
              _hover={{
                bg: 'twitter.400',
              }}
              icon={<BsInstagram />}
            />
          </a>
        )}

        {data.whatsapp && (
          <a target="_blank" href={data.whatsapp} rel="noreferrer">
            <IconButton
              bg="twitter.100"
              _hover={{
                bg: 'twitter.400',
              }}
              icon={<BsWhatsapp />}
            />
          </a>
        )}

        {data.organiserPage && (
          <a target="_blank" href={data.organiserPage} rel="noreferrer">
            <IconButton
              bg="twitter.100"
              _hover={{
                bg: 'twitter.400',
              }}
              icon={<BsGlobe />}
            />
          </a>
        )}
      </Stack>
    </HStack>
  );
}

export default OrganizerDetails;
