import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Style/HomeProducts.module.css";
import pizzaIcon from "Assets/pizzaIcon.png";
import burgerIcon from "Assets/burgerIcon.png";
import dishesIcon from "Assets/dishesIcon.png";
import juicyIcon from "Assets/drinkIcon.png";
import { useQuery } from "react-query";

import { getProducts } from "API/API";
import ProductionBox from "Components/ProductionBox/ProductionBox";
const HomeProducts = () => {
  const [products, setProducts] = React.useState([]);
  const { data, error, isLoading } = useQuery("homeProducts", getProducts);

  React.useEffect(() => {
    if (data) {
      setProducts(data.filter((item) => item.productType === "pizza"));
    }
  }, [data]);

  const handleFilter = (type) => {
    let useProduct;
    if (type === "pizza") {
      useProduct = data.filter((item) => item.productType === "pizza");
    } else if (type === "fastfood") {
      useProduct = data.filter((item) => item.productType === "fastfood");
    } else {
      useProduct = data.filter((item) => item.productType === "dishes");
    }
    setProducts(useProduct);
  };

  return (
    <section className={style.homeProducts}>
      <div className="container">
        <div className={style.categoryWrapper}>
          <Swiper
            className="mySwiper categorySwipper"
            navigation={true}
            slidesPerView={4}
          >
            <SwiperSlide>
              <div
                onClick={() => handleFilter("pizza")}
                className={style.categoryItem}
              >
                <img
                  src={pizzaIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Pizza</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => handleFilter("fastfood")}
                className={style.categoryItem}
              >
                <img
                  src={burgerIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Fast Foods</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.categoryItem}>
                <img
                  src={dishesIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3 className={style.categoryTitle}>Dishes</h3>
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="row g-3 align-items-center">
          {!isLoading && <ProductionBox data={products} />}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
