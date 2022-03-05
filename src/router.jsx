import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';

const Router = () => {
  const routes = [
    {
      title: 'Home',
      key: 'home',
      link: '/',
      // eslint-disable-next-line react/display-name
      component: <Dashboard />,
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