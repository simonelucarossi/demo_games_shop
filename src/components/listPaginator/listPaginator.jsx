import React from "react";
import {
  Previous,
  Paginator,
  PageGroup,
  Next,
  Container,
  usePaginator,
} from 'chakra-paginator';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';
const ListPaginator = ({ totalElements, pageSize, activePage, setActivePage, disabled, ...props } ) => {
  // variables
  const {
    isDisabled,
    pagesQuantity,
    currentPage
  } = usePaginator({
    total: totalElements ?? 9,
    initialState: {
      pageSize: pageSize ?? 9,
      currentPage: activePage ?? 1,
      isDisabled: disabled ?? false
    }
  });

  const outerLimit = 2;
  const innerLimit = 2;

  const icons = {
    previous: <GrFormPreviousLink fontSize={17}/>,
    next: <GrFormNextLink fontSize={17}/>
  }

  // styles
  const baseStyles = {
    w: 7,
    fontSize: "sm"
  };

  const normalStyles = {
    ...baseStyles,
    _hover: {
      bg: "gray.400"
    },
    bg: "gray.300"
  };

  const activeStyles = {
    ...baseStyles,
    _hover: {
      bg: "orange.300"
    },
    bg: "orange.300"
  };

  const separatorStyles = {
    w: 7,
    bg: "green.200"
  };

  return (
    <>
      <Paginator
        isDisabled={isDisabled}
        innerLimit={innerLimit}
        currentPage={currentPage}
        outerLimit={outerLimit}
        pagesQuantity={pagesQuantity}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        activeStyles={activeStyles}
        onPageChange={(e) => setActivePage(e)}
        {...props}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous bg={'red.300'} _hover={{ bg: 'red.400'}}>
            {icons?.previous}
          </Previous>
          <PageGroup isInline align="center" />
          <Next bg={'red.300'} _hover={{ bg: 'red.400'}}>
            {icons?.next}
          </Next>
        </Container>
      </Paginator>
    </>
  );
};

export default ListPaginator;
