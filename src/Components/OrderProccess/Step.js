import React from "react";
import { Steps } from "antd";
const Step = () => {
  const { Step } = Steps;
  return (
    <div className="my-2 py-3">
      <Steps>
        <Step status="finish" title="Login" />
        <Step status="finish" title="Verification" />
        <Step status="process" title="Pay" />
        <Step status="wait" title="Done" />
      </Steps>
    </div>
  );
};

export default Step;
