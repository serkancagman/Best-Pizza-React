import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = React.useState([]);

  const searchProduct = (query) => {
      query = query.toLowerCase();
    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(query);
    });
    return filteredProducts;
  };


  const values = {
    allProducts,
    setAllProducts,
    searchProduct,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
