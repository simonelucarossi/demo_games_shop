import React from "react";
import {
  Image,
} from "@chakra-ui/react";

const CardImage = ({item, ...props}) => {
  return (
    <Image
      borderTopRadius={5}
      boxSize={{ base: '250px', sm: '350px', xl: '350px', '2xl': '380px',  md: '180px' }}
      src={item?.img}
      alt={item?.title ?? 'Title not found'}
      w={{ base: '100vw', sm:'100vw', xl:'100vw', '2xl':'100vw', md: '100%' }}
      mb={2}
    />
  )
}

export default CardImage;