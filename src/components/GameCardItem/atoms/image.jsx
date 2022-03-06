import React from "react";
import {
  Image,
} from "@chakra-ui/react";

const CardImage = ({item, ...props}) => {
  return (
    <Image
      borderTopRadius={5}
      boxSize={{ base: '200px', md: '180px' }}
      src={item?.img}
      alt={item?.title ?? 'Title not found'}
      w={{ base: '100vw', md: '100%' }}
      mb={2}
    />
  )
}

export default CardImage;