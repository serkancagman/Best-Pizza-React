import React from "react";
import style from "./Style/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import slide from "Assets/Banner/SlideItem.jpg";
import slide1 from "Assets/Banner/SlideItem1.jpg";
import slideIcon from "Assets/Banner/SlideIcon.png";
import slideIcon1 from "Assets/Banner/SlideIcon1.png";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
const Banner = () => {
  const bannerItems = [
    {
      title: "Pizza Resto",
      text: "Double the cheese",
      slogan: "Hurry, Tasty Fast Food, on Big Stock Available",
      link: "/pizza/pizza-resto",
      image: slide,
      icon: slideIcon1,
    },
    {
      title: "Combo Pack",
      text: "jumbo slice pizza",
      slogan: "Hurry, Tasty Fast Food, on Big Stock Available",
      link: "/pizza/jumbo-slice-pizza",
      image: slide1,
      icon: slideIcon,
    },
  ];

  return (
    <section className={style.bannerMain}>
      <Swiper
        className="mySwiper bannerSwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
      >
        {bannerItems.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={style.slideWrapper}>
                <Link to="/">
                  <img className="img-fluid" src={item.image} alt="Slide" />
                </Link>

                <div className="container-fluid">
                  <div
                    className={`${style.slideItemArea} ${
                      index === 1 ? style.slideItemAreaSecond : ""
                    }`}
                  >
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <h3 className={style.slideItemTitle}>{item.title}</h3>
                        <img
                          className={style.slideIcon}
                          src={item.icon}
                          alt="Slide Icon"
                        />
                      </div>
                      <h3 className={style.sloganTitle}>{item.text}</h3>
                      <p className={style.sloganText}>{item.slogan}</p>
                      <Link to="/as">
                        <button className={style.orderBtn}>Order Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
