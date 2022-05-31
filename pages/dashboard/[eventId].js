import { Button, Center, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import AnalyticsLayout from '../../components/dashboard/analytics/AnalyticsLayout';
import AnnouncementComponent from '../../components/dashboard/analytics/AnnoucementComponent';
import FetchAnnouncement from '../../components/dashboard/analytics/FetchAnnouncement';
import HackathonAnalytics from '../../components/dashboard/analytics/HackathonAnalytics';

import { AiFillAlert } from 'react-icons/ai';

function AdminEventPage({ data, data2, data3 }) {
  const parsedData = JSON.parse(data);
  const parsedData2 = JSON.parse(data2);
  const parsedData3 = JSON.parse(data3);

  console.log(parsedData3);

  dayjs.extend(require('dayjs/plugin/relativeTime'));

  return (
    <div>
      <Head>
        <title>{parsedData.title}</title>
      </Head>

      <Center>
        <Stack direction="column" width="90%" alignItems={'center'}>
          {/* Layout */}
          <AnalyticsLayout />

          <Stack width="57%">
            <Button
              bg="red.100"
              _hover={{
                bg: 'red.300',
              }}
              width="fit-content"
              padding="10px"
              rounded="xl"
              leftIcon={<AiFillAlert />}
            >
              Live {dayjs(parsedData.startDate).from()}
            </Button>
          </Stack>

          <HackathonAnalytics ic={parsedData3.data} eventId={parsedData._id} />

          {/* Make announcement component */}
          <AnnouncementComponent eventId={parsedData._id} />

          {/* Fetch all announcements */}
          <FetchAnnouncement data={parsedData2} />
        </Stack>
      </Center>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const { eventId } = context.params;

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  let data;
  let data3;

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/get-event?eventId=${eventId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }
    );

    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  let data2;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/api/get-announcements?eventId=${eventId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }
    );

    data2 = await response.json();
    // console.log('Announcments!', data2);
  } catch (err) {
    console.log(err);
  }

  try {
    const reponse = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/fetch-interest-count`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }
    );

    data3 = await reponse.json();
    console.log(data3);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: JSON.stringify(data[0]),
      data2: JSON.stringify(data2),
      data3: JSON.stringify(data3),
    },
  };
}

export default AdminEventPage;
