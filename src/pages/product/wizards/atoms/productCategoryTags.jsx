import React from "react";
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiOutlineTag } from 'react-icons/ai';

const ProductCategoryTags = (props) => {
  return (
    <Flex direction={'row'}>
    {/* PRODUCT TAGS */}
      <Button w={'fit-content'} h={45} bg={'gray.300'} color='white'>
        <AiOutlineTag/>
        <Text fontSize={12} marginLeft={'4px'}>Tags</Text>
      </Button>
    {/* PRODUCT CATEGORY */}
      <Button ml={3} w={'fit-content'} h={45} bg={'gray.300'} color='white'>
        <Text fontSize={12} marginLeft={'4px'}>Category</Text>
      </Button>
    </Flex>
  );
}

export default ProductCategoryTags;