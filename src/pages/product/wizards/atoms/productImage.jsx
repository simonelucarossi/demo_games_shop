import React from "react";
import {
  Image,
} from "@chakra-ui/react";

const ProductImage = ({product, ...props}) => {
  return (
    <Image
      {...props}
      borderRadius={3}
      boxSize='250px'
      src={product?.img}
      alt={product?.title ?? 'Title not found'}
      w={'100%'}
      mb={2}
      mt={0}
      border={'1px solid'}
      borderColor={'gray.200'}
      p={1}
    />
  );
}

export default ProductImage;