import React from "react";
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
import { useNavigate } from "react-router-dom";
import { categoriesName } from "../../utils/categoriesMapping";

const Navbar = (props) => {
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

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

      <Box border={'1px solid'} borderColor={'white'} p={3} borderRadius={5} display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon fontSize={30} />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
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
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          <BiUserCircle fontSize={18}/>
          <Text ml={1} fontSize={14}>
            Login
          </Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
