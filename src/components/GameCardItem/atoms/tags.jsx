import React from "react";
import {
  Text,
  Button,
  Flex
} from "@chakra-ui/react";

import { AiOutlineTag } from 'react-icons/ai';

const Tags = ({item, ...props}) => {
  return (
    <Flex direction={'row'} maxWidth={'300px'}>
      {
        item?.tags?.length > 0 ? (
          item?.tags?.map((tag, index) => {
            return (
              <Button w={'fit-content'} key={index} h={25} mr={2} bg={'gray.300'} color='white'>
                <AiOutlineTag/>
                <Text fontSize={12} marginLeft={'4px'}>{tag}</Text>
              </Button>
            )
          })
        ) : (
          <Button w={'fit-content'} h={25} bg={'gray.300'} color='white'>
            <AiOutlineTag/>
            <Text fontSize={12} marginLeft={'4px'}>No tags</Text>
          </Button>
        )
      }
          </Flex> 
  )
}

export default Tags;