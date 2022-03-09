import React, { useContext, useEffect, useState } from "react";
import PageContainer from "../../../components/pageContainer/pageContainer";
import Header from "../../../components/header/header";
import ProductImage from "../wizards/atoms/productImage";
import WizardContainer from "../../../components/atoms/wizardContainer/wizardContainer";
import Price from "./atoms/price";
import Tags from "./atoms/tags";
import Category from "./atoms/category";
import Buttons from "./atoms/buttons";
import Description from "./atoms/description";
import { Context } from "../../../context/context";
import { ApiWrapper } from "../../../utils/api/apiWrapper";

const Product = (props) => {
  const idProduct = (window.location.href).split('/')[(window.location.href).split('/').length - 1];
  const [product, setProduct] = useState({});
  const {
    user,
    history,
    NetComLib,
    toast,
  } = useContext(Context);

  const getProduct = () => ApiWrapper(() => NetComLib.Products.getProduct({}, idProduct, (response) => setProduct(response?.data?.product[0])), toast, '', 'Generic Error', false, true);
  const deleteProduct = () => ApiWrapper(() => NetComLib.Products.deleteProduct({}, idProduct, () => history('/')), toast, 'Product successfully deleted!');

  useEffect(() => {
    getProduct();
  }, []);

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
                <Buttons history={history} deleteProduct={deleteProduct} typeUser={user?.type} product={product}/>
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
