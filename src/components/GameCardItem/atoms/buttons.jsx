import React from "react";
import {
  Text,
  Button,
} from "@chakra-ui/react";

const Buttons = ({buttonsArray, ...props}) => {
  return (
    buttonsArray?.map((button) => {
      return (
        <Button {...props} onClick={button?.function} mb={button?.mb} bg={button?.bg} color={button?.color}>
          {button?.icon}
          <Text marginLeft={'4px'}> {button?.text} </Text>
        </Button>
      )
    })
  )
}

export default Buttons;