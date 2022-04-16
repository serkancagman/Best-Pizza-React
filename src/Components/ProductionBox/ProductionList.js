import React from "react";
import style from "./Style/ProductionBox.module.css";
import { Tag } from "antd";
import {AiFillEye} from "react-icons/ai";
import {IoMdCart} from "react-icons/io";
import { useDisclosure } from "@chakra-ui/react";
import { ShopCartContext } from "Context/ShopCartContext";
import ProductModal from "./ProductModal";
const ProductionList = ({ product }) => {
  const {addToCart} = React.useContext(ShopCartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentData, setCurrentData] = React.useState("");
  const handleModal = (product) => {
    onOpen();
    setCurrentData(product);
  };
  return (
    <>
      {product.map((item, index) => {
        const splitIngredients = item.Ingredients[0].split(",");
        return (
          <div className="col-md-12" key={index}>
            <div className={style.listProductWrapper}>
              <div className={style.listImage}>
                <img src={item.photos[0]} alt="" className={style.listImg} />
              </div>
              <div className={style.listProductionInfo}>
                <h3 className={style.listItemTitle}>{item.title}</h3>
                {item.Ingredients !== " " && (
                  <div className={style.listIngredients}>
                    <h5 className={style.listIngredientsTitle}>Ingredients</h5>
                    {splitIngredients.map((ingredient, index) => (
                      <Tag key={index} className="me-2 my-1">
                        {ingredient}
                      </Tag>
                    ))}
                  </div>
                )}
                <div className={style.listPrice}>
                  {item.salePrice ? (
                    <>
                      <span className={style.listCurrentPrice}>
                        ${item.salePrice}
                      </span>
                      <span
                        className={
                          item.salePrice
                            ? style.listPriceTitle
                            : style.listCurrentPrice
                        }
                      >
                        ${item.price}
                      </span>
                    </>
                  ) : (
                    <span
                      className={
                        item.salePrice
                          ? style.listPriceTitle
                          : style.listCurrentPrice
                      }
                    >
                      ${item.price}
                    </span>
                  )}
                  
                </div>
                <div className="d-flex align-items-center justify-content-start mt-2">
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
           
          </div>
        );
      })}
       {currentData !== "" && (
        <ProductModal isOpen={isOpen} onClose={onClose} product={currentData} />
      )}
    </>
  );
};

export default ProductionList;
