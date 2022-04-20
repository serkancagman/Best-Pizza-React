import React from "react";
import style from "./Style/Order.module.css";
import Summary from "./Summary";
import Step from "./Step";
import chipImg from "Assets/Payment/creditCardChip.png";
import contactlessImg from "Assets/Payment/contactless.png";
import visa from "Assets/Payment/visa.svg";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Input,
  Select,
  Textarea,
  FormErrorMessage,
  Checkbox,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
const Payment = () => {
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        cardNumber: "",
        ownerName: "",
        ownerLastName: "",
        cardExpiryMonth: "",
        cardExpiryYear: "",
        cardCvv: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <section className={style.orderMain}>
      <div className="container">
        <Step />
        <div className="row justify-content-center g-3">
          <div className="col-lg-8">
            <div className={style.cardWrapper}>
              <div className="row g-3 justify-content-center align-items-center">
                <div className="col-md-12 col-lg-6 text-center">
                  <div className={style.flipCard}>
                    <div className={style.card}>
                      <div className={style.cardFrontMain}>
                        <div className={style.cardFront}>
                          <div className={style.cardFade}></div>
                          <div className={style.cardFrontWrapper}>
                            <div className={style.cardFrontTop}>
                              <div className={style.cardFrontTopLeft}>
                                <div className={style.cardChipArea}>
                                  <img
                                    src={chipImg}
                                    className="img-fluid"
                                    alt="chip"
                                  />
                                </div>
                                <div className={style.contactless}>
                                  <img
                                    src={contactlessImg}
                                    className={style.contactlessImage}
                                    alt="chip"
                                  />
                                </div>
                              </div>
                              <div className={style.cardFrontTopRight}>
                                <img
                                  src={visa}
                                  alt="card brand"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className={style.cardFrontBottom}>
                              <div className={style.cardNumber}>
                                <label
                                  htmlFor="cardNoShow"
                                  className={style.cardLabel}
                                >
                                  Card Number
                                </label>
                                <input
                                  type="text"
                                  id="cardNoShow"
                                  disabled
                                  className={style.cardNumberInput}
                                  placeholder="**** **** **** ****"
                                />
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className={style.cardOwner}>
                                  <label
                                    htmlFor="cardOwner"
                                    className={style.cardLabel}
                                  >
                                    {" "}
                                    Card Owner
                                  </label>
                                  <div className="d-flex justify-content-center align-items-center">
                                    <input
                                      type="text"
                                      id="cardOwner"
                                      className={style.cardOwnerInput}
                                      placeholder="NAME"
                                      disabled
                                    />
                                    <input
                                      type="text"
                                      id="cardOwner"
                                      className={style.cardOwnerInput}
                                      placeholder="SURNAME"
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className={style.cardExpiry}>
                                  <label
                                    htmlFor="cardExpiry"
                                    className={style.cardLabel}
                                  >
                                    {" "}
                                    Expiry Date
                                  </label>
                                  <div className="d-flex justify-content-center align-items-center">
                                    <input
                                      type="text"
                                      id="cardExpiry"
                                      className={style.cardExpiryInput}
                                      placeholder="MM"
                                      disabled
                                    />
                                    <span className={style.cardExpirySlash}>
                                      /
                                    </span>
                                    <input
                                      type="text"
                                      id="cardExpiry"
                                      className={style.cardExpiryInput}
                                      placeholder="YY"
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.cardBack}>
                        <div className={style.cardBackWrapper}>
                          <div className={style.cardFade}></div>
                          <div className={style.cardBackInner}>
                            <div className="d-flex justify-content-between align-items-center flex-col">
                              <div className={style.cardBackCvvArea}>
                                <label
                                  htmlFor="cardCvv"
                                  className={style.cardLabel}
                                >
                                  {" "}
                                  CVV{" "}
                                </label>
                                <input
                                  type="text"
                                  id="cardCvv"
                                  className={style.cardCvvInput}
                                  placeholder="***"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className={style.cardInfoWrapper}>
                    <form onSubmit={handleSubmit}>
                      <div className="row justify-content-center g-3 ">
                        <div className="col-6 ">
                          <FormControl isRequired>
                            <FormLabel
                              htmlFor="cardOwnerName"
                              className={style.label}
                            >
                              Name
                            </FormLabel>

                            <Input
                              id="cardOwnerName"
                              name="ownerName"
                              type="text"
                              placeholder="Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              focusBorderColor="green.500"
                              borderColor="gray.300"
                            />
                          </FormControl>
                        </div>
                        <div className="col-6 ">
                          <FormControl isRequired>
                            <FormLabel
                              htmlFor="cardOwnerLastName"
                              className={style.label}
                            >
                              Last Name
                            </FormLabel>

                            <Input
                              id="cardOwnerLastName"
                              name="ownerLastName"
                              type="text"
                              placeholder="Last Name"
                              focusBorderColor="green.500"
                              borderColor="gray.300"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </div>
                        <div className="col-12">
                          <FormControl isRequired>
                            <FormLabel
                              htmlFor="cardNumber"
                              className={style.label}
                            >
                              Card Number
                            </FormLabel>

                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              type="text"
                              placeholder="Last Name"
                              focusBorderColor="green.500"
                              borderColor="gray.300"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </div>
                        <div className="col-4">
                          <FormControl isRequired>
                            <FormLabel
                              htmlFor="cardExpiryMonth"
                              className={style.label}
                            >
                              {" "}
                              Expiry Month
                            </FormLabel>
                            <Select
                              id="cardExpiryMonth"
                              name="cardExpiryMonth"
                              focusBorderColor="green.500"
                              borderColor="gray.300"
                              onChange={handleChange}
                            >
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                              <option>05</option>
                              <option>06</option>
                              <option>07</option>
                              <option>08</option>
                              <option>09</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-4">
                          <FormControl isRequired>
                            <FormLabel
                              htmlFor="cardExpiryYear"
                              className={style.label}
                            >
                              {" "}
                              Expiry Year
                            </FormLabel>
                            <Select
                              id="cardExpiryYear"
                              name="cardExpiryYear"
                              focusBorderColor="green.500"
                              borderColor="gray.300"
                              onChange={handleChange}
                            >
                              {" "}
                              <option>2022</option>
                              <option>2023</option>
                              <option>2024</option>
                              <option>2025</option>
                              <option>2026</option>
                              <option>2027</option>
                              <option>2028</option>
                              <option>2029</option>
                              <option>2030</option>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-4">
                          <FormControl isRequired>
                            <FormLabel
                              htmlFor="cardCvv"
                              className={style.label}
                            >
                              {" "}
                              CVV{" "}
                            </FormLabel>
                            <Input
                              id="cardCvv"
                              name="cardCvv"
                              type="text"
                              className={style.cvvInput}
                            />
                          </FormControl>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Summary>
            <button type="button" onClick={null} className={style.nextStepBtn}>
              Go to Pay
            </button>
          </Summary>
        </div>
      </div>
    </section>
  );
};

export default Payment;
