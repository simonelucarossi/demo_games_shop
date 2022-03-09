import { Stack, Box } from "@chakra-ui/react";

const FormContainer = ({children, ...props}) => {
  return (
    <Box minW={{ base: "90%", md: "468px" }}>
      <form>
        <Stack
          spacing={4}
          p="2rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius={7}
          {...props}
        >
          {children}
        </Stack>
      </form>
    </Box>
  )
}

export default FormContainer;