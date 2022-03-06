import React from "react";
import {
  Flex,
  Text,
} from "@chakra-ui/react";

const Description = ({product, ...props}) => {
  return (
    <Flex mt={5} direction={'column'} {...props}>
      {/* ROW TITLE */}
      <Text 
        color={'white'}
        bg={'orange.400'}
        p={3}
        mr={5}
        mb={2}
        borderRadius={4}
        w={'fit-content'}
      >
        Description
      </Text>
      {/* ROW TEXT */}
      <Text color={'black'}>
        {product['description'] ?? ''}
      </Text>
    </Flex> 
  )
}

export default Description;