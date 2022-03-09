import React, { useContext, useEffect, useState } from "react";
import PageContainer from "../../components/pageContainer/pageContainer";
import ListPaginator from "../../components/listPaginator/listPaginator";
import SearchBar from "../../components/searchBar/searchBar";
import ListGameCards from "../../components/listGameCards/listGameCards";
import { Button, Text } from "@chakra-ui/react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { Context } from "../../context/context";
import { ApiWrapper } from "../../utils/api/apiWrapper";

const Dashboard = ({categoryFilter,...props}) => {
  const {
    user,
    history,
    NetComLib,
    toast,
  } = useContext(Context);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ size: 9, page: 0, category: categoryFilter, title: undefined});

  const getProducts = () => ApiWrapper(() => NetComLib.Products.getProducts(filters, (response) => setProducts(response.data)), toast, '', 'Generic Error', false, true);

  useEffect(() => { 
    setFilters({ size: 9, page: 0, category: categoryFilter, title: undefined});
    setCurrentPage(1);
  }, [categoryFilter]);

  useEffect(() => { 
    getProducts();
  }, [filters.category, filters.page]);

  useEffect(() => {
    setFilters({
      ...filters,
      page: currentPage - 1,
    })
  },[currentPage]);

  return (
    <>
      <PageContainer {...props}>
        {
          user?.type === 0 && (
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
        <SearchBar setFilters={setFilters} filters={filters} buttonOnClick={() => getProducts()}/>
        {/* LIST OF PRODUCTS */}
        <ListGameCards history={history} products={products}/>
        {/* PAGINATION */}
        <ListPaginator totalElements={products.numberOfTotalProducts} activePage={currentPage} setActivePage={setCurrentPage}/>
      </PageContainer>
    </>
  )
};

export default Dashboard;
