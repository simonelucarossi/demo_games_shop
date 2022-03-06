import React from "react";
import {
  Flex,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import { IoChevronBackOutline } from 'react-icons/io5';

const Header = ({product, history, ...props}) => {
  const buttons = {
    back: {
      text: 'Back',
      function: () => history('/'),
      leftIcon: <IoChevronBackOutline color='white' fontSize={17}/>
    }
  } 
  
  return (
    <Flex mb={10} w={'100%'} {...props}>
      <Button 
        leftIcon={buttons['back'].leftIcon} 
        mr={4} 
        h={'60px'} 
        bg={'orange.400'}
        onClick={buttons['back'].function}
      >
        <Text>
          {buttons['back'].text}
        </Text>
      </Button>
      <Heading color={'black'} as='h2' pt={{ base: '2', md: '0' }} fontSize={{ base: '3xl', md: '5xl' }} isTruncated>
        {product?.title}
      </Heading>  
    </Flex>
  )
}

export default Header;