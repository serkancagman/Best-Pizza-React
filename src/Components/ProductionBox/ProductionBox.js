import React from "react";
import style from "./Style/ProductionBox.module.css";
import { IoMdCart } from "react-icons/io";
import { useDisclosure } from "@chakra-ui/react";
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import ProductModal from "./ProductModal";
const ProductionBox = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentData, setCurrentData] = React.useState("");

  const handleModal = (product) => {
    onOpen();
    setCurrentData(product);
  };

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
                    <div
                      onClick={() => handleModal(item)}
                      className={style.productOption}
                    >
                      <AiFillEye className={style.productOptionIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.productInfo}>
                <h4 className={style.productTitle}>{item.title}</h4>
                <div className={style.productPrice}>
                 
                  {item.salePrice && (
                    <span className={style.productPriceOld}>
                      ${item.salePrice}
                    </span>
                  )}
                   <span className={item.salePrice ? style.productPriceNew : style.productPriceOld}>${item.price}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {currentData !== "" && (
        <ProductModal
          isOpen={isOpen}
          onClose={onClose}
          modalData={currentData}
        />
      )}
    </>
  );
};

export default ProductionBox;
