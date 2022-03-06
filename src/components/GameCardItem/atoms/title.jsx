import React from "react";
import {
  Text,
} from "@chakra-ui/react";

const Title = ({item, ...props}) => {
  return (
    <Text mb={2} {...props}>
      <b> { item?.title ?? 'Title not found' } </b> 
    </Text> 
  )
}

export default Title;