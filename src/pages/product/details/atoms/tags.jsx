import React from "react";
import {
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiOutlineTag } from 'react-icons/ai';

const Tags = ({ product, ...props}) => {
  return (
    <Flex mb={3} direction={'row'} {...props}>
      {
        product?.tags?.length < 1 ? (
          <Button w={'fit-content'} h={45} bg={'gray.300'} color='white'>
            <AiOutlineTag/>
            <Text fontSize={12} marginLeft={'4px'}>No tags</Text>
          </Button>
        ) : (
          product?.tags?.map((tag) => {
            return (
              <Button mr={2} w={'fit-content'} h={45} bg={'gray.300'} color='white'>
                <AiOutlineTag/>
                <Text fontSize={12} marginLeft={'4px'}>{tag}</Text>
              </Button>
            )
          })
        )
      }
    </Flex>
  )
}

export default Tags;