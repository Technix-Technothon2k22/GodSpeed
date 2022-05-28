import { HStack, Stack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import MenuDropdown from '../components/dashboard/MenuDropdown';

function DashboardLayout({ children }) {
  const { data: session } = useSession();

  return (
    <Stack
      width={{ base: '90%', md: '90%', lg: '70%' }}
      paddingX="20px"
      marginY={'30px'}
    >
      {/* Signout,etc, dropdown */}
      <HStack justify={'space-between'}>
        <Image
          alt="logo"
          src="/logo/hackarena-logo-light.png"
          width="150"
          height="150"
        />
        {/* Dropdown */}
        <Stack alignItems="center" spacing={'10px'} direction="row">
          <Image
            alt="profile"
            style={{
              borderRadius: '100%',
            }}
            src={
              session?.user.image ||
              'https://avatars.githubusercontent.com/u/68821192?v=4'
            }
            width="42"
            height="42"
          />
          <MenuDropdown />
        </Stack>
      </HStack>

      {children}
    </Stack>
  );
}

export default DashboardLayout;
