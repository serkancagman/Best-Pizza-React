import React from "react";
import style from "./style/Header.module.css";
import logo from "Assets/Logo/logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Menu, Dropdown, Badge, Alert } from "antd";
import { BsPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { getMe } from "API/API";
import { IoMdCart, IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import ShopCart from "Components/ShopCart/ShopCart";
import { ShopCartContext } from "Context/ShopCartContext";
import { UserContext } from "Context/UserContext";
const Header = () => {
  const { cart } = React.useContext(ShopCartContext);
  const { user } = React.useContext(UserContext);
  const [cartvisible, setCartVisible] = React.useState(false);
  const [searchVisible, setSearchVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const getUserInfo = async() => {
    try{
        const response = await getMe();
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo();
  };

  const handleVisibleChange = (flag) => {
    setCartVisible(flag);
  };
  const handleVisibleSearch = (flag) => {
    setSearchVisible(flag);
  };

  const personItem = (
    <div className={style.personMenu}>
      {user ? (
        <>
          <div className={style.profileWrapper}>
            <div className={style.profile}>
              <div className={style.profileImg}>
                <BsPersonFill className={style.personIcon} />
              </div>
              <div className="d-flex justify-content-center flex-column">
                <h5 className={style.profileName}>
                  {user.name + " " + user.lastname}
                </h5>
                <h5 className={style.profileMail}>{user.email}</h5>
              </div>
            </div>
          </div>
          <ul className={style.profileMenu}>
            <li className={style.profileMenuItem}>
              <Link className={style.profileLink} to="/account">
                My Account
              </Link>
            </li>
            <li className={style.profileMenuItem}>
              <Link className={style.profileLink} to="/orders">
                Orders
              </Link>
            </li>
            <li className={style.profileMenuItem}>
              <span className={style.logoutLink}>
                <FiLogOut className={style.logoutIcon} /> Logout
              </span>
            </li>
          </ul>
        </>
      ) : (
        <ul className={`${style.profileMenu} ${style.notLoginMenu}`}>
          <li className={style.profileMenuItem}>
            <Link className={style.profileLink} to="/login">
              Sign in
            </Link>
          </li>
          <li className={style.profileMenuItem}>
            <Link className={style.profileLink} to="/register">
              Join Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );

  const searchItem = (
    <div className={style.searchMenu}>
      <form className="w-100" onSubmit={handleSubmit}>
        <input
          value={searchValue}
          className={style.searchInput}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search our foods"
        />
        <button className={style.searchButton}> <BiSearchAlt2 className={style.searchIcon} /></button>
      </form>
    </div>
  );

  const cartItem = (
    <div className={style.cartWrapperMenu}>
      <div
        className={`${style.cartMenu} ${cart.length >= 1 && style.inProduct}`}
      >
        {cart.length > 0 ? (
          <ShopCart key="1" />
        ) : (
          <Alert
            message="Your cart is empty"
            description="Please add some items to your cart"
            type="warning"
          />
        )}
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
                onVisibleChange={handleVisibleSearch}
                visible={searchVisible}
              >
                <span className={style.rightIconWrapper}>
                  {searchVisible ? (
                    <IoMdClose className={style.rightIcon} />
                  ) : (
                    <BiSearchAlt2 className={style.rightIcon} />
                  )}
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
                visible={cartvisible}
                placement="bottomRight"
                overlay={cartItem}
                trigger={["click"]}
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
