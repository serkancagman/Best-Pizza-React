import React from "react";
import Step from "./Step";
import style from "./Style/Order.module.css";
import { myOrders } from "API/API";
import { useNavigate } from "react-router-dom";
import { ShopCartContext } from "Context/ShopCartContext";
import checkedImage from "Assets/Payment/checked.png";
const OrderSuccess = () => {
  const {setOrderStep } = React.useContext(ShopCartContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [myOrder, setMyOrder] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    setIsLoading(true);
    const gerOrderInfo = async () => {
      try {
        const response = await myOrders();
        setMyOrder(response[response.length - 1]);
        setIsLoading(false);
        setTimeout(() => {
          setOrderStep([
            {
              name: "check",
              status: "process",
            },
            {
              name: "address",
              status: "wait",
            },
            {
              name: "pay",
              status: "wait",
            },
            {
              name: "done",
              status: "wait",
            },
          ]);
        }, 15000);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    gerOrderInfo();
  }, []);

  const handleClick = () => {
    setOrderStep([
      {
        name: "check",
        status: "process",
      },
      {
        name: "address",
        status: "wait",
      },
      {
        name: "pay",
        status: "wait",
      },
      {
        name: "done",
        status: "wait",
      },
    ]);
  };
  return (
    <section className={style.orderMain}>
      <div className="container">
        <Step />
        <div className="row position-relative justify-content-center g-3">
          <div className="col-lg-12 col-md-12">
            <div className={style.orderSuccess}>
              <div className={style.orderSuccessHeader}>
                <img
                  src={checkedImage}
                  alt="checked"
                  className={style.succesImg}
                />
                <h2 className={style.orderSuccessTitle}>
                  Your order has been received!
                </h2>
                <p className={style.orderSuccessId}>
                  Order ID:{" "}
                  <span className={style.successId}>{myOrder._id}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-3">
          <div className="col-lg-8 col-md-12">
            <div className={style.orderInformationHeader}>
              <h3 className={style.orderInformationTitle}>Order Information</h3>
            </div>
            <div className={style.orderInformationWrapper}>
              <div className={style.orderInformationBody}>
                <div className="row justify-content center g-3">
                  {!isLoading &&
                    myOrder.items.map((product, index) => {
                      return (
                        <div className="col-lg-3 col-6 col-md-3" key={index}>
                          <div className={style.orderProduct}>
                            <div className={style.orderProductImage}>
                              <img
                                src={product.photos[0]}
                                alt="product"
                                className={style.productImg}
                              />
                            </div>
                            <div className={style.orderProductInfo}>
                              <h4 className={style.orderProductName}>
                                {product.title}
                              </h4>
                              <div className="d-flex justify-content-start align-items-center">
                                {product.salePrice ? (
                                  <>
                                    <span className={style.orderProductPrice}>
                                      ${product.salePrice}
                                    </span>
                                    <span
                                      className={style.orderProductOldPrice}
                                    >
                                      ${product.price}
                                    </span>
                                  </>
                                ) : (
                                  <span className={style.orderProductPrice}>
                                    ${product.price}
                                  </span>
                                )}
                                <span className={style.orderProductQuantity}>
                                  x {product.quantity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={style.orderInformationHeader}>
              <h3 className={style.orderInformationTitle}>
                Address Information
              </h3>
            </div>
            <div className={style.addressInformationWrapper}>
              <div className={style.addressInformationBody}>
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <div className={style.addressList}>
                    <span className={style.addressInformationIcon}>🏡</span>
                    <p className={style.addressInformationText}>
                      {myOrder.city}, {myOrder.adress}
                    </p>
                  </div>
                  <div className={style.addressList}>
                    <span className={style.addressInformationTitle}>
                      Zip Code :
                    </span>
                    <span className={style.addressInformationText}>
                      {" "}
                      {myOrder.zipCode}
                    </span>
                  </div>
                  <div className={style.addressList}>
                    <span className={style.addressInformationTitle}>
                      Phone :
                    </span>
                    <span className={style.addressInformationText}>
                      {" "}
                      +1{myOrder.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center my-3 justify-content-center">
          <button onClick={handleClick} className={style.goShopButton}>
            Continue Shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
