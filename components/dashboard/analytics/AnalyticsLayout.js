import { Button, HStack, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { BiArrowBack } from 'react-icons/bi';

function AnalyticsLayout() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justify="space-between"
      width="70%"
    >
      <Stack>
        <Image
          alt="logo"
          src="/logo/hackarena-logo-light.png"
          width="150"
          height="150"
        />
      </Stack>

      <Link href="/dashboard">
        <Button
          leftIcon={<BiArrowBack />}
          _hover={{
            bg: 'red.100',
          }}
        >
          Go back
        </Button>
      </Link>
    </Stack>
  );
}

export default AnalyticsLayout;
