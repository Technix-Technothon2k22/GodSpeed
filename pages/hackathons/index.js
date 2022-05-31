import Head from 'next/head';
import Entry from '../../components/hackathons-list-page/Entry';

function HackathonsListPage({ data, data2 }) {
  const parsedData = JSON.parse(data);
  const parsedData2 = JSON.parse(data2);

  return (
    <div>
      <Head>
        <title>Hackathons</title>
      </Head>

      <Entry data={parsedData} ic={parsedData2} />
    </div>
  );
}

export async function getServerSideProps() {
  let data;
  let data2;
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

    data2 = await reponse.json();
    // console.log(data2);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: JSON.stringify(data.hackathons),
      data2: JSON.stringify(data2),
    },
  };
}

export default HackathonsListPage;
