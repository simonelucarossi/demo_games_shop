import React from "react";
import {
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";

const DescriptionInput = ({ product, setProduct, ...props}) => {
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
      <Textarea 
        value={product?.description} 
        color={'gray.500'} 
        placeholder='Enter product description...' 
        onChange={(e) => {
          const newProduct = { ...product, 'description': e?.target?.value};
          setProduct(newProduct);
        }}
      />
                  </Flex> 
  )
}

export default DescriptionInput;