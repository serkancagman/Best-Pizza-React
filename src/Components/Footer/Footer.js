import React from "react";
import style from "./Style/Footer.module.css";
import socialImg from "Assets/Footer/instagram.jpg";
import socialImg1 from "Assets/Footer/instagram1.jpg";
import socialImg2 from "Assets/Footer/instagram2.jpg";
import socialImg3 from "Assets/Footer/instagram3.jpg";
import payImg from "Assets/Footer/payment-visa.png";
import payImg1 from "Assets/Footer/payment-mastercard.png";
import payImg2 from "Assets/Footer/payment-paypal.png";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone, AiFillHeart } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import {BsFillEyeFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="col-lg-12">
          <div className={style.footerMainTitle}>
            <span className={style.footerTitle}>Delivery</span>
            <span className={style.footerTitleDash}> - </span>
            <span className={style.footerTitle}>Legal Notice</span>
            <span className={style.footerTitleDash}> - </span>
            <span className={style.footerTitle}>Secure Payment</span>
            <span className={style.footerTitleDash}> - </span>
            <span className={style.footerTitle}>My Account</span>
            <span className={style.footerTitleDash}> - </span>
            <span className={style.footerTitle}>Contact Us</span>
          </div>
        </div>
        <div className="row my-5 justify-content-center align-items-center g-3">
          <div className="col-lg-8 col-md-12">
            <h3 className={style.instagramTitle}>INSTAGRAM FEEDS</h3>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-3 col-3">
                <div className={style.instagramImg}>
                    <div className={style.instaImgFade}>
                        <BsFillEyeFill className={style.instaImgIcon} />
                    </div>
                  <img
                    src={socialImg}
                    alt="instagram"
                    className={style.instaImg}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3">
                <div className={style.instagramImg}>
                    <div className={style.instaImgFade}>
                        <BsFillEyeFill className={style.instaImgIcon} />
                    </div>
                  <img
                    src={socialImg1}
                    alt="instagram"
                    className={style.instaImg}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3">
                <div className={style.instagramImg}>
                    <div className={style.instaImgFade}>
                        <BsFillEyeFill className={style.instaImgIcon} />
                    </div>
                  <img
                    src={socialImg2}
                    alt="instagram"
                    className={style.instaImg}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3">
                <div className={style.instagramImg}>
                    <div className={style.instaImgFade}>
                        <BsFillEyeFill className={style.instaImgIcon} />
                    </div>
                  <img
                    src={socialImg3}
                    alt="instagram"
                    className={style.instaImg}
                  />
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <ul className={style.contactList}>
                  <li className={style.contactListItem}>
                    <HiLocationMarker className={style.contactListIcon} />
                    <span className={style.contactListItemTitle}>
                      Turkey / Istanbul{" "}
                    </span>
                  </li>
                  <li className={style.contactListItem}>
                    <AiFillPhone className={style.contactListIcon} />
                    <span className={style.contactListItemTitle}>
                      +90 555 555 55 55
                    </span>
                  </li>
                  <li className={style.contactListItem}>
                    <GrMail className={style.contactListIcon} />
                    <span className={style.contactListItemTitle}>
                      cagmanserkann@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className={style.footerBottom}>
          <p className={style.footerBottomText}>
            © 2022 Developed by Serkan Çağman with{" "}
            <AiFillHeart className={style.footerBottomHeart} />
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img src={payImg} alt="pay" className={style.payImg} />
            <img src={payImg1} alt="pay" className={style.payImg} />
            <img src={payImg2} alt="pay" className={style.payImg} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
