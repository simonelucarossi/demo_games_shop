import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Product from './pages/product/details/product';
import NewEditProduct from './pages/product/wizards/newEditProduct';
import { categoriesName } from './utils/categoriesMapping';

const Router = () => {

  let routes = [
    {
      title: 'Home',
      key: 'home',
      link: '/',
      // eslint-disable-next-line react/display-name
      component: <Dashboard/>,
    },
    {
      title: 'Product',
      key: 'product',
      link: '/product/:producId',
      // eslint-disable-next-line react/display-name
      component: <Product />,
    },
    
    {
      title: 'NewProduct',
      key: 'newproduct',
      link: '/newProduct',
      // eslint-disable-next-line react/display-name
      component: <NewEditProduct/>,
    },
    {
      title: 'EditProduct',
      key: 'editproduct',
      link: '/editProduct/:producId',
      // eslint-disable-next-line react/display-name
      component: <NewEditProduct isEditing/>,
    },
    {
      title: 'Login',
      key: 'login',
      link: '/login',
      // eslint-disable-next-line react/display-name
      component: <Login/>,
    },
    {
      title: 'No-Match',
      key: 'no-match',
      link: '*',
      // eslint-disable-next-line react/display-name
      component: () => {
        return (
          <div style={{ minHeight: 'calc(-130px + 100vh)', marginTop: '61px', textAlign: 'center' }}>
            <div style={{ paddingTop: '30px' }}>
              <h3>
                No match for
                <br />
                <code>{window.location}</code>
              </h3>
            </div>
          </div>
        );
      },
    },
  ];

  categoriesName.forEach((category) => {
    routes = [
      ...routes,
      {
      title: category.toLocaleUpperCase(),
      key: category,
      link: `/products/${category}`,
      // eslint-disable-next-line react/display-name
      component: <Dashboard categoryFilter={categoriesName.indexOf(category)}/>,
      }
    ];
  });

  return (
      <Routes>
        {routes.map(({ key, title, link, component }) => {
          const routeKey = `${key}@${title}`;
          return <Route exact key={routeKey} path={link} element={component} />;
        })}
      </Routes>
  );
};

export default Router;