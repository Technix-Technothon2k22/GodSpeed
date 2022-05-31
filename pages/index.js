import Head from 'next/head';
import EntryComponent from '../components/EntryComponent';

function Home() {
  return (
    <div>
      <Head>
        <title>Hackarena</title>
        <meta
          name="description"
          content="One stop solution for managing your hackathons"
        />
      </Head>

      <EntryComponent />
    </div>
  );
}

export default Home;
