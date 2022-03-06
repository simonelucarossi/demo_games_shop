import React from "react";
import {
  Flex,
  Text,
} from "@chakra-ui/react";
import { categoriesName } from "../../../../utils/categoriesMapping";

const Category = ({product, ...props}) => {
  return (
    <Flex direction={'row'} {...props}>
      {/* ROW TITLE */}
      <Text 
        color={'white'}
        bg={'orange.400'}
        p={3}
        mr={2}
        mb={2}
        borderRadius={4}
      >
        Category
      </Text>
      {/* ROW TEXT */}
      <Text 
        color={'white'}
        bg={'gray.500'}
        p={3}
        mb={2}
        w={'100%'}
        borderRadius={4}
      >
        {categoriesName[product['category']] ?? ''}
      </Text>
    </Flex>
  )
}

export default Category;