import React from "react";
import {
  Text,
  Button,
} from "@chakra-ui/react";
import { BsBasket } from 'react-icons/bs';
import { FiDelete, FiEdit3 } from 'react-icons/fi';

const Buttons = ({typeUser, deleteProduct, history, product, ...props}) => {
  return (
    typeUser !== 0 ? (
      <Button mt={2} h={45} bg={'red.300'} color='white'>
        <BsBasket/>
        <Text fontSize={12} marginLeft={'4px'}>Add to basket</Text>
      </Button>
    ) : (
      <>
        <Button onClick={() => history(`/editProduct/${product?.id}`)} mt={2} h={45} bg={'yellow.300'} color='white'>
          <FiEdit3/>
          <Text fontSize={12} marginLeft={'4px'}>Edit product</Text>
        </Button>
        <Button onClick={() => deleteProduct()} mt={2} h={45} bg={'red.300'} color='white'>
          <FiDelete/>
          <Text fontSize={12} marginLeft={'4px'}>Delete</Text>
        </Button>
      </>
    )
  )
}

export default Buttons;