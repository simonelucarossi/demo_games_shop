import { Flex, Stack } from "@chakra-ui/react";

const CentralContainer = ({ children, ...props}) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="orange.400"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Stack>
    </Flex>
  )
}

export default CentralContainer;