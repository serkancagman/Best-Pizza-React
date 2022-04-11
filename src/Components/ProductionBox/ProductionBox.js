import React from "react";
import style from "./Style/ProductionBox.module.css";
import { IoMdCart } from "react-icons/io";
import { AiFillHeart, AiFillEye } from "react-icons/ai";
const ProductionBox = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="col-md-3">
            <div className={style.productItem}>
              <div className={style.productImage}>
                <img
                  src={item.photos[0]}
                  alt="product"
                  className={style.productImg}
                />
                <div className={style.productOptionView}>
                  {item.productIsNew && (
                    <div className={style.productUpperInfo}>New Product</div>
                  )}
                  <div className={style.productOptions}>
                    <div className={style.productOption}>
                      <IoMdCart className={style.productOptionIcon} />
                    </div>
                    <div className={style.productOption}>
                      <AiFillHeart className={style.productOptionIcon} />
                    </div>
                    <div className={style.productOption}>
                      <AiFillEye className={style.productOptionIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.productInfo}>
                <h4 className={style.productTitle}>{item.title}</h4>
                <div className={style.productPrice}>
                  <span className={style.productPriceOld}>${item.price}</span>
                  {item.salePrice && (
                    <span className={style.productPriceNew}>
                      ${item.salePrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductionBox;
