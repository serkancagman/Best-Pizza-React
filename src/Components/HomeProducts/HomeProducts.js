import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Style/HomeProducts.module.css";
import pizzaIcon from "Assets/pizzaIcon.png";
import burgerIcon from "Assets/burgerIcon.png";
import sandwichIcon from "Assets/sandwichIcon.png";
import juicyIcon from "Assets/drinkIcon.png";
const HomeProducts = () => {
  return (
    <section className={style.homeProducts}>
      <div className="container">
        <div className={style.categoryWrapper}>
          <Swiper className="mySwiper categorySwipper" navigation={true} slidesPerView={4}>
            <SwiperSlide>
              <div className={style.categoryItem}>
                <img
                  src={pizzaIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Pizza</h3>
                <p className={style.categoryLength}>12 Items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.categoryItem}>
                <img
                  src={burgerIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Burgers</h3>
                <p className={style.categoryLength}>12 Items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.categoryItem}>
                <img
                  src={sandwichIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Sandwiches</h3>
                <p className={style.categoryLength}>12 Items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.categoryItem}>
                <img
                  src={juicyIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Drinks</h3>
                <p className={style.categoryLength}>12 Items</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
