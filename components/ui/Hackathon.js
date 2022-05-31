import {
  Button,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Link,
} from '@chakra-ui/react';
import StatsComponent from '../dashboard/StatsComponent';

import { RiDeleteBin6Line } from 'react-icons/ri';
import AlertBox from './AlertBox';
import { HiArrowNarrowRight } from 'react-icons/hi';
import NextLink from 'next/link';

function Hackathon({ hackathonData, shouldDelete, ic }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  // console.log(hackathonData._id);

  return (
    <Stack
      justify={'space-between'}
      paddingY="10px"
      paddingX="20px"
      rounded={'lg'}
      alignItems={'center'}
      borderWidth={'1px'}
      borderColor={'gray.400'}
      direction="row"
    >
      <Stack>
        {shouldDelete ? (
          <NextLink href={`/dashboard/${hackathonData._id}`}>
            <Link fontWeight={'semibold'} fontSize={'2xl'}>
              {hackathonData.title}
            </Link>
          </NextLink>
        ) : (
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            {hackathonData.title}
          </Text>
        )}

        {/* Stats */}
        <StatsComponent ic={ic} data={hackathonData} />
      </Stack>

      {shouldDelete && (
        <Stack>
          <Button onClick={onOpen} leftIcon={<RiDeleteBin6Line />}>
            Cancel Event
          </Button>
          <AlertBox
            itemID={hackathonData._id}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Stack>
      )}

      {!shouldDelete && (
        <Stack>
          <Link href={`/hackathons/${hackathonData._id}`}>
            <Button rightIcon={<HiArrowNarrowRight />}>View Details</Button>
          </Link>
        </Stack>
      )}
    </Stack>
  );
}

export default Hackathon;
