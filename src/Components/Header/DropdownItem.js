import React from "react";
import style from "./style/Header.module.css";
import { Link } from "react-router-dom";
const DropdownItem = ({ title, items }) => {
  return (
    <ul className={style.pizzaMenuList}>
      <p className={style.pizzaMenuTitle}>{title}</p>
      {items.map((item, index) => {
        return (
          <li key={index} className={style.pizzaMenuItem}>
            <Link className={style.pizzaMenuLink} to={item.link}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownItem;
