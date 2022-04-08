import React from 'react'
import style from "./style/Header.module.css";
import { Link } from 'react-router-dom';
const DropdownItem = ({title,items}) => {
  return (
    <ul className={style.pizzaMenuList}>
          <p className={style.pizzaMenuTitle}>{title}</p>
         {
              items.map(item => {
                return (
                  <li className={style.pizzaMenuItem}>
                    <Link className={style.pizzaMenuLink} to={`/pizza/${item.link}`}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
         }
        </ul>
  )
}

export default DropdownItem