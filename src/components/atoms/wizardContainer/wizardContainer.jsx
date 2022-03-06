import React from "react";
import {
  Grid,
  GridItem,
  Flex
} from "@chakra-ui/react";

const WizardContainer = ({children, leftPart, rightPart, bottomPart, ...props}) => {
  return (
    <Grid
      {...props}
      direction={{ base: "column", md: "row" }}
      width={{ base: "full", md: "100%" }}
      alignItems="center"
      mt={{ base: 4, md: 0 }}
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
    >
      {/* LEFT PART */}
      <GridItem rowSpan={1} colSpan={{ base: '3', md: '1' }}>
        {leftPart}
      </GridItem>
      {/* RIGHT PART */}
      <GridItem h={'100%'} rowSpan={1} colSpan={{ base: '3', md: '2' }}>
        <Flex ml={{ base: '0', md: '5' }} justifyContent={'flex-start'} mt={5} direction={'column'}>
          {rightPart}
        </Flex>
      </GridItem>
      {/* BOTTOM PART */}
      <GridItem rowSpan={1} colSpan={3}>
        {bottomPart}
      </GridItem>
      {/* OTHER */}
      {children}
    </Grid>
  )
}

export default WizardContainer;