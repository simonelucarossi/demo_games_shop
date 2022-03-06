import React from "react";
import {
  Flex,
} from "@chakra-ui/react";
import Navbar from "../navbar/navbar";
const PageContainer = ({ children, align, justify, wrap, padding, direction, color, height, marginLeft, marginRight, ...props } ) => {
  return (
    <>
      <Navbar/>
      <Flex
        align={ align ?? "center"}
        justify={ justify ?? "space-between"}
        wrap={wrap ?? "wrap"}
        padding={padding ?? 6}
        direction={ direction ?? 'row'}
        color={ color ?? "white"}
        h={height ?? '100%'}
        marginLeft={ marginLeft ?? { base: '0px', md: '15vw' }}
        marginRight={ marginRight ?? { base: '0px', md: '15vw' }}
        {...props}
        >
          {
            children
          }
      </Flex>
    </>
  );
};

export default PageContainer;
