import React from 'react'
import {Header,ProductsPortfolio,Promo,Subscribe,Footer} from "Components";
import { ProductContext } from 'Context/ProductContext';
import bannerImage from "Assets/sideboard.jpg"
const Fastfood = () => {
  const { fastFoods,setFastFoods,isLoading } = React.useContext(ProductContext);
  return (
    <>  
      <Header/>
      <ProductsPortfolio 
        products={fastFoods}
        isLoading={isLoading}
        setProducts={setFastFoods}
        title="Fast Food"
        banner={bannerImage}
      />
      
      <Subscribe/>
      <Promo/>
      <Footer/>
    </>
  )
}

export default Fastfood