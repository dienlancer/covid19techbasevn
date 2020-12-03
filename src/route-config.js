import React from 'react';
import HomePage from "./pages/HomePage";
const routes = [
  {
    path: "/",
    exact: true,    
    main: () => <HomePage />
  },   
];
export default routes;