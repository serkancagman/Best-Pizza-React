import React from "react";
import style from "./Style/AdBanner.module.css";
import { Link } from "react-router-dom";
const AdBanner = () => {
  return (
    <section className={style.mainAdBanner}>
      <div className="container">
          <div className="d-flex justify-content-end align-items-center">
            <div className={style.adBannerArea}>
                <h2 className={style.adBannerTitle}>
                SAVE 25% OFF
                </h2>
                <p className={style.adBannerText}>
                Tasty Pizza, On Big Stock, Big Offers
                </p>
                <h3 className={style.adBannerSubTitle}>
                BIG OFFER
                </h3>
                <Link className={style.adBannerLink} to="/">
                <button className={style.adBannerButton}>
                Shop Now
                </button>
                </Link>
                </div>
          </div>
      </div>
    </section>
  );
};

export default AdBanner;
