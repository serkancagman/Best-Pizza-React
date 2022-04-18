import React from "react";
import style from "./Style/ProductionBox.module.css";
import { IoMdCart } from "react-icons/io";
import { useDisclosure } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import ProductModal from "./ProductModal";
import { ShopCartContext } from "Context/ShopCartContext";
import { ScreenWidthContext } from "Context/ScreenWidthContext";
const ProductionBox = ({ data }) => {
  const {windowDimensions} = React.useContext(ScreenWidthContext);
  const {addToCart} = React.useContext(ShopCartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentData, setCurrentData] = React.useState("");
  const [smallPhone, setSmallPhone] = React.useState(false);
  const handleModal = (product) => {
    onOpen();
    setCurrentData(product);
  };

  React.useEffect(() => {
    if (windowDimensions.width < 281) {
      setSmallPhone(true);
    } else {
      setSmallPhone(false);
    }
  }, [windowDimensions.width]);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className={`col-md-3 col-lg-3 ${smallPhone ? "col-12" : "col-6"}`}>
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
                    <button
                      onClick={()=> addToCart(item,1)}
                      className={style.productOption}
                    >
                      
                      <IoMdCart className={style.productOptionIcon} />
                    </button>
                    <button
                      onClick={() => handleModal(item)}
                      className={style.productOption}
                    >
                      <AiFillEye className={style.productOptionIcon} />
                    </button>
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
                  <span
                    className={
                      item.salePrice
                        ? style.productPriceNew
                        : style.productPriceOld
                    }
                  >
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {currentData !== "" && (
        <ProductModal isOpen={isOpen} onClose={onClose} product={currentData} />
      )}
    </>
  );
};

export default ProductionBox;
