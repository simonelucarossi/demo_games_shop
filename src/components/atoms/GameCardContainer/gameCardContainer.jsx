import React from "react";
import {
  Box,
} from "@chakra-ui/react";

const GameCardContainer = ({children, ...props}) => {
  return (
    <Box 
      bg={'white'}
      className="list-item"
      border={'1px solid #efefef'}
      borderRadius={8}
      padding={6}
      margin={{ base: '1', md: '4' }}
      maxW={'100vw'}
      color='black'
      position={'relative'}
      {...props}
      >
        {children}
    </Box>
  )
}

export default GameCardContainer;