import { Center, Heading, Kbd, Stack, Text } from '@chakra-ui/react';
import Announcements from './Announcements';
import DetailedDescription from './DetailedDescription';
import FaqsPage from './FaqsPage';
import Interested from './Interested';
import OrganizerDetails from './OrganizerDetails';
import VenueDetails from './VenueDetails';

function HackathonDetailsComponent({ data, announcements }) {
  return (
    <Center marginY={'60px'}>
      <Stack direction={'column'} textAlign={'left'} width={'70%'}>
        {/* Title of the hackathon */}
        <Heading textAlign={'left'}>{data[0].title}</Heading>

        {/* Organiser details */}
        <OrganizerDetails data={data[0]} />

        {/* Venue details, etc */}
        <VenueDetails data={data[0]} />

        {/* Detailed Description */}
        <DetailedDescription data={data[0]} />

        {/* Registration for interested People */}
        <Interested />

        {/* FAQs */}
        <FaqsPage faqs={data[0]} />

        {/* Announcements */}
        <Announcements data={announcements} />
      </Stack>
    </Center>
  );
}

export default HackathonDetailsComponent;
