import React, { useContext } from "react";
import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import GameCardItem from "../GameCardItem/gameCardItem";
import { Context } from "../../context/context";

const ListGameCards = ({products, ...props}) => {
  const {
    history
  } = useContext(Context);
  return (
    <Grid
      {...props}
      direction={{ base: "column", md: "row" }}
      width={{ base: "full", md: "100%" }}
      alignItems="center"
      mt={{ base: 4, md: 0 }}
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)',  '2xl': 'repeat(3, 1fr)' }}
    >
      {
        products?.products?.map((item, i) => {
          return (
            <GridItem rowSpan={1} colSpan={1} key={i}>
              <GameCardItem item={item} history={history}/>
            </GridItem>
          )
        })
      }
    </Grid>
  )
}

export default ListGameCards;