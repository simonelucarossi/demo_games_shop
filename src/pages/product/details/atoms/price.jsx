import React from "react";
import {
  Heading,
} from "@chakra-ui/react";
const Price = ({ product, ...props}) => {
  return (
    <Heading {...props} mb={4} color={'red.400'} as='h3' size='lg'>
      ${product['price'] ?? ''}
    </Heading>
  )
}

export default Price;