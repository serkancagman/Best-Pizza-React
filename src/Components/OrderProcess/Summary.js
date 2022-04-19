import React from "react";
import style from "./Style/Order.module.css";
import { ShopCartContext } from "Context/ShopCartContext";
const Summary = ({buttonTitle,process}) => {
  const {
    cartTotalPrice,
    totalPrice,
    cartTotalDiscount,
    shipping,
    handleStep,
  } = React.useContext(ShopCartContext);
  return (
    <div className="col-lg-4">
      <div className={style.cartSummary}>
        <div className="my-2">
          <h5 className={style.cartTitle}>Summary</h5>
        </div>
        <div className={style.cartSummaryInner}>
          <div className={style.cartSummaryItems}>
            <div className="d-flex mb-2 justify-content-between align-items-center">
              <span className={style.cartSummaryItemTitle}>Subtotal</span>
              <span className={style.cartSummaryItemPrice}>
                ${cartTotalPrice}
              </span>
            </div>
            <div className="d-flex mb-2  justify-content-between align-items-center">
              <span className={style.cartSummaryItemTitle}>Discount</span>
              <span className={style.cartSummaryItemIneffective}>
                {" "}
                - ${cartTotalDiscount}
              </span>
            </div>
            <div className="d-flex  mb-2 justify-content-between align-items-center">
              <span className={style.cartSummaryItemTitle}>Shipping</span>
              <span
                className={
                  shipping > 0
                    ? style.cartSummaryItemPrice
                    : style.cartSummaryItemIneffective
                }
              >
                ${shipping}
              </span>
            </div>
            <div className="d-flex  mb-2 justify-content-between align-items-center">
              <span className={style.cartSummaryItemTitle}>Total</span>
              <span className={style.cartSummaryItemPrice}> ${totalPrice}</span>
            </div>
            <button
              type="button"
              onClick={() => handleStep(process)}
              className={style.nextStepBtn}
              to="/checkout"
            >
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
