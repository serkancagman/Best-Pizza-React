import React from "react";
import style from "./Style/Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import user from "Assets/user.jpg";
import user1 from "Assets/user1.jpg";
import user2 from "Assets/user2.jpg";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
const Reviews = () => {
  return (
    <section className={style.reviews}>
      <div className="container">
        <Swiper
          className="mySwiper reviewSwiper py-5"
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          pagination={true}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={style.reviewSlideImg}>
                <img src={user} alt="reviews" className={style.userIcon} />
              </div>
              <p className={style.reviewText}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptatem amet odio libero ex beatae tenetur dolor,
                a suscipit consectetur!
              </p>
              <h5 className={style.reviewerName}>John Doe</h5>
              <span className={style.reviewerDesignation}>
                (CEO, PIZZASTOP )
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={style.reviewSlideImg}>
                <img src={user1} alt="reviews" className={style.userIcon} />
              </div>
              <p className={style.reviewText}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptatem amet odio libero ex beatae tenetur dolor,
                a suscipit consectetur!
              </p>
              <h5 className={style.reviewerName}>NICHOLE ALIS</h5>
              <span className={style.reviewerDesignation}>(CO-FOUNDER)</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={style.reviewSlideImg}>
                <img src={user2} alt="reviews" className={style.userIcon} />
              </div>
              <p className={style.reviewText}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptatem amet odio libero ex beatae tenetur dolor,
                a suscipit consectetur!
              </p>
              <h5 className={style.reviewerName}>CHRIS STEAL</h5>
              <span className={style.reviewerDesignation}>(CHEF)</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
