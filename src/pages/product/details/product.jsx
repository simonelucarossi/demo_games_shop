import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from '../../../utils/mocks/products.json';
import PageContainer from "../../../components/pageContainer/pageContainer";
import Header from "../../../components/header/header";
import ProductImage from "../wizards/atoms/productImage";
import WizardContainer from "../../../components/atoms/wizardContainer/wizardContainer";
import Price from "./atoms/price";
import Tags from "./atoms/tags";
import Category from "./atoms/category";
import Buttons from "./atoms/buttons";
import Description from "./atoms/description";

const Product = (props) => {
  const history = useNavigate();
  const idProduct = (window.location.href).split('/')[(window.location.href).split('/').length - 1];
  const typeUser = 0;
  const items = products?.products;

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(items[idProduct - 1]);
  }, [idProduct, items]);

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
            (
              <>
                {/* PRODUCT PRICE */}
                <Price product={product}/>
                {/* PRODUCT TAGS */}
                <Tags product={product}/>
                {/* PRODUCT CATEGORY */}
                <Category product={product}/>
                {/* BUY-EDIT-REMOVE BUTTON  */}
                <Buttons history={history} typeUser={typeUser} product={product}/>
              </>
            )
          }
          bottomPart={
            // PRODUCT DESCRIPTION
            <Description product={product}/>
          }
        />
      </PageContainer>
    </>
  )
};

export default Product;
