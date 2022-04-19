import React from "react";
import { ShopCartContext } from "Context/ShopCartContext";
import style from "./Style/ShopCart.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
const ShopCart = () => {

  const { cart, productQuantity, totalPrice, removeFromCart, handleDecrease } =
    React.useContext(ShopCartContext);

  return (
    <ul className={style.shopCartList}>
      {cart.map((item, index) => {
        return (
          <li key={index} className={style.shopCartItem}>
            <div className={style.shopCartItemImg}>
              <img
                src={item.photos[0]}
                alt="product"
                className={style.shopCartImg}
              />
            </div>
            <div className={style.shopCartItemInfo}>
              <h4 className={style.shopCartItemTitle}>{item.title}</h4>
              <div className={style.shopCartItemPrice}>
                {item.salePrice && (
                  <span className={style.shopCartItemPriceNew}>
                    ${item.salePrice}
                  </span>
                )}
                <span
                  className={
                    item.salePrice
                      ? style.shopCartItemPriceOld
                      : style.shopCartItemPriceNew
                  }
                >
                  ${item.price}
                </span>
              </div>
            </div>
            <div className={style.quantityOptions}>
              <div className={style.quantityItems}>
                {item.quantity > 1 ? (
                  <button
                    onClick={() => handleDecrease(item)}
                    className={style.quantityIcon}
                  >
                    <AiOutlineMinus />
                  </button>
                ) : (
                  <button
                    onClick={() => removeFromCart(item)}
                    className={style.quantityIconTrash}
                  >
                    <BsTrash />
                  </button>
                )}
                <span className={style.quantityNumber}>{item.quantity}</span>
                <button
                  onClick={() => productQuantity(item, item.quantity + 1)}
                  className={style.quantityIcon}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </li>
        );
      })}
      <div className={style.totalPriceWrapper}>
        <Link to="/order" className={style.goToCart}>
          <button className={style.goToCartBtn}>Go to cart</button>
          <span className={style.totalTitle}>${totalPrice}</span>
        </Link>
      </div>
    </ul>
  );
};

export default ShopCart;
