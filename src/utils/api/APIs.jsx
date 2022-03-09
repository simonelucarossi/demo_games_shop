import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

// Get all products

const getProducts = async ( filters, functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  await trackPromise(
    axios.get('http://localhost:3000/products', {
      params: filters
    })
  )
  .then(function (response) {
    functionAfterApiCall(response);
  })
  .catch(function (error) {
    errorFunctionApiCall(error);
  });
};

// Get a single product
const getProduct = async ( filters, idProduct, functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  await trackPromise(axios.get(`http://localhost:3000/products/${idProduct}`, {
    params: filters
  }))
  .then(function (response) {
    functionAfterApiCall(response);
  })
  .catch(function (error) {
    errorFunctionApiCall(error);
  });
};

// Delete a product
const deleteProduct = async ( filters, idProduct, functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  await trackPromise(axios.delete(`http://localhost:3000/products/${idProduct}`))
  .then(function (response) {
    functionAfterApiCall(response);
  })
  .catch(function (error) {
    errorFunctionApiCall(error);
  });
};

// Edit a product

const saveProduct = async ( filters, idProduct, product, functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  await trackPromise(axios.put(`http://localhost:3000/products/${idProduct}`, { product: product }))
  .then(function (response) {
    functionAfterApiCall(response);
  })
  .catch(function (error) {
    errorFunctionApiCall(error);
  });
};

// Create a new product 

const createProduct = async ( filters, product = {}, functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  await trackPromise(axios.post(`http://localhost:3000/product`, { product: product}))
  .then(function (response) {
    functionAfterApiCall(response);
  })
  .catch(function (error) {
    errorFunctionApiCall(error);
  });
};

// user login
const login = async ( user = {}, functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  await trackPromise(axios.post(`http://localhost:3000/login`, { user: user}))
  .then(function (response) {
    functionAfterApiCall(response);
  })
  .catch((error) => {
    errorFunctionApiCall(error);
  });
};

const logout = ( functionAfterApiCall = () => {}, errorFunctionApiCall = () => {}) => {
  try {
    functionAfterApiCall();
  } catch (error) {
    errorFunctionApiCall(error);
  }
}

const NetLib = {
  Authorization: {
    login,
    logout,
  },
  Products: {
    getProducts,
    getProduct,
    deleteProduct,
    saveProduct,
    createProduct,
  }
}

export default NetLib;