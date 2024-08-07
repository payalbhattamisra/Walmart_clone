import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Product from './Components/Product/Product.jsx';
import Chair from './Components/Chair/Chair.jsx';
import Bed from './Components/Bed/Bed.jsx';
import Sofadisplay from './Components/Displaypage/Sofadisplay.jsx'
const router = createBrowserRouter([
  {
        path: "/",
        element: <App/>,
  },
  {
       path:"/product",
       element:<Product/>
  },
  {
       path:"/chair",
       element:<Chair/>
  },
  {
        path:"/Bed",
        element:<Bed/>
  },
  {
    path:"/Sofadisplay",
    element:<Sofadisplay/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

