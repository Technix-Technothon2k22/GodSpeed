import Head from 'next/head';
import Entry from '../../components/hackathons-list-page/Entry';
import Hackathon from '../../models/HackathonModel';
import dbConnect from '../../utils/dbConnect';

function HackathonsListPage({ data }) {
  const parsedData = JSON.parse(data);
  console.log(parsedData);

  return (
    <div>
      <Head>
        <title>Hackathons</title>
      </Head>

      <Entry data={parsedData} />
    </div>
  );
}

export async function getServerSideProps() {
  let data;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + '/api/get-all-events',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }
    );

    data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: JSON.stringify(data.hackathons),
    },
  };
}

export default HackathonsListPage;
