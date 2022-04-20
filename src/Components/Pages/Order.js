import React from "react";
import {
  Header,
  Promo,
  Subscribe,
  Footer,
  CheckCart,
  OrderAddress,
  Payment
} from "Components";
import { ShopCartContext } from "Context/ShopCartContext";
const Order = () => {
  const { orderStep } = React.useContext(ShopCartContext);

  return (
    <>
      <Header />
      {orderStep[0].status === "process" && <CheckCart />}

      {orderStep[1].status === "process" && <OrderAddress />}

      {orderStep[2].status === "process" && <Payment />}

      <Promo />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Order;
