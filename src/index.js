import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import 'antd/dist/antd.min.css';
import "./SCSS/main.css"
import { ChakraProvider } from '@chakra-ui/react'
import {ShopCartProvider} from './Context/ShopCartContext'
import {UserProvider} from './Context/UserContext'
import {ProductProvider} from './Context/ProductContext';
import {ScreenWidthProvider} from './Context/ScreenWidthContext';
ReactDOM.render(
  // <React.StrictMode>
     <BrowserRouter>
     <ChakraProvider >
      <ShopCartProvider>
      <UserProvider>
      <ProductProvider>
      <ScreenWidthProvider>
       <App />
        </ScreenWidthProvider>
        </ProductProvider>
        </UserProvider>
      </ShopCartProvider>
       </ChakraProvider>
     </BrowserRouter>,
 // </React.StrictMode>,
   document.getElementById("root")
 );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
