import React from 'react';
import {
  Flex,
  Box,
  Text,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import FAQ_LIST from '../helper/faq.json';

const Faq = ({ index, setIndex }) => {
  return (
    <Flex direction="column" p="4">
      <Box mb="8">
        <Heading size="md">Frequently Asked Questions</Heading>
        <Accordion allowToggle index={index} mt="5">
          {FAQ_LIST.map(faq => (
            <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
              <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{faq.question}</Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default Faq;
