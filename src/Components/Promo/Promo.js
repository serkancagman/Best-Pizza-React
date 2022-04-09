import React from "react";
import style from "./Style/Promo.module.css";
import { RiCoupon3Fill } from "react-icons/ri";
const Promo = () => {
  return (
    <section className={style.promo}>
      <div className="container">
        <div className="d-flex py-3 justify-content-center align-items-center">
          <RiCoupon3Fill className={style.icon} />
          <h2 className={style.title}>
            SUMMER SEASON SALE - SAVE UP TO 50-70% OFF
          </h2>
          <span className={style.promoCode}>
            <b>PROMO CODE:</b> <span>REACT</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Promo;
