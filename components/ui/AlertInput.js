import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

function AlertInput({ title }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
    </Alert>
  );
}

export default AlertInput;
