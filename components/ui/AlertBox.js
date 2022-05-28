import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

function AlertBox({ isOpen, onClose, itemID }) {
  const cancelRef = useRef();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Cancel event?{' '}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure, you want to cancel this event?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              colorScheme="red"
              onClick={async () => {
                setLoading(true);
                try {
                  const response = await fetch(
                    process.env.NEXT_PUBLIC_BASE_URL +
                      `/api/delete-event?id=${itemID}`,
                    {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                      },
                    }
                  );
                } catch (error) {
                  console.log(error);
                  setLoading(false);
                }

                router.replace('/dashboard');
                onClose();
              }}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AlertBox;
