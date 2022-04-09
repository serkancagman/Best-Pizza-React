import React from 'react'
import style from "./Style/Brands.module.css"
import brandImg from "Assets/Brands/brand.jpg";
import brandImg1 from "Assets/Brands/brand1.jpg";
import brandImg2 from "Assets/Brands/brand2.jpg";
import brandImg3 from "Assets/Brands/brand3.jpg";
const Brands = () => {
  return (
    <section className={style.brands}>
        <div className="container">
            <div className="row justify-content-center align-items-center g-3">
                <div className="col-lg-3 col-md-6">
                    <div className={style.brandImgWrapper}>
                    <img src={brandImg} alt="brand" className={style.brandImg} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className={style.brandImgWrapper}>
                    <img src={brandImg1} alt="brand" className={style.brandImg} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className={style.brandImgWrapper}>
                    <img src={brandImg2} alt="brand" className={style.brandImg} />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                <div className={style.brandImgWrapper}>
                    <img src={brandImg3} alt="brand" className={style.brandImg} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brands