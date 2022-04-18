import React from "react";
import style from "./Style/Order.module.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ShopCartContext } from "Context/ShopCartContext";
import { Popconfirm } from "antd";
const CheckCart = () => {
  const { cart, removeFromCart, handleDecrease, productQuantity, setCart } =
    React.useContext(ShopCartContext);

  const handleOk = () => {
    setCart([]);
  };

  return (
    <section className={style.checkCart}>
      <div className="container">
        <div className="row justify-content-center g-3">
          <div className="col-lg-8">
            <div className={style.cartItemsHeader}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className={style.cartTitle}>My cart</h5>
                <Popconfirm
                  title="Do you want to remove all products in your cart?"
                  onConfirm={handleOk}
                >
                  <div className={style.deleteAllItems}>
                    <div className="d-flex justify-content-center align-items-center">
                      <BsTrash className={style.deleteIcon} />
                      <span className={style.deleteText}> Clear cart</span>
                    </div>
                  </div>
                </Popconfirm>
              </div>
              <div className={style.cartProductList}>
                {cart.map((product, index) => {
                  return (
                    <div key={index} className="col-12">
                      <div className={style.cartProductWrapper}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-center align-items-center">
                            <div className={style.cartProductImgArea}>
                              <img
                                src={product.photos[0]}
                                alt="product"
                                className={style.cartProductImg}
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-start">
                              <div className="d-flex justify-content-center align-items-center">
                                {product.salePrice ? (
                                  <>
                                    <span className={style.cartProductPrice}>
                                      ${product.salePrice}
                                    </span>
                                    <span
                                      className={
                                        product.salePrice
                                          ? style.oldCartProductPrice
                                          : style.cartProductPrice
                                      }
                                    >
                                      ${product.price}
                                    </span>
                                  </>
                                ) : (
                                  <span
                                    className={
                                      product.salePrice
                                        ? style.oldCartProductPrice
                                        : style.cartProductPrice
                                    }
                                  >
                                    ${product.price}
                                  </span>
                                )}
                              </div>
                              <h6 className={style.cartProductTitle}>
                                {product.title}
                              </h6>
                            </div>
                          </div>
                          <div className={style.quantityOptions}>
                            <div className={style.quantityItems}>
                              {product.quantity > 1 ? (
                                <button
                                  onClick={() => handleDecrease(product)}
                                  className={style.quantityIcon}
                                >
                                  <AiOutlineMinus />
                                </button>
                              ) : (
                                <button
                                  onClick={() => removeFromCart(product)}
                                  className={style.quantityIconTrash}
                                >
                                  <BsTrash />
                                </button>
                              )}
                              <span className={style.quantityNumber}>
                                {product.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  productQuantity(product, product.quantity + 1)
                                }
                                className={style.quantityIcon}
                              >
                                <AiOutlinePlus />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className={style.cartItemBottomTitle}>
                    <span className={style.cartItemBottomTitleText}> You have {cart.length} items in your cart. </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </section>
  );
};

export default CheckCart;
