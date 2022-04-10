import React from "react";
import { Menu, Dropdown } from "antd";
import style from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import burger from "Assets/Foods/burger.jpg";
import burger2 from "Assets/Foods/burger2.jpg";
import navImage from "Assets/menu-banner.jpg";
import DropdownItem from "./DropdownItem";

import "swiper/css";
const Navbar = () => {
  const { SubMenu } = Menu;
  const pizzaItem = [
    {
      title: "Margarita",
      link: "margarita",
    },
    {
      title: "Pepperoni",
      link: "pepperoni",
    },
    {
      title: "Vegetarian",
      link: "vegetarian",
    },
    {
      title: "Chicago Pizza",
      link: "chicago",
    },
    {
      title: "Sicilian Pizza",
      link: "sicilian",
    },
  ];
  const fastItem = [
    {
      title: "Margarita",
      link: "margarita",
    },
    {
      title: "Pepperoni",
      link: "pepperoni",
    },
    {
      title: "Vegetarian",
      link: "vegetarian",
    },
  ];

  const pizzaMenu = (
    <div className={style.pizzaMenu}>
      <div className={style.pizzaMenuInner}>
        <DropdownItem title="Pizza" items={pizzaItem} />
        <DropdownItem title="Dishes" items={pizzaItem} />
        <DropdownItem title="Sweet Corn" items={pizzaItem} />
      </div>
      <img className={style.pizzaMenuImg} src={navImage} alt="Pizza Menu" />
    </div>
  );
  const fastFood = (
    <div className={style.pizzaMenu}>
      <div className={style.fastWrapper}>
        <div className={style.fastMenuInner}>
          <div className={style.fastFood}>
            <div className={style.fastFoodItem}>
              <DropdownItem title="Pizza" items={fastItem} />
            </div>

            <DropdownItem title="Dishes" items={fastItem} />
          </div>
          <div className={style.fastFood}>
            <div className={style.fastFoodItem}>
              <DropdownItem title="Pizza" items={fastItem} />
            </div>
            <DropdownItem title="Dishes" items={fastItem} />
          </div>
        </div>

        <div className={style.fastFoodSlide}>
          <img src={burger} className={style.sliderImg} alt="Fast Food" />
          <span className={style.fastFoodTitle}>Cheese Burger</span>
        </div>
      </div>
    </div>
  );
  const juiceMenu = (
    <div className={style.juiceMenu}>
      <ul className={style.pizzaMenuList}>
        <li className={style.pizzaMenuItem}>
          <Link className={style.pizzaMenuLink} to="/">
            Orange Juice
          </Link>
        </li>
        <li className={style.pizzaMenuItem}>
          <Link className={style.pizzaMenuLink} to="/">
            Apple Juice
          </Link>
        </li>
      </ul>
    </div>
  );

  const burgerMenu = (
    <div className={style.burgerMenu}>
      <ul className={style.pizzaMenuList}>
        <li className={style.pizzaMenuItem}>
          <Link className={style.pizzaMenuLink} to="/">
            Cheese Burger
          </Link>
        </li>
        <li className={style.pizzaMenuItem}>
          <Link className={style.pizzaMenuLink} to="/">
            Cheese Burger
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <ul className={style.navbarNav}>
      <li className={style.navItem}>
        <Dropdown overlay={pizzaMenu}>
          <span className={style.navLink}>
            PIZZA
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>

        <span className={style.promotionTitle}>SALE</span>
      </li>
      <li className={style.navItem}>
        <Dropdown overlay={fastFood}>
          <span className={style.navLink}>
            FAST FOOD
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>

        <span className={style.promotionTitle}>NEW</span>
      </li>
      <li className={style.navItem}>
        <Dropdown overlay={juiceMenu}>
          <span className={style.navLink}>
            JUICE
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>
      </li>
      <li className={style.navItem}>
        <Dropdown overlay={burgerMenu}>
          <span className={style.navLink}>
            BURGER
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>
      </li>

      <li className={style.navItem}>
        <Link className={style.navLink} to="/">
          ITALIAN
        </Link>
      </li>

      <li className={style.navItem}>
        <Dropdown overlay={juiceMenu}>
          <span className={style.navLink}>
            MORE
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>
      </li>
    </ul>
  );
};

export default Navbar;
