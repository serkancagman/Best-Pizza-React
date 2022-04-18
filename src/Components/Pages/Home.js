import {
  Header,
  Banner,
  AdBanner,
  AboutBanner,
  SubFoods,
  Promotion,
  Reviews,
  News,
  Brands,
  Subscribe,
  Promo,
  Footer,
  HomeProducts,
  DeliveryAnimation,
  GoTop
} from "Components";


import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeProducts />
      <AdBanner />
      <AboutBanner />
      <SubFoods />
      <Promotion />
      <Reviews />
      <News />
      <Brands />
      <Subscribe />
      <Promo />
      <Footer />
      <DeliveryAnimation/>
      <GoTop />
    </>
  );
};

export default Home;
