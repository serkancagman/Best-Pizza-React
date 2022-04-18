import React from 'react'
import {Header,ProductsPortfolio,Promo,Subscribe,Footer} from "Components";
import { ProductContext } from 'Context/ProductContext';
import bannerImage from "Assets/sideboard.jpg"
const Pizza = () => {
  const { pizzas,setPizzas,isLoading } = React.useContext(ProductContext);
  return (
    <>  
      <Header/>
      <ProductsPortfolio 
        products={pizzas}
        isLoading={isLoading}
        setProducts={setPizzas}
        title="Pizza"
        banner={bannerImage}
      />
      <Subscribe/>
      <Promo/>
      <Footer/>
    </>
  )
}

export default Pizza