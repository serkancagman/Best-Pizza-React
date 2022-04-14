import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import style from "./Style/ProductionBox.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { ShopCartContext } from "Context/ShopCartContext";
import { Tag } from "antd";
const ProductModal = ({ isOpen, onClose, product }) => {
  const { addToCart } = React.useContext(ShopCartContext);

  const [quantity, setQuantity] = React.useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  React.useEffect(() => {
    setQuantity(1);
  }, [product]);

  const splitIngredients = product.Ingredients[0].split(",");
  console.log(splitIngredients);
  return (
    <Modal
      isOpen={isOpen}
      size="2xl"
      isCentered="true"
      blockScrollOnMount={false}
      motionPreset="slideInBottom"
      onClose={onClose}
    >
      <ModalOverlay
        backdropFilter="auto"
        backdropBrightness={1}
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div className={style.productModal}>
            <div className={style.productModalImage}>
              <img
                src={product.photos[0]}
                alt="product"
                className={style.productImg}
              />
            </div>

            <div className={style.productModalInfo}>
              <div className={style.productModalTitleWrapper}>
                <h4 className={style.modalTitle}>{product.title}</h4>
              </div>

              <div className={style.productModalPriceWrapper}>
                {product.salePrice && (
                  <span className={style.modalPrice}>${product.salePrice}</span>
                )}
                <span
                  className={
                    product.salePrice ? style.modalSalePrice : style.modalPrice
                  }
                >
                  ${product.price}
                </span>
              </div>

              {product.Ingredients !== " " && (
                <div className={style.productModalIngredients}>
                  <h5 className={style.modalIngredientsTitle}>Ingredients</h5>
                  {splitIngredients.map((ingredient, index) => (
                    <Tag key={index} className="me-2 my-1">
                      {ingredient}
                    </Tag>
                  ))}
                </div>
              )}
              <div className={style.quantityOptions}>
                <span className={style.quantityTitle}>Quantity</span>
                <div className={style.quantityItems}>
                  <button
                    onClick={handleDecrease}
                    className={style.quantityIcon}
                  >
                    <AiOutlineMinus />
                  </button>
                  <input
                    type="text"
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    className={style.quantityNumber}
                    value={quantity}
                    maxLength="2"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={style.quantityIcon}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className={style.productModalButtons}>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className={style.addToCartBtn}
                >
                  <IoMdCart className={style.modalBtnIcon} />
                  <span className={style.modalBtnText}>Add to cart</span>
                </button>
                <button className={style.buyNowBtn}>
                  <TiArrowBack className={style.modalBtnIcon} />
                  <span className={style.modalBtnText}>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
