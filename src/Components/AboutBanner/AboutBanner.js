import React from "react";
import style from "./Style/AboutBanner.module.css";
import { Link } from "react-router-dom";
import banner from "Assets/about.jpg";
import banner1 from "Assets/about1.jpg";
const AboutBanner = () => {
  return (
    <section className={style.mainAboutBanner}>
      <div className="container">
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className={style.aboutInfoWrapper}>
              <div className={style.aboutInfo}>
                <h2 className={style.aboutBannerTitle}>history</h2>
                <h3 className={style.aboutBannerSubTitle}>
                  WELCOME TO PIZZASTOP
                </h3>
                <p className={style.aboutBannerText}>
                  We would like to take this opportunity to welc House. We are
                  offering a warm, friendly atmosphere with family and friends
                  at any time oft
                </p>
                <Link className={style.adBannerLink} to="/">
                  <button className={style.adBannerButton}>About Us</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
            <div className="col-lg-6">
              <div className={style.aboutBannerImageArea}>
                <img
                  src={banner}
                  alt="About Banner"
                  className={style.bannerImg}
                />
                <div className={style.aboutBannerImageAreaOverlay}></div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className={`${style.rightAboutImg} ${style.aboutBannerImageArea}`}>
                <img
                  src={banner1}
                  alt="About Banner"
                  className={style.bannerImg}
                />
                <div className={style.aboutBannerImageAreaOverlay}></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
