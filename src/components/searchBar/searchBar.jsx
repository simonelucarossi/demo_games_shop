import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({
    width, 
    size, 
    height, 
    margin, 
    inputHeight, 
    inputPlaceHolder, 
    inputColor, 
    buttonH, 
    buttonBg, 
    buttonMarginLeft, 
    buttonSize, 
    buttonIcon, 
    ...props 
  } ) => {
    return (
      <>
        <InputGroup size={ size ?? 'md'} w={width ?? '100%'} h={height ?? 50} margin={margin ?? 4} {...props}>
          {/* Search bar input */}
          <Input
            h={inputHeight ?? 50}
            placeholder={inputPlaceHolder ?? 'Search a game...'}
            color={inputColor ?? 'gray.400'}
          />
          {/* Button on the right side */}
          <InputRightElement h={50} p={1} width='5rem'>
            <Button h={buttonH ?? '100%'} bg={buttonBg ?? 'orange.400'} ml={buttonMarginLeft ?? 7} size={ buttonSize ?? 'sm'}>
              <BsSearch/>
            </Button>
          </InputRightElement>
        </InputGroup>
      </>
    );
  };

export default SearchBar;
