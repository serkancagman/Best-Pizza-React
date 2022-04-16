import React from "react";
import {
  Header,
  ProductsPortfolio,
  Promo,
  Subscribe,
  Footer,
} from "Components";
import { ProductContext } from "Context/ProductContext";
import bannerImage from "Assets/sideboard.jpg";
const Drinks = () => {
  const { drinks, setDrinks, isLoading } = React.useContext(ProductContext);
  return (
    <>
      <Header />
      <ProductsPortfolio
        products={drinks}
        isLoading={isLoading}
        setProducts={setDrinks}
        title="Pizza"
        banner={bannerImage}
      />

      <Subscribe />
      <Promo />
      <Footer />
    </>
  );
};

export default Drinks;
