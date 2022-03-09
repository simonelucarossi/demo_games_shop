/* eslint-disable import/extensions */
import * as ProductsManager from './APIs/product/index.js';
import * as AuthorizationManager from './APIs/authorization/index.js';
import * as IndexManager from './APIs/index.js';
import { app } from './utility/conf.js';

const Router = () => {
  // POST METHODS
  app.post('/product', ProductsManager.createProduct);
  app.post('/login', AuthorizationManager.login);

  // PUT METHODS
  app.put('/products/:productId', ProductsManager.editProduct);

  // DELETE METHODS
  app.delete('/products/:productId', ProductsManager.deleteProduct);

  // GET METHODS
  app.get('/', IndexManager.getIndex);
  app.get('/products', ProductsManager.getProducts);
  app.get('/products/:productId', ProductsManager.getProductById);
};

export default Router;