import React, { useState } from "react";
import { BsImages } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { MdTitle } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import products from '../../../utils/mocks/products.json';
import PageContainer from "../../../components/pageContainer/pageContainer";
import Header from "../../../components/header/header";
import DescriptionInput from "./atoms/descriptionInput";
import WizardContainer from "../../../components/atoms/wizardContainer/wizardContainer";
import ProductImage from "./atoms/productImage";
import ProductFields from "./atoms/productFields";
import ProductCategoryTags from "./atoms/productCategoryTags";

const NewEditProduct = ({ isEditing }) => {
  const history = useNavigate();
  const idProduct = (window.location.href).split('/')[(window.location.href).split('/').length - 1];
  const items = products?.products;
  const [product, setProduct] = useState(items[idProduct - 1]);

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
              <ProductCategoryTags/>
            </>
          }
          bottomPart={
            // PRODUCT DESCRIPTION
            <DescriptionInput setProduct={setProduct} product={product}/>
          }
        />
      </PageContainer>
    </>
  )
};

export default NewEditProduct;
