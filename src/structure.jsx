import React from 'react';
import PropTypes from 'prop-types';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import ContextProvider from './context/context';
import LoaderSpinner from './components/loader/loader';

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  base: '0px',
  sm: '600px',
  md: '800px',
  xl: '1200px',
  '2xl': '1736px',
})

// 3. Extend the theme
const theme = extendTheme({ breakpoints })


const Structure = () => {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter> 
        <ContextProvider>    
          <LoaderSpinner/>
          <Router />
        </ContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

Structure.propTypes = {
  example: PropTypes.string,
};

Structure.defaultProps = {
  example: 'this is a test',
};

export default Structure;