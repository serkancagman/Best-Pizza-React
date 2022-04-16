import React from 'react'
import {Header,ProductsPortfolio,Promo,Subscribe,Footer} from "Components";
import { ProductContext } from 'Context/ProductContext';
import bannerImage from "Assets/sideboard.jpg"
const Dishes = () => {
  const { dishes,setDishes,isLoading } = React.useContext(ProductContext);
  return (
    <>  
      <Header/>
      <ProductsPortfolio 
        products={dishes}
        isLoading={isLoading}
        setProducts={setDishes}
        title="Pizza"
        banner={bannerImage}
      />
      
      <Subscribe/>
      <Promo/>
      <Footer/>
    </>
  )
}

export default Dishes