import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Style/HomeProducts.module.css";
import pizzaIcon from "Assets/pizzaIcon.png";
import burgerIcon from "Assets/burgerIcon.png";
import dishesIcon from "Assets/dishesIcon.png";
import juicyIcon from "Assets/drinkIcon.png";
import ProductionBox from "Components/ProductionBox/ProductionBox";
import { useQuery } from "react-query";
import { getProducts } from "API/API";
const HomeProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [isFade, setIsFade] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("pizza");
  const { data, error, isLoading } = useQuery(["homeProducts"], getProducts);

  React.useEffect(() => {
    if (data) {
      setProducts(data.filter((item) => item.productType === "pizza"));
    }
  }, [data]);

  const handleFilter = (type) => {
    const useProduct = data.filter((item) => item.productType === type);
    setSelectedCategory(type);

    setProducts(useProduct);
    setIsFade(true);

    setTimeout(() => {
      setIsFade(false);
    }, 700);
  };

  return (
    <section className={style.homeProducts}>
      <div className="container">
        <div className={style.categoryWrapper}>
          <Swiper
            className="mySwiper categorySwipper"
            navigation={true}
            slidesPerView={4}
            breakpoints={{
              270: {
                slidesPerView: 1,

              },
              340: {
                slidesPerView: 2,

              },
              768: {
                slidesPerView: 4,
   
              },
              1024: {
                slidesPerView: 4,
       
              },
            }}
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
                <h3
                  className={`${style.categoryTitle} ${
                    selectedCategory === "pizza" && style.activeCat
                  }`}
                >
                  Pizza
                </h3>
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
                <h3
                  className={`${style.categoryTitle} ${
                    selectedCategory === "fastfood" && style.activeCat
                  }`}
                >
                  Fast Foods
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => handleFilter("dishes")}
                className={style.categoryItem}
              >
                <img
                  src={dishesIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3
                  className={`${style.categoryTitle} ${
                    selectedCategory === "dishes" && style.activeCat
                  }`}
                >
                  Dishes
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => handleFilter("drinks")}
                className={style.categoryItem}
              >
                <img
                  src={juicyIcon}
                  alt="pizza"
                  className={style.categoryIcon}
                />
                <h3
                  className={`${style.categoryTitle} ${
                    selectedCategory === "drinks" && style.activeCat
                  }`}
                >
                  Drinks
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className={`row g-3 align-items-center ${
            isFade ? style.catproductFade : ""
          }`}
        >
          {!isLoading && <ProductionBox data={products} />}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
