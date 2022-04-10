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
    </>
  );
};

export default Home;
