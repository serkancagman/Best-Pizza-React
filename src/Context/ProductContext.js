import React from "react";
import { getProducts } from "API/API";
export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = React.useState([]);
  const [pizzas, setPizzas] = React.useState([]);
  const [drinks, setDrinks] = React.useState([]);
  const [fastFoods, setFastFoods] = React.useState([]);
  const [dishes, setDishes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await getProducts();
        setAllProducts(response);
        setPizzas(response.filter((item) => item.productType === "pizza"));
        setDrinks(response.filter((item) => item.productType === "drink"));
        setFastFoods(
          response.filter((item) => item.productType === "fastfood")
        );
        setDishes(response.filter((item) => item.productType === "dishes"));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, []);

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
    pizzas,
    setPizzas,
    drinks,
    setDrinks,
    fastFoods,
    setFastFoods,
    dishes,
    setDishes,
    isLoading,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
