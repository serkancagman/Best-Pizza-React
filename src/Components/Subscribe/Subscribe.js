import React from "react";
import style from "./Style/Subscribe.module.css";
import { GoMailRead } from "react-icons/go";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRss,
  FaYoutube,
  FaPinterestP,
  FaVimeoV,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <section className={style.subscribe}>
      <div className="container">
        <div className={style.subscribeWrapper}>
          <GoMailRead className={style.subscribeIcon} />
          <h3 className={style.subscribeTitle}>Subscribe to Newsletter</h3>
          <p className={style.subscribeText}>
            Claritas processus dynamicus sequitu ynamicus Claritas ynamicus
            Claritas processus dynamicus
          </p>
          <form className={style.subscribeForm}>
            <div className="d-flex justify-content-center align-items-center position-relative">
              <input
                type="text"
                placeholder="Enter your email"
                className={style.subscribeInput}
              />
              <button className={style.subscribeButton}>Subscribe</button>
            </div>
          </form>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/" className={style.facebook}>
              <FaFacebookF />
            </Link>
            <Link to="/" className={style.twitter}>
              <FaTwitter />
            </Link>
            <Link to="/" className={style.rss}>
              <FaRss />
            </Link>
            <Link to="/" className={style.youtube}>
              <FaYoutube />
            </Link>
            <Link to="/" className={style.pinterest}>
              <FaPinterestP />
            </Link>
            <Link to="/" className={style.vimeo}>
              <FaVimeoV />
            </Link>
            <Link to="/" className={style.instagram}>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
