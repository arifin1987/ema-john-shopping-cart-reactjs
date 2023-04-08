import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './loaders/cartProductLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <Shop></Shop>
      },
      {
        path:"/orders",
        element: <Orders></Orders>,
        loader:cartProductLoader
      },
      {
        path:"/inventory",
        element: <Inventory></Inventory>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/checkout",
        element: <Checkout></Checkout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)