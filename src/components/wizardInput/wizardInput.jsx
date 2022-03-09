import React from "react";
import {
  InputLeftElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";

const WizardInput = ({field, key, ...props}) => {
  return (
    <InputGroup key={key} mb={3} {...props}>
      <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children={field?.leftIcon}
      />
      <Input 
        value={field?.inputValue} 
        placeholder={field?.inputPlaceHolder} 
        color='black'
        _placeholder={{color: 'gray.400'}}
        onChange={field?.inputFunction}
      />
    </InputGroup>
  )
}

export default WizardInput;