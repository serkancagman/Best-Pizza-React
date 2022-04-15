import React from "react";
import { Breadcrumb, Select } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import style from "./Style/Products.module.css";
import ProductionBox from "Components/ProductionBox/ProductionBox";
import { Link } from "react-router-dom";
const ProductsPortfolio = ({ title, products, isLoading, banner }) => {
  const [gridStyle, setGridStyle] = React.useState("grid");
  const [sorted, setSorted] = React.useState([]);

  const { Option } = Select;

  React.useEffect(() => {
    setSorted(products);
  }, [products]);

  const sortProducts = (sortBy) => {
    let sortedProducts = [...products];
    if (sortBy === "atoz") {
      sortedProducts.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    } else if (sortBy === "ztoa") {
      sortedProducts.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
        return 0;
      });
    } else if (sortBy === "lowest") {
      sortedProducts.sort((a, b) => {
        let aSalePrice = a.salePrice ? a.salePrice : a.price;
        let bSalePrice = b.salePrice ? b.salePrice : b.price;

        if (aSalePrice < bSalePrice) return -1;
        if (aSalePrice > bSalePrice) return 1;
        return 0;
      });
    } else if (sortBy === "highest") {
      sortedProducts.sort((a, b) => {
        let aSalePrice = a.salePrice ? a.salePrice : a.price;
        let bSalePrice = b.salePrice ? b.salePrice : b.price;
        if (aSalePrice > bSalePrice) return -1;
        if (aSalePrice < bSalePrice) return 1;
        return 0;
      });
    }
    setSorted(sortedProducts);
  };

  return (
    <section className={style.productsPortfolio}>
      <div className={style.breadWrapper}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link className={style.crumbLink} to="/">
              <span className={style.crumbTitle}>Home</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className={style.crumbTitle}>{title}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-3"></div>
          <div className="col-md-12 col-lg-9">
            <div className={style.productBanner}>
              <img src={banner} className={style.bannerImage} alt="product" />
            </div>
            <div className={style.productDescription}>
              <h2 className={style.productTitle}>{title}</h2>
              <p className={style.productText}>
                Alışık ipsum dolor sit amet consectetur adipisicing elit.
                Facilis nihil a rem ex. Fugit minima necessitatibus distinctio
                cupiditate ipsa nesciunt consequatur quam possimus soluta autem.
              </p>
            </div>
            <div className={style.productSortBar}>
              <div className={style.productSortBarLeft}>
                <div className={style.productSortListType}>
                  <span
                    onClick={() => setGridStyle("grid")}
                    className={style.productGridOption}
                  >
                    <CgMenuGridR
                      className={`${style.optionIcon} ${
                        gridStyle === "grid" && style.activeGrid
                      }`}
                    />
                  </span>
                  <span
                    onClick={() => setGridStyle("list")}
                    className={style.productListOption}
                  >
                    <FaList
                      className={`${style.optionIcon} ${
                        gridStyle === "list" && style.activeGrid
                      }`}
                    />
                  </span>
                </div>
                <div className={style.productQuantity}>
                  <span className={style.productQuantityText}>
                    {products.length} items
                  </span>
                </div>
              </div>
              <div className={style.productSortBarRight}>
                <span className={style.productSortText}>Sort by:</span>
                <Select
                  defaultValue="Select a sort type"
                  onChange={(value) => sortProducts(value)}
                  className={style.sortInput}
                  style={{ width: 180 }}
                >
                  <Option value="atoz">Name, A to Z</Option>
                  <Option value="ztoa">Name, Z to A</Option>
                  <Option value="lowest">Price, low to high</Option>
                  <Option value="highest">Price, high to low</Option>
                </Select>
              </div>
            </div>

            <div className="row">
              {!isLoading ? <ProductionBox data={sorted} /> : ""}
            </div>
            <div className={style.productSortBar}>
              <span className={style.productQuantityText}>
                Showing {sorted.length} of {products.length} items
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPortfolio;
