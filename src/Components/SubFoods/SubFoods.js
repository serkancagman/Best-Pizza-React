import React from "react";
import style from "./Style/SubFoods.module.css";
import icon from "Assets/sandwichIcon.png";
import icon1 from "Assets/burgerIcon.png";
import icon2 from "Assets/frenchfriesIcon.png";
import { Link } from "react-router-dom";
const SubFoods = () => {
  const subFoods = [
    {
      id: 1,
      name: "Fast Foods",
      text: "It refers to food that can be prepared and served quickly.",
      img: icon,
    },
    {
      id: 2,
      name: "Cheesey Burgers",
      text: "A cheeseburger is a hamburger topped with cheese.",
      img: icon1,
    },
    {
      id: 3,
      name: "Junk Foods",
      text: "Immunity refers to the ability of your body to fight against diseases.",
      img: icon2,
    },
  ];
  return (
    <section className={style.subFoods}>
      <div className="container">
        <div className="row align-items-center justify-content-center g-3">
          {subFoods.map((subFood) => {
            return (
              <div className="col-md-4" key={subFood.id}>
                <Link className={style.subFoodLink} to="/">
                  <div className={style.subFood}>
                    <img src={subFood.img} alt={subFood.name} />
                    <h3 className={style.subTitle}>{subFood.name}</h3>
                    <p className={style.subText}>{subFood.text}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubFoods;
