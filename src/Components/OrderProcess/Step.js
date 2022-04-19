import React from "react";
import { Steps } from "antd";
import { BsCartCheck, BsCreditCard2Back } from "react-icons/bs";
import style from "./Style/Order.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa";
import { ShopCartContext } from "Context/ShopCartContext";
const Step = () => {
  const { orderStep } = React.useContext(ShopCartContext);
  const { Step } = Steps;
  return (
    <div className="my-2 py-3">
      <Steps>
        <Step
          status={orderStep[0].status}
          title="Cart Checkout"
          icon={<BsCartCheck className={style.stepIcon} />}
        />
        <Step
          status={orderStep[1].status}
          title="Address"
          icon={<AiOutlineHome className={style.stepIcon} />}
        />
        <Step
          status={orderStep[2].status}
          title="Pay"
          icon={<BsCreditCard2Back className={style.stepIcon} />}
        />
        <Step
          status={orderStep[3].status}
          title="Done"
          icon={<FaCheckDouble className={style.stepIcon} />}
        />
      </Steps>
    </div>
  );
};

export default Step;
