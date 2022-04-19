import React from "react";
import { Steps } from "antd";
import {BsCartCheck} from "react-icons/bs";
import style from "./Style/Order.module.css"
const Step = () => {
  const { Step } = Steps;
  return (
    <div className="my-2 py-3">
      <Steps>
        <Step status="finish" title="Cart Checkout" icon={<BsCartCheck className={style.stepIcon} />} />
        <Step status="finish" title="Verification" />
        <Step status="process" title="Pay" />
        <Step status="wait" title="Done" />
      </Steps>
    </div>
  );
};

export default Step;
