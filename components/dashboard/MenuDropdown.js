import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { CgChevronDown } from 'react-icons/cg';
import { getSession, signOut } from 'next-auth/react';

import { FaSignOutAlt } from 'react-icons/fa';
import { BsDiscord, BsGithub } from 'react-icons/bs';

function MenuDropdown() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        rounded="full"
        icon={<CgChevronDown />}
      />

      <MenuList>
        <MenuItem icon={<FaSignOutAlt />} onClick={() => signOut()}>
          SignOut
        </MenuItem>
        <MenuItem icon={<BsDiscord />}>Discord</MenuItem>
        <MenuItem icon={<BsGithub />}>GitHub</MenuItem>
      </MenuList>
    </Menu>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: {},
  };
}

export default MenuDropdown;
