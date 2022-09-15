import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect } from 'react';
import { useRef } from 'react';

export const ColorModeSwitcher = ({ toggleColorFlag, ...rest }) => {
  const firstRender = useRef(true);
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    toggleColorMode();
  }, [toggleColorFlag]);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...rest}
    />
  );
};
