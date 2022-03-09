import React, { useState, useEffect, useContext } from "react";
import { BsImages } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { MdTitle } from 'react-icons/md';
import PageContainer from "../../../components/pageContainer/pageContainer";
import Header from "../../../components/header/header";
import DescriptionInput from "./atoms/descriptionInput";
import WizardContainer from "../../../components/atoms/wizardContainer/wizardContainer";
import ProductImage from "./atoms/productImage";
import ProductFields from "./atoms/productFields";
import ProductCategoryTags from "./atoms/productCategoryTags";
import { Button, Text } from "@chakra-ui/react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { Context } from "../../../context/context";
import { ApiWrapper } from "../../../utils/api/apiWrapper";

const NewEditProduct = ({ isEditing }) => {
  const idProduct = (window.location.href).split('/')[(window.location.href).split('/').length - 1];
  const [product, setProduct] = useState({});
  const {
    history,
    NetComLib,
    toast,
  } = useContext(Context);

  const getProduct = () => ApiWrapper(() => NetComLib.Products.getProduct({}, idProduct, (response) => setProduct(response?.data?.product[0])), toast, '', 'Generic Error', false, true);
  const saveProduct = () => ApiWrapper(() => NetComLib.Products.saveProduct({}, idProduct, product, () => history(`/product/${idProduct}`)), toast, `${product?.title} successfully updated!`);
  const createProduct = () => ApiWrapper(() => NetComLib.Products.createProduct({}, product, () => history(`/`)), toast, `${product?.title} successfully created!`);
  

  useEffect(() => {
    if(isEditing) {
      getProduct();
    }
  },[]);

  const inputsFields = [
    {
      name: 'title',
      leftIcon: <MdTitle color='gray.300' />,
      inputValue: product?.title,
      inputPlaceHolder: 'Enter product title...',
      inputFunction: (e) => {
        const newProduct = { ...product, 'title': e?.target?.value};
        setProduct(newProduct);
      },
      rightIcon: <FaCheck color='green' />,
    },
    {
      name: 'price',
      leftIcon: '$',
      inputValue: product?.price,
      inputPlaceHolder: 'Enter product price...',
      inputFunction: (e) => {
        const newProduct = { ...product, 'price': e?.target?.value};
        setProduct(newProduct);
      },
      rightIcon: <FaCheck color='green' />,
    },
    {
      name: 'img',
      leftIcon: <BsImages color='gray.300' />,
      inputValue: product?.img,
      inputPlaceHolder: 'Enter product image url...',
      inputFunction: (e) => {
        const newProduct = { ...product, 'img': e?.target?.value};
        setProduct(newProduct);
      },
      rightIcon: <FaCheck color='green' />,
    }
  ]

  return (
    <>
      <PageContainer>
        {/* HEADER */}
        <Header history={history} product={product}/>
        {/* WIZARD */}
        <WizardContainer
          leftPart={
            // PRODUCT IMAGE
            <ProductImage product={product}/>
          }
          rightPart={
            <>
              {/* PRODUCT CONTENT */}
              <ProductFields inputsFields={inputsFields}/>
              <ProductCategoryTags product={product} setProduct={setProduct}/>
            </>
          }
          bottomPart={
            // PRODUCT DESCRIPTION
            <>
              <DescriptionInput setProduct={setProduct} product={product}/>
              <Button onClick={() => { if(isEditing) { saveProduct() } else { createProduct() }}} w={'100%'} color={'white'} bg={'orange.400'} m={3}>
                <AiFillPlusCircle/>
                <Text fontSize={14} pl={2}>
                  { isEditing ? 'Save game changes' : 'Add new game' }
                </Text>
              </Button>
            </>
          }
        />
      </PageContainer>
    </>
  )
};

export default NewEditProduct;
