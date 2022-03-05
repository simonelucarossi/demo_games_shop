import React from 'react';
import PropTypes from 'prop-types';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";


const Structure = () => {

  return (
    <ChakraProvider>
      <BrowserRouter>  
        <Router />
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