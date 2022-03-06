import React from "react";
import {
  Text,
} from "@chakra-ui/react";

const Price = ({item, ...props}) => {
  return (
    <Text 
      borderRadius={4} 
      fontSize={14} 
      fontWeight={500} 
      position={'absolute'} 
      top={8} 
      left={8} 
      bg={'red.400'} 
      pl={3} 
      pr={3} 
      pb={2} 
      pt={2} 
      color={'white'}
      {...props}
    >
      { item?.price }
    </Text>
  )
}

export default Price;