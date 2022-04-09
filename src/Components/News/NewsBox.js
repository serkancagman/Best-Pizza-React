import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Style/News.module.css";
import {AiFillEye, AiOutlineArrowRight} from 'react-icons/ai'
const NewsBox = ({title,imgUrl,text}) => {
  return (
    <div className={style.newsBox}>
        <div className={style.newsImgArea}>
        <img src={imgUrl} alt="news" className={style.newsImg} />
        <div className={style.newsFade}>
            <AiFillEye className={style.newsIcon}/>
        </div>
        </div>
        <h5 className={style.newsTitle}>{title}</h5>
        <p className={style.newsText}>{text}</p>
        <Link to="/news" className={style.newsLink}>Read More <AiOutlineArrowRight  /> </Link>
    </div>
  )
}

export default NewsBox