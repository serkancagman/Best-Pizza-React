import React from "react";
import deliveryImage from "Assets/delivery-man.png";
import style from "./Style/Delivery.module.css";
const DeliveryAnimation = () => {
  const [onHover, setOnHover] = React.useState(false);
  return (
    <div
      onMouseOver={() => {
        setOnHover(true);
        setTimeout(() => {
          setOnHover(false);
        }, 2000);
      }}
      className={style.deliveryAnimation}
    >
      <div className={`${style.deliveryMan} ${onHover && style.startAnimation}`}>
        <img
          src={deliveryImage}
          alt="delivery-animation"
          className={style.deliveryImg}
        />
      </div>
    </div>
  );
};

export default DeliveryAnimation;
