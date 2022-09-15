import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Faq, Navbar } from './pages';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';

export const App = () => {
  const [index, setIndex] = useState(null);
  const [toggleColorFlag, setToggleColorFlag] = useState(false);

  useEffect(() => {
    alanBtn({
      key: 'd2c18b7c06a069cb0aa139ffa5be28a52e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: commandData => {
        if (commandData.command === 'gotoFaq') {
          scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
          setIndex(commandData.faqId - 1);
        } else if (commandData.command === 'toggleColorMode') {
          setToggleColorFlag(flag => !flag);
        }
      },
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar toggleColorFlag={toggleColorFlag}/>
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
};
