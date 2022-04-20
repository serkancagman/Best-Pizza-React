import React from "react";
import Step from "./Step";
import style from "./Style/Order.module.css";
import { myOrders } from "API/API";
import {UserContext} from "Context/UserContext";
import { useNavigate } from "react-router-dom";
import { ShopCartContext } from "Context/ShopCartContext";
import checkedImage from "Assets/Payment/checked.png";
const OrderSuccess = () => {
  const {user} = React.useContext(UserContext);
  const {handleStep} = React.useContext(ShopCartContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderError, setOrderError] = React.useState("");
  const [myOrder, setMyOrder] = React.useState([]);
  const navigate = useNavigate();
      React.useEffect(() => {
        setIsLoading(true);
        const gerOrderInfo = async () => {
          try {
            const response = await myOrders({
              user_id: user._id,
            });
            setMyOrder(response[response.length - 1]);
            setIsLoading(false);
            setTimeout(() => {
              // localStorage.removeItem("step");
              // navigate("/");
            }, 15000);
          } catch (error) {
            setOrderError(error.response.data.message);
            setIsLoading(false);
            
          }
        };
        gerOrderInfo();
      }, []);
 
      console.log(myOrder);
  return (
    <section className={style.orderMain}>
      <div className="container">
        <Step />
        <div className="row position-relative justify-content-center g-3">
          <div className="col-lg-12 col-md-12">
            <div className={style.orderSuccess}>
              <div className={style.orderSuccessHeader}>
              <img src={checkedImage} alt="checked" className={style.succesImg} />
                <h2 className={style.orderSuccessTitle}>Your order has been received!</h2>
                <p className={style.orderSuccessId}>Order ID: <span className={style.successId}>{myOrder._id}</span></p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
