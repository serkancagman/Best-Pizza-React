import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import style from "./Style/ProductionBox.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
const ProductModal = ({ isOpen, onClose, modalData }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  React.useEffect(() => {
    setQuantity(1);
  }, [modalData]);

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
            <TransformWrapper initialScale={1}>
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <TransformComponent>
                  <div
                    onMouseLeave={() => resetTransform()}
                    className={style.productModalImage}
                  >
                    <img
                      src={modalData.photos[0]}
                      alt="product"
                      className={style.productImg}
                    />
                  </div>
                </TransformComponent>
              )}
            </TransformWrapper>

            <div className={style.productModalInfo}>
              <div className={style.productModalTitleWrapper}>
                <h4 className={style.modalTitle}>{modalData.title}</h4>
              </div>

              <div className={style.productModalPriceWrapper}>
                {modalData.salePrice && (
                  <span className={style.modalPrice}>
                    ${modalData.salePrice}
                  </span>
                )}
                <span
                  className={
                    modalData.salePrice
                      ? style.modalSalePrice
                      : style.modalPrice
                  }
                >
                  ${modalData.price}
                </span>
              </div>
              <p className={style.modalDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, vitae.
              </p>
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
                <button className={style.addToCartBtn}>
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
