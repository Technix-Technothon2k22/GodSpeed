import {
  Stack,
  Text,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

import { useRef } from 'react';

function Interested() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Button onClick={onOpen}>Show Your Interest</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let Us Know You Better!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email ID</FormLabel>
              <Input placeholder="emailID" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} /*onClick={() }*/>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Interested;
