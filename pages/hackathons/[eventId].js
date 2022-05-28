import Head from 'next/head';
import HackathonDetailsComponent from '../../components/hackathon-details/HackathonDetailsComponent';

function HackathonDetailsPage({ data, data2 }) {
  const parsedData = JSON.parse(data);
  const parsedData2 = JSON.parse(data2);

  console.log(parsedData);

  return (
    <div>
      <Head>
        <title>{parsedData[0].title}</title>
      </Head>
      <HackathonDetailsComponent
        data={parsedData}
        announcements={parsedData2}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { eventId } = context.params;

  // console.log(eventId);

  let data;
  let data2;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/get-event?eventId=${eventId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }

  // console.log('Server', data);

  if (data[0]?.error || data[0]?._id !== eventId) {
    return {
      notFound: true,
      props: {},
    };
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/api/get-announcements?eventId=${eventId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    data2 = await response.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: JSON.stringify(data),
      data2: JSON.stringify(data2),
    },
  };
}

export default HackathonDetailsPage;
