import React from "react";
import style from "./style/Header.module.css";
import logo from "Assets/Logo/logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Menu, Dropdown, Badge,Alert } from "antd";
import { BsPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import ShopCart from "Components/ShopCart/ShopCart";
import { ShopCartContext } from "Context/ShopCartContext";
const Header = () => {
  const { cart} = React.useContext(ShopCartContext);
  const [visible, setVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const personItem = (
    <Menu className={style.personMenu}>
      <ul className={style.pizzaMenuList}>
        <li className={style.pizzaMenuItem}>
          <Link className={style.pizzaMenuLink} to="/">
            Sign in
          </Link>
        </li>
        <li className={style.pizzaMenuItem}>
          <Link className={style.pizzaMenuLink} to="/">
            Join us!
          </Link>
        </li>
      </ul>
    </Menu>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const searchItem = (
    <Menu className={style.personMenu}>
      <form onSubmit={handleSubmit}>
        <input
          value={searchValue}
          className={style.searchInput}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search our foods"
        />
      </form>
    </Menu>
  );

  const cartItem = (
    <div className={style.cartWrapperMenu}>
    <div className={`${style.cartMenu} ${cart.length > 1 && style.inProduct}`}>
      {cart.length > 0 ?  <ShopCart key="1" /> : <Alert
      message="Your cart is empty"
      description="Please add some items to your cart"
      type="warning"
    />}
     
    </div>
    </div>
  );

  return (
    <header className={style.mainHeader}>
      <div className={style.headerWrapper}>
        <div className="container">
          <nav className="navbar justify-content-between">
            <Link className="navbar-brand" to="/">
              <img className={style.logo} src={logo} alt="Main Logo" />
            </Link>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center">
              <Dropdown
                placement="bottomRight"
                overlay={searchItem}
                trigger={["click"]}
              >
                <span className={style.rightIconWrapper}>
                  <BiSearchAlt2 className={style.rightIcon} />
                </span>
              </Dropdown>
              <Dropdown
                placement="bottomRight"
                overlay={personItem}
                trigger={["click"]}
              >
                <span className={style.rightIconWrapper}>
                  <BsPersonFill className={style.rightIcon} />
                </span>
              </Dropdown>
              <Dropdown
                onVisibleChange={handleVisibleChange}
                visible={visible}
                placement="bottomRight"
                overlay={cartItem}
              >
                <span className={style.rightIconWrapper}>
                  <IoMdCart className={style.rightIcon} />
                  <Badge className={style.cartCount}>{cart.length}</Badge>
                </span>
              </Dropdown>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
