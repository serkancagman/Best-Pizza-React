import React from "react";
import { Link } from "react-router-dom";
import style from "./Style/Promotion.module.css";
import promoImg from "Assets/promotion.jpg";
import promoImg1 from "Assets/promotion1.jpg";
const Promotion = () => {
  return (
    <section className={style.promotion}>
      <div className="container">
        <div className="row align-items-center g-3 justify-content-center">
          <div className="col-lg-6 col-md-12">
            <Link to="/" className={style.promotionLink}>
              <div className={style.fade}></div>
              <img src={promoImg} alt="promotion" className={style.promoImg} />
              <div className={style.promotionTitleArea}>
                <h3 className={style.promotionTitle}>Daily Fresh</h3>
                <p className={style.promotionSubTitle}>
                  CHEESY PIZZA <br /> PACK
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
            <Link to="/" className={style.promotionLink}>
              <div className={style.fade}></div>
              <img src={promoImg1} alt="promotion" className="img-fluid" />
              <div className={style.promotionTitleArea}>
                <h3 className={style.promotionTitle}>Testy Pizza</h3>
                <p className={style.promotionSubTitle}>
                  RODIZIO! ZUMBO <br /> PIZZA
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
