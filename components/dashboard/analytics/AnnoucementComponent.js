import { Alert, AlertIcon, Button, Input, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

function AnnouncementComponent({ eventId }) {
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  //   console.log(eventId);

  async function sendData() {
    // form validation
    if (data.title === '' || data.description === '') {
      alert('Please fill in all fields');
      return;
    }

    console.log(data);

    setLoading(true);

    //fetch request
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + '/api/post-announcement',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            eventId,
          }),
        }
      );

      let announcement = await response.json();
      console.log(announcement);

      setLoading(false);

      router.replace(`/dashboard/${eventId}`);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
  }

  return (
    <Stack width="57%">
      <Alert bg="whiteAlpha.400" rounded={'xl'} width="fit-content">
        <AlertIcon />
        You cannot revoke your announcement once posted!
      </Alert>

      <Text fontWeight="bold">Whats the good news?</Text>
      <Input
        placeholder="Price Pool doubled!"
        value={data.title}
        onChange={(e) =>
          setData({
            ...data,
            title: e.target.value,
          })
        }
      />

      <Text fontWeight="bold">Tell us more about it!</Text>
      <Input
        placeholder="🎈💸"
        value={data.description}
        onChange={(e) =>
          setData({
            ...data,
            description: e.target.value,
          })
        }
      />

      <Button onClick={sendData} isLoading={loading}>
        Post Announcement 🚀
      </Button>
    </Stack>
  );
}

export default AnnouncementComponent;
