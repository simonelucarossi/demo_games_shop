import React from "react";
import {
  Flex,
} from "@chakra-ui/react";

import { BsBasket } from 'react-icons/bs';
import Price from "./atoms/price";
import Buttons from "./atoms/buttons";
import Title from "./atoms/title";
import CardImage from "./atoms/image";
import Tags from "./atoms/tags";
import GameCardContainer from "../atoms/GameCardContainer/gameCardContainer";

const GameCardItem = ({
    item,
    history,
    ...props 
  } ) => {

    // Buttons under card image
    const buttonsText = {
      add: 'Add to basket',
      view: 'View Details',
    } 

    const buttons = [
      {
        mb: 2,
        bg: 'orange.400',
        color: 'white',
        function: () => history(`/product/${item?.id}`),
        text: buttonsText['view'],
        icon: '',
      },
      {
        mb: 2,
        bg: 'red.400',
        color: 'white',
        function: () => {},
        text: buttonsText['add'],
        icon: <BsBasket/>,
      }
    ]

    return (
      <GameCardContainer {...props}>
        {/* PRODUCT PRICE */}
        <Price item={item}/>
        {/* PRODUCT CONTENT */}
        <Flex direction='column' textAlign={'center'}>
          {/* PRODUCT IMAGE */}
          <CardImage item={item}/>
          {/* PRODUCT TITLE */}
          <Title item={item}/>
          {/* BUTTONS */}
          <Buttons buttonsArray={buttons}/>
          {/* TAGS */}
          <Tags item={item}/>
        </Flex>
      </GameCardContainer>
    )
  };

export default GameCardItem;
