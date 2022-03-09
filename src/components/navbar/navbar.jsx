import React, { useContext } from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  Button,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiUserCircle } from 'react-icons/bi';
import { categoriesName } from "../../utils/categoriesMapping";
import { Context } from "../../context/context";

const Navbar = ({...props}) => {
  const {
    user,
    setUser,
    history,
    NetComLib,
  } = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const logout = () => NetComLib.Authorization.logout(
    () => {
      localStorage.removeItem('user');
      setUser(undefined);
    }
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="orange.400"
      color="white"
      {...props}
    >
      <Flex as={'Button'} onClick={ () => { handleToggle(); history('/')}} align="center" mr={5}>
        <Image src={'/logo_game_shop.png'} h={75} />
      </Flex>

      <Box border={'1px solid'} borderColor={'white'} p={3} borderRadius={5} display={{ base: "block", sm: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon fontSize={30} />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", sm: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        ml={{ base: 0, md: 4 }}
      >
        {
          categoriesName.map((category, index) => {
            return (
              <Text key={index} style={{ cursor: 'pointer'}} p={4} fontWeight={500} onClick={() => { handleToggle(); history(`/products/${category}`)}}>{category.toUpperCase()}</Text>
            )
          })
        }
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", sm: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "orange.500", borderColor: "orange.600" }}
          _active={{ bg: "orange.500", borderColor: "orange.600" }}
          _focus={{ outline: 'none' }}
          onClick={() => {
              if(!user) {
                history('/login')
              } else {
                logout();
              }
            }
          }
        >
          <BiUserCircle fontSize={18}/>
          <Text ml={1} fontSize={14}>
            { user ? 'Logout' : 'Login'}
          </Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
