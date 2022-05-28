import { Button, Center, HStack, Image } from '@chakra-ui/react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import DashboardLayout from '../../layouts/DashboardLayout';

import { AiOutlinePlus } from 'react-icons/ai';
import HackathonsByOrg from '../../components/dashboard/HackathonsByOrg';
import Link from 'next/link';

function DashboardPage({ hackathons }) {
  let data = JSON.parse(hackathons);

  return (
    <Center>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardLayout>
        {/* Admin Board */}
        <HStack>
          <Link href="/dashboard/new-event">
            <Button leftIcon={<AiOutlinePlus />}>New Event</Button>
          </Link>
        </HStack>

        {/* List of hackathons the organiser has created */}
        <HackathonsByOrg data={data} />
      </DashboardLayout>
    </Center>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  // console.log(session.user.email);
  let data;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/api/get-dashboard-events?email=${session.user.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }
    );

    data = await response.json();
  } catch (err) {
    console.log(err);
  }

  console.log(data);

  return {
    props: {
      hackathons: JSON.stringify(data.data) || null,
    },
  };
}

export default DashboardPage;
