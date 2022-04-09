import React from "react";
import style from "./Style/News.module.css";
import newImg from "Assets/News/new.jpg";
import newImg1 from "Assets/News/new1.jpg";
import newImg2 from "Assets/News/new2.jpg";
import newImg3 from "Assets/News/new3.jpg";
import newImg4 from "Assets/News/new4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import NewsBox from "./NewsBox";
import headerIcon from "Assets/seperator.png";
const News = () => {
  return (
    <section className={style.news}>
      <div className="container">
          <div className={style.newsTitleWrapper}>
            <h2 className={style.newsTitleMain}>News</h2>
            <img src={headerIcon} alt="news" className={style.headerIcon} />
          </div>
        <Swiper className="mySwiper newsSwiper" navigation={true}
        modules={[Navigation]} slidesPerView={3} >
          <SwiperSlide>
            <NewsBox
              title="Lorem ipsum dolor sit amet consectetur "
              imgUrl={newImg}
              text="Lorem ipsum dolor sit amet consectetur "
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsBox
              title="Lorem ipsum dolor sit amet consectetur "
              imgUrl={newImg1}
              text="Lorem ipsum dolor sit amet consectetur "
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsBox
              title="Lorem ipsum dolor sit amet consectetur "
              imgUrl={newImg2}
              text="Lorem ipsum dolor sit amet consectetur "
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsBox
              title="Lorem ipsum dolor sit amet consectetur "
              imgUrl={newImg3}
              text="Lorem ipsum dolor sit amet consectetur "
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsBox
              title="Lorem ipsum dolor sit amet consectetur "
              imgUrl={newImg4}
              text="Lorem ipsum dolor sit amet consectetur "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default News;
