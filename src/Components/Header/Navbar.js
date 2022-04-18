import React from "react";
import {Dropdown } from "antd";
import style from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import burger from "Assets/Foods/burger.jpg";
import navImage from "Assets/menu-banner.jpg";
import DropdownItem from "./DropdownItem";
import "swiper/css";
import { ScreenWidthContext } from "Context/ScreenWidthContext";
const Navbar = () => {
    const {windowDimensions} = React.useContext(ScreenWidthContext);
    const [triggerType, setTriggerType] = React.useState("click");
    const [place, setPlace] = React.useState("bottomLeft");
    
    React.useEffect(() => {
        if (windowDimensions.width <= 768) {
            setTriggerType("click");
            setPlace("bottomCenter");
        } else {
            setTriggerType("hover");
            setPlace("bottomLeft");
        }
    }, [windowDimensions]);

  const pizzaItem = [
    {
      title: "Margarita",
      link: "/pizza",
    },
    {
      title: "Pepperoni",
      link: "/pizza",
    },
    {
      title: "Vegetarian",
      link: "/pizza",
    },
    {
      title: "Chicago Pizza",
      link: "/pizza",
    },
    {
      title: "Sicilian Pizza",
      link: "/pizza",
    },
  ];
  const fastItem = [
    {
      title: "Margarita",
      link: "/fastfood",
    },
    {
      title: "Pepperoni",
      link: "/fastfood",
    },
    {
      title: "Vegetarian",
      link: "/fastfood",
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
    <ul className="navbar-nav">
      <li className={style.navItem}>
        <Dropdown trigger={[triggerType]} placement={place} overlay={pizzaMenu}>
          <span className={style.navLink}>
            PIZZA
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>

        <span className={style.promotionTitle}>SALE</span>
      </li>
      <li className={style.navItem}>
        <Dropdown overlay={fastFood} trigger={[triggerType]} placement={place} >
          <span className={style.navLink}>
            FAST FOOD
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>

        <span className={style.promotionTitle}>NEW</span>
      </li>
      <li className={style.navItem}>
        <Dropdown overlay={juiceMenu} trigger={[triggerType]} placement={place}>
          <span className={style.navLink}>
            JUICE
            <MdOutlineKeyboardArrowDown className={style.arrowIcon} />
          </span>
        </Dropdown>
      </li>
      <li className={style.navItem}>
        <Dropdown overlay={burgerMenu} trigger={[triggerType]} placement={place}>
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
        <Dropdown overlay={juiceMenu} trigger={[triggerType]} placement={place}>
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
