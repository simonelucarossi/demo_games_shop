import express from 'express';

export const app = express();

export const startServer = () => {
  const hostname = 'localhost';
  const port = 3000;

  // START SERVER ON CONSOLE

  app.listen(port, hostname, () => {
    console.log('Server listening on port 3000!')
  });
};
