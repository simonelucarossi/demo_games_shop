import { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
  InputRightElement,
  FormErrorMessage,
  FormHelperText,
  chakra
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const InputsList = ({username, setUsername, password, setPassword, invalidUser, setInvalidUser, ...props}) => {
  // ICONS
  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);
  
  // VARIABLES
  const [showPassword, setShowPassword] = useState(false);
  const passwordError = password === '';
  const usernameError = username === '';
  
  // FUNCTIONS
  const handleUsernameChange = (e) => { setUsername(e.target.value); setInvalidUser(false); }
  const handlePasswordChange = (e) => { setPassword(e.target.value); setInvalidUser(false); }
  const handleShowClick = () => setShowPassword(!showPassword);
  

  return (
    <>
      {/* USERNAME */}
      <FormControl isInvalid={usernameError} {...props}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<CFaUserAlt color="gray.300" />}
          />
          <Input type="text" placeholder="Username" onChange={handleUsernameChange} />
        </InputGroup>
        { usernameError && <FormErrorMessage>Username is required.</FormErrorMessage> }
      </FormControl>
      {/* PASSWORD */}
      <FormControl isInvalid={passwordError} {...props}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<CFaLock color="gray.300" />}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        { passwordError && <FormErrorMessage>Password is required.</FormErrorMessage> }
      { invalidUser && <FormHelperText textAlign={'center'} color={'red.400'}>Incorrect password or username!</FormHelperText>}
      </FormControl>
    </>
  )
}

export default InputsList;