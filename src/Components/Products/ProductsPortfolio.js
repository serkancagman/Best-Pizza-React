import React from "react";
import { Breadcrumb, Checkbox, Select, Slider } from "antd";
import { CgMenuGridR } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import style from "./Style/Products.module.css";
import ProductionBox from "Components/ProductionBox/ProductionBox";
import { Link } from "react-router-dom";
import adsImg from "Assets/advertising.jpg";
import ProductionList from "Components/ProductionBox/ProductionList";
import { ProductContext } from "Context/ProductContext";
const ProductsPortfolio = ({ title, products, isLoading, banner }) => {
  const { allProducts } = React.useContext(ProductContext);
  const [gridStyle, setGridStyle] = React.useState("grid");
  const [sorted, setSorted] = React.useState([]);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [newProducts, setNewProducts] = React.useState([]);
  const { Option } = Select;

  React.useEffect(() => {
    setSorted(products);
  }, [products]);

  React.useEffect(() => {
    const getNewProducts = allProducts.filter(
      (item) => item.productIsNew === "true"
    );
    let randomize = getNewProducts.sort(() => Math.random() - 0.5).slice(0, 3);
    setNewProducts(randomize);
  }, [allProducts]);

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

  const sliderChange = (value) => {
    setSliderValue(value);
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter((product) => {
      let salePrice = product.salePrice ? product.salePrice : product.price;
      return salePrice <= value[1] && salePrice >= value[0];
    });
    setSorted(filteredProducts);
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
          <div className="col-md-12 col-lg-3">
            <div className={style.filterWrapperMain}>
              <div className={style.filterWrapper}>
                <h5 className={style.filterTitle}>Filter By</h5>
                <div className={style.filter}>
                  <p className={style.filterText}>Ingredients</p>
                  <ul className={style.filterList}>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Tomato</span>{" "}
                      </Checkbox>
                    </li>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Cheese</span>{" "}
                      </Checkbox>
                    </li>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Chicken</span>{" "}
                      </Checkbox>
                    </li>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Beef</span>{" "}
                      </Checkbox>
                    </li>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Mushroom</span>{" "}
                      </Checkbox>
                    </li>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Onion</span>{" "}
                      </Checkbox>
                    </li>
                    <li className={style.filterListItem}>
                      <Checkbox>
                        {" "}
                        <span className={style.filterItem}>Pineapple</span>{" "}
                      </Checkbox>
                    </li>
                  </ul>
                  <p className={style.filterText}>Price</p>
                  <div className={style.filterPriceWrapper}>
                    <span className={style.filterPrice}>
                      ${sliderValue[0] || 0}
                    </span>
                    <Slider
                      range
                      defaultValue={[0, 100]}
                      className="w-100"
                      onChange={(value) => sliderChange(value)}
                    />
                    <span
                      className={`${style.filterPrice} ${style.filterPriceRight}`}
                    >
                      ${sliderValue[1] || 100}
                    </span>
                  </div>
                </div>
              </div>
              <div className={style.filterWrapper}>
                <img src={adsImg} alt="banner" className="img-fluid" />
              </div>
              <div
                className={`${style.filterWrapper} ${style.newProductWrapper}`}
              >
                <h5 className={style.filterTitle}>New Products</h5>
                <ul className={style.newProductsList}>
                  {newProducts.map((product) => (
                    <li className={style.newProductsListItem} key={product._id}>
                      <Link
                        className={style.newProductLink}
                        to={`/food/${product._id}`}
                      >
                        <img
                          src={product.photos[0]}
                          alt={product.title}
                          className={style.newProductsImg}
                        />
                        <div className={style.newProductsInfo}>
                          <h6 className={style.newProductsTitle}>
                            {product.title}
                          </h6>

                          <span className={style.newProductsPrice}>
                            ${product.price}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className={style.productBanner}>
              <img src={banner} className={style.bannerImage} alt="product" />
            </div>
            <div className={style.productDescription}>
              <h2 className={style.productTitle}>{title}</h2>
              <p className={style.productText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                nihil a rem ex. Fugit minima necessitatibus distinctio
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
                    {sorted.length} items
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
              {
                gridStyle === "grid" ? (!isLoading && <ProductionBox data={sorted} />) : (
                  <ProductionList product={sorted} />
                )
              }
      
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
