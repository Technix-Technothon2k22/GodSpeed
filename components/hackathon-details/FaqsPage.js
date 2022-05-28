import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';

function FaqsPage({ faqs }) {
  return (
    <Stack padding={'30px'}>
      <Text fontWeight={'bold'} fontSize="lg">
        Frequently asked questions
      </Text>
      <Accordion>
        {faqs.faqs.map((item, index) => {
          return (
            <AccordionItem key={index} suppressHydrationWarning>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Stack>
  );
}

export default FaqsPage;
