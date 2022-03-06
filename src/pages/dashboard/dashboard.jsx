import React from "react";

import { useNavigate } from "react-router-dom";
import products from '../../utils/mocks/products.json';
import PageContainer from "../../components/pageContainer/pageContainer";
import ListPaginator from "../../components/listPaginator/listPaginator";
import SearchBar from "../../components/searchBar/searchBar";
import ListGameCards from "../../components/listGameCards/listGameCards";
import { Button, Text } from "@chakra-ui/react";
import { AiFillPlusCircle } from 'react-icons/ai';

const Dashboard = (props) => {
  const history = useNavigate();
  const typeUser = 0;

  return (
    <>
      <PageContainer>
        {
          typeUser === 0 && (
            <>
              <Button onClick={() => history('/newProduct')} w={'100%'} color={'white'} bg={'orange.400'} m={3}>
                <AiFillPlusCircle/>
                <Text fontSize={14} pl={2}>
                  Add new game 
                </Text>
              </Button>
            </>
          )
        }
        {/* SEARCH ELEMENTS */}
        <SearchBar/>
        {/* LIST OF PRODUCTS */}
        <ListGameCards history={history} products={products}/>
        {/* PAGINATION */}
        <ListPaginator/>
      </PageContainer>
    </>
  )
};

export default Dashboard;
