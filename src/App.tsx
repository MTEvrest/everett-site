import React from 'react';
import './App.css';
import { RouterProvider, createHashRouter }from 'react-router-dom';
import { routes } from './routes/routes';

const router = createHashRouter(routes);

function App() {
  console.log(router.routes);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
