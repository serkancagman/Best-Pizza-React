import React from 'react'
import Step from './Step';
import style from "./Style/Order.module.css";
import Summary from './Summary';
const OrderAddress = () => {
  return (
    <section className={style.orderMain}>
        <div className="container">
            <Step/>
            <div className="row justify-content-center g-3">
          <div className="col-lg-8"></div>
          </div>
          <Summary buttonTitle="Go to pay" process="address" />
        </div>
    </section>
  )
}

export default OrderAddress